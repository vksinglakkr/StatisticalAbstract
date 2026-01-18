// ============================================================================
// COMPREHENSIVE STATISTICAL QUESTIONS - DIRECT REPLACEMENT CODE
// Copy lines 1527-1600 and replace with this entire code block
// ============================================================================

const statsQuestions = {
  '📊 Basic Statistical Concepts': {
    '🔢 Fundamental Terms': [
      "What is statistics?",
      "What is data?",
      "What is population in statistics?",
      "What is a sample?",
      "What is census?",
      "What is the difference between census and sample survey?",
      "What is a variable?",
      "What is qualitative data?",
      "What is quantitative data?"
    ],
    '📈 Central Tendency': [
      "What is mean?",
      "What is median?",
      "What is mode?",
      "What is the difference between mean, median, and mode?",
      "What is weighted mean?",
      "What is percentile?",
      "What is quartile?"
    ],
    '📉 Dispersion Measures': [
      "What is range in statistics?",
      "What is variance?",
      "What is standard deviation?",
      "What is coefficient of variation?",
      "What is quartile deviation?"
    ]
  },

  '👥 Population Statistics': {
    '🌍 Population Basics': [
      "What is population?",
      "What is population density?",
      "How is population density calculated?",
      "What is crude birth rate?",
      "What is crude death rate?",
      "What is natural growth rate?",
      "What is population growth rate?",
      "What is decadal growth rate?"
    ],
    '👶 Birth & Death': [
      "What is birth rate?",
      "What is death rate?",
      "What is infant mortality rate?",
      "What is child mortality rate?",
      "What is maternal mortality rate?",
      "What is fertility rate?",
      "What is total fertility rate (TFR)?",
      "What is life expectancy?"
    ],
    '🚻 Sex Ratio & Age': [
      "What is sex ratio?",
      "How is sex ratio calculated?",
      "What is child sex ratio?",
      "What is dependency ratio?",
      "What is working age population?",
      "What is age pyramid?"
    ],
    '🏘️ Rural-Urban': [
      "What is rural population?",
      "What is urban population?",
      "What is urbanization?",
      "What is urban agglomeration?",
      "What is metropolitan city?"
    ]
  },

  '📚 Literacy & Education': {
    '📖 Literacy': [
      "What is literacy rate?",
      "How is literacy rate calculated?",
      "What is male literacy rate?",
      "What is female literacy rate?",
      "What is adult literacy rate?",
      "What is functional literacy?"
    ],
    '🎓 Education Indicators': [
      "What is gross enrollment ratio (GER)?",
      "What is net enrollment ratio (NER)?",
      "What is dropout rate?",
      "What is pupil-teacher ratio?",
      "What is gender parity index in education?"
    ]
  },

  '💰 Economic Statistics': {
    '💵 GDP & Income': [
      "What is Gross Domestic Product (GDP)?",
      "What is per capita income?",
      "What is GSDP?",
      "What is national income?",
      "What is real GDP?",
      "What is nominal GDP?",
      "What is GDP growth rate?"
    ],
    '📊 Price Indices': [
      "What is a Price Index?",
      "What is Consumer Price Index (CPI)?",
      "What is Wholesale Price Index (WPI)?",
      "What is inflation?",
      "What is base year?",
      "What is current price?",
      "What is constant price?"
    ],
    '💼 Employment': [
      "What is unemployment rate?",
      "What is labor force participation rate?",
      "What is work participation rate?",
      "What is workforce?"
    ],
    '🏚️ Poverty': [
      "What is poverty line?",
      "What is poverty ratio?",
      "What is Below Poverty Line (BPL)?",
      "What is Gini coefficient?"
    ]
  },

  '🌾 Agriculture Statistics': {
    '🚜 Land Use': [
      "What is geographical area?",
      "What is net sown area?",
      "What is gross sown area?",
      "What is cropped area?",
      "What is cropping intensity?",
      "What is cultivable land?",
      "What is fallow land?"
    ],
    '🌱 Crop Production': [
      "What is yield?",
      "What is crop yield?",
      "What is productivity?",
      "What is Kharif crop?",
      "What is Rabi crop?",
      "What is food grain?",
      "What is cash crop?"
    ],
    '🐄 Livestock': [
      "What is livestock census?",
      "What is cattle population?",
      "What is milk production?",
      "What is poultry population?"
    ],
    '💧 Irrigation': [
      "What is irrigated area?",
      "What is net irrigated area?",
      "What is irrigation intensity?",
      "What is canal irrigation?",
      "What is tube well irrigation?"
    ]
  },

  '🏭 Industry & Manufacturing': {
    '🏗️ Industrial': [
      "What is Index of Industrial Production (IIP)?",
      "What is manufacturing sector?",
      "What is factory?",
      "What is registered factory?",
      "What is industrial growth rate?"
    ],
    '⚡ Power & Energy': [
      "What is installed capacity?",
      "What is power generation?",
      "What is per capita power consumption?",
      "What is rural electrification?"
    ]
  },

  '🏥 Health Statistics': {
    '👨‍⚕️ Health Indicators': [
      "What is morbidity rate?",
      "What is prevalence?",
      "What is incidence?",
      "What is malnutrition?",
      "What is stunting?",
      "What is wasting?"
    ],
    '🏥 Healthcare': [
      "What is bed-population ratio?",
      "What is doctor-population ratio?",
      "What is primary health center?",
      "What is immunization coverage?",
      "What is institutional delivery?"
    ]
  },

  '🚗 Infrastructure': {
    '🛣️ Roads': [
      "What is road density?",
      "What is road length?",
      "What is national highway?",
      "What is state highway?",
      "What is village connectivity?"
    ],
    '📱 Telecom & Banking': [
      "What is teledensity?",
      "What is mobile penetration?",
      "What is internet penetration?",
      "What is bank branch density?",
      "What is credit-deposit ratio?"
    ]
  },

  '🏛️ Administrative': {
    '📍 Units': [
      "What is district?",
      "What is tehsil?",
      "What is block?",
      "What is gram panchayat?",
      "What is municipality?"
    ],
    '📊 Census Methods': [
      "What is census enumeration?",
      "What is household?",
      "What is household size?",
      "What is reference period?"
    ]
  },

  '🌳 Environment': {
    '🌲 Forest & Climate': [
      "What is forest cover?",
      "What is forest density?",
      "What is rainfall?",
      "What is average rainfall?",
      "What is drought?"
    ]
  },

  '🔢 Advanced Methods': {
    '📐 Analysis': [
      "What is correlation?",
      "What is regression analysis?",
      "What is trend analysis?",
      "What is forecasting?",
      "What is probability?"
    ]
  }
};

// ============================================================================
// HINDI VERSION
// ============================================================================

const statsQuestionsHindi = {
  '📊 बुनियादी सांख्यिकीय अवधारणाएं': {
    '🔢 मूल शब्दावली': [
      "सांख्यिकी क्या है?",
      "डेटा क्या है?",
      "सांख्यिकी में जनसंख्या क्या है?",
      "नमूना क्या है?",
      "जनगणना क्या है?",
      "जनगणना और नमूना सर्वेक्षण में क्या अंतर है?",
      "चर क्या है?",
      "गुणात्मक डेटा क्या है?",
      "मात्रात्मक डेटा क्या है?"
    ],
    '📈 केंद्रीय प्रवृत्ति': [
      "माध्य क्या है?",
      "मध्यिका क्या है?",
      "बहुलक क्या है?",
      "माध्य, मध्यिका और बहुलक में क्या अंतर है?",
      "भारित माध्य क्या है?",
      "प्रतिशतक क्या है?",
      "चतुर्थक क्या है?"
    ],
    '📉 प्रकीर्णन के माप': [
      "सांख्यिकी में परिसर क्या है?",
      "प्रसरण क्या है?",
      "मानक विचलन क्या है?",
      "विचलन गुणांक क्या है?",
      "चतुर्थक विचलन क्या है?"
    ]
  },

  '👥 जनसंख्या सांख्यिकी': {
    '🌍 जनसंख्या मूल': [
      "जनसंख्या क्या है?",
      "जनसंख्या घनत्व क्या है?",
      "जनसंख्या घनत्व की गणना कैसे की जाती है?",
      "कच्ची जन्म दर क्या है?",
      "कच्ची मृत्यु दर क्या है?",
      "प्राकृतिक वृद्धि दर क्या है?",
      "जनसंख्या वृद्धि दर क्या है?",
      "दशकीय वृद्धि दर क्या है?"
    ],
    '👶 जन्म और मृत्यु': [
      "जन्म दर क्या है?",
      "मृत्यु दर क्या है?",
      "शिशु मृत्यु दर क्या है?",
      "बाल मृत्यु दर क्या है?",
      "मातृ मृत्यु दर क्या है?",
      "प्रजनन दर क्या है?",
      "कुल प्रजनन दर (TFR) क्या है?",
      "जीवन प्रत्याशा क्या है?"
    ],
    '🚻 लिंगानुपात और आयु': [
      "लिंगानुपात क्या है?",
      "लिंगानुपात की गणना कैसे की जाती है?",
      "बाल लिंगानुपात क्या है?",
      "निर्भरता अनुपात क्या है?",
      "कार्यशील आयु जनसंख्या क्या है?",
      "आयु पिरामिड क्या है?"
    ],
    '🏘️ ग्रामीण-शहरी': [
      "ग्रामीण जनसंख्या क्या है?",
      "शहरी जनसंख्या क्या है?",
      "शहरीकरण क्या है?",
      "शहरी समूहन क्या है?",
      "महानगरीय शहर क्या है?"
    ]
  },

  '📚 साक्षरता और शिक्षा': {
    '📖 साक्षरता': [
      "साक्षरता दर क्या है?",
      "साक्षरता दर की गणना कैसे की जाती है?",
      "पुरुष साक्षरता दर क्या है?",
      "महिला साक्षरता दर क्या है?",
      "वयस्क साक्षरता दर क्या है?",
      "कार्यात्मक साक्षरता क्या है?"
    ],
    '🎓 शिक्षा संकेतक': [
      "सकल नामांकन अनुपात (GER) क्या है?",
      "शुद्ध नामांकन अनुपात (NER) क्या है?",
      "ड्रॉपआउट दर क्या है?",
      "छात्र-शिक्षक अनुपात क्या है?",
      "शिक्षा में लैंगिक समानता सूचकांक क्या है?"
    ]
  },

  '💰 आर्थिक सांख्यिकी': {
    '💵 GDP और आय': [
      "सकल घरेलू उत्पाद (GDP) क्या है?",
      "प्रति व्यक्ति आय क्या है?",
      "GSDP क्या है?",
      "राष्ट्रीय आय क्या है?",
      "वास्तविक GDP क्या है?",
      "नाममात्र GDP क्या है?",
      "GDP वृद्धि दर क्या है?"
    ],
    '📊 मूल्य सूचकांक': [
      "मूल्य सूचकांक क्या है?",
      "उपभोक्ता मूल्य सूचकांक (CPI) क्या है?",
      "थोक मूल्य सूचकांक (WPI) क्या है?",
      "मुद्रास्फीति क्या है?",
      "आधार वर्ष क्या है?",
      "वर्तमान मूल्य क्या है?",
      "स्थिर मूल्य क्या है?"
    ],
    '💼 रोजगार': [
      "बेरोजगारी दर क्या है?",
      "श्रम बल भागीदारी दर क्या है?",
      "कार्य भागीदारी दर क्या है?",
      "कार्यबल क्या है?"
    ],
    '🏚️ गरीबी': [
      "गरीबी रेखा क्या है?",
      "गरीबी अनुपात क्या है?",
      "गरीबी रेखा से नीचे (BPL) क्या है?",
      "गिनी गुणांक क्या है?"
    ]
  },

  '🌾 कृषि सांख्यिकी': {
    '🚜 भूमि उपयोग': [
      "भौगोलिक क्षेत्र क्या है?",
      "शुद्ध बोया गया क्षेत्र क्या है?",
      "सकल बोया गया क्षेत्र क्या है?",
      "फसली क्षेत्र क्या है?",
      "फसल सघनता क्या है?",
      "कृषि योग्य भूमि क्या है?",
      "परती भूमि क्या है?"
    ],
    '🌱 फसल उत्पादन': [
      "उपज क्या है?",
      "फसल उपज क्या है?",
      "उत्पादकता क्या है?",
      "खरीफ फसल क्या है?",
      "रबी फसल क्या है?",
      "खाद्यान्न क्या है?",
      "नकदी फसल क्या है?"
    ],
    '🐄 पशुधन': [
      "पशुधन जनगणना क्या है?",
      "पशु जनसंख्या क्या है?",
      "दुग्ध उत्पादन क्या है?",
      "कुक्कुट जनसंख्या क्या है?"
    ],
    '💧 सिंचाई': [
      "सिंचित क्षेत्र क्या है?",
      "शुद्ध सिंचित क्षेत्र क्या है?",
      "सिंचाई सघनता क्या है?",
      "नहर सिंचाई क्या है?",
      "नलकूप सिंचाई क्या है?"
    ]
  },

  '🏭 उद्योग और विनिर्माण': {
    '🏗️ औद्योगिक': [
      "औद्योगिक उत्पादन सूचकांक (IIP) क्या है?",
      "विनिर्माण क्षेत्र क्या है?",
      "कारखाना क्या है?",
      "पंजीकृत कारखाना क्या है?",
      "औद्योगिक वृद्धि दर क्या है?"
    ],
    '⚡ बिजली और ऊर्जा': [
      "स्थापित क्षमता क्या है?",
      "बिजली उत्पादन क्या है?",
      "प्रति व्यक्ति बिजली खपत क्या है?",
      "ग्रामीण विद्युतीकरण क्या है?"
    ]
  },

  '🏥 स्वास्थ्य सांख्यिकी': {
    '👨‍⚕️ स्वास्थ्य संकेतक': [
      "रुग्णता दर क्या है?",
      "व्यापकता क्या है?",
      "घटना क्या है?",
      "कुपोषण क्या है?",
      "बौनापन क्या है?",
      "क्षीणता क्या है?"
    ],
    '🏥 स्वास्थ्य सेवा': [
      "बिस्तर-जनसंख्या अनुपात क्या है?",
      "डॉक्टर-जनसंख्या अनुपात क्या है?",
      "प्राथमिक स्वास्थ्य केंद्र क्या है?",
      "टीकाकरण कवरेज क्या है?",
      "संस्थागत प्रसव क्या है?"
    ]
  },

  '🚗 बुनियादी ढांचा': {
    '🛣️ सड़कें': [
      "सड़क घनत्व क्या है?",
      "सड़क लंबाई क्या है?",
      "राष्ट्रीय राजमार्ग क्या है?",
      "राज्य राजमार्ग क्या है?",
      "गांव कनेक्टिविटी क्या है?"
    ],
    '📱 दूरसंचार और बैंकिंग': [
      "टेलीडेंसिटी क्या है?",
      "मोबाइल पैठ क्या है?",
      "इंटरनेट पैठ क्या है?",
      "बैंक शाखा घनत्व क्या है?",
      "ऋण-जमा अनुपात क्या है?"
    ]
  },

  '🏛️ प्रशासनिक': {
    '📍 इकाइयां': [
      "जिला क्या है?",
      "तहसील क्या है?",
      "ब्लॉक क्या है?",
      "ग्राम पंचायत क्या है?",
      "नगरपालिका क्या है?"
    ],
    '📊 जनगणना विधियां': [
      "जनगणना गणना क्या है?",
      "परिवार क्या है?",
      "परिवार का आकार क्या है?",
      "संदर्भ अवधि क्या है?"
    ]
  },

  '🌳 पर्यावरण': {
    '🌲 वन और जलवायु': [
      "वन आच्छादन क्या है?",
      "वन घनत्व क्या है?",
      "वर्षा क्या है?",
      "औसत वर्षा क्या है?",
      "सूखा क्या है?"
    ]
  },

  '🔢 उन्नत विधियां': {
    '📐 विश्लेषण': [
      "सहसंबंध क्या है?",
      "प्रतिगमन विश्लेषण क्या है?",
      "प्रवृत्ति विश्लेषण क्या है?",
      "पूर्वानुमान क्या है?",
      "प्रायिकता क्या है?"
    ]
  }
};

