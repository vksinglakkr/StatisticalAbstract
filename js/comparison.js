// ============================================================================
// COMPARISON.JS - Complete Comparison Feature Module
// ============================================================================

import { state, IMAGE_CONSTRAINTS, formatFileSize } from './config.js';
import { sendComparisonToN8N, analyzeYearWithGroq } from './api-services.js';
import { showToast } from './ui-helpers.js';

// ============================================================================
// COMPARISON PROMPT
// ============================================================================

export function shouldOfferComparison(question, queryType) {
  if (queryType !== 'data' && queryType !== 'STATISTICAL_DATA_QUERY') {
    console.log('❌ Not offering comparison - not a data query');
    return false;
  }
  
  const comparisonKeywords = [
    'year', 'years', 'annual', 'yearly',
    'trend', 'trends', 'trending',
    'growth', 'decline', 'change', 'changes', 'changed',
    'compare', 'comparison', 'comparative', 'versus', 'vs',
    'over time', 'historical', 'history',
    'last', 'previous', 'past', 'recent',
    'decade', 'period', 'from', 'to',
    'between', 'since', 'during'
  ];
  
  const lowerQuestion = question.toLowerCase();
  const hasKeyword = comparisonKeywords.some(keyword => lowerQuestion.includes(keyword));
  
  console.log('🔍 Checking if comparison should be offered:');
  console.log('   Query:', question);
  console.log('   Has comparison keyword:', hasKeyword);
  
  return hasKeyword;
}

export function showComparisonPrompt() {
  console.log('📊 Showing comparison prompt...');
  
  if (document.getElementById('comparisonPromptBox')) {
    console.log('⚠️ Comparison prompt already exists, skipping');
    return;
  }
  
  const promptHTML = `
    <div class="comparison-prompt-container" id="comparisonPromptBox">
      <div class="comparison-prompt-header">
        <div class="comparison-prompt-icon">🔍</div>
        <div class="comparison-prompt-text">
          <div class="comparison-prompt-title">
            Want to Compare Multiple Years?
            <span class="comparison-badge">✨ Advanced</span>
          </div>
          <div class="comparison-prompt-desc">
            Get a comprehensive analytical report with charts comparing data across different years
          </div>
        </div>
      </div>
      
      <div class="comparison-action-buttons">
        <button class="enable-comparison-btn" id="enableComparisonBtn">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
          </svg>
          Yes, Enable Comparison Analysis
        </button>
        <button class="skip-comparison-btn" id="skipComparisonBtn">
          No, Thanks
        </button>
      </div>
    </div>
  `;
  
  const modalAnswerSection = document.querySelector('#modalAnswer');
  if (!modalAnswerSection) {
    console.error('❌ modalAnswer element not found!');
    return;
  }
  
  const answerParent = modalAnswerSection.parentElement;
  const promptDiv = document.createElement('div');
  promptDiv.innerHTML = promptHTML;
  
  answerParent.parentElement.insertBefore(promptDiv, answerParent.nextSibling);
  
  console.log('✅ Comparison prompt displayed');
  
  const enableBtn = document.getElementById('enableComparisonBtn');
  const skipBtn = document.getElementById('skipComparisonBtn');
  
  if (enableBtn) enableBtn.addEventListener('click', enableComparison);
  if (skipBtn) skipBtn.addEventListener('click', skipComparison);
}

function enableComparison() {
  console.log('✅ User enabled comparison mode');
  state.isComparisonActive = true;
  
  const promptBox = document.getElementById('comparisonPromptBox');
  if (promptBox) {
    promptBox.style.transition = 'all 0.3s ease-out';
    promptBox.style.opacity = '0';
    promptBox.style.transform = 'translateY(-10px)';
    
    setTimeout(() => {
      promptBox.style.display = 'none';
    }, 300);
  }
  
  const modalAnswer = document.getElementById('modalAnswer');
  if (!modalAnswer) {
    console.error('❌ modalAnswer not found');
    alert('Error: Could not find response text');
    return;
  }
  
  const responseText = modalAnswer.innerHTML || modalAnswer.textContent;
  
  console.log('🔍 Searching for Cloudinary files in response...');
  
  const groupedFiles = parseCloudinaryLinksFromResponse(responseText);
  
  if (Object.keys(groupedFiles).length === 0) {
    console.log('⚠️ No Cloudinary files found in response');
    alert('No report files found in the response. Please try a different query or ensure the response contains Cloudinary image links.');
    return;
  }
  
  showFileSelectionInterface(groupedFiles);
}

