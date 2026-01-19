// ============================================================================
// MAIN.JS - Main Initialization & Event Listeners
// ============================================================================

import { state, domElements, initDOMElements } from './config.js';
import { loadMasterFileData, sendQuestionToWebhook } from './api-services.js';
import { 
  switchMode, 
  loadCategories, 
  buildAllQuestionsList,
  displayAutocomplete,
  filterQuestions,
  showModal,
  closeModal,
  displayRelatedQuestions,
  updateHistoryBadge,
  updateLastModifiedDate
} from './ui-helpers.js';
import { initTTS, initVoiceRecognition, toggleVoiceRecording } from './tts-voice.js';

// ============================================================================
// INITIALIZATION
// ============================================================================

window.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Initializing DataVista...');
  
  // Initialize DOM elements
  initDOMElements();
  
  // Initialize TTS and Voice
  initTTS();
  initVoiceRecognition();
  
  // Initialize UI
  initializeEventListeners();
  initUserInputListener();
  initDropdownListeners();
  initLanguageButtons();
  initModalButtons();
  initVoiceButtons();
  
  // Update last modified date
  updateLastModifiedDate();
  
  // Force Data Mode on startup
  setTimeout(() => {
    switchMode('data');
    
    // Load data
    if (state.masterFileData.length === 0) {
      loadMasterFileData();
    }
    loadCategories();
    buildAllQuestionsList();
    
    console.log('✅ Startup complete: Find Haryana Data active, Quick Help hidden.');
  }, 100);
});

// ============================================================================
// EVENT LISTENERS
// ============================================================================

function initializeEventListeners() {
  // Mode toggle buttons
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
  
  // Submit button
  const submitBtn = document.getElementById('submitBtn');
  if (submitBtn) {
    submitBtn.addEventListener('click', handleSubmit);
  }
  
  console.log('✅ Event listeners initialized');
}

function initUserInputListener() {
  if (!domElements.userInput) return;
  
  domElements.userInput.addEventListener('input', function() {
    const query = this.value.trim();
    
    if (query.length < 2) {
      domElements.autocompleteDropdown.style.display = 'none';
      return;
    }
    
    if (state.selectedQueryType === 'data') {
      performFileSearch(query);
    } else {
      const matches = filterQuestions(query);
      displayAutocomplete(matches);
    }
  });

  domElements.userInput.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      domElements.autocompleteDropdown.style.display = 'none';
    }
  });
  
  console.log('✅ User input autocomplete initialized');
}

function initDropdownListeners() {
  if (!domElements.categorySelect || !domElements.questionSelect) return;
  
  domElements.categorySelect.addEventListener('change', function() {
    domElements.questionSelect.innerHTML = '<option value="" selected disabled>Select Question</option>';
    domElements.questionSelect.disabled = false;
    
    const selectedCategory = this.value;
    const categoryData = state.currentQuestions[selectedCategory];
    
    if (categoryData) {
      Object.keys(categoryData).forEach(subcategory => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = subcategory;
        
        categoryData[subcategory].forEach(question => {
          const option = document.createElement('option');
          option.value = question;
          option.textContent = question;
          optgroup.appendChild(option);
        });
        
        domElements.questionSelect.appendChild(optgroup);
      });
    }
  });

  domElements.questionSelect.addEventListener('change', function() {
    domElements.userInput.value = this.value;
    domElements.autocompleteDropdown.style.display = 'none';
  });
}

function initLanguageButtons() {
  document.querySelectorAll('.langBtn').forEach(btn => {
    btn.addEventListener('click', function() {
      state.selectedLanguage = this.getAttribute('data-lang');
      document.querySelectorAll('.langBtn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      loadCategories();
      buildAllQuestionsList();
    });
  });
}

function initModalButtons() {
  // Close buttons
  const closeBtn = document.getElementById('closeBtn');
  const closeModal2 = document.getElementById('closeModal');
  
  if (closeBtn) {
    closeBtn.onclick = closeModal;
  }
  
  if (closeModal2) {
    closeModal2.onclick = closeModal;
  }
  
  // New Topic button
  const newTopicBtn = document.getElementById('newTopicBtn');
  if (newTopicBtn) {
    newTopicBtn.onclick = () => {
      state.conversationHistory = [];
      updateHistoryBadge();
      alert('✨ Conversation history cleared! You can now start a new topic.');
      console.log('Conversation history cleared');
    };
  }
  
  // WhatsApp button
  const whatsappBtn = document.getElementById('whatsappBtn');
  if (whatsappBtn) {
    whatsappBtn.onclick = () => {
      const question = document.getElementById('modalQuestion').textContent;
      const answer = document.getElementById('modalAnswer').textContent;
      
      const message = `*Haryana DataVista - Statistical Assistant*\n\n*Question:*\n${question}\n\n*Answer:*\n${answer}\n\n_Generated by Haryana DataVista Chatbot_\n🔗 https://esaharyana.gov.in`;
      
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    };
  }
}

function initVoiceButtons() {
  const voiceBtn = document.getElementById('voiceBtn');
  if (voiceBtn) {
    voiceBtn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleVoiceRecording('userInput');
    });
  }
  
  const chatVoiceBtn = document.getElementById('chatVoiceBtn');
  if (chatVoiceBtn) {
    chatVoiceBtn.addEventListener('click', function() {
      toggleVoiceRecording('chatInput');
    });
  }
}