let selectedLanguage = 'English';
let selectedQueryType = null; // ✅ FIX: No default selection - user must choose
let currentQuestions = {};
let allQuestions = [];
// ═══════════════════════════════════════════════════════════════════
// GOOGLE SHEETS CONFIGURATION
// ═══════════════════════════════════════════════════════════════════
const GOOGLE_SHEET_URL = 'https://docs.google.com/spreadsheets/d/17mpGz4-lw-xBYqDiHj7RV1z0w_5k8lEmSmVqsxS36ro/export?format=tsv&gid=740242886';

// File Search Variables - LOADED FROM GOOGLE SHEETS (TSV FORMAT)
let masterFileData = [];
let selectedFileItem = null;
    
// ═══════════════════════════════════════════════════════════════════
// COMPREHENSIVE DEBUG LOGGING
// ═══════════════════════════════════════════════════════════════════
console.log('════════════════════════════════════════════════════════');
console.log('🔍 STATS SAHAYAK DEBUG MODE');
console.log('════════════════════════════════════════════════════════');
console.log('✓ Script loading started');
console.log('✓ GOOGLE_SHEET_URL:', GOOGLE_SHEET_URL);
console.log('✓ Document ready state:', document.readyState);
console.log('════════════════════════════════════════════════════════');

const FILE_API_ENDPOINT = 'https://n8n-workflow-test.duckdns.org/webhook/stat-abstract'; // ⚠️ ADD YOUR N8N WEBHOOK URL    
const N8N_COMPARISON_WEBHOOK = 'https://n8n-workflow-test.duckdns.org/webhook/haryana-comparison'; // ⚠️ N8N Groq Vision Webhook    

// DOM elements - will be accessed when needed (after page loads)
let categorySelect;
let questionSelect;
let questionSection;
let userInput;
let autocompleteDropdown;

// Initialize DOM elements after page loads
function initDOMElements() {
  categorySelect = document.getElementById('categorySelect');
  questionSelect = document.getElementById('questionSelect');
  questionSection = document.getElementById('questionSection');
  userInput = document.getElementById('userInput');
  autocompleteDropdown = document.getElementById('autocompleteDropdown');
}

// ============================================================
// 🎯 FIXED MASTER CONTROL - Correct Logic for Quick Help
// Replace lines ~1468-1520 in app.js with this
// ============================================================
function switchMode(mode) {
  const questionSection = document.getElementById('questionSection'); // Contains Quick Help + Input
  const chatInterface = document.getElementById('chatInterface');     // Full-screen chat
  const quickHelp = document.getElementById('quickQuestionsSection'); // Quick Help dropdown section
  const toggleData = document.getElementById('toggleData');
  const toggleStatistics = document.getElementById('toggleStatistics');
  const userInput = document.getElementById('userInput');

  console.log("🛠️ Switching UI Mode to:", mode);

  if (mode === 'data') {
    // ============================================================
    // DATA MODE: Show input area but HIDE Quick Help dropdowns
    // ============================================================
    if (questionSection) questionSection.style.display = 'block';
    if (chatInterface)   chatInterface.style.display = 'none';
    if (quickHelp)       quickHelp.style.display = 'none'; // Hide dropdowns in data mode
    
    // Button visuals
    if (toggleData)       toggleData.classList.add('active');
    if (toggleStatistics) toggleStatistics.classList.remove('active');

    // Update input placeholder
    if (userInput) userInput.placeholder = "Start typing to search data files...";
    
    selectedQueryType = 'data';
  } 
  else {
    // ============================================================
    // STATISTICS MODE: Show input area WITH Quick Help dropdowns
    // ============================================================
    if (questionSection) questionSection.style.display = 'block'; // ✅ SHOW parent
    if (chatInterface)   chatInterface.style.display = 'none';    // Hide chat
    if (quickHelp)       quickHelp.style.display = 'block';       // ✅ SHOW Quick Help
    
    // Button visuals
    if (toggleStatistics) toggleStatistics.classList.add('active');
    if (toggleData)       toggleData.classList.remove('active');

    // Update input placeholder
    if (userInput) userInput.placeholder = "Search statistical questions...";
    
    selectedQueryType = 'statistics';
  }
}

// Map the other function name to this one so old links don't break
function selectQueryType(type) { 
  switchMode(type); 
}
function loadCategories() {
  if (!categorySelect || !questionSelect) {
    console.error('loadCategories: DOM elements not initialized!');
    initDOMElements();
    if (!categorySelect || !questionSelect) {
      console.error('loadCategories: Still unable to find DOM elements');
      return;
    }
  }
  
  categorySelect.innerHTML = '<option value="" selected disabled>Select Topic</option>';
  questionSelect.innerHTML = '<option value="" selected disabled>Select Question</option>';
  questionSelect.disabled = true;
  
  // For statistics mode, use predefined questions
  // For data mode, we'll use Google Sheets data (masterFileData) instead
  if (selectedQueryType === 'statistics') {
    currentQuestions = selectedLanguage === 'Hindi' ? statsQuestionsHindi : statsQuestions;
    
    Object.keys(currentQuestions).forEach(category => {
      const option = document.createElement('option');
      option.value = category;
      option.textContent = formatCategoryName(category);
      
      // Add special color classes to specific categories
      if (category.includes('Cultural') || category.includes('सांस्कृतिक')) {
        option.classList.add('category-cultural');
      } else if (category.includes('Religious') || category.includes('धार्मिक')) {
        option.classList.add('category-religious');
      } else if (category.includes('Date') || category.includes('तारीख')) {
        option.classList.add('category-date');
      }
      
      categorySelect.appendChild(option);
    });
  } else {
    // Data mode - categories will be populated from Google Sheets
    // For now, just set a placeholder
    currentQuestions = {};
    console.log('Data mode: Categories will be loaded from Google Sheets');
  }
}
function buildAllQuestionsList() {
  allQuestions = [];
  
  // For statistics mode, use predefined questions
  // For data mode, we'll use Google Sheets data (masterFileData) instead
  if (selectedQueryType === 'statistics') {
    currentQuestions = selectedLanguage === 'Hindi' ? statsQuestionsHindi : statsQuestions;
    
    Object.keys(currentQuestions).forEach(mainCategory => {
      const subcategories = currentQuestions[mainCategory];
      
      // Loop through subcategories
      Object.keys(subcategories).forEach(subcategory => {
        subcategories[subcategory].forEach(question => {
          allQuestions.push({
            question: question,
            category: formatCategoryName(mainCategory),
            subcategory: subcategory
          });
        });
      });
    });
  } else {
    // Data mode - questions will come from masterFileData (Google Sheets)
    currentQuestions = {};
    console.log('Data mode: Questions will be loaded from Google Sheets');
  }
}

function formatCategoryName(category) {
  // Just remove underscores and return as-is to preserve original capitalization
  // including parentheses content like (Dharamshalas)
  return category.replace(/_/g, ' ');
}

// AUTOCOMPLETE FUNCTIONALITY
function highlightMatch(text, query) {
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

function filterQuestions(query) {
  if (!query || query.length < 1) {
    return [];
  }
  
  query = query.toLowerCase().trim();
  const keywords = query.split(/\s+/);
  
  return allQuestions.filter(item => {
    const questionLower = item.question.toLowerCase();
    
    // Better matching for 3-4 character searches
    if (query.length >= 3 && query.length <= 4) {
      const wordBoundaryMatch = new RegExp(`\\b${query}`, 'i').test(questionLower);
      const consecutiveMatch = questionLower.includes(query);
      return wordBoundaryMatch || consecutiveMatch;
    }
    
    return keywords.some(keyword => questionLower.includes(keyword));
  }); // Show ALL matching suggestions (no limit)
}

function initUserInputListener() {
  if (!userInput) initDOMElements();
  
  userInput.addEventListener('input', function() {
    const query = this.value.trim();
    
    if (query.length < 2) {
      autocompleteDropdown.style.display = 'none';
      return;
    }
    
    // Check which mode we're in
    if (selectedQueryType === 'data') {
      // DATA MODE - Search in masterFileData (Google Sheets)
      performFileSearch(query);
    } else {
      // STATISTICS MODE - Search in hardcoded questions
      const matches = filterQuestions(query);
  
  if (matches.length === 0) {
    autocompleteDropdown.innerHTML = '<div class="autocomplete-no-results">No matching questions found. Try different keywords.</div>';
    autocompleteDropdown.style.display = 'block';
    return;
  }
  
  let html = '';
  let lastCategory = '';
  let originalQuestion = '';
  
  matches.forEach(item => {
    if (item.category !== lastCategory) {
      html += `<div class="autocomplete-category">${item.category}</div>`;
      lastCategory = item.category;
    }
    
    const highlightedQuestion = highlightMatch(item.question, query);
    html += `<div class="autocomplete-item" data-question="${item.question}">${highlightedQuestion}</div>`;
  });
  
  autocompleteDropdown.innerHTML = html;
  autocompleteDropdown.style.display = 'block';
  
  // Add click handlers
  document.querySelectorAll('.autocomplete-item').forEach(item => {
    item.addEventListener('click', function() {
      userInput.value = this.getAttribute('data-question');
      autocompleteDropdown.style.display = 'none';
    });
  });
    } // End of statistics mode
  }); // End of input event listener

  // Close dropdown on ESC key
  userInput.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      autocompleteDropdown.style.display = 'none';
    }
  });
  
  console.log('✅ User input autocomplete initialized');
}

// Initialize dropdown event listeners (must run after DOM is ready)
function initDropdownListeners() {
  if (!categorySelect || !questionSelect) initDOMElements();
  
  categorySelect.addEventListener('change', function() {
    questionSelect.innerHTML = '<option value="" selected disabled>Select Question</option>';
    questionSelect.disabled = false;
    
    const selectedCategory = this.value;
    const categoryData = currentQuestions[selectedCategory];
    
    if (categoryData) {
      // categoryData is now an object with subcategories
      Object.keys(categoryData).forEach(subcategory => {
        // Add optgroup for subcategory
        const optgroup = document.createElement('optgroup');
        optgroup.label = subcategory;
        
        // Add questions under this subcategory
        categoryData[subcategory].forEach(question => {
          const option = document.createElement('option');
          option.value = question;
          option.textContent = question;
          optgroup.appendChild(option);
        });
        
        questionSelect.appendChild(optgroup);
      });
    }
  });

  questionSelect.addEventListener('change', function() {
    userInput.value = this.value;
    autocompleteDropdown.style.display = 'none';
  });
}