function skipComparison() {
  console.log('❌ User skipped comparison');
  
  const promptBox = document.getElementById('comparisonPromptBox');
  if (promptBox) {
    promptBox.style.transition = 'all 0.3s ease-out';
    promptBox.style.opacity = '0';
    promptBox.style.transform = 'translateY(-10px)';
    
    setTimeout(() => {
      promptBox.remove();
      console.log('✅ Comparison prompt removed');
    }, 300);
  }
}

// ============================================================================
// CLOUDINARY URL PARSING
// ============================================================================

function parseCloudinaryLinksFromResponse(responseText) {
  console.log('🔍 Parsing Cloudinary links from response...');
  
  const cloudinaryRegex = /https:\/\/res\.cloudinary\.com\/[^\/]+\/image\/upload\/([^"\s<>]+\.(?:jpg|jpeg|png|pdf))/gi;
  
  const matches = [];
  const lines = responseText.split(/\n|<br>/);
  let currentYear = 'Unknown';
  
  for (const line of lines) {
    const yearHeaderMatch = line.match(/\*{0,2}(\d{4}-\d{2}|\d{2}-\d{2})\*{0,2}\s*\(\d+\s+files?\)/i);
    if (yearHeaderMatch) {
      currentYear = yearHeaderMatch[1];
      if (currentYear.length === 5 && currentYear.includes('-')) {
        const parts = currentYear.split('-');
        if (parts[0].length === 2) {
          currentYear = '19' + parts[0] + '-' + parts[1];
        }
      }
      console.log('📅 Found year header:', currentYear);
    }
    
    let urlMatch;
    const lineRegex = /https:\/\/res\.cloudinary\.com\/[^\/]+\/image\/upload\/([^"\s<>]+\.(?:jpg|jpeg|png|pdf))/gi;
    while ((urlMatch = lineRegex.exec(line)) !== null) {
      const fullUrl = urlMatch[0];
      const path = urlMatch[1];
      
      const urlYearMatch = path.match(/(\d{4}-\d{2})/);
      const year = urlYearMatch ? urlYearMatch[1] : currentYear;
      
      const filename = path.split('/').pop();
      
      matches.push({
        url: fullUrl,
        year: year,
        filename: filename,
        path: path
      });
      
      console.log(`  📄 ${filename} → Year: ${year}`);
    }
  }
  
  if (matches.length === 0) {
    console.log('⚠️ No files found with context, trying global search...');
    let match;
    while ((match = cloudinaryRegex.exec(responseText)) !== null) {
      const fullUrl = match[0];
      const path = match[1];
      
      const yearMatch = path.match(/(\d{4}-\d{2})/);
      const year = yearMatch ? yearMatch[1] : 'Unknown';
      
      const filename = path.split('/').pop();
      
      matches.push({
        url: fullUrl,
        year: year,
        filename: filename,
        path: path
      });
    }
  }
  
  const groupedByYear = {};
  matches.forEach(file => {
    if (!groupedByYear[file.year]) {
      groupedByYear[file.year] = [];
    }
    groupedByYear[file.year].push(file);
  });
  
  console.log(`✅ Found ${matches.length} files across ${Object.keys(groupedByYear).length} years`);
  console.log('📊 Files by year:', groupedByYear);
  
  return groupedByYear;
}

// ============================================================================
// FILE SELECTION INTERFACE
// ============================================================================

function showFileSelectionInterface(groupedFiles) {
  console.log('📋 Showing file selection interface');
  
  if (Object.keys(groupedFiles).length === 0) {
    alert('No Cloudinary files found in the response. Please try a different query.');
    return;
  }
  
  const sortedYears = Object.keys(groupedFiles).sort((a, b) => {
    if (a === 'Unknown') return 1;
    if (b === 'Unknown') return -1;
    return b.localeCompare(a);
  });
  
  const fileListHTML = sortedYears.map(year => {
    const files = groupedFiles[year];
    const yearId = year.replace('-', '_');
    
    return `
      <div class="year-group">
        <div class="year-header">
          <input type="checkbox" 
                 id="year_${yearId}_all" 
                 class="year-checkbox"
                 onchange="window.toggleYearFiles('${yearId}', this.checked)">
          <label for="year_${yearId}_all" class="year-label">
            📅 <strong>${year}</strong> - ${files.length} page${files.length > 1 ? 's' : ''} (Click to select all)
          </label>
        </div>
        
        <div class="files-list" id="files_${yearId}">
          ${files.map((file, index) => `
            <div class="file-item">
              <input type="checkbox" 
                     id="file_${yearId}_${index}" 
                     class="file-checkbox year-${yearId}"
                     data-year="${year}"
                     data-url="${file.url}"
                     data-filename="${file.filename}"
                     style="display: none;">
              <div class="file-info">
                <span class="file-icon">📄</span>
                <span class="file-name">${file.filename}</span>
              </div>
              <button class="preview-btn" onclick="window.open('${file.url}', '_blank')" title="Preview">
                👁️
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
  
  const selectionHTML = `
    <div class="file-selection-container" id="fileSelectionContainer">
      <div class="selection-header">
        <h3 class="selection-title">📸 Select Years to Compare</h3>
        <div class="selection-subtitle">
          ✨ Select years by checking the year boxes - all report pages from that year will be analyzed automatically
        </div>
      </div>
      
      <div class="selection-stats" id="selectionStats">
        <span class="stat-item">
          <strong id="selectedCount">0</strong> files selected
        </span>
        <span class="stat-item">
          <strong id="yearsCount">0</strong> years covered
        </span>
      </div>
      
      <div class="files-container">
        ${fileListHTML}
      </div>
      
      <div class="selection-actions">
        <button class="action-btn secondary-btn" onclick="window.cancelFileSelection()">
          Cancel
        </button>
        <button class="action-btn secondary-btn" onclick="window.selectAllYears()">
          Select All Years
        </button>
      </div>
      
      <div class="dual-action-container" id="dualActionContainer" style="display: none;">
        <div class="action-method-header">Choose how to analyze:</div>
        
        <div class="action-methods">
          <button class="method-btn groq-method-btn" onclick="window.analyzeWithGroq()">
            <div class="method-icon">🚀</div>
            <div class="method-title">Analyze with n8n + Groq</div>
            <div class="method-description">
              ✅ Server-side AI processing<br>
              ✅ Beautiful HTML reports<br>
              ✅ Graphs & insights<br>
              ✅ Professional output
            </div>
            <div class="method-badge recommended">RECOMMENDED</div>
          </button>
          
          <button class="method-btn copypaste-method-btn" onclick="window.showCopyPasteOption()">
            <div class="method-icon">📋</div>
            <div class="method-title">Copy for ChatGPT</div>
            <div class="method-description">
              ✅ Manual analysis<br>
              ✅ Ask follow-ups<br>
              ✅ Use your AI<br>
              ✅ More control
            </div>
            <div class="method-badge alternative">ALTERNATIVE</div>
          </button>
        </div>
      </div>
      
      <div class="selection-hint">
        💡 Check year boxes to select all files from that year. Multiple files per year will be analyzed together.
      </div>
    </div>
  `;
  
  const existingPrompts = document.querySelectorAll('.comparison-prompt-container, .year-selection-container, .comparison-confirmation');
  existingPrompts.forEach(el => el.style.display = 'none');
  
  const modalAnswer = document.getElementById('modalAnswer');
  if (modalAnswer && modalAnswer.parentElement) {
    const selectionDiv = document.createElement('div');
    selectionDiv.innerHTML = selectionHTML;
    modalAnswer.parentElement.appendChild(selectionDiv);
  }
  
  updateSelectionCount();
}

export function toggleYearFiles(yearId, checked) {
  const checkboxes = document.querySelectorAll(`.year-${yearId}`);
  console.log(`📋 Toggling ${checkboxes.length} files for year ${yearId} to ${checked}`);
  checkboxes.forEach(cb => cb.checked = checked);
  setTimeout(() => updateSelectionCount(), 10);
}

export function updateSelectionCount() {
  const checkedYearBoxes = document.querySelectorAll('.year-checkbox:checked');
  const yearsCount = checkedYearBoxes.length;
  
  let totalFiles = 0;
  const uniqueYears = new Set();
  
  checkedYearBoxes.forEach(yearCheckbox => {
    const yearId = yearCheckbox.id.replace('year_', '').replace('_all', '');
    const fileCheckboxes = document.querySelectorAll(`.year-${yearId}`);
    fileCheckboxes.forEach(cb => {
      cb.checked = true;
      const year = cb.getAttribute('data-year');
      if (year && year !== 'Unknown') uniqueYears.add(year);
    });
    totalFiles += fileCheckboxes.length;
  });
  
  const countElement = document.getElementById('selectedCount');
  const yearsElement = document.getElementById('yearsCount');
  const dualActionContainer = document.getElementById('dualActionContainer');
  
  if (countElement) countElement.textContent = totalFiles;
  if (yearsElement) yearsElement.textContent = yearsCount;
  
  if (dualActionContainer) {
    dualActionContainer.style.display = (totalFiles >= 2 && yearsCount >= 2) ? 'block' : 'none';
  }
}

export function selectAllYears() {
  const checkboxes = document.querySelectorAll('.file-checkbox');
  checkboxes.forEach(cb => cb.checked = true);
  
  const yearCheckboxes = document.querySelectorAll('.year-checkbox');
  yearCheckboxes.forEach(cb => cb.checked = true);
  
  updateSelectionCount();
  console.log('✅ All years selected');
}

export function cancelFileSelection() {
  const container = document.getElementById('fileSelectionContainer');
  if (container) container.remove();
  console.log('❌ File selection cancelled');
}

// ============================================================================
// COPY-PASTE OPTION
// ============================================================================

export function showCopyPasteOption() {
  const checkedFiles = document.querySelectorAll('.file-checkbox:checked');
  
  if (checkedFiles.length < 2) {
    alert('Please select at least 2 files to compare');
    return;
  }
  
  const filesByYear = {};
  const yearCheckboxes = document.querySelectorAll('.year-checkbox:checked');
  
  yearCheckboxes.forEach(yearCheckbox => {
    const yearId = yearCheckbox.id.replace('year_', '').replace('_all', '');
    const fileCheckboxes = document.querySelectorAll(`.year-${yearId}`);
    
    fileCheckboxes.forEach(cb => {
      const year = cb.getAttribute('data-year');
      const url = cb.getAttribute('data-url');
      const filename = cb.getAttribute('data-filename');
      
      if (!filesByYear[year]) filesByYear[year] = [];
      filesByYear[year].push({ url, filename });
    });
  });
  
  console.log('📋 Generating prompt for:', filesByYear);
  showCopyPasteInterface(filesByYear);
}

function showCopyPasteInterface(filesByYear) {
  const years = Object.keys(filesByYear).sort().reverse();
  const question = state.currentComparisonQuestion || 'Compare the statistical data across these years';
  
  let prompt = `I need help analyzing and comparing Haryana Statistical Abstract data across multiple years.\n\nQuestion: ${question}\n\nPlease analyze the following report images and provide a comprehensive comparison:\n\n`;
  
  years.forEach((year) => {
    const files = filesByYear[year];
    prompt += `**Year ${year}** (${files.length} page${files.length > 1 ? 's' : ''}):\n`;
    files.forEach((file, fileIndex) => {
      prompt += `${fileIndex + 1}. ${file.url}\n`;
    });
    prompt += `\n`;
  });
  
  prompt += `Please:\n1. Extract all numerical data, statistics, and key metrics from each year\n2. Compare the data across all ${years.length} years\n3. Identify trends, growth rates, and significant changes\n4. Provide insights and analysis\n5. Present the comparison in a clear, structured format\n\nNote: The images are pages from official Haryana Statistical Abstract reports. Please analyze them carefully and extract accurate data.`;
  
  const interfaceHTML = `
    <div class="copy-paste-container" id="copyPasteContainer">
      <div class="copy-paste-header">
        <h3 class="copy-paste-title">📋 Ready to Analyze with AI</h3>
        <div class="copy-paste-subtitle">Copy the prompt below and paste it into ChatGPT or Claude along with the image links</div>
      </div>
      
      <div class="copy-paste-stats">
        <span class="stat-badge">📅 ${years.length} Year${years.length > 1 ? 's' : ''}</span>
        <span class="stat-badge">📄 ${Object.values(filesByYear).reduce((sum, files) => sum + files.length, 0)} Image${Object.values(filesByYear).reduce((sum, files) => sum + files.length, 0) > 1 ? 's' : ''}</span>
      </div>
      
      <div class="prompt-preview-container">
        <div class="prompt-preview-header">
          <span>🔍 Prompt Preview</span>
          <button class="copy-btn-small" onclick="window.copyPromptToClipboard()" title="Copy prompt">📋 Copy</button>
        </div>
        <div class="prompt-preview" id="promptPreview">${prompt.replace(/\n/g, '<br>')}</div>
      </div>
      
      <div class="copy-paste-actions">
        <button class="action-btn secondary-btn" onclick="window.closeCopyPasteInterface()">← Back</button>
        <button class="action-btn primary-btn" onclick="window.copyPromptToClipboard()">📋 Copy Prompt to Clipboard</button>
      </div>
      
      <div class="ai-links-container">
        <div class="ai-links-header">Then paste in your preferred AI:</div>
        <div class="ai-links-buttons">
          <a href="https://chatgpt.com" target="_blank" class="ai-link-btn chatgpt-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073z"/>
            </svg>
            Open ChatGPT
          </a>
        </div>
      </div>
      
      <div class="copy-paste-instructions">
        <h4>📌 How to use:</h4>
        <ol>
          <li><strong>Copy the prompt</strong> using the button above</li>
          <li><strong>Click "Open ChatGPT"</strong> to launch ChatGPT</li>
          <li><strong>Paste the prompt</strong> in the chat</li>
          <li><strong>ChatGPT will analyze</strong> the images from the URLs and provide comparison!</li>
        </ol>
        <div class="tip-box">💡 <strong>Tip:</strong> ChatGPT can directly access images from URLs! Just paste the prompt with the links.</div>
      </div>
    </div>
  `;
  
  const fileSelectionContainer = document.getElementById('fileSelectionContainer');
  if (fileSelectionContainer) fileSelectionContainer.style.display = 'none';
  
  const modalAnswer = document.getElementById('modalAnswer');
  if (modalAnswer && modalAnswer.parentElement) {
    const copyPasteDiv = document.createElement('div');
    copyPasteDiv.innerHTML = interfaceHTML;
    modalAnswer.parentElement.appendChild(copyPasteDiv);
  }
  
  window.generatedPrompt = prompt;
  console.log('✅ Copy-paste interface displayed');
}

export function copyPromptToClipboard() {
  const prompt = window.generatedPrompt;
  
  if (!prompt) {
    alert('No prompt to copy!');
    return;
  }
  
  navigator.clipboard.writeText(prompt).then(() => {
    console.log('✅ Prompt copied to clipboard');
    
    const copyBtn = document.querySelector('.copy-paste-actions .primary-btn');
    if (copyBtn) {
      const originalText = copyBtn.innerHTML;
      copyBtn.innerHTML = '✅ Copied to Clipboard!';
      copyBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
      
      setTimeout(() => {
        copyBtn.innerHTML = originalText;
        copyBtn.style.background = '';
      }, 2000);
    }
    
    showToast('📋 Prompt copied! Now paste it in your preferred AI.', 'success');
  }).catch(err => {
    console.error('❌ Failed to copy:', err);
    
    const promptPreview = document.getElementById('promptPreview');
    if (promptPreview) {
      const range = document.createRange();
      range.selectNode(promptPreview);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      alert('Prompt selected! Press Ctrl+C (or Cmd+C on Mac) to copy.');
    }
  });
}

export function closeCopyPasteInterface() {
  const container = document.getElementById('copyPasteContainer');
  if (container) container.remove();
  
  const fileSelectionContainer = document.getElementById('fileSelectionContainer');
  if (fileSelectionContainer) fileSelectionContainer.style.display = 'block';
  
  console.log('❌ Copy-paste interface closed');
}

// ============================================================================
// N8N + GROQ ANALYSIS
// ============================================================================

export async function analyzeWithGroq() {
  console.log('🚀 Starting n8n + Groq analysis...');
  
  const yearCheckboxes = document.querySelectorAll('.year-checkbox:checked');
  
  if (yearCheckboxes.length < 2) {
    alert('Please select at least 2 years to compare');
    return;
  }
  
  const filesByYear = {};
  yearCheckboxes.forEach(yearCheckbox => {
    const yearId = yearCheckbox.id.replace('year_', '').replace('_all', '');
    const fileCheckboxes = document.querySelectorAll(`.year-${yearId}`);
    
    fileCheckboxes.forEach(cb => {
      const year = cb.getAttribute('data-year');
      const url = cb.getAttribute('data-url');
      const filename = cb.getAttribute('data-filename');
      
      if (!filesByYear[year]) filesByYear[year] = [];
      filesByYear[year].push({ url, filename });
    });
  });
  
  const years = Object.keys(filesByYear).sort().reverse();
  console.log('📊 Files to analyze:', filesByYear);
  
  showProcessingOverlay();
  updateProcessingStatus('Sending to n8n workflow...', 1, 3);
  
  try {
    const result = await sendComparisonToN8N(filesByYear);
    
    updateProcessingStatus('Processing with Groq AI...', 2, 3);
    updateProcessingStatus('Rendering report...', 3, 3);
    
    hideProcessingOverlay();
    displayComparisonReport(result);
    
    console.log('✅ Analysis complete!');
    
  } catch (error) {
    console.error('❌ n8n workflow error:', error);
    hideProcessingOverlay();
    
    let errorMessage = error.message;
    if (error.message.includes('Failed to fetch')) {
      errorMessage = 'Cannot connect to n8n webhook. Please check:\n1. n8n workflow is active\n2. Webhook URL is correct\n3. Internet connection is working';
    } else if (error.message.includes('Invalid JSON')) {
      errorMessage = `n8n returned invalid response:\n${error.message}`;
    }
    
    alert(`Analysis failed: ${errorMessage}`);
    
    const fileSelectionContainer = document.getElementById('fileSelectionContainer');
    if (fileSelectionContainer) fileSelectionContainer.style.display = 'block';
  }
}

function showProcessingOverlay() {
  const overlay = document.createElement('div');
  overlay.id = 'processingOverlay';
  overlay.className = 'processing-overlay visible';
  overlay.innerHTML = `
    <div class="processing-content">
      <div class="processing-spinner"></div>
      <div class="processing-title">Processing Images...</div>
      <div class="processing-text">Extracting data from images</div>
      <div class="processing-text">Analyzing statistical information</div>
      <div class="processing-progress" id="processingProgress">Step 1 of 3</div>
    </div>
  `;
  document.body.appendChild(overlay);
}

function hideProcessingOverlay() {
  const overlay = document.getElementById('processingOverlay');
  if (overlay) {
    overlay.classList.remove('visible');
    setTimeout(() => overlay.remove(), 300);
  }
}

function updateProcessingStatus(text, current, total) {
  const progressElement = document.getElementById('processingProgress');
  if (progressElement) {
    progressElement.textContent = `${text} (Step ${current} of ${total})`;
  }
}

export function displayComparisonReport(n8nResponse) {
  console.log('📊 Displaying n8n comparison report');
  
  try {
    let reportData;
    if (Array.isArray(n8nResponse)) {
      reportData = n8nResponse[0];
    } else {
      reportData = n8nResponse;
    }
    
    if (!reportData || !reportData.htmlReport) {
      throw new Error('No HTML report found in n8n response');
    }
    
    const htmlReport = reportData.htmlReport;
    
    const modal = document.createElement('div');
    modal.id = 'n8nReportModal';
    modal.style.cssText = `position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.95);z-index:100000;display:flex;align-items:center;justify-content:center;padding:20px;`;
    
    const container = document.createElement('div');
    container.style.cssText = `width:100%;max-width:1400px;height:90vh;background:white;border-radius:16px;overflow:hidden;box-shadow:0 25px 50px -12px rgba(0,0,0,0.7);display:flex;flex-direction:column;position:relative;`;
    
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '✕';
    closeBtn.style.cssText = `position:absolute;top:15px;right:15px;width:45px;height:45px;background:rgba(0,0,0,0.8);color:white;border:none;border-radius:50%;font-size:24px;cursor:pointer;z-index:10;`;
    closeBtn.onclick = () => document.body.removeChild(modal);
    
    const actionBar = document.createElement('div');
    actionBar.style.cssText = `padding:15px 20px;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);display:flex;gap:10px;align-items:center;`;
    
    const title = document.createElement('div');
    title.textContent = '📊 AI Budget Analysis Report';
    title.style.cssText = `color:white;font-size:18px;font-weight:700;flex:1;`;
    
    const downloadBtn = document.createElement('button');
    downloadBtn.innerHTML = '⬇️ Download';
    downloadBtn.style.cssText = `padding:10px 20px;background:white;color:#667eea;border:none;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;`;
    downloadBtn.onclick = () => {
      const blob = new Blob([htmlReport], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Budget_Analysis_${new Date().toISOString().split('T')[0]}.html`;
      a.click();
      URL.revokeObjectURL(url);
    };
    
    actionBar.appendChild(title);
    actionBar.appendChild(downloadBtn);
    
    const iframe = document.createElement('iframe');
    iframe.style.cssText = `width:100%;flex:1;border:none;background:white;`;
    
    container.appendChild(closeBtn);
    container.appendChild(actionBar);
    container.appendChild(iframe);
    modal.appendChild(container);
    document.body.appendChild(modal);
    
    iframe.contentDocument.open();
    iframe.contentDocument.write(htmlReport);
    iframe.contentDocument.close();
    
    console.log('✅ Report displayed successfully');
    
  } catch (error) {
    console.error('❌ Error displaying report:', error);
    alert(`❌ Error Displaying Report\n\n${error.message}`);
  }
}

// Make functions globally accessible
window.toggleYearFiles = toggleYearFiles;
window.updateSelectionCount = updateSelectionCount;
window.selectAllYears = selectAllYears;
window.cancelFileSelection = cancelFileSelection;
window.showCopyPasteOption = showCopyPasteOption;
window.copyPromptToClipboard = copyPromptToClipboard;
window.closeCopyPasteInterface = closeCopyPasteInterface;
window.analyzeWithGroq = analyzeWithGroq;

console.log('✅ comparison.js loaded');
