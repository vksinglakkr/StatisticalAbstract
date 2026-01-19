// ============================================================================
// UI-HELPERS.JS - UI Manipulation Functions
// ============================================================================

import { state, domElements, formatCategoryName } from './config.js';
import { statsQuestions, statsQuestionsHindi } from './questions.js';

// ============================================================================
// MODE SWITCHING
// ============================================================================

export function switchMode(mode) {
  const questionSection = document.getElementById('questionSection');
  const chatInterface = document.getElementById('chatInterface');
  const quickHelp = document.getElementById('quickQuestionsSection');
  const toggleData = document.getElementById('toggleData');
  const toggleStatistics = document.getElementById('toggleStatistics');
  const userInput = document.getElementById('userInput');

  console.log("🛠️ Switching UI Mode to:", mode);

  if (mode === 'data') {
    if (questionSection) questionSection.style.display = 'block';
    if (chatInterface) chatInterface.style.display = 'none';
    if (quickHelp) quickHelp.style.display = 'none';
    
    if (toggleData) toggleData.classList.add('active');
    if (toggleStatistics) toggleStatistics.classList.remove('active');
    if (userInput) userInput.placeholder = "Start typing to search data files...";
    
    state.selectedQueryType = 'data';
  } else {
    if (questionSection) questionSection.style.display = 'block';
    if (chatInterface) chatInterface.style.display = 'none';
    if (quickHelp) quickHelp.style.display = 'block';
    
    if (toggleStatistics) toggleStatistics.classList.add('active');
    if (toggleData) toggleData.classList.remove('active');
    if (userInput) userInput.placeholder = "Search statistical questions...";
    
    state.selectedQueryType = 'statistics';
  }
}

// ============================================================================
// CATEGORIES & QUESTIONS
// ============================================================================

export function loadCategories() {
  if (!domElements.categorySelect || !domElements.questionSelect) {
    console.error('loadCategories: DOM elements not initialized!');
    return;
  }
  
  domElements.categorySelect.innerHTML = '<option value="" selected disabled>Select Topic</option>';
  domElements.questionSelect.innerHTML = '<option value="" selected disabled>Select Question</option>';
  domElements.questionSelect.disabled = true;
  
  if (state.selectedQueryType === 'statistics') {
    state.currentQuestions = state.selectedLanguage === 'Hindi' ? statsQuestionsHindi : statsQuestions;
    
    Object.keys(state.currentQuestions).forEach(category => {
      const option = document.createElement('option');
      option.value = category;
      option.textContent = formatCategoryName(category);
      
      if (category.includes('Cultural') || category.includes('सांस्कृतिक')) {
        option.classList.add('category-cultural');
      } else if (category.includes('Religious') || category.includes('धार्मिक')) {
        option.classList.add('category-religious');
      } else if (category.includes('Date') || category.includes('तारीख')) {
        option.classList.add('category-date');
      }
      
      domElements.categorySelect.appendChild(option);
    });
  } else {
    state.currentQuestions = {};
    console.log('Data mode: Categories will be loaded from Google Sheets');
  }
}

export function buildAllQuestionsList() {
  state.allQuestions = [];
  
  if (state.selectedQueryType === 'statistics') {
    state.currentQuestions = state.selectedLanguage === 'Hindi' ? statsQuestionsHindi : statsQuestions;
    
    Object.keys(state.currentQuestions).forEach(mainCategory => {
      const subcategories = state.currentQuestions[mainCategory];
      
      Object.keys(subcategories).forEach(subcategory => {
        subcategories[subcategory].forEach(question => {
          state.allQuestions.push({
            question: question,
            category: formatCategoryName(mainCategory),
            subcategory: subcategory
          });
        });
      });
    });
  } else {
    state.currentQuestions = {};
    console.log('Data mode: Questions will be loaded from Google Sheets');
  }
}

// ============================================================================
// AUTOCOMPLETE
// ============================================================================