// Initialize language buttons and TTS (must run after DOM ready)
function initLanguageAndTTS() {
  document.querySelectorAll('.langBtn').forEach(btn => {
    btn.addEventListener('click', function() {
      selectedLanguage = this.getAttribute('data-lang');
      document.querySelectorAll('.langBtn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      loadCategories();
      buildAllQuestionsList();
    });
  });

  const ttsBtn = document.getElementById('ttsToggle');
  const ttsLabel = document.getElementById('ttsLabel');

  ttsBtn.addEventListener('click', () => {
    if (isSpeaking) {
      manualStop = true;
      speechSynthesis.cancel();
      isSpeaking = false;
      ttsBtn.classList.remove('speaking');
      ttsLabel.textContent = 'Listen';
      return;
    }
    
    manualStop = false;
    const answerText = document.getElementById('modalAnswer').textContent;
    
    if (!answerText || answerText === 'Thinking...') {
      alert('No answer to read yet!');
      return;
    }
    
    if (!('speechSynthesis' in window)) {
      alert('Text-to-speech is not supported in your browser.');
      return;
    }
    
    ttsUtterance = new SpeechSynthesisUtterance(answerText);
    ttsUtterance.rate = 0.9;
    ttsUtterance.pitch = 1;
    ttsUtterance.volume = 1;
  
// ========================================================================
  // SMART TTS WITH LANGUAGE DETECTION - Lines 1760-1824 Replacement
  // ========================================================================
  
  const voices = speechSynthesis.getVoices();
  
  // ========================================================================
  // DETECT LANGUAGE (Hindi vs English)
  // ========================================================================
  function detectLanguage(text) {
    const cleanText = text.replace(/[।॥.,!?;:\-\_\n\r]/g, ' ').trim();
    const hindiCharCount = (cleanText.match(/[\u0900-\u097F]/g) || []).length;
    const englishCharCount = (cleanText.match(/[a-zA-Z]/g) || []).length;
    const totalChars = hindiCharCount + englishCharCount;
    
    if (totalChars === 0) return 'en';
    const hindiPercentage = (hindiCharCount / totalChars) * 100;
    
    return hindiPercentage > 30 ? 'hi' : 'en';
  }
  
  const detectedLang = detectLanguage(answerText);
  console.log('🔍 Detected Language:', detectedLang);
  
  // ========================================================================
  // VERSION 24 STYLE - Auto-working TTS (No voice installation needed!)
  // ========================================================================
  
  // Set language HINT - let browser choose best voice automatically
  if (detectedLang === 'hi') {
    ttsUtterance.lang = 'hi-IN';  // Hint: This is Hindi text
    console.log('📢 Language hint: Hindi');
  } else {
    ttsUtterance.lang = 'en-US';  // Hint: This is English text
    console.log('📢 Language hint: English');
  }
  
  // OPTIONAL: Try to use better voice if available, but DON'T FORCE
  // (voices already declared above at line 1797)
  console.log('📊 Available voices:', voices.length);
  
  if (voices.length > 0 && detectedLang === 'hi') {
    // Try to find Hindi voice (optional enhancement)
    const hindiVoice = voices.find(voice => 
      voice.lang === 'hi-IN' || 
      (voice.lang && voice.lang.startsWith('hi'))
    );
    
    if (hindiVoice) {
      ttsUtterance.voice = hindiVoice;
      console.log('✅ Using installed Hindi voice:', hindiVoice.name);
    } else {
      // NO HINDI VOICE - Don't force English voice!
      // Leave voice undefined → browser uses multilingual system default
      console.log('ℹ️ No Hindi voice found - using system default (multilingual TTS)');
      console.log('   System will read Hindi reasonably using phonetic rules');
    }
  } else if (voices.length > 0 && detectedLang === 'en') {
    // For English, try to find best English voice
    const englishVoice = voices.find(v => 
      v.lang === 'en-US' || v.lang === 'en-GB' || v.lang === 'en-IN'
    ) || voices.find(v => v.lang && v.lang.startsWith('en'));
    
    if (englishVoice) {
      ttsUtterance.voice = englishVoice;
      console.log('✅ Using English voice:', englishVoice.name);
    }
  }
  
  console.log('🎤 Final TTS settings:');
  console.log('   Voice:', ttsUtterance.voice?.name || 'System Default (Multilingual)');
  console.log('   Language:', ttsUtterance.lang);
  console.log('   Text length:', answerText.length, 'characters');
  
  // ========================================================================
  // KEY: If no specific voice set, browser uses system default
  // System default is multilingual - can read Hindi without voice pack!
  // ========================================================================
  
  // Event handlers
  ttsUtterance.onstart = () => {
    isSpeaking = true;
    ttsBtn.classList.add('speaking');
    ttsLabel.textContent = 'Stop';
  };
  
  ttsUtterance.onend = () => {
    if (!manualStop) {
      isSpeaking = false;
      ttsBtn.classList.remove('speaking');
      ttsLabel.textContent = 'Listen';
    }
  };
  
  ttsUtterance.onerror = (e) => {
    if (manualStop) {
      manualStop = false;
      return;
    }
    
    isSpeaking = false;
    ttsBtn.classList.remove('speaking');
    ttsLabel.textContent = 'Listen';
    
    let errorMsg = 'Speech failed. ';
    if (e.error === 'canceled' || e.error === 'interrupted') {
      return;
    } else if (e.error === 'not-allowed') {
      errorMsg += 'Please enable speech in browser settings.';
    } else if (e.error === 'language-unavailable') {
      errorMsg += 'Voice not available on your device.';
    } else {
      errorMsg += 'Please try again.';
    }
    alert(errorMsg);
  };
  
  try {
    speechSynthesis.speak(ttsUtterance);
  } catch (error) {
    alert('Text-to-speech is not available on your device.');
  }
});
    
// Conversation history to maintain context - make it global
window.conversationHistory = [];

// COMPARISON FEATURE - Smart Contextual Year Selection
// ═══════════════════════════════════════════════════════════════════

// Global variables for comparison feature
let selectedYears = [];
let isComparisonActive = false;
let currentComparisonQuestion = '';

// Function to detect if query is suitable for comparison
function shouldOfferComparison(question, queryType) {
  // Only offer for data queries
  if (queryType !== 'data' && queryType !== 'STATISTICAL_DATA_QUERY') {
    console.log('❌ Not offering comparison - not a data query');
    return false;
  }
  
  // Keywords that suggest comparison might be useful
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

// Show comparison prompt in modal (after answer)
function showComparisonPrompt() {
  console.log('📊 Showing comparison prompt...');
  
  // Check if already exists
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
    
    <div class="year-selection-container" id="yearSelectionBox">
      <div class="year-selection-title">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
        </svg>
        Select Years to Compare (minimum 2)
      </div>
      
      <div class="year-selection-actions">
        <button class="quick-select-btn" id="selectAllYearsBtn">
          Select All Years
        </button>
        <button class="quick-select-btn" id="clearAllYearsBtn">
          Clear All
        </button>
        <button class="quick-select-btn" id="selectLastFiveYearsBtn">
          Last 5 Years
        </button>
      </div>
      
      <div class="year-checkboxes" id="yearCheckboxContainer">
        <!-- Years will be populated here -->
      </div>
      
      <button class="generate-comparison-btn" id="generateComparisonBtn" onclick="generateComparison()" disabled>
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
        <span id="generateBtnText">Select at least 2 years</span>
      </button>
      
      <div class="year-selection-hint">
        💡 Select at least 2 years to generate a comparative analysis with charts and insights
      </div>
    </div>
  `;
  
  // Insert after the answer section in modal
  const modalAnswerSection = document.querySelector('#modalAnswer');
  if (!modalAnswerSection) {
    console.error('❌ modalAnswer element not found!');
    return;
  }
  
  const answerParent = modalAnswerSection.parentElement;
  const promptDiv = document.createElement('div');
  promptDiv.innerHTML = promptHTML;
  
  // Insert after the answer section's parent
  answerParent.parentElement.insertBefore(promptDiv, answerParent.nextSibling);
  
  console.log('✅ Comparison prompt displayed');
  
  // Add event listeners to buttons
  const enableBtn = document.getElementById('enableComparisonBtn');
  const skipBtn = document.getElementById('skipComparisonBtn');
  
  if (enableBtn) {
    enableBtn.addEventListener('click', enableComparison);
  }
  if (skipBtn) {
    skipBtn.addEventListener('click', skipComparison);
  }
  
  // Populate years
  populateYearCheckboxes();
  
  // Add event listeners for year selection buttons after population
  setTimeout(() => {
    const selectAllBtn = document.getElementById('selectAllYearsBtn');
    const clearAllBtn = document.getElementById('clearAllYearsBtn');
    const lastFiveBtn = document.getElementById('selectLastFiveYearsBtn');
    
    if (selectAllBtn) selectAllBtn.addEventListener('click', selectAllYears);
    if (clearAllBtn) clearAllBtn.addEventListener('click', clearAllYears);
    if (lastFiveBtn) lastFiveBtn.addEventListener('click', selectLastFiveYears);
  }, 100);
}

// Enable comparison - show year selection
function enableComparison() {
  console.log('✅ User enabled comparison mode');
  isComparisonActive = true;
  
  // Hide prompt with animation
  const promptBox = document.getElementById('comparisonPromptBox');
  if (promptBox) {
    promptBox.style.transition = 'all 0.3s ease-out';
    promptBox.style.opacity = '0';
    promptBox.style.transform = 'translateY(-10px)';
    
    setTimeout(() => {
      promptBox.style.display = 'none';
    }, 300);
  }
  
  // Get the current response text from modalAnswer
  const modalAnswer = document.getElementById('modalAnswer');
  if (!modalAnswer) {
    console.error('❌ modalAnswer not found');
    alert('Error: Could not find response text');
    return;
  }
  
  const responseText = modalAnswer.innerHTML || modalAnswer.textContent;
  
  console.log('🔍 Searching for Cloudinary files in response...');
  
  // Parse Cloudinary files from response
  const groupedFiles = parseCloudinaryLinksFromResponse(responseText);
  
  if (Object.keys(groupedFiles).length === 0) {
    console.log('⚠️ No Cloudinary files found in response');
    alert('No report files found in the response. Please try a different query or ensure the response contains Cloudinary image links.');
    return;
  }
  
  // Show file selection interface
  showFileSelectionInterface(groupedFiles);
}

// Skip comparison
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

// Populate year checkboxes (2014-2024)
function populateYearCheckboxes() {
  const container = document.getElementById('yearCheckboxContainer');
  if (!container) {
    console.error('❌ yearCheckboxContainer not found');
    return;
  }
  
  const currentYear = new Date().getFullYear();
  const startYear = 2014;
  
  container.innerHTML = '';
  
  console.log(`📅 Populating years from ${currentYear} to ${startYear}`);
  
  for (let year = currentYear; year >= startYear; year--) {
    const wrapper = document.createElement('div');
    wrapper.className = 'year-checkbox-wrapper';
    wrapper.setAttribute('data-year', year);
    
    wrapper.onclick = function() {
      const checkbox = this.querySelector('input[type="checkbox"]');
      checkbox.checked = !checkbox.checked;
      updateYearSelection();
    };
    
    wrapper.innerHTML = `
      <input type="checkbox" id="year_${year}" value="${year}" onclick="event.stopPropagation(); updateYearSelection();">
      <label for="year_${year}">${year}</label>
    `;
    
    container.appendChild(wrapper);
  }
  
  console.log('✅ Year checkboxes populated');
}

// Update year selection and button state
function updateYearSelection() {
  selectedYears = [];
  const checkboxes = document.querySelectorAll('.year-checkboxes input[type="checkbox"]');
  
  checkboxes.forEach(checkbox => {
    const wrapper = checkbox.closest('.year-checkbox-wrapper');
    if (checkbox.checked) {
      selectedYears.push(checkbox.value);
      wrapper.classList.add('selected');
    } else {
      wrapper.classList.remove('selected');
    }
  });
  
  // Update button state
  const generateBtn = document.getElementById('generateComparisonBtn');
  const btnText = document.getElementById('generateBtnText');
  
  if (!generateBtn || !btnText) return;
  
  if (selectedYears.length >= 2) {
    generateBtn.disabled = false;
    btnText.textContent = `Generate Report for ${selectedYears.length} Years`;
  } else if (selectedYears.length === 1) {
    generateBtn.disabled = true;
    btnText.textContent = 'Select at least 1 more year';
  } else {
    generateBtn.disabled = true;
    btnText.textContent = 'Select at least 2 years';
  }
  
  console.log('📊 Selected years:', selectedYears);
}

// Quick selection functions
function selectAllYears() {
  const checkboxes = document.querySelectorAll('.year-checkboxes input[type="checkbox"]');
  checkboxes.forEach(cb => cb.checked = true);
  updateYearSelection();
  console.log('✅ All years selected');
}

function clearAllYears() {
  const checkboxes = document.querySelectorAll('.year-checkboxes input[type="checkbox"]');
  checkboxes.forEach(cb => cb.checked = false);
  updateYearSelection();
  console.log('✅ All years cleared');
}

function selectLastFiveYears() {
  clearAllYears();
  const checkboxes = document.querySelectorAll('.year-checkboxes input[type="checkbox"]');
  for (let i = 0; i < Math.min(5, checkboxes.length); i++) {
    checkboxes[i].checked = true;
  }
  updateYearSelection();
  console.log('✅ Last 5 years selected');
}

// Generate comparison report - NEW VERSION with Image Upload
function generateComparison() {
  if (selectedYears.length < 2) {
    alert('Please select at least 2 years for comparison');
    return;
  }
  
  console.log('📸 Generating comparison - showing image upload interface');
  console.log('   Selected years:', selectedYears);
  console.log('   Question:', currentComparisonQuestion);
  
  // Show image upload interface
  showImageUploadInterface();
}

// ═══════════════════════════════════════════════════════════════════
// IMAGE UPLOAD FUNCTIONALITY - Step 2 Phase 1
// ═══════════════════════════════════════════════════════════════════

// Global variables for image upload
let uploadedImages = [];
const MAX_IMAGES = 10;
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];

// Show image upload interface
function showImageUploadInterface() {
  console.log('📸 Showing image upload interface');
  
  // Hide year selection
  const yearSelection = document.getElementById('yearSelectionBox');
  if (yearSelection) {
    yearSelection.style.display = 'none';
  }
  
  // Check if upload container already exists
  let uploadContainer = document.getElementById('imageUploadContainer');
  
  if (!uploadContainer) {
    // Create upload interface HTML
    const uploadHTML = `
      <div class="image-upload-container visible" id="imageUploadContainer">
        <div class="image-upload-title">
          <svg style="width: 24px; height: 24px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
          Upload Report Images
        </div>
        
        <div class="selected-years-display">
          <strong>Selected Years:</strong> <span id="displaySelectedYears">${selectedYears.join(', ')}</span>
        </div>
        
        <div class="upload-dropzone" id="uploadDropzone" onclick="document.getElementById('imageFileInput').click()">
          <div class="upload-icon">📁</div>
          <div class="upload-text">Click to Upload Images</div>
          <div class="upload-subtext">or Drag & Drop Here</div>
          <div class="upload-specs">Supported: JPG, PNG, PDF | Max 10 images, 5MB each</div>
        </div>
        
        <input type="file" id="imageFileInput" accept="image/jpeg,image/jpg,image/png,application/pdf" 
               multiple onchange="handleFileSelect(event)">
        
        <div class="uploaded-images-section" id="uploadedImagesSection">
          <div class="uploaded-images-header">
            Uploaded Images (<span id="imageCount">0</span>):
          </div>
          <div class="images-grid" id="imagesGrid"></div>
          
          <div class="upload-actions">
            <button class="upload-action-btn upload-more-btn" onclick="document.getElementById('imageFileInput').click()">
              <svg style="width: 20px; height: 20px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
              </svg>
              Upload More
            </button>
            <button class="upload-action-btn clear-all-btn" id="clearAllImagesBtn">
              <svg style="width: 20px; height: 20px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
              </svg>
              Clear All
            </button>
            <button class="upload-action-btn process-images-btn" id="processImagesBtn" 
                    id="processImagesBtnClick" disabled>
              <svg style="width: 20px; height: 20px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span id="processButtonText">Process Images (0)</span>
            </button>
          </div>
          
          <div class="upload-hint">
            💡 Upload statistical report pages for the years you selected. The AI will extract and compare data automatically.
          </div>
        </div>
      </div>
    `;
    
    // Insert after year selection
    const yearSelectionParent = yearSelection.parentElement;
    const uploadDiv = document.createElement('div');
    uploadDiv.innerHTML = uploadHTML;
    yearSelectionParent.appendChild(uploadDiv);
    
    // Initialize drag & drop
    initializeDragAndDrop();
    
    // Add event listeners for upload buttons
    setTimeout(() => {
      const clearAllBtn = document.getElementById('clearAllImagesBtn');
      const processBtn = document.getElementById('processImagesBtnClick');
      
      if (clearAllBtn) {
        clearAllBtn.addEventListener('click', clearAllImages);
      }
      if (processBtn) {
        processBtn.addEventListener('click', processImagesAndGenerate);
      }
    }, 100);
  } else {
    uploadContainer.classList.add('visible');
  }
  
  console.log('✅ Image upload interface displayed');
}

// Initialize drag and drop
function initializeDragAndDrop() {
  const dropzone = document.getElementById('uploadDropzone');
  
  if (!dropzone) return;
  
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, preventDefaults, false);
  });
  
  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  
  ['dragenter', 'dragover'].forEach(eventName => {
    dropzone.addEventListener(eventName, () => {
      dropzone.classList.add('dragover');
    }, false);
  });
  
  ['dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, () => {
      dropzone.classList.remove('dragover');
    }, false);
  });
  
  dropzone.addEventListener('drop', handleDrop, false);
  
  console.log('✅ Drag and drop initialized');
}

// Handle drag and drop
function handleDrop(e) {
  const dt = e.dataTransfer;
  const files = dt.files;
  handleFiles(files);
}

// Handle file selection
function handleFileSelect(event) {
  const files = event.target.files;
  handleFiles(files);
}

// Handle files
function handleFiles(files) {
  console.log(`📁 Processing ${files.length} file(s)`);
  
  const validFiles = [];
  const errors = [];
  
  // Check total count
  if (uploadedImages.length + files.length > MAX_IMAGES) {
    alert(`⚠️ Maximum ${MAX_IMAGES} images allowed. You have ${uploadedImages.length} images. Can only add ${MAX_IMAGES - uploadedImages.length} more.`);
    return;
  }
  
  // Validate each file
  for (let file of files) {
    // Check file type
    if (!ALLOWED_TYPES.includes(file.type)) {
      errors.push(`${file.name}: Invalid file type. Only JPG, PNG, PDF allowed.`);
      continue;
    }
    
    // Check file size
    if (file.size > MAX_FILE_SIZE) {
      errors.push(`${file.name}: File too large. Max 5MB allowed.`);
      continue;
    }
    
    validFiles.push(file);
  }
  
  // Show errors if any
  if (errors.length > 0) {
    alert('⚠️ Some files were rejected:\n\n' + errors.join('\n'));
  }
  
  // Add valid files
  validFiles.forEach(file => addImageToList(file));
  
  // Update UI
  updateImagesList();
}

// Add image to list
function addImageToList(file) {
  const reader = new FileReader();
  
  reader.onload = function(e) {
    const imageData = {
      file: file,
      name: file.name,
      size: file.size,
      type: file.type,
      dataUrl: e.target.result,
      id: Date.now() + Math.random()
    };
    
    uploadedImages.push(imageData);
    updateImagesList();
    
    console.log(`✅ Added image: ${file.name} (${formatFileSize(file.size)})`);
  };
  
  reader.readAsDataURL(file);
}

// Update images list display
function updateImagesList() {
  const imagesSection = document.getElementById('uploadedImagesSection');
  const imagesGrid = document.getElementById('imagesGrid');
  const imageCount = document.getElementById('imageCount');
  const processBtn = document.getElementById('processImagesBtn');
  const processBtnText = document.getElementById('processButtonText');
  
  if (!imagesSection || !imagesGrid) return;
  
  // Update count
  if (imageCount) {
    imageCount.textContent = uploadedImages.length;
  }
  
  // Show/hide section
  if (uploadedImages.length > 0) {
    imagesSection.classList.add('visible');
  } else {
    imagesSection.classList.remove('visible');
  }
  
  // Clear grid
  imagesGrid.innerHTML = '';
  
  // Add image cards
  uploadedImages.forEach((img, index) => {
    const card = document.createElement('div');
    card.className = 'image-preview-card';
    card.innerHTML = `
      ${img.type === 'application/pdf' ? 
        `<div style="display: flex; align-items: center; justify-content: center; height: 100%; background: #fef3c7;">
          <svg style="width: 60px; height: 60px; color: #eab308;" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd"/>
          </svg>
        </div>` 
        : 
        `<img src="${img.dataUrl}" alt="${img.name}">`
      }
      <div class="image-preview-overlay">
        <div>
          <div class="image-number">Image ${index + 1}</div>
          <div class="image-size">${formatFileSize(img.size)}</div>
        </div>
      </div>
      <button class="remove-image-btn" data-index="${index}" title="Remove">
        ×
      </button>
    `;
    
    // Add event listener to remove button
    const removeBtn = card.querySelector('.remove-image-btn');
    if (removeBtn) {
      removeBtn.addEventListener('click', function() {
        const idx = parseInt(this.getAttribute('data-index'));
        removeImage(idx);
      });
    }
    
    imagesGrid.appendChild(card);
  });
  
  // Update process button
  if (processBtn && processBtnText) {
    if (uploadedImages.length > 0) {
      processBtn.disabled = false;
      processBtnText.textContent = `Process Images (${uploadedImages.length})`;
    } else {
      processBtn.disabled = true;
      processBtnText.textContent = 'Process Images (0)';
    }
  }
  
  console.log(`📊 Updated images list: ${uploadedImages.length} images`);
}

// Remove image
function removeImage(index) {
  console.log(`🗑️ Removing image ${index + 1}`);
  uploadedImages.splice(index, 1);
  updateImagesList();
}

// Clear all images
function clearAllImages() {
  if (uploadedImages.length === 0) return;
  
  if (confirm(`Are you sure you want to remove all ${uploadedImages.length} images?`)) {
    uploadedImages = [];
    updateImagesList();
    console.log('✅ All images cleared');
  }
}

// Format file size
function formatFileSize(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

// Process images and generate report (Step 2 Phase 2 placeholder)
function processImagesAndGenerate() {
  if (uploadedImages.length === 0) {
    alert('Please upload at least one image');
    return;
  }
  
  console.log('🚀 Processing images and generating report...');
  console.log(`   Years: ${selectedYears.join(', ')}`);
  console.log(`   Images: ${uploadedImages.length}`);
  console.log(`   Question: ${currentComparisonQuestion}`);
  
  // Show processing overlay
  showProcessingOverlay();
  
  // TODO: Phase 2 - Send to n8n workflow
  // For now, simulate processing
  setTimeout(() => {
    hideProcessingOverlay();
    
    alert(`✅ PHASE 1 COMPLETE!\n\n` +
          `Years Selected: ${selectedYears.join(', ')}\n` +
          `Images Uploaded: ${uploadedImages.length}\n` +
          `Question: ${currentComparisonQuestion}\n\n` +
          `Next Phase (Phase 2):\n` +
          `• Send images to n8n workflow\n` +
          `• AI vision extracts data from images\n` +
          `• Generate analytical comparison report\n` +
          `• Display charts and insights`);
  }, 3000);
}

// Show processing overlay
function showProcessingOverlay() {
  let overlay = document.getElementById('processingOverlay');
  
  if (!overlay) {
    const overlayHTML = `
      <div class="processing-overlay" id="processingOverlay">
        <div class="processing-content">
          <div class="processing-spinner"></div>
          <div class="processing-title">Processing Images...</div>
          <div class="processing-text">Extracting data from images</div>
          <div class="processing-text">Analyzing statistical information</div>
          <div class="processing-progress" id="processingProgress">Step 1 of 3</div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', overlayHTML);
    overlay = document.getElementById('processingOverlay');
  }
  
  overlay.classList.add('visible');
}

// Hide processing overlay
function hideProcessingOverlay() {
  const overlay = document.getElementById('processingOverlay');
  if (overlay) {
    overlay.classList.remove('visible');
  }
}

console.log('✅ Image upload functionality loaded');
// ═══════════════════════════════════════════════════════════════════
// PHASE 2A REVISED: CHECKBOX FILE SELECTION FROM SEARCH RESULTS
// ═══════════════════════════════════════════════════════════════════

// Global variable to store parsed files from response
let parsedCloudinaryFiles = [];

// Parse Cloudinary URLs from response text
function parseCloudinaryLinksFromResponse(responseText) {
  console.log('🔍 Parsing Cloudinary links from response...');
  
  // First, try to find year headers in the response (like "**1967-68**" or "1967-68" before file links)
  const yearHeaderRegex = /\*{0,2}(\d{4}-\d{2}|\d{2}-\d{2})\*{0,2}\s*\(\d+\s+files?\)/gi;
  
  // Find all Cloudinary URLs
  const cloudinaryRegex = /https:\/\/res\.cloudinary\.com\/[^\/]+\/image\/upload\/([^"\s<>]+\.(?:jpg|jpeg|png|pdf))/gi;
  
  const matches = [];
  
  // Try to match years from context in response
  const lines = responseText.split(/\n|<br>/);
  let currentYear = 'Unknown';
  
  for (const line of lines) {
    // Check if this line contains a year header
    const yearHeaderMatch = line.match(/\*{0,2}(\d{4}-\d{2}|\d{2}-\d{2})\*{0,2}\s*\(\d+\s+files?\)/i);
    if (yearHeaderMatch) {
      currentYear = yearHeaderMatch[1];
      // Normalize year format (if "67-68" convert to "1967-68")
      if (currentYear.length === 5 && currentYear.includes('-')) {
        const parts = currentYear.split('-');
        if (parts[0].length === 2) {
          currentYear = '19' + parts[0] + '-' + parts[1];
        }
      }
      console.log('📅 Found year header:', currentYear);
    }
    
    // Check if this line contains Cloudinary URLs
    let urlMatch;
    const lineRegex = /https:\/\/res\.cloudinary\.com\/[^\/]+\/image\/upload\/([^"\s<>]+\.(?:jpg|jpeg|png|pdf))/gi;
    while ((urlMatch = lineRegex.exec(line)) !== null) {
      const fullUrl = urlMatch[0];
      const path = urlMatch[1];
      
      // Try to extract year from URL path first
      const urlYearMatch = path.match(/(\d{4}-\d{2})/);
      const year = urlYearMatch ? urlYearMatch[1] : currentYear;
      
      // Extract filename
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
  
  // Fallback: if no context-based year found, try to parse entire response
  if (matches.length === 0) {
    console.log('⚠️ No files found with context, trying global search...');
    let match;
    while ((match = cloudinaryRegex.exec(responseText)) !== null) {
      const fullUrl = match[0];
      const path = match[1];
      
      // Extract year pattern from URL
      const yearMatch = path.match(/(\d{4}-\d{2})/);
      const year = yearMatch ? yearMatch[1] : 'Unknown';
      
      // Extract filename
      const filename = path.split('/').pop();
      
      matches.push({
        url: fullUrl,
        year: year,
        filename: filename,
        path: path
      });
    }
  }
  
  // Group by year
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

// Show file selection interface with checkboxes
function showFileSelectionInterface(groupedFiles) {
  console.log('📋 Showing file selection interface');
  
  if (Object.keys(groupedFiles).length === 0) {
    alert('No Cloudinary files found in the response. Please try a different query.');
    return;
  }
  
  // Sort years in descending order
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
                 onchange="toggleYearFiles('${yearId}', this.checked)">
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
        <h3 class="selection-title">
          📸 Select Years to Compare
        </h3>
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
        <button class="action-btn secondary-btn" onclick="cancelFileSelection()">
          Cancel
        </button>
        <button class="action-btn secondary-btn" onclick="selectAllYears()">
          Select All Years
        </button>
      </div>
      
      <div class="dual-action-container" id="dualActionContainer" style="display: none;">
        <div class="action-method-header">
          Choose how to analyze:
        </div>
        
        <div class="action-methods">
          <button class="method-btn groq-method-btn" id="groqAnalyzeBtn" onclick="analyzeWithGroq()">
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
          
          <button class="method-btn copypaste-method-btn" id="copyPasteBtn" onclick="showCopyPasteOption()">
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
  
  // Hide any existing comparison prompts
  const existingPrompts = document.querySelectorAll('.comparison-prompt-container, .year-selection-container, .comparison-confirmation');
  existingPrompts.forEach(el => el.style.display = 'none');
  
  // Insert file selection interface
  const modalAnswer = document.getElementById('modalAnswer');
  if (modalAnswer && modalAnswer.parentElement) {
    const selectionDiv = document.createElement('div');
    selectionDiv.innerHTML = selectionHTML;
    modalAnswer.parentElement.appendChild(selectionDiv);
  }
  
  updateSelectionCount();
}

// Toggle all files in a year
function toggleYearFiles(yearId, checked) {
  const checkboxes = document.querySelectorAll(`.year-${yearId}`);
  console.log(`📋 Toggling ${checkboxes.length} files for year ${yearId} to ${checked}`);
  checkboxes.forEach(cb => {
    cb.checked = checked;
  });
  // Force update after a brief delay to ensure DOM is updated
  setTimeout(() => {
    updateSelectionCount();
  }, 10);
}

// Make it globally accessible
window.toggleYearFiles = toggleYearFiles;

// Update selection count and button state
function updateSelectionCount() {
  // Get all YEAR checkboxes that are checked
  const checkedYearBoxes = document.querySelectorAll('.year-checkbox:checked');
  const yearsCount = checkedYearBoxes.length;
  
  // Count total files from checked years
  let totalFiles = 0;
  const uniqueYears = new Set();
  
  checkedYearBoxes.forEach(yearCheckbox => {
    // Get the yearId from the checkbox ID (e.g., "year_1989_90_all" → "1989_90")
    const yearId = yearCheckbox.id.replace('year_', '').replace('_all', '');
    
    // Find all file checkboxes for this year and ensure they're checked
    const fileCheckboxes = document.querySelectorAll(`.year-${yearId}`);
    fileCheckboxes.forEach(cb => {
      cb.checked = true;
      const year = cb.getAttribute('data-year');
      if (year && year !== 'Unknown') {
        uniqueYears.add(year);
      }
    });
    
    totalFiles += fileCheckboxes.length;
  });
  
  console.log(`📊 Update count: ${yearsCount} years checked, ${totalFiles} total files`);
  console.log(`📅 Unique years:`, Array.from(uniqueYears));
  
  // Update stats
  const countElement = document.getElementById('selectedCount');
  const yearsElement = document.getElementById('yearsCount');
  const dualActionContainer = document.getElementById('dualActionContainer');
  
  if (countElement) {
    countElement.textContent = totalFiles;
    console.log(`✅ Updated count element to: ${totalFiles}`);
  }
  if (yearsElement) {
    yearsElement.textContent = yearsCount;
    console.log(`✅ Updated years element to: ${yearsCount}`);
  }
  
  // Show/hide dual action buttons
  if (dualActionContainer) {
    if (totalFiles >= 2 && yearsCount >= 2) {
      dualActionContainer.style.display = 'block';
      console.log(`✅ Dual action buttons shown`);
    } else {
      dualActionContainer.style.display = 'none';
    }
  }
}

// Make it globally accessible
window.updateSelectionCount = updateSelectionCount;

// Select all files
function selectAllFiles() {
  const checkboxes = document.querySelectorAll('.file-checkbox');
  checkboxes.forEach(cb => cb.checked = true);
  
  const yearCheckboxes = document.querySelectorAll('.year-checkbox');
  yearCheckboxes.forEach(cb => cb.checked = true);
  
  updateSelectionCount();
  console.log('✅ All files selected');
}

// Alias for selectAllFiles (same function, clearer name)
function selectAllYears() {
  selectAllFiles();
  console.log('✅ All years selected');
}

// Make functions globally accessible
window.selectAllFiles = selectAllFiles;
window.selectAllYears = selectAllYears;

// Cancel file selection
function cancelFileSelection() {
  const container = document.getElementById('fileSelectionContainer');
  if (container) {
    container.remove();
  }
  console.log('❌ File selection cancelled');
}

// Make it globally accessible
window.cancelFileSelection = cancelFileSelection;

// Compare selected files
// Show copy-paste option (renamed from compareSelectedFiles)
async function showCopyPasteOption() {
  const checkedFiles = document.querySelectorAll('.file-checkbox:checked');
  
  if (checkedFiles.length < 2) {
    alert('Please select at least 2 files to compare');
    return;
  }
  
  // Group selected files by year
  const filesByYear = {};
  const yearCheckboxes = document.querySelectorAll('.year-checkbox:checked');
  
  yearCheckboxes.forEach(yearCheckbox => {
    const yearId = yearCheckbox.id.replace('year_', '').replace('_all', '');
    const fileCheckboxes = document.querySelectorAll(`.year-${yearId}`);
    
    fileCheckboxes.forEach(cb => {
      const year = cb.getAttribute('data-year');
      const url = cb.getAttribute('data-url');
      const filename = cb.getAttribute('data-filename');
      
      if (!filesByYear[year]) {
        filesByYear[year] = [];
      }
      
      filesByYear[year].push({
        url: url,
        filename: filename
      });
    });
  });
  
  console.log('📋 Generating prompt for:', filesByYear);
  
  // Generate prompt and show copy interface
  showCopyPasteInterface(filesByYear);
}

// Generate and show copy-paste prompt interface
function showCopyPasteInterface(filesByYear) {
  const years = Object.keys(filesByYear).sort().reverse();
  const question = currentComparisonQuestion || 'Compare the statistical data across these years';
  
  // Build the prompt
  let prompt = `I need help analyzing and comparing Haryana Statistical Abstract data across multiple years.\n\n`;
  prompt += `Question: ${question}\n\n`;
  prompt += `Please analyze the following report images and provide a comprehensive comparison:\n\n`;
  
  years.forEach((year, index) => {
    const files = filesByYear[year];
    prompt += `**Year ${year}** (${files.length} page${files.length > 1 ? 's' : ''}):\n`;
    files.forEach((file, fileIndex) => {
      prompt += `${fileIndex + 1}. ${file.url}\n`;
    });
    prompt += `\n`;
  });
  
  prompt += `Please:\n`;
  prompt += `1. Extract all numerical data, statistics, and key metrics from each year\n`;
  prompt += `2. Compare the data across all ${years.length} years\n`;
  prompt += `3. Identify trends, growth rates, and significant changes\n`;
  prompt += `4. Provide insights and analysis\n`;
  prompt += `5. Present the comparison in a clear, structured format\n\n`;
  prompt += `Note: The images are pages from official Haryana Statistical Abstract reports. Please analyze them carefully and extract accurate data.`;
  
  console.log('✅ Prompt generated');
  
  // Build the interface HTML
  const interfaceHTML = `
    <div class="copy-paste-container" id="copyPasteContainer">
      <div class="copy-paste-header">
        <h3 class="copy-paste-title">
          📋 Ready to Analyze with AI
        </h3>
        <div class="copy-paste-subtitle">
          Copy the prompt below and paste it into ChatGPT or Claude along with the image links
        </div>
      </div>
      
      <div class="copy-paste-stats">
        <span class="stat-badge">
          📅 ${years.length} Year${years.length > 1 ? 's' : ''}
        </span>
        <span class="stat-badge">
          📄 ${Object.values(filesByYear).reduce((sum, files) => sum + files.length, 0)} Image${Object.values(filesByYear).reduce((sum, files) => sum + files.length, 0) > 1 ? 's' : ''}
        </span>
      </div>
      
      <div class="prompt-preview-container">
        <div class="prompt-preview-header">
          <span>📝 Prompt Preview</span>
          <button class="copy-btn-small" onclick="copyPromptToClipboard()" title="Copy prompt">
            📋 Copy
          </button>
        </div>
        <div class="prompt-preview" id="promptPreview">${prompt.replace(/\n/g, '<br>')}</div>
      </div>
      
      <div class="copy-paste-actions">
        <button class="action-btn secondary-btn" onclick="closeCopyPasteInterface()">
          ← Back
        </button>
        <button class="action-btn primary-btn" onclick="copyPromptToClipboard()">
          📋 Copy Prompt to Clipboard
        </button>
      </div>
      
      <div class="ai-links-container">
        <div class="ai-links-header">
          Then paste in your preferred AI:
        </div>
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
        <div class="tip-box">
          💡 <strong>Tip:</strong> ChatGPT can directly access images from URLs! Just paste the prompt with the links.
        </div>
      </div>
    </div>
  `;
  
  // Hide file selection interface
  const fileSelectionContainer = document.getElementById('fileSelectionContainer');
  if (fileSelectionContainer) {
    fileSelectionContainer.style.display = 'none';
  }
  
  // Insert copy-paste interface
  const modalAnswer = document.getElementById('modalAnswer');
  if (modalAnswer && modalAnswer.parentElement) {
    const copyPasteDiv = document.createElement('div');
    copyPasteDiv.innerHTML = interfaceHTML;
    modalAnswer.parentElement.appendChild(copyPasteDiv);
  }
  
  // Store prompt globally for copying
  window.generatedPrompt = prompt;
  
  console.log('✅ Copy-paste interface displayed');
}

// Copy prompt to clipboard
function copyPromptToClipboard() {
  const prompt = window.generatedPrompt;
  
  if (!prompt) {
    alert('No prompt to copy!');
    return;
  }
  
  // Copy to clipboard
  navigator.clipboard.writeText(prompt).then(() => {
    console.log('✅ Prompt copied to clipboard');
    
    // Show success feedback
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
    
    // Also show a toast notification
    showToast('📋 Prompt copied! Now paste it in your preferred AI.', 'success');
  }).catch(err => {
    console.error('❌ Failed to copy:', err);
    
    // Fallback: select text
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

// Close copy-paste interface
function closeCopyPasteInterface() {
  const container = document.getElementById('copyPasteContainer');
  if (container) {
    container.remove();
  }
  
  // Show file selection again
  const fileSelectionContainer = document.getElementById('fileSelectionContainer');
  if (fileSelectionContainer) {
    fileSelectionContainer.style.display = 'block';
  }
  
  console.log('❌ Copy-paste interface closed');
}

// Show toast notification
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: ${type === 'success' ? '#10b981' : '#3b82f6'};
    color: white;
    padding: 15px 25px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    z-index: 10000;
    font-size: 14px;
    font-weight: 500;
    animation: slideIn 0.3s ease-out;
  `;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Make functions globally accessible
window.copyPromptToClipboard = copyPromptToClipboard;
window.closeCopyPasteInterface = closeCopyPasteInterface;

// Make it globally accessible
window.showCopyPasteOption = showCopyPasteOption;

// ═══════════════════════════════════════════════════════════════════
// GROQ DIRECT API ANALYSIS
// ═══════════════════════════════════════════════════════════════════

// Groq API Configuration
const GROQ_API_KEY = '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'; // Replace with your key from console.groq.com
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_MODEL = 'llama-3.2-11b-vision-preview';

// Analyze with Groq AI (direct API call)
async function analyzeWithGroq() {
  console.log('🚀 Starting n8n + Groq analysis...');
  
  // Get selected files
  const yearCheckboxes = document.querySelectorAll('.year-checkbox:checked');
  
  if (yearCheckboxes.length < 2) {
    alert('Please select at least 2 years to compare');
    return;
  }
  
  // Group files by year
  const filesByYear = {};
  yearCheckboxes.forEach(yearCheckbox => {
    const yearId = yearCheckbox.id.replace('year_', '').replace('_all', '');
    const fileCheckboxes = document.querySelectorAll(`.year-${yearId}`);
    
    fileCheckboxes.forEach(cb => {
      const year = cb.getAttribute('data-year');
      const url = cb.getAttribute('data-url');
      const filename = cb.getAttribute('data-filename');
      
      if (!filesByYear[year]) {
        filesByYear[year] = [];
      }
      
      filesByYear[year].push({ url, filename });
    });
  });
  
  const years = Object.keys(filesByYear).sort().reverse();
  console.log('📊 Files to analyze:', filesByYear);
  
  // Prepare payload for n8n
  const payload = {
    question: currentComparisonQuestion || 'Compare the statistical data across these years',
    filesByYear: filesByYear,
    years: years,
    language: selectedLanguage || 'English'
  };
  
  console.log('📤 Sending to n8n workflow:', payload);
  
  // Show processing overlay
  showGroqProcessingOverlay();
  updateGroqProgress('Sending to n8n workflow...', 1, 3);
  
  try {
    const response = await fetch('https://n8n-workflow-test.duckdns.org/webhook/haryana-comparison', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });
    
    updateGroqProgress('Processing with Groq AI...', 2, 3);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // Get response
    const responseText = await response.text();
    console.log('📥 Raw n8n response:', responseText);
    
    let data;
    try {
      data = JSON.parse(responseText);
      console.log('✅ Parsed response:', data);
    } catch (parseError) {
      console.error('❌ JSON parse error:', parseError);
      throw new Error(`Invalid JSON from n8n: ${responseText.substring(0, 200)}`);
    }
    
    updateGroqProgress('Rendering report...', 3, 3);
    
    // Hide processing overlay
    hideGroqProcessingOverlay();
    
    // Display the report using our new display function
    console.log('Calling displayComparisonReport with data:', data);
    displayComparisonReport(data);
    
    console.log('✅ Analysis complete!');
    
  } catch (error) {
    console.error('❌ n8n workflow error:', error);
    hideGroqProcessingOverlay();
    
    let errorMessage = error.message;
    if (error.message.includes('Failed to fetch')) {
      errorMessage = 'Cannot connect to n8n webhook. Please check:\n1. n8n workflow is active\n2. Webhook URL is correct\n3. Internet connection is working';
    } else if (error.message.includes('Invalid JSON')) {
      errorMessage = `n8n returned invalid response:\n${error.message}`;
    }
    
    alert(`Analysis failed: ${errorMessage}`);
    
    // Show file selection again
    const fileSelectionContainer = document.getElementById('fileSelectionContainer');
    if (fileSelectionContainer) {
      fileSelectionContainer.style.display = 'block';
    }
  }
}

// Analyze a single year with Groq
async function analyzeYearWithGroq(year, files) {
  const question = currentComparisonQuestion || 'Statistical data analysis';
  
  // Build image content array
  const imageContent = files.map(file => ({
    type: "image_url",
    image_url: { url: file.url }
  }));
  
  // Build Groq request
  const requestBody = {
    model: GROQ_MODEL,
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
  
  console.log(`🔄 Calling Groq API for ${year}...`);
  
  // Call Groq API
  const response = await fetch(GROQ_API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${GROQ_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  });
  
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Groq API error: ${response.status} - ${errorText}`);
  }
  
  const data = await response.json();
  
  // Parse response
  let extractedData;
  try {
    let content = data.choices[0].message.content.trim();
    
    // Remove markdown code blocks if present
    content = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    
    extractedData = JSON.parse(content);
    console.log(`✅ Successfully parsed data for ${year}`);
    
  } catch (error) {
    console.error(`❌ Error parsing JSON for ${year}:`, error);
    
    // Fallback
    extractedData = {
      year: year,
      error: 'Failed to parse extracted data',
      raw_content: data.choices[0].message.content,
      categories: []
    };
  }
  
  return extractedData;
}

// Generate comparison report
function generateComparisonReport(yearDataResults, years) {
  console.log('📊 Generating comparison report...');
  
  // Build HTML report
  let html = `
    <div class="groq-report-container">
      <div class="groq-report-header">
        <h2 class="groq-report-title">
          📊 Statistical Comparison Analysis
        </h2>
        <div class="groq-report-subtitle">
          AI-Powered Analysis by Groq Llama 3.2 Vision
        </div>
      </div>
      
      <div class="groq-years-badge">
        <span class="years-analyzed">Years Analyzed: ${years.join(' • ')}</span>
      </div>
  `;
  
  // Add each year's data
  yearDataResults.forEach((yearData, index) => {
    const year = yearData.year;
    const isEven = index % 2 === 0;
    
    html += `
      <div class="groq-year-section ${isEven ? 'year-even' : 'year-odd'}">
        <div class="year-section-header">
          <h3 class="year-title">📈 Year ${year}</h3>
        </div>
    `;
    
    if (yearData.summary) {
      html += `
        <div class="year-summary">
          <strong>Summary:</strong> ${yearData.summary}
        </div>
      `;
    }
    
    // Key metrics
    if (yearData.keyMetrics && yearData.keyMetrics.length > 0) {
      html += `
        <div class="key-metrics-grid">
      `;
      
      yearData.keyMetrics.forEach(metric => {
        html += `
          <div class="metric-card">
            <div class="metric-label">${metric.metric}</div>
            <div class="metric-value">${metric.value.toLocaleString()} ${metric.unit || ''}</div>
          </div>
        `;
      });
      
      html += `</div>`;
    }
    
    // Categories
    if (yearData.categories && yearData.categories.length > 0) {
      html += `<div class="categories-container">`;
      
      yearData.categories.forEach(category => {
        html += `
          <div class="category-block">
            <h4 class="category-name">${category.name}</h4>
        `;
        
        if (category.subcategories && category.subcategories.length > 0) {
          html += `<div class="subcategories-list">`;
          
          category.subcategories.forEach(sub => {
            html += `
              <div class="subcategory-item">
                <span class="subcategory-name">${sub.name}:</span>
                <span class="subcategory-value">${typeof sub.value === 'number' ? sub.value.toLocaleString() : sub.value} ${sub.unit || ''}</span>
              </div>
            `;
          });
          
          html += `</div>`;
        }
        
        if (category.total) {
          html += `
            <div class="category-total">
              <strong>Total:</strong> ${category.total.toLocaleString()}
            </div>
          `;
        }
        
        html += `</div>`;
      });
      
      html += `</div>`;
    }
    
    html += `</div>`;
  });
  
  // Add insights section
  html += `
    <div class="groq-insights-section">
      <h3 class="insights-title">💡 Key Insights</h3>
      <div class="insights-content">
        <ul class="insights-list">
          <li>Successfully analyzed ${years.length} years of statistical data</li>
          <li>Extracted ${yearDataResults.reduce((sum, d) => sum + (d.categories?.length || 0), 0)} total categories</li>
          <li>Data spans fiscal years: ${years[years.length - 1]} to ${years[0]}</li>
          <li>Comparison enables trend analysis and growth rate calculations</li>
        </ul>
      </div>
    </div>
    
    <div class="groq-report-footer">
      <div class="footer-timestamp">
        Generated on ${new Date().toLocaleString()}
      </div>
      <div class="footer-powered">
        Powered by <strong>Groq Llama 3.2 Vision</strong> 🚀
      </div>
    </div>
  </div>
  `;
  
  return {
    html: html,
    yearData: yearDataResults,
    years: years
  };
}

// Show Groq processing overlay
function showGroqProcessingOverlay() {
  const overlay = document.createElement('div');
  overlay.id = 'groqProcessingOverlay';
  overlay.className = 'groq-processing-overlay';
  overlay.innerHTML = `
    <div class="groq-processing-card">
      <div class="groq-processing-icon">🤖</div>
      <h3 class="groq-processing-title">Analyzing with Groq AI...</h3>
      <div class="groq-progress-text" id="groqProgressText">Preparing analysis...</div>
      <div class="groq-progress-bar">
        <div class="groq-progress-fill" id="groqProgressFill"></div>
      </div>
      <div class="groq-processing-note">
        This may take 10-30 seconds depending on the number of images
      </div>
    </div>
  `;
  
  document.body.appendChild(overlay);
}

// Update Groq progress
function updateGroqProgress(text, current, total) {
  const progressText = document.getElementById('groqProgressText');
  const progressFill = document.getElementById('groqProgressFill');
  
  if (progressText) {
    progressText.textContent = text;
  }
  
  if (progressFill) {
    const percentage = (current / total) * 100;
    progressFill.style.width = `${percentage}%`;
  }
}

// Hide Groq processing overlay
function hideGroqProcessingOverlay() {
  const overlay = document.getElementById('groqProcessingOverlay');
  if (overlay) {
    overlay.remove();
  }
}

// Show Groq report
function showGroqReport(report) {
  // Hide file selection interface
  const fileSelectionContainer = document.getElementById('fileSelectionContainer');
  if (fileSelectionContainer) {
    fileSelectionContainer.style.display = 'none';
  }
  
  // Create report container
  const reportDiv = document.createElement('div');
  reportDiv.id = 'groqReportContainer';
  reportDiv.innerHTML = `
    ${report.html}
    <div class="groq-report-actions">
      <button class="action-btn secondary-btn" onclick="closeGroqReport()">
        ← Back to Selection
      </button>
      <button class="action-btn primary-btn" onclick="exportGroqReport()">
        📥 Export Report
      </button>
    </div>
  `;
  
  // Insert into modal
  const modalAnswer = document.getElementById('modalAnswer');
  if (modalAnswer && modalAnswer.parentElement) {
    modalAnswer.parentElement.appendChild(reportDiv);
  }
  
  // Store report data
  window.currentGroqReport = report;
  
  console.log('✅ Report displayed');
}

// Close Groq report
function closeGroqReport() {
  const reportContainer = document.getElementById('groqReportContainer');
  if (reportContainer) {
    reportContainer.remove();
  }
  
  // Show file selection again
  const fileSelectionContainer = document.getElementById('fileSelectionContainer');
  if (fileSelectionContainer) {
    fileSelectionContainer.style.display = 'block';
  }
}

// Export Groq report
function exportGroqReport() {
  const report = window.currentGroqReport;
  if (!report) {
    alert('No report to export');
    return;
  }
  
  // Create full HTML document
  const fullHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Statistical Comparison Report - ${new Date().toLocaleDateString()}</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      background: #f9fafb;
    }
    ${document.querySelector('style').textContent}
  </style>
</head>
<body>
  ${report.html}
</body>
</html>
  `;
  
  // Download as HTML file
  const blob = new Blob([fullHTML], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `haryana-statistical-comparison-${new Date().toISOString().split('T')[0]}.html`;
  a.click();
  URL.revokeObjectURL(url);
  
  showToast('📥 Report exported successfully!', 'success');
}

// Show API key configuration modal
function showApiKeyModal() {
  const modal = document.createElement('div');
  modal.className = 'api-key-modal-overlay';
  modal.innerHTML = `
    <div class="api-key-modal">
      <h3 class="api-key-modal-title">🔑 Groq API Key Required</h3>
      <div class="api-key-modal-content">
        <p>To use Groq AI analysis, you need a free API key.</p>
        
        <div class="api-key-steps">
          <h4>Get your FREE key (2 minutes):</h4>
          <ol>
            <li>Visit <a href="https://console.groq.com" target="_blank">console.groq.com</a></li>
            <li>Sign up for free (no credit card needed)</li>
            <li>Go to "API Keys" section</li>
            <li>Click "Create API Key"</li>
            <li>Copy the key (starts with <code>gsk_...</code>)</li>
            <li>Paste it in your HTML file (line ~4690)</li>
          </ol>
        </div>
        
        <div class="api-key-benefits">
          <h4>Free tier includes:</h4>
          <ul>
            <li>✅ 14,400 requests per day</li>
            <li>✅ Llama 3.2 90B Vision model</li>
            <li>✅ More than enough for this app!</li>
          </ul>
        </div>
        
        <div class="api-key-note">
          <strong>Note:</strong> Once you add your API key to the HTML file, 
          Groq analysis will work instantly!
        </div>
      </div>
      <div class="api-key-modal-actions">
        <button class="action-btn secondary-btn" onclick="this.closest('.api-key-modal-overlay').remove()">
          Close
        </button>
        <a href="https://console.groq.com" target="_blank" class="action-btn primary-btn">
          Get Free API Key →
        </a>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
}

// Make functions globally accessible
window.analyzeWithGroq = analyzeWithGroq;
window.closeGroqReport = closeGroqReport;
window.exportGroqReport = exportGroqReport;

// ═══════════════════════════════════════════════════════════════════
// DISPLAY N8N + GROQ COMPARISON REPORT
// ═══════════════════════════════════════════════════════════════════
function displayComparisonReport(n8nResponse) {
  console.log('📊 Displaying n8n comparison report');
  console.log('Raw response:', n8nResponse);
  console.log('Response type:', typeof n8nResponse);
  console.log('Is array?:', Array.isArray(n8nResponse));
  
  try {
    // Handle array response [{ htmlReport, ... }] or direct object { htmlReport, ... }
    let reportData;
    if (Array.isArray(n8nResponse)) {
      console.log('Response is array, extracting first element');
      reportData = n8nResponse[0];
    } else {
      console.log('Response is object, using directly');
      reportData = n8nResponse;
    }
    
    console.log('Report data:', reportData);
    console.log('Report data keys:', reportData ? Object.keys(reportData) : 'null');
    
    // Validate response structure
    if (!reportData) {
      throw new Error('No report data received from n8n (reportData is null/undefined)');
    }
    
    // Extract HTML report
    const htmlReport = reportData.htmlReport;
    
    console.log('HTML report exists?:', !!htmlReport);
    console.log('HTML report length:', htmlReport ? htmlReport.length : 0);
    console.log('HTML report preview:', htmlReport ? htmlReport.substring(0, 100) + '...' : 'EMPTY');
    
    if (!htmlReport) {
      console.error('❌ No htmlReport field found. Available fields:', Object.keys(reportData));
      throw new Error('No HTML report found in n8n response. Check n8n Step 9 output.');
    }
    
    if (typeof htmlReport !== 'string') {
      throw new Error(`htmlReport is not a string, it's a ${typeof htmlReport}`);
    }
    
    if (htmlReport.length < 100) {
      throw new Error(`htmlReport is too short (${htmlReport.length} chars). It might be corrupted.`);
    }
    
    console.log('✅ HTML report extracted successfully');
    console.log('Creating modal...');
    
    // Create full-screen modal
    const modal = document.createElement('div');
    modal.id = 'n8nReportModal';
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.95);
      z-index: 100000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      animation: fadeIn 0.3s ease-out;
    `;
    
    const container = document.createElement('div');
    container.style.cssText = `
      width: 100%;
      max-width: 1400px;
      height: 90vh;
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
      display: flex;
      flex-direction: column;
      position: relative;
    `;
    
    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '✕';
    closeBtn.style.cssText = `
      position: absolute;
      top: 15px;
      right: 15px;
      width: 45px;
      height: 45px;
      background: rgba(0, 0, 0, 0.8);
      color: white;
      border: none;
      border-radius: 50%;
      font-size: 24px;
      cursor: pointer;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s;
      font-weight: 300;
    `;
    closeBtn.onmouseover = () => {
      closeBtn.style.background = '#dc2626';
      closeBtn.style.transform = 'rotate(90deg) scale(1.1)';
    };
    closeBtn.onmouseout = () => {
      closeBtn.style.background = 'rgba(0, 0, 0, 0.8)';
      closeBtn.style.transform = 'none';
    };
    closeBtn.onclick = () => document.body.removeChild(modal);
    
    // Action bar
    const actionBar = document.createElement('div');
    actionBar.style.cssText = `
      padding: 15px 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      gap: 10px;
      align-items: center;
      flex-wrap: wrap;
    `;
    
    // Title
    const title = document.createElement('div');
    title.textContent = '📊 AI Budget Analysis Report';
    title.style.cssText = `
      color: white;
      font-size: 18px;
      font-weight: 700;
      flex: 1;
      min-width: 200px;
    `;
    
    // Download button
    const downloadBtn = document.createElement('button');
    downloadBtn.innerHTML = '⬇️ Download';
    downloadBtn.style.cssText = `
      padding: 10px 20px;
      background: white;
      color: #667eea;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
    `;
    downloadBtn.onmouseover = () => downloadBtn.style.transform = 'translateY(-2px)';
    downloadBtn.onmouseout = () => downloadBtn.style.transform = 'none';
    downloadBtn.onclick = () => {
      const blob = new Blob([htmlReport], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Budget_Analysis_${new Date().toISOString().split('T')[0]}.html`;
      a.click();
      URL.revokeObjectURL(url);
      console.log('✅ Report downloaded');
    };
    
    // Print button
    const printBtn = document.createElement('button');
    printBtn.innerHTML = '🖨️ Print';
    printBtn.style.cssText = `
      padding: 10px 20px;
      background: rgba(255, 255, 255, 0.2);
      color: white;
      border: 2px solid white;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
    `;
    printBtn.onmouseover = () => printBtn.style.background = 'rgba(255, 255, 255, 0.3)';
    printBtn.onmouseout = () => printBtn.style.background = 'rgba(255, 255, 255, 0.2)';
    printBtn.onclick = () => {
      const printWindow = window.open('', '_blank');
      printWindow.document.write(htmlReport);
      printWindow.document.close();
      setTimeout(() => printWindow.print(), 500);
    };
    
    // New Tab button
    const newTabBtn = document.createElement('button');
    newTabBtn.innerHTML = '🔗 Open';
    newTabBtn.style.cssText = `
      padding: 10px 20px;
      background: rgba(255, 255, 255, 0.2);
      color: white;
      border: 2px solid white;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
    `;
    newTabBtn.onmouseover = () => newTabBtn.style.background = 'rgba(255, 255, 255, 0.3)';
    newTabBtn.onmouseout = () => newTabBtn.style.background = 'rgba(255, 255, 255, 0.2)';
    newTabBtn.onclick = () => {
      const newWindow = window.open('', '_blank');
      newWindow.document.write(htmlReport);
      newWindow.document.close();
    };
    
    actionBar.appendChild(title);
    actionBar.appendChild(downloadBtn);
    actionBar.appendChild(printBtn);
    actionBar.appendChild(newTabBtn);
    
    // Report iframe
    const iframe = document.createElement('iframe');
    iframe.style.cssText = `
      width: 100%;
      flex: 1;
      border: none;
      background: white;
    `;
    
    // Assemble modal
    container.appendChild(closeBtn);
    container.appendChild(actionBar);
    container.appendChild(iframe);
    modal.appendChild(container);
    
    console.log('Appending modal to body...');
    document.body.appendChild(modal);
    
    console.log('Writing HTML to iframe...');
    console.log('Iframe ready?:', !!iframe.contentDocument);
    
    // Write report to iframe
    iframe.contentDocument.open();
    iframe.contentDocument.write(htmlReport);
    iframe.contentDocument.close();
    
    console.log('✅ Report displayed successfully in modal');
    console.log('Modal element:', modal);
    console.log('Iframe element:', iframe);
    
    return true; // Explicitly return success
    
  } catch (error) {
    console.error('❌ Error displaying report:', error);
    console.error('Error stack:', error.stack);
    alert(`❌ Error Displaying Report\n\n${error.message}\n\nPlease check browser console for details.`);
    return false;
  }
}

// Send selected files to n8n
async function sendFilesToN8NForComparison(filesByYear) {
  showProcessingOverlay();
  updateProcessingStatus('Preparing comparison...', 1, 5);
  
  try {
    const payload = {
      question: currentComparisonQuestion || 'Statistical data comparison',
      filesByYear: filesByYear,
      years: Object.keys(filesByYear),
      language: selectedLanguage || 'English',
      queryType: 'FILE_COMPARISON_ANALYSIS',
      timestamp: new Date().toISOString()
    };
    
    console.log('📤 Sending to n8n:', payload);
    
    updateProcessingStatus('Sending files to AI...', 2, 5);
    
    const response = await fetch(N8N_COMPARISON_WEBHOOK, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    updateProcessingStatus('AI analyzing images...', 3, 5);
    
    const result = await response.json();
    
    console.log('✅ Received from n8n:', result);
    
    updateProcessingStatus('Generating comparison report...', 4, 5);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    updateProcessingStatus('Complete!', 5, 5);
    
    setTimeout(() => {
      hideProcessingOverlay();
      displayComparisonReport(result);
    }, 500);
    
  } catch (error) {
    console.error('❌ n8n Comparison Error:', error);
    hideProcessingOverlay();
    
    // Enhanced error message
    let errorMsg = `❌ Analysis Failed\n\nError: ${error.message}\n\n`;
    
    if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
      errorMsg += `Network Issue:\n• Check internet connection\n• Verify n8n server is running\n• Check webhook URL is correct\n\n`;
    } else if (error.message.includes('404')) {
      errorMsg += `Webhook Not Found:\n• Activate workflow in n8n\n• Verify webhook path\n\n`;
    } else if (error.message.includes('500')) {
      errorMsg += `Server Error:\n• Check n8n execution logs\n• Verify Groq API key\n• Check workflow configuration\n\n`;
    }
    
    errorMsg += `Webhook URL: ${N8N_COMPARISON_WEBHOOK}\n\n` +
                `Troubleshooting:\n` +
                `✓ n8n workflow is active\n` +
                `✓ Groq API key is configured\n` +
                `✓ All 10 workflow steps are connected\n` +
                `✓ Images are accessible from Cloudinary`;
    
    alert(errorMsg);
  }
}

console.log('✅ File selection interface loaded');


console.log('✅ Comparison feature JavaScript loaded');
document.getElementById('submitBtn').addEventListener('click', async () => {
  const question = userInput.value.trim();
  
  if (!selectedQueryType) {
    alert('Please select either "Learn About Statistics" or "Find Haryana Data" first!');
    return;
  }
  
  if (!question) {
    alert('Please enter your question!');
    return;
  }
  // ✅ NEW: Route based on query type
  if (selectedQueryType === 'data') {
    // "Find Haryana Data" → Open full-screen chat
    showChatInterface();
    
    // Transfer question to chat input
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
      chatInput.value = question;
      autoResizeChatInput();
    }
    
    // Auto-send
    setTimeout(() => {
      sendChatMessage();
    }, 300);
    
    // Clear main input
    userInput.value = '';
    
    return; // Exit - don't open modal
  }
  // ✅ NEW: Save as original question if this is NOT from a related question click
  // (Related questions will have " | " separator)
  if (!question.includes(' | ')) {
    originalQuestion = question;
    console.log('📝 Saved original question:', originalQuestion);
  } else {
    console.log('🔗 This is a concatenated question (original + related)');
    // Extract the original part before " | " for future related questions
    originalQuestion = question.split(' | ')[0];
  }

  const mainContainer = document.querySelector('.container-main');
  if (mainContainer) mainContainer.style.visibility = 'hidden';

  speechSynthesis.cancel();
  isSpeaking = false;
  document.getElementById('ttsToggle').classList.remove('speaking');
  document.getElementById('ttsLabel').textContent = 'Listen';

  // Display the FULL question (concatenated if it is one)
  document.getElementById('modalQuestion').textContent = question;
  document.getElementById('modalAnswer').innerHTML = 'Thinking...';
  document.getElementById('aiModal').classList.remove('hidden');
  
  // Hide related questions section initially
  const relatedSection = document.getElementById('relatedQuestionsSection');
  if (relatedSection) {
    relatedSection.style.display = 'none';
  }
  
  // Hide autocomplete dropdown
  autocompleteDropdown.style.display = 'none';

  const deviceType = /Mobile|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ? 'Mobile' : 
                     /Tablet|iPad/i.test(navigator.userAgent) ? 'Tablet' : 'Desktop';
  const browserMatch = navigator.userAgent.match(/(Firefox|Chrome|Safari|Edge|Opera|OPR)/i);
  const browser = browserMatch ? browserMatch[0].replace('OPR', 'Opera') : 'Unknown';

  try {
    const webhookUrl = 'https://n8n-workflow-test.duckdns.org/webhook/stat-abstract';

    // ✅ Send the FULL question (concatenated or original) to webhook
    const payload = {
      question: question,  // This will be "Original | Related" if from related question
      language: selectedLanguage,
      queryType: selectedQueryType === 'statistics' ? 'STATISTICAL_CONCEPT_QUERY' : 'STATISTICAL_DATA_QUERY',
      mobNo: 'anonymous',
      deviceType: deviceType,
      browser: browser,
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      userAgent: navigator.userAgent
    };
    
    // Only add conversationHistory if it has items
    if (window.conversationHistory.length > 0) {
      payload.conversationHistory = window.conversationHistory;
    }

    console.log('📤 Sending to webhook:', payload);

    const response = await fetch(webhookUrl, {
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
    
    const aiResponse = data.answer || data.error || 'No response received.';
    const disclaimer = "<br><br>────────────────<br>⚠️ <em>Disclaimer: This is an AI-generated response for guidance purposes only. Please verify important information from official sources.</em>";
    
    const formattedAnswer = aiResponse.replace(/\n/g, '<br>');
    const fullResponse = formattedAnswer + disclaimer;
    
    document.getElementById('modalAnswer').innerHTML = fullResponse;
    
    // ✅ Show/hide New Topic button based on query type
    const newTopicBtn = document.getElementById('newTopicBtn');
    if (newTopicBtn) {
      if (selectedQueryType === 'statistics') {
        // Radio Button 1: Show New Topic button
        newTopicBtn.style.display = 'flex';
        console.log('📖 Statistics mode: Showing New Topic button');
      } else {
        // Radio Button 2: Hide New Topic button
        newTopicBtn.style.display = 'none';
        console.log('📊 Data mode: Hiding New Topic button');
      }
    }
    
    // Add to conversation history
    window.conversationHistory.push({
      question: question,
      answer: aiResponse
    });
    
    if (window.conversationHistory.length > 5) {
      window.conversationHistory.shift();
    }
    
    console.log('Updated conversation history:', window.conversationHistory);
    
    updateHistoryBadge();
    
    // Handle related questions
    let relatedQuestions = null;
    
    if (data.relatedQuestions) {
      if (Array.isArray(data.relatedQuestions)) {
        relatedQuestions = data.relatedQuestions;
      } else if (typeof data.relatedQuestions === 'string') {
        try {
          let questionsString = data.relatedQuestions.replace(/^=/, '');
          
          try {
            relatedQuestions = JSON.parse(questionsString);
            if (!Array.isArray(relatedQuestions)) {
              relatedQuestions = questionsString.split(',').map(q => q.trim()).filter(q => q.length > 0);
            }
          } catch {
            relatedQuestions = questionsString.split(',').map(q => q.trim()).filter(q => q.length > 0);
          }
        } catch (parseError) {
          console.error('Error parsing relatedQuestions:', parseError);
          relatedQuestions = null;
        }
      }
    }
    
    console.log('Parsed relatedQuestions:', relatedQuestions);
    
    if (relatedQuestions && Array.isArray(relatedQuestions) && relatedQuestions.length > 0) {
      console.log('Displaying related questions');
      displayRelatedQuestions(relatedQuestions);
    } else {
      console.log('No valid related questions found');
      if (relatedSection) {
        relatedSection.style.display = 'none';
      }
    }
    
    // Comparison Feature - Check after answer is displayed
    setTimeout(() => {
      currentComparisonQuestion = question;
      const queryType = selectedQueryType === "statistics" ? "STATISTICAL_CONCEPT_QUERY" : "STATISTICAL_DATA_QUERY";
      if (shouldOfferComparison(question, queryType)) {
        console.log("🎯 Offering comparison for suitable query");
        showComparisonPrompt();
      } else {
        console.log("ℹ️ Not offering comparison - query not suitable");
      }
    }, 800);
    
  } catch (error) {
    console.error('Error:', error);
    let errorMessage = 'Connection failed: ';
    if (error.message.includes('Invalid response format')) {
      errorMessage += 'The server sent an invalid response. Please check the webhook configuration.';
    } else if (error.message.includes('HTTP error')) {
      errorMessage += error.message + '. The server may be down or the webhook URL is incorrect.';
    } else {
      errorMessage += error.message;
    }
    document.getElementById('modalAnswer').innerHTML = errorMessage.replace(/\n/g, '<br>');
    if (relatedSection) {
      relatedSection.style.display = 'none';
    }
  }
});

  // ✅ NEW FUNCTION: Display Related Questions
function displayRelatedQuestions(questions) {
  const section = document.getElementById('relatedQuestionsSection');
  const listContainer = document.getElementById('relatedQuestionsList');
  
  if (!questions || questions.length === 0) {
    section.style.display = 'none';
    return;
  }
  
  // Clear previous questions
  listContainer.innerHTML = '';
  
  // Add each related question as a clickable button
  questions.forEach((q, index) => {
    const questionBtn = document.createElement('button');
    questionBtn.className = 'w-full text-left p-3 bg-white hover:bg-purple-50 border-2 border-purple-200 hover:border-purple-400 rounded-xl transition-all duration-200 text-sm font-medium text-gray-700 hover:text-purple-700 flex items-start gap-2';
    questionBtn.innerHTML = `
      <span class="flex-shrink-0 w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
        ${index + 1}
      </span>
      <span class="flex-1">${q}</span>
      <svg class="w-4 h-4 flex-shrink-0 mt-1 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
      </svg>
    `;
    
    // ✅ MODIFIED: Click handler with CONCATENATION
    questionBtn.addEventListener('click', () => {
      console.log('🔗 Related question clicked:', q);
      console.log('📝 Original question was:', originalQuestion);
      
      // Close current modal
      document.getElementById('aiModal').classList.add('hidden');
      const mainContainer = document.querySelector('.container-main');
      if (mainContainer) mainContainer.style.visibility = 'visible';
      
      // ✅ CONCATENATE: Original Question | Related Question
      const concatenatedQuestion = `${originalQuestion} | ${q}`;
      console.log('✅ Concatenated question:', concatenatedQuestion);
      
      // Set the concatenated question in input field
      userInput.value = concatenatedQuestion;
      
      // Auto-submit after a brief delay
      setTimeout(() => {
        document.getElementById('submitBtn').click();
      }, 300);
    });
    
    listContainer.appendChild(questionBtn);
  });
  
  section.style.display = 'block';
}
  

let recognition = null; // ✅ Initialize as null first
let isRecording = false;

// ✅ Safe initialization - only if browser supports it
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
  try {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'hi-IN';

    recognition.onstart = () => {
      isRecording = true;
      const voiceBtn = document.getElementById('voiceBtn');
      if (voiceBtn) {
        voiceBtn.classList.add('recording');
        voiceBtn.title = 'Recording... Click to stop';
      }
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      const userInput = document.getElementById('userInput');
      if (userInput) {
        userInput.value = transcript;
        userInput.dispatchEvent(new Event('input'));
      }
    };

    recognition.onend = () => {
      isRecording = false;
      const voiceBtn = document.getElementById('voiceBtn');
      if (voiceBtn) {
        voiceBtn.classList.remove('recording');
        voiceBtn.title = 'Click to speak';
      }
    };

    recognition.onerror = (event) => {
      isRecording = false;
      const voiceBtn = document.getElementById('voiceBtn');
      if (voiceBtn) {
        voiceBtn.classList.remove('recording');
        voiceBtn.title = 'Click to speak';
      }
      if (event.error !== 'no-speech') {
        console.warn('Voice recognition error:', event.error);
      }
    };
    
    console.log('✅ Voice recognition initialized');
    
  } catch (error) {
    console.error('❌ Voice recognition initialization failed:', error);
    recognition = null;
  }
} else {
  console.warn('⚠️ Voice recognition not supported in this browser');
}


// Voice button click handler
  const chatVoiceBtn = document.getElementById('chatVoiceBtn');
  if (chatVoiceBtn) {
    chatVoiceBtn.addEventListener('click', function() {
      if (!recognition) {
        alert('Voice recognition is not supported in your browser.');
        return;
      }
      
      if (isRecording) {
        recognition.stop();
      } else {
        // Change target to chat input
        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          const chatInput = document.getElementById('chatInput');
          if (chatInput) {
            chatInput.value = transcript;
            autoResizeChatInput();
          }
        };
        try {
          recognition.start();
        } catch (error) {
          console.error('❌ Failed to start chat voice:', error);
          alert('Voice recognition failed. Please try again.');
        }
      }
    });
  }
});

// Initialize music toggle (must run after DOM ready)
function initMusicToggle() {
  const fluteMusic = document.getElementById('fluteMusic');
  const musicToggle = document.getElementById('musicToggle');
  const musicLabel = document.getElementById('musicLabel');

  // ✅ CHECK IF ELEMENTS EXIST BEFORE ACCESSING
  if (!fluteMusic || !musicToggle || !musicLabel) {
    console.log('ℹ️ Music player elements not found (feature removed from UI)');
    return; // Exit safely without crashing
  }

  musicToggle.addEventListener('click', () => {
    if (fluteMusic.paused) {
      fluteMusic.play().catch(e => {
        alert("Please interact with the page first, then click to play music.");
      });
      musicLabel.textContent = "Pause Flute";
    } else {
      fluteMusic.pause();
      musicLabel.textContent = "Play Flute";
    }
  });
}

document.getElementById('closeBtn').onclick = () => {
  speechSynthesis.cancel();
  document.getElementById('aiModal').classList.add('hidden');
  const mainContainer = document.querySelector('.container-main');
  if (mainContainer) mainContainer.style.visibility = 'visible';
};

// New Topic button - clears conversation history
document.getElementById('newTopicBtn').onclick = () => {
  window.conversationHistory = [];
  updateHistoryBadge();
  alert('✨ Conversation history cleared! You can now start a new topic.');
  console.log('Conversation history cleared');
};

// Function to update history badge
function updateHistoryBadge() {
  const badge = document.getElementById('historyBadge');
  const count = document.getElementById('historyCount');
  
  // Only show badge for Radio Button 1 (statistics mode)
  if (selectedQueryType === 'statistics' && window.conversationHistory && window.conversationHistory.length > 0) {
    badge.classList.remove('hidden');
    count.textContent = window.conversationHistory.length;
  } else {
    badge.classList.add('hidden');
  }
}

document.getElementById('closeModal').onclick = () => {
  speechSynthesis.cancel();
  document.getElementById('aiModal').classList.add('hidden');
  const mainContainer = document.querySelector('.container-main');
  if (mainContainer) mainContainer.style.visibility = 'visible';
};

document.getElementById('whatsappBtn').onclick = () => {
  const question = document.getElementById('modalQuestion').textContent;
  const answer = document.getElementById('modalAnswer').textContent;
  
  // Format message for WhatsApp
  const message = `*Haryana DataVista - Statistical Assistant*\n\n*Question:*\n${question}\n\n*Answer:*\n${answer}\n\n_Generated by Haryana DataVista Chatbot_\n🔗 https://esaharyana.gov.in`;
  
  // Open WhatsApp with pre-filled message
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};


function openFeedback() {
  const feedbackModal = document.getElementById('feedbackModal');
  const feedbackIframe = document.getElementById('feedbackIframe');
  const iframeLoader = document.getElementById('iframeLoader');
  
  feedbackModal.classList.add('show');
  iframeLoader.style.display = 'block';
  
  feedbackIframe.src = 'https://vksinglakkr.github.io/StatisticalAbstract/feedback_StatAbs.html';
  
  feedbackIframe.onload = function() {
    iframeLoader.style.display = 'none';
  };feedbackIframe.onerror = function() {
    iframeLoader.innerHTML = '<p style="color: #ef4444; font-weight: 600;">Failed to load feedback form</p>';
  };
}

function closeFeedback() {
  const feedbackModal = document.getElementById('feedbackModal');
  const feedbackIframe = document.getElementById('feedbackIframe');
  const iframeLoader = document.getElementById('iframeLoader');
  
  feedbackModal.classList.remove('show');
  feedbackIframe.src = '';
  
  iframeLoader.style.display = 'none';
  iframeLoader.innerHTML = '<div class="spinner"></div><p style="color: #64748b; font-weight: 600;">Loading feedback form...</p>';
}

document.getElementById('feedbackModal').addEventListener('click', function(e) {
  if (e.target === this) {
    closeFeedback();
  }
});

function openLiveTelecast() {
  window.open('https://www.youtube.com/live/My5T4LiHBdw', '_blank', 'noopener,noreferrer');
}    
function openTutorialVideos() {
/*
  const quizModal = document.getElementById('quizModal');
  const quizIframe = document.getElementById('quizIframe');
  const quizIframeLoader = document.getElementById('quizIframeLoader');
  
  quizModal.classList.add('show');
  quizIframeLoader.style.display = 'block';
  
  quizIframe.src = 'https://igmquiz.in/webloginkkr.aspx';
  
  quizIframe.onload = function() {
    quizIframeLoader.style.display = 'none';
  };
  
  quizIframe.onerror = function() {
    quizIframeLoader.innerHTML = '<p style="color: #ef4444; font-weight: 600;">Failed to load Tutorial Videos</p>';
  };
*/
window.open('https://igmquiz.in/webloginkkr.aspx', '_blank');
}

function closeQuizChatbot() {
  const quizModal = document.getElementById('quizModal');
  const quizIframe = document.getElementById('quizIframe');
  const quizIframeLoader = document.getElementById('quizIframeLoader');
  
  quizModal.classList.remove('show');
  quizIframe.src = '';
  
  quizIframeLoader.style.display = 'none';
  quizIframeLoader.innerHTML = '<div class="spinner"></div><p style="color: #64748b; font-weight: 600;">Loading Videos...</p>';
}

document.getElementById('quizModal').addEventListener('click', function(e) {
  if (e.target === this) {
    closeQuizChatbot();
  }
});
  

// ═══════════════════════════════════════════════════════════════════
// FILE SEARCH SYSTEM
// ═══════════════════════════════════════════════════════════════════

async function loadMasterFileData() {
  try {
    console.log('🔄 Loading questions from Google Sheets (TSV)...');
    console.log('   URL:', GOOGLE_SHEET_URL);
    
    const response = await fetch(GOOGLE_SHEET_URL);
    console.log('   📡 Response status:', response.status, response.statusText);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const tsvText = await response.text();
    console.log('   📄 TSV text length:', tsvText.length, 'characters');
    
    const lines = tsvText.split('\n');
    console.log('   📄 Total lines:', lines.length);
    
    masterFileData = []; // Clear existing data
    
    // Parse TSV - Skip header row (index 0)
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      
      // Split by TAB (TSV format) - supports commas in questions
      const columns = line.split('\t');
      
      // Your sheet format: Chp_Code [TAB] Chapter_Name [TAB] sec_code [TAB] part_code
      // Column 0 = Chp_Code (1, 2, 3...)
      // Column 1 = Chapter_Name (the actual question)
      // Column 2 = sec_code (Admin_Stru, etc.)
      // Column 3 = part_code (SS, ES, etc.)
      if (columns.length >= 3) {
        const chp_code = columns[0].trim();   // Column 0 = Chp_Code
        const question = columns[1].trim();   // Column 1 = Chapter_Name (ACTUAL QUESTION)
        const sec_code = columns[2].trim();   // Column 2 = sec_code
        
        if (question && sec_code && chp_code) {
          masterFileData.push({
            chp_code: chp_code.padStart(2, '0'),
            chapter_name: question,
            sec_code: sec_code,
            part_code: '',
            search_text: question.toLowerCase()
          });
        }
      }
    }
    
    console.log(`✅ Loaded ${masterFileData.length} questions from Google Sheets`);
    console.log('   Sample data:', masterFileData.slice(0, 3));
    
  } catch (error) {
    console.error('❌ Error loading Google Sheets data:', error);
    console.error('   Error details:', error.message);
    
    // Fallback to empty array
    masterFileData = [];
    
    alert('⚠️ Could not load questions from Google Sheets. Please check:\n' +
          '1. Sheet is published to web (TSV format)\n' +
          '2. Sheet is publicly accessible\n' +
          '3. URL is correct');
  }
}

// File Search Input Handler - Initialize after DOM loads
let fileSearchTimeout;

function initFileSearchListener() {
  if (!userInput) initDOMElements();
  
  // We use the SAME userInput for both modes
  // The autocomplete behavior changes based on selectedQueryType
  console.log('✅ File search uses userInput field');
}

function performFileSearch(query) {
  const dropdown = document.getElementById('autocompleteDropdown'); // Use same dropdown
  
  if (!query || query.length < 2) {
    dropdown.style.display = 'none';
    return;
  }
  
  const searchTerm = query.toLowerCase();
  const results = masterFileData.filter(item => 
    item.search_text.includes(searchTerm)
  ).slice(0, 15);
  
  if (results.length > 0) {
    displayFileAutocomplete(results, dropdown);
  } else {
    dropdown.innerHTML = '<div class="autocomplete-no-results">No matching questions found in Google Sheets</div>';
    dropdown.style.display = 'block';
  }
}

// ============================================================================
// FUNCTION 2: displayFileAutocomplete (Replace around line 2170)
// ============================================================================
function displayFileAutocomplete(results, dropdown) {
  let html = '';
  
  results.forEach(item => {
    // ✅ FIX 3: Show only question text in autocomplete (no chapter/sector codes)
    html += `
      <div class="autocomplete-item" data-question="${item.chapter_name}" data-item='${JSON.stringify(item)}'>
        <div style="font-weight: 600;">${item.chapter_name}</div>
      </div>
    `;
  });
  
  dropdown.innerHTML = html;
  dropdown.style.display = 'block';
  
  // Add click handlers
  document.querySelectorAll('.autocomplete-item').forEach(element => {
    element.addEventListener('click', function() {
      const itemData = JSON.parse(this.getAttribute('data-item'));
      selectFileItem(itemData);
      userInput.value = itemData.chapter_name;
      dropdown.style.display = 'none';
    });
  });
}


function selectFileItem(item) {
  selectedFileItem = item;
  
  // Use userInput (the main input field) instead of non-existent fileSearchInput
  if (userInput) {
    userInput.value = item.chapter_name;
  }
  
  const dropdown = document.getElementById('autocompleteDropdown');
  if (dropdown) {
    dropdown.style.display = 'none';
  }
  
  const displayElement = document.getElementById('fileSelectedDisplay');
  if (displayElement) {
    displayElement.innerHTML = `
      <strong>📋 Selected:</strong> ${item.chapter_name}<br>
      <small>Section: ${item.sec_code} | Chapter: ${item.chp_code}</small>
    `;
    displayElement.style.display = 'block';
  }
  
  console.log('✅ Selected file item:', item);
}

async function searchStatFiles() {
  if (!selectedFileItem) {
    alert('⚠️ Please select a question from the dropdown first!');
    return;
  }
  
  const resultsDiv = document.getElementById('fileResultsArea');
  resultsDiv.innerHTML = '<div class="text-center py-8 text-gray-600">🔍 Searching for files...</div>';
  
  const filePrefix = selectedFileItem.sec_code + selectedFileItem.chp_code;
  console.log('🔍 Searching for files with prefix:', filePrefix);
  
  try {
    const response = await fetch(FILE_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        type: 'file_search',  // ⚠️ REQUIRED FOR N8N ROUTING
        filePrefix: filePrefix,
        question: selectedFileItem.chapter_name,
        sec_code: selectedFileItem.sec_code,
        chp_code: selectedFileItem.chp_code
      })
    });
    
    const data = await response.json();
    
    if (data.success && data.files && data.files.length > 0) {
      displayFileResults(data.files, selectedFileItem);
    } else {
      displayNoFileResults(selectedFileItem, filePrefix);
    }
    
  } catch (error) {
    console.error('❌ Error:', error);
    resultsDiv.innerHTML = '<div class="text-center py-8 text-red-600">❌ Error searching files. Please try again.</div>';
  }
}

