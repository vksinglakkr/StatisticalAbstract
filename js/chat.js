// ============================================================================
// CHAT.JS - Complete Chat Interface Module
// ============================================================================

import { state } from './config.js';
import { sendQuestionToWebhook } from './api-services.js';

// ============================================================================
// CHAT INTERFACE FUNCTIONS
// ============================================================================

export function showChatInterface() {
  const chatInterface = document.getElementById('chatInterface');
  const mainContainer = document.querySelector('.container-main');
  
  if (chatInterface && mainContainer) {
    chatInterface.classList.add('active');
    mainContainer.style.display = 'none';
    state.isChatMode = true;
    
    setTimeout(() => {
      const chatInput = document.getElementById('chatInput');
      if (chatInput) chatInput.focus();
    }, 300);
  }
}

export function closeChatInterface() {
  const chatInterface = document.getElementById('chatInterface');
  const mainContainer = document.querySelector('.container-main');
  
  if (chatInterface && mainContainer) {
    chatInterface.classList.remove('active');
    mainContainer.style.display = 'block';
    state.isChatMode = false;
  }
}

export function addChatMessage(text, type = 'user') {
  const messagesContainer = document.getElementById('chatMessages');
  if (!messagesContainer) return;
  
  const messageWrapper = document.createElement('div');
  messageWrapper.className = `message-wrapper ${type}`;
  
  const messageBubble = document.createElement('div');
  messageBubble.className = 'message-bubble';
  
  const messageContent = document.createElement('p');
  messageContent.className = 'message-content';
  messageContent.innerHTML = text;
  
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
  
  state.chatMessages.push({ text, type, time: new Date() });
  
  updateMessageCount();
  scrollToBottom();
}

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

function hideTypingIndicator() {
  const typingIndicator = document.getElementById('typingIndicator');
  if (typingIndicator) typingIndicator.remove();
}

function updateMessageCount() {
  const messageCount = document.getElementById('messageCount');
  if (messageCount) {
    const count = state.chatMessages.length;
    messageCount.textContent = `${count} message${count !== 1 ? 's' : ''}`;
  }
}

function scrollToBottom() {
  const messagesContainer = document.getElementById('chatMessages');
  if (messagesContainer) {
    setTimeout(() => {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 100);
  }
}

export function clearChatHistory() {
  if (state.chatMessages.length === 0) {
    alert('Chat is already empty!');
    return;
  }
  
  if (confirm('Clear all chat messages? This cannot be undone.')) {
    state.chatMessages = [];
    
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

export async function sendChatMessage() {
  const chatInput = document.getElementById('chatInput');
  const question = chatInput.value.trim();
  
  if (!question) {
    alert('Please enter a question!');
    return;
  }
  
  addChatMessage(question, 'user');
  
  chatInput.value = '';
  autoResizeChatInput();
  
  showTypingIndicator();
  
  try {
    const data = await sendQuestionToWebhook(question);
    
    hideTypingIndicator();
    
    const aiResponse = data.answer || data.error || 'No response received.';
    addChatMessage(aiResponse, 'ai');
    
    if (!state.conversationHistory) {
      state.conversationHistory = [];
    }
    state.conversationHistory.push({
      question: question,
      answer: aiResponse
    });
    
    if (state.conversationHistory.length > 5) {
      state.conversationHistory.shift();
    }
    
    console.log('Updated conversation history:', state.conversationHistory);
    
  } catch (error) {
    console.error('Error:', error);
    hideTypingIndicator();
    addChatMessage('❌ Connection failed: ' + error.message, 'ai');
  }
}

export function handleChatKeydown(event) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    sendChatMessage();
  }
}

export function autoResizeChatInput() {
  const input = document.getElementById('chatInput');
  if (!input) return;
  
  input.style.height = 'auto';
  const newHeight = Math.min(input.scrollHeight, 120);
  input.style.height = newHeight + 'px';
}

export function askSampleQuestion(question) {
  const chatInput = document.getElementById('chatInput');
  if (chatInput) {
    chatInput.value = question;
    autoResizeChatInput();
    chatInput.focus();
  }
}

// Initialize chat event listeners
export function initChatListeners() {
  const chatInput = document.getElementById('chatInput');
  if (chatInput) {
    chatInput.addEventListener('keydown', handleChatKeydown);
    chatInput.addEventListener('input', autoResizeChatInput);
  }
  
  const sendBtn = document.getElementById('chatSendBtn');
  if (sendBtn) {
    sendBtn.addEventListener('click', sendChatMessage);
  }
  
  const closeChatBtn = document.getElementById('closeChatBtn');
  if (closeChatBtn) {
    closeChatBtn.addEventListener('click', closeChatInterface);
  }
  
  const clearHistoryBtn = document.getElementById('clearChatHistoryBtn');
  if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener('click', clearChatHistory);
  }
  
  console.log('✅ Chat listeners initialized');
}

// Make functions globally accessible
window.showChatInterface = showChatInterface;
window.closeChatInterface = closeChatInterface;
window.sendChatMessage = sendChatMessage;
window.clearChatHistory = clearChatHistory;
window.askSampleQuestion = askSampleQuestion;

console.log('✅ chat.js loaded');