export function highlightMatch(text, query) {
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

export function filterQuestions(query) {
  if (!query || query.length < 1) {
    return [];
  }
  
  query = query.toLowerCase().trim();
  const keywords = query.split(/\s+/);
  
  return state.allQuestions.filter(item => {
    const questionLower = item.question.toLowerCase();
    
    if (query.length >= 3 && query.length <= 4) {
      const wordBoundaryMatch = new RegExp(`\\b${query}`, 'i').test(questionLower);
      const consecutiveMatch = questionLower.includes(query);
      return wordBoundaryMatch || consecutiveMatch;
    }
    
    return keywords.some(keyword => questionLower.includes(keyword));
  });
}

export function displayAutocomplete(matches) {
  if (!domElements.autocompleteDropdown) return;
  
  if (matches.length === 0) {
    domElements.autocompleteDropdown.innerHTML = '<div class="autocomplete-no-results">No matching questions found. Try different keywords.</div>';
    domElements.autocompleteDropdown.style.display = 'block';
    return;
  }
  
  let html = '';
  let lastCategory = '';
  
  matches.forEach(item => {
    if (item.category !== lastCategory) {
      html += `<div class="autocomplete-category">${item.category}</div>`;
      lastCategory = item.category;
    }
    
    const highlightedQuestion = highlightMatch(item.question, domElements.userInput.value);
    html += `<div class="autocomplete-item" data-question="${item.question}">${highlightedQuestion}</div>`;
  });
  
  domElements.autocompleteDropdown.innerHTML = html;
  domElements.autocompleteDropdown.style.display = 'block';
  
  // Add click handlers
  document.querySelectorAll('.autocomplete-item').forEach(item => {
    item.addEventListener('click', function() {
      domElements.userInput.value = this.getAttribute('data-question');
      domElements.autocompleteDropdown.style.display = 'none';
    });
  });
}

// ============================================================================
// MODAL FUNCTIONS
// ============================================================================

export function showModal(question, answer) {
  const mainContainer = document.querySelector('.container-main');
  if (mainContainer) mainContainer.style.visibility = 'hidden';

  document.getElementById('modalQuestion').textContent = question;
  document.getElementById('modalAnswer').innerHTML = answer;
  document.getElementById('aiModal').classList.remove('hidden');
  
  // Hide related questions initially
  const relatedSection = document.getElementById('relatedQuestionsSection');
  if (relatedSection) {
    relatedSection.style.display = 'none';
  }
}

export function closeModal() {
  speechSynthesis.cancel();
  document.getElementById('aiModal').classList.add('hidden');
  const mainContainer = document.querySelector('.container-main');
  if (mainContainer) mainContainer.style.visibility = 'visible';
}

export function displayRelatedQuestions(questions) {
  const section = document.getElementById('relatedQuestionsSection');
  const listContainer = document.getElementById('relatedQuestionsList');
  
  if (!questions || questions.length === 0) {
    if (section) section.style.display = 'none';
    return;
  }
  
  listContainer.innerHTML = '';
  
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
    
    questionBtn.addEventListener('click', () => {
      console.log('🔗 Related question clicked:', q);
      
      closeModal();
      
      const concatenatedQuestion = `${state.originalQuestion} | ${q}`;
      console.log('✅ Concatenated question:', concatenatedQuestion);
      
      domElements.userInput.value = concatenatedQuestion;
      
      setTimeout(() => {
        document.getElementById('submitBtn').click();
      }, 300);
    });
    
    listContainer.appendChild(questionBtn);
  });
  
  section.style.display = 'block';
}

export function updateHistoryBadge() {
  const badge = document.getElementById('historyBadge');
  const count = document.getElementById('historyCount');
  
  if (state.selectedQueryType === 'statistics' && state.conversationHistory && state.conversationHistory.length > 0) {
    badge.classList.remove('hidden');
    count.textContent = state.conversationHistory.length;
  } else {
    badge.classList.add('hidden');
  }
}

export function updateLastModifiedDate() {
  const lastModifiedElement = document.getElementById('lastModified');
  
  if (!lastModifiedElement) {
    console.warn('⚠️ lastModified element not found');
    return;
  }
  
  try {
    const lastModified = new Date(document.lastModified);
    
    if (isNaN(lastModified.getTime())) {
      const now = new Date();
      const formattedDate = now.toLocaleDateString('en-IN', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric'
      });
      lastModifiedElement.textContent = formattedDate;
    } else {
      const formattedDate = lastModified.toLocaleDateString('en-IN', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
      lastModifiedElement.textContent = formattedDate;
    }
    
  } catch (error) {
    console.error('❌ Error updating last modified:', error);
    lastModifiedElement.textContent = 'Recently updated';
  }
}

export function showToast(message, type = 'info') {
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

console.log('✅ ui-helpers.js loaded');