function displayFileResults(files, selectedItem) {
  const resultsDiv = document.getElementById('fileResultsArea');
  
  const filesByYear = {};
  files.forEach(file => {
    if (!filesByYear[file.year]) {
      filesByYear[file.year] = [];
    }
    filesByYear[file.year].push(file);
  });
  
  const years = Object.keys(filesByYear).sort().reverse();
  
  let html = `
    <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl mb-5 border-2 border-green-200">
      <h3 class="text-lg font-bold text-gray-800 mb-2">✅ Found ${files.length} file(s)</h3>
      <p class="text-gray-700 font-semibold text-sm">${selectedItem.chapter_name}</p>
      <p class="text-xs text-gray-600 mt-1">Section: ${selectedItem.sec_code} | Chapter: ${selectedItem.chp_code}</p>
    </div>
  `;
  
  years.forEach(year => {
    html += `
      <div class="file-year-group">
        <h4>📅 Year: ${year}</h4>
    `;
    
    filesByYear[year].forEach(file => {
      const icon = file.extension === 'pdf' ? '📕' : '📊';
      html += `
        <a href="${file.url}" target="_blank" class="file-download-link">
          ${icon} ${file.filename}
        </a>
      `;
    });
    
    html += `</div>`;
  });
  
  resultsDiv.innerHTML = html;
}

