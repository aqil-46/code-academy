/* =============================================
   CODE ACADEMY - Storage Module
   LocalStorage management
   ============================================= */

const Storage = {
  KEY: 'codeacademy_save',

  getDefaultData() {
    return {
      player: {
        name: 'Programmer',
        hair: 'spiky',
        skin: 'light',
        color: '#6C5CE7',
        accessory: 'none'
      },
      progress: {
        currentLevel: 1,
        completedLevels: [],
        score: 0,
        maxScore: 0,
        hintsUsed: 0,
        correctAnswers: 0,
        totalQuestions: 0,
        startTime: null,
        endTime: null,
        difficulty: 'easy',
        completedDifficulties: []
      },
      achievements: {
        bugHunter: false,
        logicMaster: false,
        speedRunner: false,
        perfectRun: false,
        codingHero: false
      },
      settings: {
        music: true,
        sfx: true,
        particles: true,
        typingSpeed: 'normal'
      },
      timestamp: Date.now()
    };
  },

  load() {
    try {
      const data = localStorage.getItem(this.KEY);
      if (data) {
        const parsed = JSON.parse(data);
        // Merge with defaults to ensure all keys exist
        return this.mergeDefaults(parsed);
      }
    } catch (e) {
      console.warn('Failed to load save data:', e);
    }
    return this.getDefaultData();
  },

  save(data) {
    try {
      data.timestamp = Date.now();
      localStorage.setItem(this.KEY, JSON.stringify(data));
      return true;
    } catch (e) {
      console.warn('Failed to save data:', e);
      return false;
    }
  },

  mergeDefaults(parsed) {
    const defaults = this.getDefaultData();
    const merged = { ...defaults };
    
    // Deep merge player
    if (parsed.player) {
      merged.player = { ...defaults.player, ...parsed.player };
    }
    
    // Deep merge progress
    if (parsed.progress) {
      merged.progress = { ...defaults.progress, ...parsed.progress };
    }
    
    // Deep merge achievements
    if (parsed.achievements) {
      merged.achievements = { ...defaults.achievements, ...parsed.achievements };
    }
    
    // Deep merge settings
    if (parsed.settings) {
      merged.settings = { ...defaults.settings, ...parsed.settings };
    }
    
    return merged;
  },

  reset() {
    const defaultData = this.getDefaultData();
    this.save(defaultData);
    return defaultData;
  },

  getPlayer() {
    return this.load().player;
  },

  updatePlayer(updates) {
    const data = this.load();
    data.player = { ...data.player, ...updates };
    this.save(data);
    return data.player;
  },

  getProgress() {
    return this.load().progress;
  },

  updateProgress(updates) {
    const data = this.load();
    data.progress = { ...data.progress, ...updates };
    this.save(data);
    return data.progress;
  },

  getScore() {
    return this.load().progress.score;
  },

  addScore(points) {
    const data = this.load();
    data.progress.score += points;
    if (data.progress.score > 10000) {
      data.progress.score = 10000;
    }
    if (data.progress.score > data.progress.maxScore) {
      data.progress.maxScore = data.progress.score;
    }
    this.save(data);
    return data.progress.score;
  },

  completeLevel(levelNum) {
    const data = this.load();
    if (!data.progress.completedLevels.includes(levelNum)) {
      data.progress.completedLevels.push(levelNum);
    }
    if (levelNum >= data.progress.currentLevel) {
      data.progress.currentLevel = levelNum + 1;
    }
    this.save(data);
    return data.progress;
  },

  isLevelUnlocked(levelNum) {
    const data = this.load();
    return levelNum <= data.progress.currentLevel;
  },

  isLevelCompleted(levelNum) {
    return this.load().progress.completedLevels.includes(levelNum);
  },

  getBadge(score) {
    if (score >= 3000) return { icon: 'emoji_events', name: 'Coding Master', tier: 1 };
    if (score >= 2000) return { icon: 'military_tech', name: 'Logic Hero', tier: 2 };
    if (score >= 1200) return { icon: 'workspace_premium', name: 'Future Programmer', tier: 3 };
    if (score >= 500) return { icon: 'explore', name: 'Explorer', tier: 4 };
    return { icon: 'school', name: 'Beginner', tier: 5 };
  },

  checkAchievements(progress) {
    const achievements = { ...this.load().achievements };
    
    // Bug Hunter: Complete Debug Room (Level 6)
    if (progress.completedLevels.includes(6)) {
      achievements.bugHunter = true;
    }
    
    // Logic Master: Complete all levels (1-10)
    if (progress.completedLevels.length >= 10) {
      achievements.logicMaster = true;
    }
    
    // Speed Runner: Complete under 5 minutes
    if (progress.startTime && progress.endTime) {
      const duration = (progress.endTime - progress.startTime) / 1000 / 60;
      if (duration < 5) {
        achievements.speedRunner = true;
      }
    }
    
    // Perfect Run: Score 3000+
    if (progress.score >= 3000) {
      achievements.perfectRun = true;
    }
    
    // Coding Hero: All achievements
    const allAchievements = Object.values(achievements).every(v => v === true);
    if (allAchievements) {
      achievements.codingHero = true;
    }
    
    const data = this.load();
    data.achievements = achievements;
    this.save(data);
    
    return achievements;
  },

  getSettings() {
    return this.load().settings;
  },

  updateSettings(updates) {
    const data = this.load();
    data.settings = { ...data.settings, ...updates };
    this.save(data);
    return data.settings;
  },

  startGame() {
    const data = this.load();
    data.progress.startTime = Date.now();
    data.progress.currentLevel = 1;
    data.progress.completedLevels = [];
    data.progress.score = 0;
    data.progress.hintsUsed = 0;
    data.progress.correctAnswers = 0;
    data.progress.totalQuestions = 0;
    data.progress.difficulty = data.progress.difficulty || 'easy';
    data.progress.completedDifficulties = [];
    data.achievements = this.getDefaultData().achievements;
    this.save(data);
    return data;
  },

  endGame() {
    const data = this.load();
    data.progress.endTime = Date.now();
    this.save(data);
    return data.progress;
  },

  getDuration() {
    const data = this.load();
    if (data.progress.startTime && data.progress.endTime) {
      return data.progress.endTime - data.progress.startTime;
    }
    return 0;
  },

  formatDuration(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  },

  getAccuracy() {
    const data = this.load();
    if (data.progress.totalQuestions === 0) return 0;
    return Math.round((data.progress.correctAnswers / data.progress.totalQuestions) * 100);
  },

  getDifficulty() {
    return this.load().progress.difficulty || 'easy';
  },

  setDifficulty(diff) {
    const data = this.load();
    data.progress.difficulty = diff;
    this.save(data);
  },

  advanceDifficulty() {
    const order = ['easy', 'normal', 'hard'];
    const data = this.load();
    const current = data.progress.difficulty || 'easy';
    const idx = order.indexOf(current);
    if (!data.progress.completedDifficulties.includes(current)) {
      data.progress.completedDifficulties.push(current);
    }
    if (idx < order.length - 1) {
      data.progress.difficulty = order[idx + 1];
      data.progress.currentLevel = 1;
      data.progress.completedLevels = [];
      data.progress.hintsUsed = 0;
      this.save(data);
      return order[idx + 1];
    }
    this.save(data);
    return null;
  }
};
