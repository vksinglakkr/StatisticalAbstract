// ============================================================================
// TTS-VOICE.JS - Text-to-Speech & Voice Recognition
// ============================================================================

import { ttsState, voiceState } from './config.js';

// ============================================================================
// TEXT-TO-SPEECH FUNCTIONS
// ============================================================================

export function initTTS() {
  const ttsBtn = document.getElementById('ttsToggle');
  const ttsLabel = document.getElementById('ttsLabel');

  if (!ttsBtn || !ttsLabel) {
    console.warn('⚠️ TTS elements not found');
    return;
  }

  ttsBtn.addEventListener('click', () => {
    if (ttsState.isSpeaking) {
      stopTTS();
      return;
    }
    
    startTTS();
  });
}

function startTTS() {
  ttsState.manualStop = false;
  const answerElement = document.getElementById('modalAnswer');
  
  if (!answerElement) {
    alert('No answer to read yet!');
    return;
  }
  
  const answerText = answerElement.textContent;
  
  if (!answerText || answerText === 'Thinking...') {
    alert('No answer to read yet!');
    return;
  }
  
  if (!('speechSynthesis' in window)) {
    alert('Text-to-speech is not supported in your browser.');
    return;
  }
  
  ttsState.utterance = new SpeechSynthesisUtterance(answerText);
  ttsState.utterance.rate = 0.9;
  ttsState.utterance.pitch = 1;
  ttsState.utterance.volume = 1;

  const voices = speechSynthesis.getVoices();
  const detectedLang = detectLanguage(answerText);
  
  console.log('🔍 Detected Language:', detectedLang);
  
  if (detectedLang === 'hi') {
    ttsState.utterance.lang = 'hi-IN';
    console.log('🔢 Language hint: Hindi');
  } else {
    ttsState.utterance.lang = 'en-US';
    console.log('🔢 Language hint: English');
  }
  
  console.log('📊 Available voices:', voices.length);
  
  if (voices.length > 0 && detectedLang === 'hi') {
    const hindiVoice = voices.find(voice => 
      voice.lang === 'hi-IN' || (voice.lang && voice.lang.startsWith('hi'))
    );
    
    if (hindiVoice) {
      ttsState.utterance.voice = hindiVoice;
      console.log('✅ Using installed Hindi voice:', hindiVoice.name);
    } else {
      console.log('ℹ️ No Hindi voice found - using system default (multilingual TTS)');
    }
  } else if (voices.length > 0 && detectedLang === 'en') {
    const englishVoice = voices.find(v => 
      v.lang === 'en-US' || v.lang === 'en-GB' || v.lang === 'en-IN'
    ) || voices.find(v => v.lang && v.lang.startsWith('en'));
    
    if (englishVoice) {
      ttsState.utterance.voice = englishVoice;
      console.log('✅ Using English voice:', englishVoice.name);
    }
  }
  
  console.log('🎤 Final TTS settings:');
  console.log('   Voice:', ttsState.utterance.voice?.name || 'System Default (Multilingual)');
  console.log('   Language:', ttsState.utterance.lang);
  console.log('   Text length:', answerText.length, 'characters');
  
  ttsState.utterance.onstart = () => {
    ttsState.isSpeaking = true;
    const ttsBtn = document.getElementById('ttsToggle');
    const ttsLabel = document.getElementById('ttsLabel');
    if (ttsBtn) ttsBtn.classList.add('speaking');
    if (ttsLabel) ttsLabel.textContent = 'Stop';
  };
  
  ttsState.utterance.onend = () => {
    if (!ttsState.manualStop) {
      ttsState.isSpeaking = false;
      const ttsBtn = document.getElementById('ttsToggle');
      const ttsLabel = document.getElementById('ttsLabel');
      if (ttsBtn) ttsBtn.classList.remove('speaking');
      if (ttsLabel) ttsLabel.textContent = 'Listen';
    }
  };
  
  ttsState.utterance.onerror = (e) => {
    if (ttsState.manualStop) {
      ttsState.manualStop = false;
      return;
    }
    
    ttsState.isSpeaking = false;
    const ttsBtn = document.getElementById('ttsToggle');
    const ttsLabel = document.getElementById('ttsLabel');
    if (ttsBtn) ttsBtn.classList.remove('speaking');
    if (ttsLabel) ttsLabel.textContent = 'Listen';
    
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
    speechSynthesis.speak(ttsState.utterance);
  } catch (error) {
    alert('Text-to-speech is not available on your device.');
  }
}

function stopTTS() {
  ttsState.manualStop = true;
  speechSynthesis.cancel();
  ttsState.isSpeaking = false;
  
  const ttsBtn = document.getElementById('ttsToggle');
  const ttsLabel = document.getElementById('ttsLabel');
  if (ttsBtn) ttsBtn.classList.remove('speaking');
  if (ttsLabel) ttsLabel.textContent = 'Listen';
}

function detectLanguage(text) {
  const cleanText = text.replace(/[।॥.,!?;:\-\_\n\r]/g, ' ').trim();
  const hindiCharCount = (cleanText.match(/[\u0900-\u097F]/g) || []).length;
  const englishCharCount = (cleanText.match(/[a-zA-Z]/g) || []).length;
  const totalChars = hindiCharCount + englishCharCount;
  
  if (totalChars === 0) return 'en';
  const hindiPercentage = (hindiCharCount / totalChars) * 100;
  
  return hindiPercentage > 30 ? 'hi' : 'en';
}

// ============================================================================
// VOICE RECOGNITION FUNCTIONS
// ============================================================================

export function initVoiceRecognition() {
  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    try {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      voiceState.recognition = new SpeechRecognition();
      voiceState.recognition.continuous = false;
      voiceState.recognition.interimResults = false;
      voiceState.recognition.lang = 'hi-IN';

      voiceState.recognition.onstart = () => {
        voiceState.isRecording = true;
        const voiceBtn = document.getElementById('voiceBtn');
        if (voiceBtn) {
          voiceBtn.classList.add('recording');
          voiceBtn.title = 'Recording... Click to stop';
        }
      };

      voiceState.recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        const userInput = document.getElementById('userInput');
        if (userInput) {
          userInput.value = transcript;
          userInput.dispatchEvent(new Event('input'));
        }
      };

      voiceState.recognition.onend = () => {
        voiceState.isRecording = false;
        const voiceBtn = document.getElementById('voiceBtn');
        if (voiceBtn) {
          voiceBtn.classList.remove('recording');
          voiceBtn.title = 'Click to speak';
        }
      };

      voiceState.recognition.onerror = (event) => {
        voiceState.isRecording = false;
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
      voiceState.recognition = null;
    }
  } else {
    console.warn('⚠️ Voice recognition not supported in this browser');
  }
}

export function toggleVoiceRecording(targetInputId = 'userInput') {
  if (!voiceState.recognition) {
    alert('Voice recognition is not supported in your browser.');
    return;
  }
  
  if (voiceState.isRecording) {
    voiceState.recognition.stop();
  } else {
    voiceState.recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      const targetInput = document.getElementById(targetInputId);
      if (targetInput) {
        targetInput.value = transcript;
        if (targetInputId === 'chatInput') {
          const autoResizeEvent = new Event('input');
          targetInput.dispatchEvent(autoResizeEvent);
        }
      }
    };
    
    try {
      voiceState.recognition.start();
    } catch (error) {
      console.error('❌ Failed to start recognition:', error);
      alert('Voice recognition failed. Please try again.');
    }
  }
}

console.log('✅ tts-voice.js loaded');
