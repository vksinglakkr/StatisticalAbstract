// ============================================================================
// API-SERVICES.JS - API & Data Fetch Functions
// ============================================================================

import { API_ENDPOINTS, GROQ_CONFIG, state, getDeviceInfo } from './config.js';

// ============================================================================
// GOOGLE SHEETS DATA LOADER
// ============================================================================

export async function loadMasterFileData() {
  try {
    console.log('📄 Loading questions from Google Sheets (TSV)...');
    console.log('   URL:', API_ENDPOINTS.GOOGLE_SHEET);
    
    const response = await fetch(API_ENDPOINTS.GOOGLE_SHEET);
    console.log('   📡 Response status:', response.status, response.statusText);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const tsvText = await response.text();
    console.log('   📄 TSV text length:', tsvText.length, 'characters');
    
    const lines = tsvText.split('\n');
    console.log('   📄 Total lines:', lines.length);
    
    state.masterFileData = [];
    
    // Parse TSV - Skip header row (index 0)
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      
      const columns = line.split('\t');
      
      if (columns.length >= 3) {
        const chp_code = columns[0].trim();
        const question = columns[1].trim();
        const sec_code = columns[2].trim();
        
        if (question && sec_code && chp_code) {
          state.masterFileData.push({
            chp_code: chp_code.padStart(2, '0'),
            chapter_name: question,
            sec_code: sec_code,
            part_code: '',
            search_text: question.toLowerCase()
          });
        }
      }
    }
    
    console.log(`✅ Loaded ${state.masterFileData.length} questions from Google Sheets`);
    console.log('   Sample data:', state.masterFileData.slice(0, 3));
    
  } catch (error) {
    console.error('❌ Error loading Google Sheets data:', error);
    console.error('   Error details:', error.message);
    
    state.masterFileData = [];
    
    alert('⚠️ Could not load questions from Google Sheets. Please check:\n' +
          '1. Sheet is published to web (TSV format)\n' +
          '2. Sheet is publicly accessible\n' +
          '3. URL is correct');
  }
}

// ============================================================================
// WEBHOOK API CALLS
// ============================================================================

export async function sendQuestionToWebhook(question) {
  const { deviceType, browser } = getDeviceInfo();
  
  const payload = {
    question: question,
    language: state.selectedLanguage,
    queryType: state.selectedQueryType === 'statistics' ? 'STATISTICAL_CONCEPT_QUERY' : 'STATISTICAL_DATA_QUERY',
    mobNo: 'anonymous',
    deviceType: deviceType,
    browser: browser,
    timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    userAgent: navigator.userAgent
  };
  
  if (state.conversationHistory.length > 0) {
    payload.conversationHistory = state.conversationHistory;
  }

  console.log('📤 Sending to webhook:', payload);

  const response = await fetch(API_ENDPOINTS.WEBHOOK, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const responseText = await response.text();
  console.log('Raw webhook response:', responseText);
  
  let data;
  try {
    data = JSON.parse(responseText);
    console.log('Parsed webhook response:', data);
  } catch (jsonError) {
    console.error('JSON Parse Error:', jsonError);
    console.error('Response text was:', responseText);
    throw new Error('Invalid response format from server');
  }
  
  return data;
}

// ============================================================================
// FILE SEARCH API
// ============================================================================

export async function searchStatFiles(fileItem) {
  const filePrefix = fileItem.sec_code + fileItem.chp_code;
  console.log('🔍 Searching for files with prefix:', filePrefix);
  
  const response = await fetch(API_ENDPOINTS.WEBHOOK, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      type: 'file_search',
      filePrefix: filePrefix,
      question: fileItem.chapter_name,
      sec_code: fileItem.sec_code,
      chp_code: fileItem.chp_code
    })
  });
  
  const data = await response.json();
  return data;
}

// ============================================================================
// COMPARISON API
// ============================================================================

export async function sendComparisonToN8N(filesByYear) {
  const payload = {
    question: state.currentComparisonQuestion || 'Statistical data comparison',
    filesByYear: filesByYear,
    years: Object.keys(filesByYear),
    language: state.selectedLanguage || 'English',
    queryType: 'FILE_COMPARISON_ANALYSIS',
    timestamp: new Date().toISOString()
  };
  
  console.log('📤 Sending to n8n:', payload);
  
  const response = await fetch(API_ENDPOINTS.COMPARISON, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  });
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const result = await response.json();
  console.log('✅ Received from n8n:', result);
  
  return result;
}

// ============================================================================
// GROQ API CALLS
// ============================================================================

export async function analyzeYearWithGroq(year, files) {
  const question = state.currentComparisonQuestion || 'Statistical data analysis';
  
  const imageContent = files.map(file => ({
    type: "image_url",
    image_url: { url: file.url }
  }));
  
  const requestBody = {
    model: GROQ_CONFIG.MODEL,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: `You are analyzing pages from the Haryana Statistical Abstract for year ${year}.

User Question: ${question}

These ${files.length} images are pages from the same report. Carefully analyze ALL pages and extract:

1. All numerical data and statistics
2. Tables with headers and values  
3. Categories and subcategories
4. Units of measurement
5. Any trends or notable figures

Combine information from ALL pages into a single comprehensive dataset.

Return ONLY a JSON object (no markdown, no extra text) with this structure:
{
  "year": "${year}",
  "categories": [
    {
      "name": "Category Name",
      "subcategories": [
        {
          "name": "Subcategory",
          "value": 1234,
          "unit": "unit"
        }
      ],
      "total": 5678
    }
  ],
  "summary": "Brief summary of key findings",
  "keyMetrics": [
    {"metric": "Metric Name", "value": 1234, "unit": "unit"}
  ]
}

IMPORTANT: Return ONLY valid JSON, nothing else.`
          },
          ...imageContent
        ]
      }
    ],
    temperature: 0.1,
    max_tokens: 4000
  };
  
  console.log(`📄 Calling Groq API for ${year}...`);
  
  const response = await fetch(GROQ_CONFIG.API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${GROQ_CONFIG.API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  });
  
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Groq API error: ${response.status} - ${errorText}`);
  }
  
  const data = await response.json();
  
  let extractedData;
  try {
    let content = data.choices[0].message.content.trim();
    content = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    extractedData = JSON.parse(content);
    console.log(`✅ Successfully parsed data for ${year}`);
  } catch (error) {
    console.error(`❌ Error parsing JSON for ${year}:`, error);
    extractedData = {
      year: year,
      error: 'Failed to parse extracted data',
      raw_content: data.choices[0].message.content,
      categories: []
    };
  }
  
  return extractedData;
}

console.log('✅ api-services.js loaded');
