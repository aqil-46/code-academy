/* =============================================
   CODE ACADEMY - Leaderboard Module
   LocalStorage-based top scores
   ============================================= */

const Leaderboard = {
  KEY: 'codeacademy_leaderboard',
  MAX_ENTRIES: 10,

  getEntries() {
    try {
      const data = localStorage.getItem(this.KEY);
      if (data) {
        return JSON.parse(data);
      }
    } catch (e) {
      console.warn('Failed to load leaderboard:', e);
    }
    return [];
  },

  saveEntries(entries) {
    try {
      localStorage.setItem(this.KEY, JSON.stringify(entries));
      return true;
    } catch (e) {
      console.warn('Failed to save leaderboard:', e);
      return false;
    }
  },

  addEntry(playerName, score, accuracy, badge) {
    const entries = this.getEntries();
    
    const newEntry = {
      id: Date.now() + Math.random(),
      name: playerName || 'Programmer',
      score: score || 0,
      accuracy: accuracy || 0,
      badge: badge || 'Beginner',
      date: new Date().toISOString().split('T')[0]
    };
    
    entries.push(newEntry);
    
    // Sort by score descending
    entries.sort((a, b) => b.score - a.score);
    
    // Keep only top MAX_ENTRIES
    if (entries.length > this.MAX_ENTRIES) {
      entries.length = this.MAX_ENTRIES;
    }
    
    this.saveEntries(entries);
    return { entries, newEntryId: newEntry.id };
  },

  getTopScores(limit = 10) {
    const entries = this.getEntries();
    return entries.slice(0, limit);
  },

  isHighScore(score) {
    const entries = this.getEntries();
    if (entries.length < this.MAX_ENTRIES) return true;
    return score > entries[entries.length - 1].score;
  },

  getRank(score) {
    const entries = this.getEntries();
    const rank = entries.findIndex(e => e.score <= score);
    return rank === -1 ? entries.length + 1 : rank + 1;
  },

  clear() {
    try {
      localStorage.removeItem(this.KEY);
      return true;
    } catch (e) {
      return false;
    }
  },

  renderLeaderboard(containerId, highlightId = null) {
    this._lastEntryId = highlightId || this._lastEntryId;
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const entries = this.getTopScores();
    
    if (entries.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 30px; color: var(--text-muted);">
          <div><span class="material-symbols-outlined" style="font-size: 48px; color: var(--text-muted);">leaderboard</span></div>
          <p style="font-family: var(--pixel-font); font-size: 0.5rem;">Belum ada skor yang tercatat.</p>
          <p style="margin-top: 8px; font-size: 0.85rem;">Selesaikan game untuk masuk leaderboard!</p>
        </div>
      `;
      return;
    }
    
    const medals = [
      '<span class="material-symbols-outlined" style="color: #ffd700; font-size: 24px;">military_tech</span>',
      '<span class="material-symbols-outlined" style="color: #c0c0c0; font-size: 24px;">military_tech</span>',
      '<span class="material-symbols-outlined" style="color: #cd7f32; font-size: 24px;">military_tech</span>'
    ];
    
    container.innerHTML = `
      <div style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; font-size: 0.8rem;">
          <thead>
            <tr style="border-bottom: 1px solid rgba(108, 92, 231, 0.2);">
              <th style="padding: 10px 8px; text-align: center; color: var(--text-muted); font-family: var(--pixel-font); font-size: 0.45rem;">#</th>
              <th style="padding: 10px 8px; text-align: left; color: var(--text-muted); font-family: var(--pixel-font); font-size: 0.45rem;">PLAYER</th>
              <th style="padding: 10px 8px; text-align: center; color: var(--text-muted); font-family: var(--pixel-font); font-size: 0.45rem;">SCORE</th>
              <th style="padding: 10px 8px; text-align: center; color: var(--text-muted); font-family: var(--pixel-font); font-size: 0.45rem;">AKURASI</th>
              <th style="padding: 10px 8px; text-align: center; color: var(--text-muted); font-family: var(--pixel-font); font-size: 0.45rem;">BADGE</th>
            </tr>
          </thead>
          <tbody>
            ${entries.map((entry, index) => `
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.03); transition: var(--transition);" 
                  onmouseover="this.style.background='rgba(108,92,231,0.05)'" 
                  onmouseout="this.style.background='transparent'">
                <td style="padding: 12px 8px; text-align: center; font-size: 1rem;">
                  ${index < 3 ? medals[index] : 
                    `<span style="color: var(--text-muted); font-family: var(--pixel-font); font-size: 0.5rem;">${index + 1}</span>`}
                </td>
                <td style="padding: 12px 8px; text-align: left;">
                  <span style="color: var(--text-primary); font-weight: 600;">${this.escapeHtml(entry.name)}</span>
                  ${entry.id === Leaderboard._lastEntryId ? 
                    '<span style="color: var(--secondary); font-size: 0.6rem; margin-left: 6px;">← KAMU</span>' : ''}
                </td>
                <td style="padding: 12px 8px; text-align: center; color: var(--secondary); font-weight: 700; font-family: var(--pixel-font); font-size: 0.55rem;">
                  ${entry.score}
                </td>
                <td style="padding: 12px 8px; text-align: center; color: var(--text-secondary); font-size: 0.75rem;">
                  ${entry.accuracy}%
                </td>
                <td style="padding: 12px 8px; text-align: center; font-size: 0.9rem;">
                  ${entry.badge}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      <div style="text-align: center; margin-top: 15px; color: var(--text-muted); font-size: 0.65rem;">
        <span class="material-symbols-outlined" style="font-size: 14px; vertical-align: middle;">emoji_events</span> Top ${this.MAX_ENTRIES} Scores
      </div>
    `;
  },

  _lastEntryId: null,

  addAndRender(playerName, score, accuracy, badge, containerId) {
    const result = this.addEntry(playerName, score, accuracy, badge);
    this.renderLeaderboard(containerId, result.newEntryId);
  },

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
};