function displayNoFileResults(selectedItem, filePrefix) {
  const resultsDiv = document.getElementById('fileResultsArea');
  resultsDiv.innerHTML = `
    <div class="text-center py-12 bg-yellow-50 rounded-xl border-2 border-yellow-200">
      <div class="text-6xl mb-4">📭</div>
      <h4 class="text-lg font-bold text-gray-800 mb-2">No files found</h4>
      <p class="text-gray-600 text-sm">No data files found for: <strong>${selectedItem.chapter_name}</strong></p>
      <p class="text-xs text-gray-500 mt-2">File prefix: ${filePrefix}</p>
    </div>
  `;
}

// Close file autocomplete when clicking outside
document.addEventListener('click', function(e) {
  const fileInput = document.getElementById('fileSearchInput');
  const fileDropdown = document.getElementById('autocompleteDropdown');
  
  if (fileInput && fileDropdown) {
    if (!fileInput.contains(e.target) && !fileDropdown.contains(e.target)) {
      fileDropdown.style.display = 'none';
    }
  }
});


function updateLastModifiedDate() {
  const lastModifiedElement = document.getElementById('lastModified');
  
  if (!lastModifiedElement) {
    console.warn('⚠️ lastModified element not found');
    return;
  }
  
  try {
    // Get document's last modified date
    const lastModified = new Date(document.lastModified);
    
    // Check if valid date
    if (isNaN(lastModified.getTime())) {
      // Fallback to current date
      const now = new Date();
      const formattedDate = now.toLocaleDateString('en-IN', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric'
      });
      lastModifiedElement.textContent = formattedDate;
      console.log('✅ Last Modified (fallback):', formattedDate);
    } else {
      // Format the date
      const formattedDate = lastModified.toLocaleDateString('en-IN', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
      lastModifiedElement.textContent = formattedDate;
      console.log('✅ Last Modified Date:', formattedDate);
    }
    
  } catch (error) {
    console.error('❌ Error updating last modified:', error);
    lastModifiedElement.textContent = 'Recently updated';
  }
}
// ================= MENU LOGIC ====================

