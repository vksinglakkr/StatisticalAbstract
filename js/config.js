// ============================================================================
// CONFIG.JS - Configuration & Constants
// ============================================================================

// API Endpoints
export const API_ENDPOINTS = {
  WEBHOOK: 'https://n8n-workflow-test.duckdns.org/webhook/stat-abstract',
  COMPARISON: 'https://n8n-workflow-test.duckdns.org/webhook/haryana-comparison',
  GOOGLE_SHEET: 'https://docs.google.com/spreadsheets/d/17mpGz4-lw-xBYqDiHj7RV1z0w_5k8lEmSmVqsxS36ro/export?format=tsv&gid=740242886'
};

// Groq API Configuration
export const GROQ_CONFIG = {
  API_KEY: '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',
  API_URL: 'https://api.groq.com/openai/v1/chat/completions',
  MODEL: 'llama-3.2-11b-vision-preview'
};

// Image Upload Constraints
export const IMAGE_CONSTRAINTS = {
  MAX_IMAGES: 10,
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_TYPES: ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf']
};

// Global State
export const state = {
  selectedLanguage: 'English',
  selectedQueryType: null,
  currentQuestions: {},
  allQuestions: [],
  originalQuestion: '',
  masterFileData: [],
  selectedFileItem: null,
  selectedYears: [],
  isComparisonActive: false,
  currentComparisonQuestion: '',
  uploadedImages: [],
  parsedCloudinaryFiles: [],
  chatMessages: [],
  isChatMode: false,
  conversationHistory: []
};

// TTS State
export const ttsState = {
  utterance: null,
  isSpeaking: false,
  manualStop: false
};

// Voice Recognition State
export const voiceState = {
  recognition: null,
  isRecording: false
};

// DOM Element References
export const domElements = {
  categorySelect: null,
  questionSelect: null,
  questionSection: null,
  userInput: null,
  autocompleteDropdown: null
};

// Initialize DOM elements
export function initDOMElements() {
  domElements.categorySelect = document.getElementById('categorySelect');
  domElements.questionSelect = document.getElementById('questionSelect');
  domElements.questionSection = document.getElementById('questionSection');
  domElements.userInput = document.getElementById('userInput');
  domElements.autocompleteDropdown = document.getElementById('autocompleteDropdown');
  
  console.log('✅ DOM elements initialized');
}

// Utility Functions
export function getDeviceInfo() {
  const deviceType = /Mobile|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ? 'Mobile' : 
                     /Tablet|iPad/i.test(navigator.userAgent) ? 'Tablet' : 'Desktop';
  const browserMatch = navigator.userAgent.match(/(Firefox|Chrome|Safari|Edge|Opera|OPR)/i);
  const browser = browserMatch ? browserMatch[0].replace('OPR', 'Opera') : 'Unknown';
  
  return { deviceType, browser };
}

export function formatFileSize(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

export function formatCategoryName(category) {
  return category.replace(/_/g, ' ');
}

console.log('✅ config.js loaded');
