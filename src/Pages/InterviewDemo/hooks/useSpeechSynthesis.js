import { useState, useEffect, useRef, useCallback } from 'react';

export const useSpeechSynthesis = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  // Store voices in state to trigger re-renders when they load
  const [voices, setVoices] = useState([]);
  const synthRef = useRef(null);

  useEffect(() => {
    // Initialize the speech synthesis API
    const synth = window.speechSynthesis;
    synthRef.current = synth;

    const updateVoices = () => {
      setVoices(synth.getVoices());
    };

    // Load voices immediately if available
    updateVoices();
    
    // Subscribe to the event that fires when voices are loaded
    synth.addEventListener('voiceschanged', updateVoices);

    // Cleanup function
    return () => {
      synth.removeEventListener('voiceschanged', updateVoices);
      if (synth.speaking) {
        synth.cancel(); // Stop any speech on unmount
      }
    };
  }, []);

  const speak = useCallback((text) => {
    if (!synthRef.current || !text) {
      console.error("Speech Synthesis not available or no text provided.");
      return;
    }

    // Cancel any ongoing speech to prevent overlap
    if (synthRef.current.speaking) {
      synthRef.current.cancel();
    }
    
    const utterance = new SpeechSynthesisUtterance(text);

    // --- Voice Selection ---
    // Use the voices from the state, which are guaranteed to be loaded
    let selectedVoice = voices.find(voice => voice.name === 'Google US English');
    if (!selectedVoice) {
      selectedVoice = voices.find(voice => voice.lang === 'en-US' && !voice.name.includes('Google'));
    }
     if (!selectedVoice) {
      selectedVoice = voices.find(voice => voice.lang === 'en-US');
    }
    
    utterance.voice = selectedVoice || voices[0]; // Fallback to first available
    utterance.pitch = 1;
    utterance.rate = 0.95;
    utterance.volume = 1;

    // Set state correctly on start and end
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = (event) => {
      console.error("SpeechSynthesisUtterance.onerror", event);
      setIsSpeaking(false);
    };

    synthRef.current.speak(utterance);
  }, [voices]); // Depend on voices, so it re-renders with the correct voice list
  
  const stop = useCallback(() => {
    if (synthRef.current) {
        // Calling cancel will trigger the 'onend' event of the utterance,
        // which will then set isSpeaking to false.
        synthRef.current.cancel();
        // We can also set it manually for immediate feedback, just in case.
        setIsSpeaking(false);
    }
  }, []);

  return { speak, stop, isSpeaking };
};