function toggleMenu() {
  menuDropdown.classList.toggle('show');
}
window.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Initializing DataVista...');
  
  // 1. Run all standard initializations
  initDOMElements();
  initUserInputListener();
  initFileSearchListener();
  initDropdownListeners();
  initLanguageAndTTS();
  initMusicToggle();
 updateLastModifiedDate();

  // 2. Attach Click Listeners directly to the toggle buttons
  const toggleStats = document.getElementById('toggleStatistics');
  const toggleData = document.getElementById('toggleData');

  if (toggleStats) {
    toggleStats.addEventListener('click', (e) => {
      e.preventDefault();
      switchMode('statistics');
    });
  }
  if (toggleData) {
    toggleData.addEventListener('click', (e) => {
      e.preventDefault();
      switchMode('data');
    });
  }

  // 3. 🎯 THE STARTUP FIX: Force Data Mode
  // We use a small timeout to ensure the HTML is fully ready
  setTimeout(() => {
    switchMode('data'); 
    
    // Load lists
    if (typeof masterFileData !== 'undefined' && masterFileData.length === 0) {
      loadMasterFileData();
    }
    loadCategories();
    buildAllQuestionsList();
    console.log('✅ Startup complete: Find Haryana Data active, Quick Help hidden.');
  }, 100);
});
// ============================================================================
// CHAT INTERFACE FUNCTIONS (NyayaMitra Style)
// ============================================================================

