// src/Pages/InterviewDemo/hooks/useSpeechSynthesis.js
import { useState, useEffect, useRef } from 'react';

export const useSpeechSynthesis = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const synthRef = useRef(null);

  useEffect(() => {
    // Initialize the speech synthesis API
    synthRef.current = window.speechSynthesis;

    // The voices load asynchronously. We need an event listener
    // to know when they are available to be used.
    const handleVoicesChanged = () => {
      // No action needed here, but this event ensures voices are loaded.
      // We can log them for debugging if needed.
      // console.log(synthRef.current.getVoices());
    };

    if (synthRef.current) {
      synthRef.current.addEventListener('voiceschanged', handleVoicesChanged);
    }
    
    // Cleanup function to remove the event listener
    return () => {
      if (synthRef.current) {
        synthRef.current.removeEventListener('voiceschanged', handleVoicesChanged);
        // Ensure any ongoing speech is stopped when the component unmounts
        synthRef.current.cancel();
      }
    };
  }, []);

  const speak = (text) => {
    if (!synthRef.current || !text) {
      console.error("Speech Synthesis not available or no text provided.");
      return;
    }

    // If it's already speaking, stop the current utterance before starting a new one
    if (isSpeaking) {
      synthRef.current.cancel();
    }
    
    // Create a new speech utterance
    const utterance = new SpeechSynthesisUtterance(text);

    // --- Voice Selection for a Professional Sound ---
    // We try to find a clear, high-quality voice.
    const voices = synthRef.current.getVoices();
    let selectedVoice = voices.find(voice => voice.name.includes('Google US English'));
    if (!selectedVoice) {
      selectedVoice = voices.find(voice => voice.lang === 'en-US');
    }
    utterance.voice = selectedVoice || voices[0]; // Fallback to the first available voice
    utterance.pitch = 1;
    utterance.rate = 0.95; // Slightly slower for better clarity
    utterance.volume = 1;

    // Event listeners for the utterance itself
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    // Speak the text
    synthRef.current.speak(utterance);
  };
  
  const stop = () => {
      if (synthRef.current && isSpeaking) {
          synthRef.current.cancel();
          setIsSpeaking(false);
      }
  }

  return { speak, stop, isSpeaking };
};