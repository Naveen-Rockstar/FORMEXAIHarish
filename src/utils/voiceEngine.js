/**
 * FORMEXAI — Voice Generation Engine Abstraction
 * Generates natural two-speaker conversations (Customer + Formexai AI Receptionist).
 * 
 * Architecture:
 * - Isolated from the UI layer
 * - Uses Web SpeechSynthesis with distinct voice personas for Customer vs Formexai
 * - Fallback pacing timer if speech synthesis is muted, blocked, or unavailable
 * - Clean interface ready for drop-in production TTS provider (ElevenLabs / Deepgram / OpenAI)
 */

class VoiceEngineService {
  constructor() {
    this.isSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;
    this.voices = [];
    this.formexaiVoice = null;
    this.customerVoice = null;
    this.currentUtterance = null;
    this.fallbackTimer = null;
    this.isPaused = false;
    this.onVoicesReady = null;

    if (this.isSupported) {
      this.initVoices();
      window.speechSynthesis.onvoiceschanged = () => this.initVoices();
    }
  }

  initVoices() {
    if (!this.isSupported) return;
    this.voices = window.speechSynthesis.getVoices();
    if (!this.voices || this.voices.length === 0) return;

    // Filter English voices
    const englishVoices = this.voices.filter((v) => v.lang && v.lang.startsWith('en'));

    // 1. Pick Formexai Receptionist Voice (Articulate, clear, professional female or neutral)
    const preferredAi = [
      'Samantha',
      'Google US English',
      'Microsoft Zira',
      'Karen',
      'Victoria',
      'Moira',
      'Fiona'
    ];
    this.formexaiVoice =
      englishVoices.find((v) => preferredAi.some((name) => v.name.includes(name))) ||
      englishVoices.find((v) => v.name.toLowerCase().includes('female')) ||
      englishVoices[0] ||
      null;

    // 2. Pick Customer Voice (Distinct from Formexai, male or casual cadence)
    const preferredCustomer = [
      'Alex',
      'Daniel',
      'Google UK English Male',
      'Microsoft David',
      'Fred',
      'Oliver',
      'Arthur'
    ];
    this.customerVoice =
      englishVoices.find((v) => v !== this.formexaiVoice && preferredCustomer.some((name) => v.name.includes(name))) ||
      englishVoices.find((v) => v !== this.formexaiVoice && v.name.toLowerCase().includes('male')) ||
      englishVoices.find((v) => v !== this.formexaiVoice) ||
      englishVoices[0] ||
      null;

    if (this.onVoicesReady) {
      this.onVoicesReady();
    }
  }

  /**
   * Speak a dialogue turn with speaker-specific characteristics
   * @param {Object} params
   * @param {'receptionist'|'caller'} params.role
   * @param {string} params.text
   * @param {Function} params.onStart
   * @param {Function} params.onEnd
   */
  speakTurn({ role, text, onStart, onEnd }) {
    this.cancel();

    if (!text || !text.trim()) {
      if (onEnd) onEnd();
      return;
    }

    // If SpeechSynthesis is unavailable, simulate natural speaking duration
    if (!this.isSupported || !window.speechSynthesis) {
      if (onStart) onStart();
      const wordCount = text.split(/\s+/).length;
      const durationMs = Math.max(1800, wordCount * 320);
      this.fallbackTimer = setTimeout(() => {
        if (onEnd) onEnd();
      }, durationMs);
      return;
    }

    try {
      // Create synthesis utterance
      const utterance = new SpeechSynthesisUtterance(text);

      if (role === 'receptionist') {
        // Formexai Voice Profile: Calm, confident, articulate
        if (this.formexaiVoice) utterance.voice = this.formexaiVoice;
        utterance.pitch = 1.05;
        utterance.rate = 1.0;
        utterance.volume = 1.0;
      } else {
        // Customer Voice Profile: Natural customer cadence
        if (this.customerVoice) utterance.voice = this.customerVoice;
        utterance.pitch = 0.92;
        utterance.rate = 1.04;
        utterance.volume = 0.95;
      }

      let hasEnded = false;
      const completeTurn = () => {
        if (hasEnded) return;
        hasEnded = true;
        this.currentUtterance = null;
        if (onEnd) onEnd();
      };

      let started = false;
      utterance.onstart = () => {
        started = true;
        if (onStart) onStart();
      };

      utterance.onend = () => {
        completeTurn();
      };

      utterance.onerror = (e) => {
        if (e.error !== 'canceled') {
          completeTurn();
        }
      };

      this.currentUtterance = utterance;
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
      window.speechSynthesis.speak(utterance);

      // Safari unblocker: if onstart hasn't fired within 350ms, ensure onStart() is called so UI is responsive
      setTimeout(() => {
        if (!started && !hasEnded) {
          started = true;
          if (onStart) onStart();
        }
      }, 350);

      // Safety timeout guard: Web SpeechSynthesis sometimes stalls on long utterances in certain browsers
      const wordCount = text.split(/\s+/).length;
      const maxExpectedMs = Math.max(3500, wordCount * 550);
      this.fallbackTimer = setTimeout(() => {
        if (!hasEnded) {
          if (window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
          }
          completeTurn();
        }
      }, maxExpectedMs);

    } catch (err) {
      console.warn('VoiceEngine error, falling back to timer:', err);
      if (onStart) onStart();
      const wordCount = text.split(/\s+/).length;
      const durationMs = Math.max(1800, wordCount * 320);
      this.fallbackTimer = setTimeout(() => {
        if (onEnd) onEnd();
      }, durationMs);
    }
  }

  cancel() {
    if (this.fallbackTimer) {
      clearTimeout(this.fallbackTimer);
      this.fallbackTimer = null;
    }
    if (this.isSupported && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    this.currentUtterance = null;
  }

  pause() {
    if (this.isSupported && window.speechSynthesis && window.speechSynthesis.speaking) {
      window.speechSynthesis.pause();
    }
  }

  resume() {
    if (this.isSupported && window.speechSynthesis && window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }
  }
}

export const VoiceEngine = new VoiceEngineService();