// Global variables
let chatMessages = [];
let isChatMode = false;

// Show chat interface (for "Find Haryana Data" mode)
function showChatInterface() {
  const chatInterface = document.getElementById('chatInterface');
  const mainContainer = document.querySelector('.container-main');
  
  if (chatInterface && mainContainer) {
    chatInterface.classList.add('active');
    mainContainer.style.display = 'none';
    isChatMode = true;
    
    // Focus on input
    setTimeout(() => {
      document.getElementById('chatInput').focus();
    }, 300);
  }
}

// Close chat interface
function closeChatInterface() {
  const chatInterface = document.getElementById('chatInterface');
  const mainContainer = document.querySelector('.container-main');
  
  if (chatInterface && mainContainer) {
    chatInterface.classList.remove('active');
    mainContainer.style.display = 'block';
    isChatMode = false;
  }
}

// Add message to chat
function addChatMessage(text, type = 'user') {
  const messagesContainer = document.getElementById('chatMessages');
  if (!messagesContainer) return;
  
  const messageWrapper = document.createElement('div');
  messageWrapper.className = `message-wrapper ${type}`;
  
  const messageBubble = document.createElement('div');
  messageBubble.className = 'message-bubble';
  
  const messageContent = document.createElement('p');
  messageContent.className = 'message-content';
  messageContent.textContent = text;
  
  const messageTime = document.createElement('div');
  messageTime.className = 'message-time';
  messageTime.textContent = new Date().toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit' 
  });
  
  messageBubble.appendChild(messageContent);
  messageBubble.appendChild(messageTime);
  messageWrapper.appendChild(messageBubble);
  messagesContainer.appendChild(messageWrapper);
  
  // Save to chat history
  chatMessages.push({ text, type, time: new Date() });
  
  // Update message count
  updateMessageCount();
  
  // Scroll to bottom
  scrollToBottom();
}

