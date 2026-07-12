/* =============================================
   CODE ACADEMY - Main Game Engine
   ============================================= */

const Game = {
  currentScreen: null,
  toastTimeout: null,
  audioContext: null,
  timerInterval: null,
  timerSeconds: 0,

  diffLabels: { easy: 'Easy', normal: 'Normal', hard: 'Hard' },
  diffColors: { easy: 'var(--success)', normal: 'var(--warning)', hard: 'var(--danger)' },

  // ========== INITIALIZATION ==========
  init() {
    const data = Storage.load();

    this.setupNavigation();
    this.setupSettings();

    if (data.progress.startTime && data.progress.completedLevels.length > 0) {
      this.showScreen('world-screen');
      this.updateWorldMap();
    } else {
      this.showScreen('opening-screen');
    }

    this.setupKeyboard();
    this.initAudio();
  },

  setupNavigation() {
    document.getElementById('btn-settings').addEventListener('click', () => {
      document.getElementById('settings-modal').classList.add('active');
    });

    document.getElementById('btn-close-settings').addEventListener('click', () => {
      document.getElementById('settings-modal').classList.remove('active');
    });

    document.getElementById('btn-hint').addEventListener('click', () => {
      Levels.useHint();
    });

    document.querySelector('#world-screen .btn-back').addEventListener('click', () => {
      this.showScreen('opening-screen');
    });

    document.querySelectorAll('.toggle').forEach(toggle => {
      toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        const setting = toggle.dataset.setting;
        const value = toggle.classList.contains('active');
        Storage.updateSettings({ [setting]: value });
      });
    });
  },

  setupSettings() {
    const settings = Storage.getSettings();
    document.querySelectorAll('.toggle').forEach(toggle => {
      const setting = toggle.dataset.setting;
      if (settings[setting]) toggle.classList.add('active');
      else toggle.classList.remove('active');
    });
  },

  setupKeyboard() {
    document.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'h': case 'H': Levels.useHint(); break;
        case 'm': case 'M': this.updateWorldMap(); this.showScreen('world-screen'); break;
        case 'Escape':
          document.querySelectorAll('.modal-overlay.active').forEach(m => m.classList.remove('active'));
          break;
      }
    });
  },

  // ========== TIMER ==========
  startTimer() {
    this.timerSeconds = 0;
    this.updateTimerDisplay();
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.timerSeconds++;
      this.updateTimerDisplay();
    }, 1000);
  },

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  },

  updateTimerDisplay() {
    const timerEl = document.getElementById('level-timer');
    if (timerEl) {
      const mins = Math.floor(this.timerSeconds / 60);
      const secs = this.timerSeconds % 60;
      timerEl.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
  },

  // ========== SCREEN MANAGEMENT ==========
  showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));

    const target = document.getElementById(screenId);
    if (target) {
      target.classList.add('active');
      this.currentScreen = screenId;
    }

    switch (screenId) {
      case 'character-screen': CharacterCreator.init(); break;
      case 'world-screen': this.updateWorldMap(); break;
    }
  },

  // ========== DIFFICULTY SELECTION ==========
  selectDifficulty(diff) {
    Storage.setDifficulty(diff);
    Storage.startGame();
    this.startTimer();
    this.updateWorldMap();
    this.showScreen('world-screen');
    this.showToast(`Tingkat kesulitan: ${this.diffLabels[diff]}`, 'info');
  },

  // ========== WORLD MAP ==========
  updateWorldMap() {
    const map = document.getElementById('world-map-nodes');
    const diff = Storage.getDifficulty();
    const levelInfo = [
      { num: 1, name: 'Welcome', icon: Icons.span(Icons.play, '32', 'var(--secondary)') },
      { num: 2, name: 'Variable Room', icon: Icons.span(Icons.box, '32', 'var(--accent)') },
      { num: 3, name: 'Input Output', icon: Icons.span(Icons.shuffle, '32', 'var(--secondary)') },
      { num: 4, name: 'If Else', icon: Icons.span(Icons.gitBranch, '32', 'var(--warning)') },
      { num: 5, name: 'Loop Factory', icon: Icons.span(Icons.repeat, '32', 'var(--secondary)') },
      { num: 6, name: 'Debug Room', icon: Icons.span(Icons.bug, '32', 'var(--accent)') },
      { num: 7, name: 'Function', icon: Icons.span(Icons.cpu, '32', 'var(--info)') },
      { num: 8, name: 'Array Room', icon: Icons.span(Icons.database, '32', 'var(--info)') },
      { num: 9, name: 'Object Lab', icon: Icons.span(Icons.cpu, '32', 'var(--warning)') },
      { num: 10, name: 'Boss Battle', icon: Icons.span(Icons.sword, '32', 'var(--danger)') }
    ];

    map.innerHTML = levelInfo.map(info => {
      const unlocked = Storage.isLevelUnlocked(info.num);
      const completed = Storage.isLevelCompleted(info.num);
      const current = info.num === Storage.getProgress().currentLevel;

      let statusClass = 'locked';
      let statusText = `${Icons.mat('lock', '14')} Terkunci`;

      if (completed) {
        statusClass = 'completed';
        statusText = `${Icons.mat('check_circle', '14')} Selesai`;
      } else if (current && unlocked) {
        statusClass = 'current';
        statusText = `${Icons.mat('play_arrow', '14')} Mainkan`;
      } else if (unlocked) {
        statusClass = '';
        statusText = `${Icons.mat('play_arrow', '14')} Mainkan`;
      }

      return `
        <div class="map-node ${statusClass}" onclick="${unlocked || completed ? `Game.startLevel(${info.num})` : ''}">
          <div class="node-icon">${info.icon}</div>
          <div class="node-name">${info.name}</div>
          <div class="node-status">${statusText}</div>
        </div>
      `;
    }).join('');

    // Update HUD
    document.getElementById('hud-score').textContent = Storage.getScore();
    document.getElementById('hud-level').textContent = `Level ${Storage.getProgress().currentLevel}`;

    const player = Storage.getPlayer();
    document.getElementById('hud-player').textContent = player.name;

    // Update difficulty badge in HUD
    const diffBadge = document.getElementById('hud-difficulty');
    if (diffBadge) {
      diffBadge.textContent = this.diffLabels[diff] || 'Easy';
      diffBadge.style.color = this.diffColors[diff] || 'var(--success)';
    }
  },

  // ========== LEVEL MANAGEMENT ==========
  startLevel(levelNum) {
    if (levelNum === 10) {
      const completed = Storage.getProgress().completedLevels;
      if (completed.length < 9) {
        this.showToast('Selesaikan 9 level dulu!', 'warning');
        return;
      }
    }

    Levels.init(levelNum);
  },

  completeLevel(levelNum) {
    Storage.completeLevel(levelNum);

    if (levelNum > 1 && Storage.isLevelCompleted(levelNum - 1)) {
      Storage.addScore(50);
      this.showToast('Combo bonus +50!', 'success');
    }

    this.createConfetti();

    if (levelNum < 10) {
      setTimeout(() => {
        this.updateWorldMap();
        const nextLevel = levelNum + 1;
        if (nextLevel <= 10) {
          this.showToast(`Lanjut ke Level ${nextLevel}...`, 'info');
          setTimeout(() => this.startLevel(nextLevel), 800);
        }
      }, 2000);
    }
  },

  // Called from Levels.afterBoss()
  afterBossComplete() {
    const nextDiff = Storage.advanceDifficulty();
    if (nextDiff) {
      this.showDifficultyTransition(nextDiff);
    } else {
      this.showScoreScreen();
    }
  },

  showDifficultyTransition(nextDiff) {
    const label = this.diffLabels[nextDiff];
    const color = this.diffColors[nextDiff];
    const content = document.getElementById('transition-content');

    content.innerHTML = `
      <div style="margin-bottom: 24px;">${Icons.mat('celebration', '64')}</div>
      <h2 class="gradient-text glow-text" style="margin-bottom: 12px;">TINGKAT SELESAI!</h2>
      <p style="color: var(--text-secondary); margin-bottom: 24px; font-size: 1rem;">
        Kamu berhasil menyelesaikan semua level!<br>Siap untuk tantangan berikutnya?
      </p>
      <div style="display: inline-block; padding: 12px 28px; border-radius: 12px; background: rgba(255,255,255,0.05); border: 1px solid ${color}; margin-bottom: 24px;">
        <span style="font-family: var(--pixel-font); font-size: 0.7rem; color: ${color}; letter-spacing: 2px;">
          ${Icons.mat('arrow_upward', '20')} NEXT: ${label.toUpperCase()}
        </span>
      </div>
      <br>
      <button class="btn btn-primary btn-lg" onclick="Game.startNextDifficulty('${nextDiff}')">
        ${Icons.mat('rocket_launch', '20')} Lanjut ke ${label}!
      </button>
      <br><br>
      <button class="btn btn-ghost btn-sm" onclick="Game.showScoreScreen()">
        ${Icons.mat('assessment', '16')} Lihat Skor Dulu
      </button>
    `;

    this.createConfetti();
    this.showScreen('difficulty-transition-screen');
  },

  startNextDifficulty(diff) {
    this.startTimer();
    this.updateWorldMap();
    this.showScreen('world-screen');
    this.showToast(`Tingkat ${this.diffLabels[diff]} dimulai!`, 'success');
  },

  addScore(points) {
    const newScore = Storage.addScore(points);
    Storage.updateProgress({
      totalQuestions: Storage.getProgress().totalQuestions + 1,
      correctAnswers: Storage.getProgress().correctAnswers + 1
    });

    const scoreEl = document.getElementById('level-score-value');
    if (scoreEl) {
      scoreEl.textContent = newScore;
      scoreEl.style.transition = 'transform 0.2s';
      scoreEl.style.transform = 'scale(1.3)';
      setTimeout(() => { scoreEl.style.transform = 'scale(1)'; }, 200);
    }
  },

  // ========== SCORE SCREEN ==========
  showScoreScreen() {
    Storage.endGame();
    const progress = Storage.getProgress();
    const badge = Storage.getBadge(progress.score);
    const achievements = Storage.load().achievements;
    const duration = Storage.getDuration();
    const accuracy = Storage.getAccuracy();

    document.getElementById('final-score').textContent = progress.score;
    document.getElementById('final-accuracy').textContent = `${accuracy}%`;
    document.getElementById('final-time').textContent = Storage.formatDuration(duration);
    document.getElementById('final-badge').innerHTML = `<span class="material-symbols-outlined" style="font-size: 18px; vertical-align: middle;">${badge.icon}</span> ${badge.name}`;

    const badges = [
      { mat: 'emoji_events', name: 'Coding Master', condition: progress.score >= 3000 },
      { mat: 'military_tech', name: 'Logic Hero', condition: progress.score >= 2000 },
      { mat: 'workspace_premium', name: 'Future Programmer', condition: progress.score >= 1200 },
      { mat: 'explore', name: 'Explorer', condition: progress.score >= 500 },
      { mat: 'school', name: 'Beginner', condition: progress.score < 500 }
    ];

    const badgeContainer = document.getElementById('badge-display');
    badgeContainer.innerHTML = badges.map(b => `
      <div class="badge-item ${b.condition ? 'earned' : 'locked'}">
        <div class="badge-icon"><span class="material-symbols-outlined" style="font-size: 32px;">${b.mat}</span></div>
        <div class="badge-name">${b.name}</div>
      </div>
    `).join('');

    const achievementList = [
      { id: 'bugHunter', mat: 'bug_report', name: 'Bug Hunter', earned: achievements.bugHunter },
      { id: 'logicMaster', mat: 'psychology', name: 'Logic Master', earned: achievements.logicMaster },
      { id: 'speedRunner', mat: 'bolt', name: 'Speed Runner', earned: achievements.speedRunner },
      { id: 'perfectRun', mat: 'diamond', name: 'Perfect Run', earned: achievements.perfectRun },
      { id: 'codingHero', mat: 'star', name: 'Coding Hero', earned: achievements.codingHero }
    ];

    const achContainer = document.getElementById('achievement-list');
    achContainer.innerHTML = achievementList.map(a => `
      <div class="achievement-chip ${a.earned ? 'earned' : 'locked'}">
        <span class="material-symbols-outlined" style="font-size: 16px; vertical-align: middle; margin-right: 4px;">${a.mat}</span> ${a.name}
      </div>
    `).join('');

    // Show completed difficulties
    const completedDiffs = progress.completedDifficulties || [];
    const diffDisplay = document.getElementById('completed-difficulties');
    if (diffDisplay) {
      diffDisplay.innerHTML = ['easy', 'normal', 'hard'].map(d => {
        const done = completedDiffs.includes(d);
        return `<span class="achievement-chip ${done ? 'earned' : 'locked'}" style="margin: 2px;">
          <span class="material-symbols-outlined" style="font-size: 14px; vertical-align: middle;">${done ? 'check_circle' : 'radio_button_unchecked'}</span>
          ${this.diffLabels[d]}
        </span>`;
      }).join('');
    }

    this.createConfetti();
    this.showScreen('score-screen');

    setTimeout(() => {
      const playerName = Storage.getPlayer().name || 'Programmer';
      Leaderboard.addAndRender(playerName, progress.score, accuracy, badge.name, 'leaderboard-container');
    }, 500);
  },

  // ========== CERTIFICATE ==========
  showCertificate() {
    const progress = Storage.getProgress();
    const player = Storage.getPlayer();
    const badge = Storage.getBadge(progress.score);
    const duration = Storage.getDuration();
    const accuracy = Storage.getAccuracy();

    document.getElementById('cert-name').textContent = player.name;
    document.getElementById('cert-badge').innerHTML = `<span class="material-symbols-outlined" style="font-size: 24px; vertical-align: middle;">${badge.icon}</span> ${badge.name}`;
    document.getElementById('cert-score').textContent = progress.score;
    document.getElementById('cert-accuracy').textContent = `${accuracy}%`;
    document.getElementById('cert-time').textContent = Storage.formatDuration(duration);
    document.getElementById('cert-date').textContent = new Date().toLocaleDateString('id-ID', {
      year: 'numeric', month: 'long', day: 'numeric'
    });

    this.showScreen('certificate-screen');
  },

  downloadCertificate() {
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 600;
    const ctx = canvas.getContext('2d');

    const player = Storage.getPlayer();
    const progress = Storage.getProgress();
    const badge = Storage.getBadge(progress.score);
    const duration = Storage.getDuration();
    const accuracy = Storage.getAccuracy();

    const gradient = ctx.createLinearGradient(0, 0, 800, 600);
    gradient.addColorStop(0, '#1a1a3e');
    gradient.addColorStop(1, '#0a0a1a');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 800, 600);

    ctx.strokeStyle = '#6C5CE7';
    ctx.lineWidth = 4;
    ctx.strokeRect(20, 20, 760, 560);
    ctx.strokeStyle = '#00CEC9';
    ctx.lineWidth = 2;
    ctx.strokeRect(30, 30, 740, 540);

    ctx.fillStyle = '#00CEC9';
    ctx.font = 'bold 36px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('CODE ACADEMY', 400, 100);

    ctx.fillStyle = '#ffffff';
    ctx.font = '24px Arial';
    ctx.fillText('Certificate of Completion', 400, 145);

    ctx.fillStyle = '#a0a0d0';
    ctx.font = '18px Arial';
    ctx.fillText('This certifies that', 400, 200);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 32px Arial';
    ctx.fillText(player.name, 400, 255);

    ctx.fillStyle = '#a0a0d0';
    ctx.font = '18px Arial';
    ctx.fillText('has successfully completed all programming challenges', 400, 300);
    ctx.fillText('and saved Code Academy from the Bug King!', 400, 330);

    ctx.fillStyle = '#6C5CE7';
    ctx.font = '16px Arial';
    ctx.fillText(`Score: ${progress.score}  |  Accuracy: ${accuracy}%  |  Time: ${Storage.formatDuration(duration)}`, 400, 400);
    ctx.fillText(`Badge: ${badge.name}`, 400, 430);

    ctx.fillStyle = '#a0a0d0';
    ctx.font = '14px Arial';
    ctx.fillText(new Date().toLocaleDateString('id-ID', {
      year: 'numeric', month: 'long', day: 'numeric'
    }), 400, 500);

    const link = document.createElement('a');
    link.download = `CodeAcademy_Certificate_${player.name}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();

    this.showToast('Sertifikat berhasil diunduh!', 'success');
  },

  // ========== TOAST SYSTEM ==========
  showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const icons = { success: 'check_circle', error: 'cancel', warning: 'warning', info: 'lightbulb' };

    toast.innerHTML = `
      <span class="material-symbols-outlined" style="font-size: 20px;">${icons[type] || 'notifications'}</span>
      <span>${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  },

  // ========== CONFETTI EFFECT ==========
  createConfetti() {
    const screen = document.querySelector('.screen.active');
    if (!screen) return;

    const colors = ['#6C5CE7', '#00CEC9', '#FD79A8', '#FDCB6E', '#00B894', '#74B9FF'];

    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti-piece';
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.top = '-10px';
      confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.width = `${Math.random() * 6 + 4}px`;
      confetti.style.height = `${Math.random() * 6 + 4}px`;
      confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      confetti.style.animationDuration = `${Math.random() * 2 + 2}s`;
      confetti.style.animationDelay = `${Math.random() * 0.5}s`;

      screen.appendChild(confetti);
      setTimeout(() => confetti.remove(), 4000);
    }
  },

  // ========== AUDIO SYSTEM ==========
  initAudio() {
    try {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      console.warn('Audio not available');
    }
  },

  playSound(type) {
    if (!Storage.getSettings().sfx || !this.audioContext) return;

    try {
      const ctx = this.audioContext;
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      gainNode.gain.value = 0.1;

      switch (type) {
        case 'correct':
          oscillator.frequency.value = 523.25;
          oscillator.type = 'sine';
          gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
          oscillator.start(ctx.currentTime);
          oscillator.stop(ctx.currentTime + 0.3);

          const osc2 = ctx.createOscillator();
          const gain2 = ctx.createGain();
          osc2.connect(gain2);
          gain2.connect(ctx.destination);
          gain2.gain.value = 0.1;
          osc2.frequency.value = 659.25;
          osc2.type = 'sine';
          gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
          osc2.start(ctx.currentTime + 0.15);
          osc2.stop(ctx.currentTime + 0.5);
          break;

        case 'wrong':
          oscillator.frequency.value = 200;
          oscillator.type = 'sawtooth';
          gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
          oscillator.start(ctx.currentTime);
          oscillator.stop(ctx.currentTime + 0.3);
          break;

        case 'click':
          oscillator.frequency.value = 800;
          oscillator.type = 'sine';
          gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
          oscillator.start(ctx.currentTime);
          oscillator.stop(ctx.currentTime + 0.05);
          break;

        case 'victory':
          const notes = [523.25, 587.33, 659.25, 783.99, 1046.5];
          notes.forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            gain.gain.value = 0.08;
            osc.frequency.value = freq;
            osc.type = 'sine';
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.15 + 0.3);
            osc.start(ctx.currentTime + i * 0.15);
            osc.stop(ctx.currentTime + i * 0.15 + 0.3);
          });
          break;

        case 'boss':
          oscillator.frequency.value = 100;
          oscillator.type = 'square';
          gainNode.gain.value = 0.05;
          gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
          oscillator.start(ctx.currentTime);
          oscillator.stop(ctx.currentTime + 0.5);
          break;
      }
    } catch (e) {}
  },

  // ========== RESET GAME ==========
  resetGame() {
    if (confirm('Apakah kamu yakin ingin mereset semua kemajuan?')) {
      Storage.reset();
      this.showScreen('opening-screen');
      this.showToast('Game direset!', 'info');
    }
  },

  // ========== START NEW GAME ==========
  startNewGame() {
    const data = Storage.startGame();
    this.startTimer();

    const player = Storage.getPlayer();
    if (player.name && player.name !== 'Programmer') {
      this.showScreen('intro-screen');
    } else {
      this.showScreen('character-screen');
    }
  },

  startFromIntro() {
    const player = Storage.getPlayer();
    if (player.name && player.name !== 'Programmer') {
      this.showScreen('tutorial-screen');
    } else {
      this.showScreen('character-screen');
    }
  },

  playAgain() {
    Storage.startGame();
    this.startTimer();
    this.showScreen('difficulty-screen');
  }
};

// ========== START GAME WHEN DOM READY ==========
document.addEventListener('DOMContentLoaded', () => {
  Game.init();
});