// ============================================================================
// MAIN SUBMIT HANDLER
// ============================================================================

async function handleSubmit() {
  const question = domElements.userInput.value.trim();
  
  if (!state.selectedQueryType) {
    alert('Please select either "Learn About Statistics" or "Find Haryana Data" first!');
    return;
  }
  
  if (!question) {
    alert('Please enter your question!');
    return;
  }
  
  // Route to chat interface for data mode
  if (state.selectedQueryType === 'data') {
    showChatInterface();
    
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
      chatInput.value = question;
      const resizeEvent = new Event('input');
      chatInput.dispatchEvent(resizeEvent);
    }
    
    setTimeout(() => {
      sendChatMessage();
    }, 300);
    
    domElements.userInput.value = '';
    return;
  }
  
  // Statistics mode - show modal
  if (!question.includes(' | ')) {
    state.originalQuestion = question;
    console.log('🔍 Saved original question:', state.originalQuestion);
  } else {
    state.originalQuestion = question.split(' | ')[0];
  }

  const mainContainer = document.querySelector('.container-main');
  if (mainContainer) mainContainer.style.visibility = 'hidden';

  speechSynthesis.cancel();
  
  showModal(question, 'Thinking...');
  domElements.autocompleteDropdown.style.display = 'none';

  try {
    const data = await sendQuestionToWebhook(question);
    
    const aiResponse = data.answer || data.error || 'No response received.';
    const disclaimer = "<br><br>────────────────<br>⚠️ <em>Disclaimer: This is an AI-generated response for guidance purposes only. Please verify important information from official sources.</em>";
    
    const formattedAnswer = aiResponse.replace(/\n/g, '<br>');
    const fullResponse = formattedAnswer + disclaimer;
    
    document.getElementById('modalAnswer').innerHTML = fullResponse;
    
    // Show/hide New Topic button
    const newTopicBtn = document.getElementById('newTopicBtn');
    if (newTopicBtn) {
      newTopicBtn.style.display = state.selectedQueryType === 'statistics' ? 'flex' : 'none';
    }
    
    // Add to conversation history
    state.conversationHistory.push({
      question: question,
      answer: aiResponse
    });
    
    if (state.conversationHistory.length > 5) {
      state.conversationHistory.shift();
    }
    
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
    
    if (relatedQuestions && Array.isArray(relatedQuestions) && relatedQuestions.length > 0) {
      displayRelatedQuestions(relatedQuestions);
    }
    
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
  }
}

// ============================================================================
// FILE SEARCH (for data mode)
// ============================================================================

function performFileSearch(query) {
  const dropdown = domElements.autocompleteDropdown;
  
  if (!query || query.length < 2) {
    dropdown.style.display = 'none';
    return;
  }
  
  const searchTerm = query.toLowerCase();
  const results = state.masterFileData.filter(item => 
    item.search_text.includes(searchTerm)
  ).slice(0, 15);
  
  if (results.length > 0) {
    displayFileAutocomplete(results, dropdown);
  } else {
    dropdown.innerHTML = '<div class="autocomplete-no-results">No matching questions found in Google Sheets</div>';
    dropdown.style.display = 'block';
  }
}

function displayFileAutocomplete(results, dropdown) {
  let html = '';
  
  results.forEach(item => {
    html += `
      <div class="autocomplete-item" data-question="${item.chapter_name}" data-item='${JSON.stringify(item)}'>
        <div style="font-weight: 600;">${item.chapter_name}</div>
      </div>
    `;
  });
  
  dropdown.innerHTML = html;
  dropdown.style.display = 'block';
  
  document.querySelectorAll('.autocomplete-item').forEach(element => {
    element.addEventListener('click', function() {
      const itemData = JSON.parse(this.getAttribute('data-item'));
      state.selectedFileItem = itemData;
      domElements.userInput.value = itemData.chapter_name;
      dropdown.style.display = 'none';
    });
  });
}

// ============================================================================
// CHAT INTERFACE (stub - to be implemented in chat.js)
// ============================================================================

function showChatInterface() {
  console.log('📱 Chat interface would open here');
  // Implementation in chat.js module
}

function sendChatMessage() {
  console.log('📤 Send chat message');
  // Implementation in chat.js module
}

// ============================================================================
// EXPORT FOR GLOBAL ACCESS
// ============================================================================

// Make key functions globally accessible
window.switchMode = switchMode;
window.toggleVoiceRecording = toggleVoiceRecording;

console.log('✅ main.js loaded - Application initialized');