// Add typing indicator
function showTypingIndicator() {
  const messagesContainer = document.getElementById('chatMessages');
  if (!messagesContainer) return;
  
  const typingDiv = document.createElement('div');
  typingDiv.className = 'message-wrapper ai';
  typingDiv.id = 'typingIndicator';
  typingDiv.innerHTML = `
    <div class="typing-indicator">
      <span></span>
      <span></span>
      <span></span>
    </div>
  `;
  
  messagesContainer.appendChild(typingDiv);
  scrollToBottom();
}

// Remove typing indicator
function hideTypingIndicator() {
  const typingIndicator = document.getElementById('typingIndicator');
  if (typingIndicator) {
    typingIndicator.remove();
  }
}

// Update message count
function updateMessageCount() {
  const messageCount = document.getElementById('messageCount');
  if (messageCount) {
    const count = chatMessages.length;
    messageCount.textContent = `${count} message${count !== 1 ? 's' : ''}`;
  }
}

// Scroll to bottom of chat
function scrollToBottom() {
  const messagesContainer = document.getElementById('chatMessages');
  if (messagesContainer) {
    setTimeout(() => {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 100);
  }
}

// Clear chat history
function clearChatHistory() {
  if (chatMessages.length === 0) {
    alert('Chat is already empty!');
    return;
  }
  
  if (confirm('Clear all chat messages? This cannot be undone.')) {
    chatMessages = [];
    
    // Remove all messages except welcome
    const messagesContainer = document.getElementById('chatMessages');
    if (messagesContainer) {
      const welcomeMsg = messagesContainer.querySelector('.welcome-message');
      messagesContainer.innerHTML = '';
      if (welcomeMsg) {
        messagesContainer.appendChild(welcomeMsg);
      }
    }
    
    updateMessageCount();
    console.log('✅ Chat history cleared');
  }
}

// Send chat message
async function sendChatMessage() {
  const chatInput = document.getElementById('chatInput');
  const question = chatInput.value.trim();
  
  if (!question) {
    alert('Please enter a question!');
    return;
  }
  
  // Add user message
  addChatMessage(question, 'user');
  
  // Clear input
  chatInput.value = '';
  autoResizeChatInput();
  
  // Show typing indicator
  showTypingIndicator();
  
  // Get device info
  const deviceType = /Mobile|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ? 'Mobile' : 
                     /Tablet|iPad/i.test(navigator.userAgent) ? 'Tablet' : 'Desktop';
  const browserMatch = navigator.userAgent.match(/(Firefox|Chrome|Safari|Edge|Opera|OPR)/i);
  const browser = browserMatch ? browserMatch[0].replace('OPR', 'Opera') : 'Unknown';
  
  try {
    const webhookUrl = 'https://n8n-workflow-test.duckdns.org/webhook/stat-abstract';
    
    const payload = {
      question: question,
      language: selectedLanguage,
      queryType: selectedQueryType === 'statistics' ? 'STATISTICAL_CONCEPT_QUERY' : 'STATISTICAL_DATA_QUERY',
      mobNo: 'anonymous',
      deviceType: deviceType,
      browser: browser,
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      userAgent: navigator.userAgent
    };
    
    // Add conversation history if exists
    if (window.conversationHistory && window.conversationHistory.length > 0) {
      payload.conversationHistory = window.conversationHistory;
    }
    
    console.log('📤 Sending to webhook:', payload);
    
    const response = await fetch(webhookUrl, {
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
      throw new Error('Invalid response format from server');
    }
    
    // Hide typing indicator
    hideTypingIndicator();
    
    // Add AI response
    const aiResponse = data.answer || data.error || 'No response received.';
    addChatMessage(aiResponse, 'ai');
    
    // Add to conversation history
    if (!window.conversationHistory) {
      window.conversationHistory = [];
    }
    window.conversationHistory.push({
      question: question,
      answer: aiResponse
    });
    
    // Keep only last 5 exchanges
    if (window.conversationHistory.length > 5) {
      window.conversationHistory.shift();
    }
    
    console.log('Updated conversation history:', window.conversationHistory);
    
  } catch (error) {
    console.error('Error:', error);
    hideTypingIndicator();
    addChatMessage('❌ Connection failed: ' + error.message, 'ai');
  }
}

// Handle Enter key in chat input
function handleChatKeydown(event) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    sendChatMessage();
  }
}

// Auto-resize chat input
function autoResizeChatInput() {
  const input = document.getElementById('chatInput');
  if (!input) return;
  
  input.style.height = 'auto';
  const newHeight = Math.min(input.scrollHeight, 120);
  input.style.height = newHeight + 'px';
}

// Ask sample question (from chips)
function askSampleQuestion(question) {
  const chatInput = document.getElementById('chatInput');
  if (chatInput) {
    chatInput.value = question;
    autoResizeChatInput();
    chatInput.focus();
  }
}

// ✅ Voice button click handlers (ADD DOMContentLoaded wrapper)
document.addEventListener('DOMContentLoaded', function() {
  // Main voice button
  const voiceBtn = document.getElementById('voiceBtn');
  if (voiceBtn) {
    voiceBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (recognition) {
        if (isRecording) {
          recognition.stop();
        } else {
          try {
            recognition.start();
          } catch (error) {
            console.error('❌ Failed to start recognition:', error);
            alert('Voice recognition failed to start. Please try again.');
          }
        }
      } else {
        alert('Voice recognition is not supported in your browser.');
      }
    });
  }
  
  // Chat voice button
  const chatVoiceBtn = document.getElementById('chatVoiceBtn');
  if (chatVoiceBtn) {
    chatVoiceBtn.addEventListener('click', function() {
      if (!recognition) {
        alert('Voice recognition is not supported in your browser.');
        return;
      }
      
      if (isRecording) {
        recognition.stop();
      } else {
        // Change target to chat input
        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          const chatInput = document.getElementById('chatInput');
          if (chatInput) {
            chatInput.value = transcript;
            autoResizeChatInput();
          }
        };
        try {
          recognition.start();
        } catch (error) {
          console.error('❌ Failed to start chat voice:', error);
          alert('Voice recognition failed. Please try again.');
        }
      }
    });
  }
});
