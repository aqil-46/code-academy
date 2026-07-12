const CharacterCreator = {
  hairStyles: [
    { id: 'spiky', name: 'Spiky' },
    { id: 'flat', name: 'Flat' },
    { id: 'curly', name: 'Curly' },
    { id: 'mohawk', name: 'Mohawk' },
    { id: 'long', name: 'Long' },
    { id: 'buzz', name: 'Buzz' }
  ],
  skinColors: [
    { id: 'light', color: '#FDDCB5' },
    { id: 'medium', color: '#E8B88A' },
    { id: 'tan', color: '#C68E5B' },
    { id: 'brown', color: '#8D5E3C' },
    { id: 'dark', color: '#5C3A1E' },
    { id: 'pale', color: '#FEE8D6' }
  ],
  outfitColors: ['#6C5CE7', '#00CEC9', '#FD79A8', '#FDCB6E', '#00B894', '#E17055', '#74B9FF', '#A29BFE', '#FF6B6B', '#1dd1a1'],
  accessories: [
    { id: 'none', name: 'None', icon: 'block' },
    { id: 'glasses', name: 'Glasses', icon: 'visibility' },
    { id: 'mask', name: 'Mask', icon: 'masks' },
    { id: 'crown', name: 'Crown', icon: 'workspace_premium' },
    { id: 'hat', name: 'Hat', icon: 'auto_awesome' }
  ],

  selected: {
    hair: 'spiky',
    skin: 'light',
    outfit: '#6C5CE7',
    accessory: 'none',
    name: ''
  },

  animFrame: null,

  init() {
    const saved = Storage.getPlayer();
    this.selected = {
      hair: saved.hair || 'spiky',
      skin: saved.skin || 'light',
      outfit: saved.color || '#6C5CE7',
      accessory: saved.accessory || 'none',
      name: saved.name || ''
    };
    this.render();
  },

  buildAvatar(hair, skin, outfit, accessory, size) {
    const s = size || 1;
    const skinColor = (this.skinColors.find(c => c.id === skin) || this.skinColors[0]).color;
    const hairMap = {
      spiky: `<div style="position:absolute;top:0;left:50%;transform:translateX(-50%);width:${28*s}px;height:${14*s}px;">
        <div style="position:absolute;bottom:0;left:${2*s}px;width:${6*s}px;height:${14*s}px;background:${outfit};border-radius:${2*s}px ${2*s}px 0 0;transform:rotate(-15deg);"></div>
        <div style="position:absolute;bottom:0;left:${8*s}px;width:${6*s}px;height:${18*s}px;background:${outfit};border-radius:${2*s}px ${2*s}px 0 0;transform:rotate(-5deg);"></div>
        <div style="position:absolute;bottom:0;left:${14*s}px;width:${6*s}px;height:${20*s}px;background:${outfit};border-radius:${2*s}px ${2*s}px 0 0;"></div>
        <div style="position:absolute;bottom:0;left:${20*s}px;width:${6*s}px;height:${16*s}px;background:${outfit};border-radius:${2*s}px ${2*s}px 0 0;transform:rotate(10deg);"></div>
      </div>`,
      flat: `<div style="position:absolute;top:${2*s}px;left:50%;transform:translateX(-50%);width:${30*s}px;height:${10*s}px;background:${outfit};border-radius:${12*s}px ${12*s}px ${4*s}px ${4*s}px;"></div>`,
      curly: `<div style="position:absolute;top:0;left:50%;transform:translateX(-50%);width:${32*s}px;height:${16*s}px;">
        <div style="position:absolute;bottom:0;left:0;width:${10*s}px;height:${10*s}px;background:${outfit};border-radius:50%;"></div>
        <div style="position:absolute;bottom:${2*s}px;left:${7*s}px;width:${10*s}px;height:${10*s}px;background:${outfit};border-radius:50%;"></div>
        <div style="position:absolute;bottom:${3*s}px;left:${14*s}px;width:${10*s}px;height:${10*s}px;background:${outfit};border-radius:50%;"></div>
        <div style="position:absolute;bottom:0;left:${21*s}px;width:${10*s}px;height:${10*s}px;background:${outfit};border-radius:50%;"></div>
      </div>`,
      mohawk: `<div style="position:absolute;top:${-4*s}px;left:50%;transform:translateX(-50%);width:${10*s}px;height:${20*s}px;background:${outfit};border-radius:${5*s}px ${5*s}px ${2*s}px ${2*s}px;"></div>`,
      long: `<div style="position:absolute;top:${2*s}px;left:50%;transform:translateX(-50%);width:${34*s}px;height:${24*s}px;">
        <div style="position:absolute;top:0;left:0;right:0;height:${10*s}px;background:${outfit};border-radius:${14*s}px ${14*s}px 0 0;"></div>
        <div style="position:absolute;top:${8*s}px;left:0;width:${6*s}px;height:${16*s}px;background:${outfit};border-radius:0 0 ${3*s}px ${3*s}px;"></div>
        <div style="position:absolute;top:${8*s}px;right:0;width:${6*s}px;height:${16*s}px;background:${outfit};border-radius:0 0 ${3*s}px ${3*s}px;"></div>
      </div>`,
      buzz: `<div style="position:absolute;top:${4*s}px;left:50%;transform:translateX(-50%);width:${28*s}px;height:${8*s}px;background:${outfit};border-radius:${14*s}px ${14*s}px ${4*s}px ${4*s}px;opacity:0.7;"></div>`
    };
    const accMap = {
      none: '',
      glasses: `<div style="position:absolute;top:${20*s}px;left:50%;transform:translateX(-50%);width:${26*s}px;height:${8*s}px;">
        <div style="position:absolute;left:0;width:${10*s}px;height:${8*s}px;border:${2*s}px solid rgba(255,255,255,0.9);border-radius:${2*s}px;"></div>
        <div style="position:absolute;right:0;width:${10*s}px;height:${8*s}px;border:${2*s}px solid rgba(255,255,255,0.9);border-radius:${2*s}px;"></div>
        <div style="position:absolute;top:${3*s}px;left:${10*s}px;width:${6*s}px;height:${2*s}px;background:rgba(255,255,255,0.9);"></div>
      </div>`,
      mask: `<div style="position:absolute;top:${26*s}px;left:50%;transform:translateX(-50%);width:${22*s}px;height:${10*s}px;background:rgba(100,200,255,0.4);border-radius:${3*s}px;border:${1*s}px solid rgba(100,200,255,0.6);"></div>`,
      crown: `<div style="position:absolute;top:${4*s}px;left:50%;transform:translateX(-50%);">
        <div style="width:${24*s}px;height:${14*s}px;">
          <div style="position:absolute;bottom:0;left:0;right:0;height:${6*s}px;background:linear-gradient(135deg,#ffd700,#ffaa00);border-radius:${2*s}px ${2*s}px 0 0;"></div>
          <div style="position:absolute;top:0;left:${2*s}px;width:${4*s}px;height:${10*s}px;background:linear-gradient(135deg,#ffd700,#ffaa00);border-radius:${2*s}px ${2*s}px 0 0;"></div>
          <div style="position:absolute;top:0;left:${10*s}px;width:${4*s}px;height:${12*s}px;background:linear-gradient(135deg,#ffd700,#ffaa00);border-radius:${2*s}px ${2*s}px 0 0;"></div>
          <div style="position:absolute;top:0;left:${18*s}px;width:${4*s}px;height:${10*s}px;background:linear-gradient(135deg,#ffd700,#ffaa00);border-radius:${2*s}px ${2*s}px 0 0;"></div>
          <div style="position:absolute;top:${10*s}px;left:${4*s}px;width:${4*s}px;height:${4*s}px;background:#ff4444;border-radius:50%;"></div>
          <div style="position:absolute;top:${10*s}px;left:${16*s}px;width:${4*s}px;height:${4*s}px;background:#4444ff;border-radius:50%;"></div>
        </div>
      </div>`,
      hat: `<div style="position:absolute;top:${-2*s}px;left:50%;transform:translateX(-50%);">
        <div style="width:${10*s}px;height:${16*s}px;background:linear-gradient(135deg,${outfit},${outfit}dd);border-radius:${5*s}px ${5*s}px 0 0;margin:0 auto;filter:brightness(0.7);"></div>
        <div style="width:${28*s}px;height:${4*s}px;background:${outfit};border-radius:${2*s}px;filter:brightness(0.5);margin-top:${-1*s}px;"></div>
        <div style="position:absolute;top:${12*s}px;left:50%;transform:translateX(-50%);width:${8*s}px;height:${8*s}px;border-radius:50%;background:linear-gradient(135deg,#ffd700,#ffaa00);"></div>
      </div>`
    };

    return `<div class="pixel-avatar" style="position:relative;width:${40*s}px;height:${70*s}px;margin:0 auto;">
      ${hairMap[hair] || hairMap.spiky}
      <div style="position:absolute;top:${12*s}px;left:50%;transform:translateX(-50%);width:${28*s}px;height:${28*s}px;background:${skinColor};border-radius:50%;"></div>
      <div style="position:absolute;top:${20*s}px;left:${11*s}px;width:${4*s}px;height:${4*s}px;background:#222;border-radius:50%;"></div>
      <div style="position:absolute;top:${20*s}px;right:${11*s}px;width:${4*s}px;height:${4*s}px;background:#222;border-radius:50%;"></div>
      <div style="position:absolute;top:${28*s}px;left:50%;transform:translateX(-50%);width:${6*s}px;height:${2*s}px;background:rgba(0,0,0,0.15);border-radius:${2*s}px;"></div>
      <div style="position:absolute;top:${42*s}px;left:50%;transform:translateX(-50%);width:${30*s}px;height:${28*s}px;background:${outfit};border-radius:${6*s}px ${6*s}px ${4*s}px ${4*s}px;"></div>
      <div style="position:absolute;top:${42*s}px;left:50%;transform:translateX(-50%);width:${14*s}px;height:${4*s}px;background:rgba(255,255,255,0.15);border-radius:${2*s}px;margin-top:${4*s}px;"></div>
      ${accMap[accessory] || ''}
    </div>`;
  },

  render() {
    const container = document.querySelector('.char-options');
    if (!container) return;

    container.innerHTML = `
      <div class="char-category" data-category="hair">
        <div class="char-category-header">
          <span class="material-symbols-outlined char-cat-icon">face</span>
          <span>Gaya Rambut</span>
        </div>
        <div class="char-category-body">
          <div class="option-grid avatar-grid" data-type="hair">
            ${this.hairStyles.map(h => `
              <button class="char-opt-btn ${this.selected.hair === h.id ? 'selected' : ''}" data-value="${h.id}" title="${h.name}">
                <div class="char-opt-avatar">
                  ${this.buildAvatar(h.id, this.selected.skin, this.selected.outfit, 'none', 0.55)}
                </div>
                <span class="char-opt-label">${h.name}</span>
              </button>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="char-category" data-category="skin">
        <div class="char-category-header">
          <span class="material-symbols-outlined char-cat-icon">palette</span>
          <span>Warna Kulit</span>
        </div>
        <div class="char-category-body">
          <div class="option-grid skin-grid" data-type="skin">
            ${this.skinColors.map(c => `
              <button class="char-skin-btn ${this.selected.skin === c.id ? 'selected' : ''}"
                      data-value="${c.id}" title="${c.id.charAt(0).toUpperCase() + c.id.slice(1)}">
                <span class="skin-swatch" style="background: ${c.color};"></span>
              </button>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="char-category" data-category="outfit">
        <div class="char-category-header">
          <span class="material-symbols-outlined char-cat-icon">checkroom</span>
          <span>Warna Outfit</span>
        </div>
        <div class="char-category-body">
          <div class="option-grid color-grid" data-type="outfit">
            ${this.outfitColors.map(c => `
              <button class="char-color-btn ${this.selected.outfit === c ? 'selected' : ''}"
                      data-value="${c}" style="--swatch: ${c};" title="${c}">
                <span class="color-swatch"></span>
              </button>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="char-category" data-category="accessory">
        <div class="char-category-header">
          <span class="material-symbols-outlined char-cat-icon">devices_other</span>
          <span>Aksesori</span>
        </div>
        <div class="char-category-body">
          <div class="option-grid avatar-grid" data-type="accessory">
            ${this.accessories.map(a => `
              <button class="char-opt-btn ${this.selected.accessory === a.id ? 'selected' : ''}" data-value="${a.id}" title="${a.name}">
                <div class="char-opt-avatar">
                  ${this.buildAvatar(this.selected.hair, this.selected.skin, this.selected.outfit, a.id, 0.55)}
                </div>
                <span class="char-opt-label">${a.name}</span>
              </button>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="char-category name-category" data-category="name">
        <div class="char-category-header">
          <span class="material-symbols-outlined char-cat-icon">badge</span>
          <span>Nama Karakter</span>
        </div>
        <div class="char-category-body">
          <div class="char-name-wrap">
            <span class="material-symbols-outlined char-name-icon">person</span>
            <input type="text" class="char-name-input"
                   placeholder="Masukkan namamu..."
                   value="${this.selected.name}"
                   maxlength="20">
            <span class="char-name-count">${this.selected.name.length || 0}/20</span>
          </div>
        </div>
      </div>

      <div class="char-bottom-actions">
        <button class="btn btn-secondary btn-sm char-random-btn" onclick="CharacterCreator.randomize()">
          <span class="material-symbols-outlined" style="font-size: 18px;">casino</span>
          <span>Random</span>
        </button>
        <button class="btn btn-primary btn-sm char-save-btn" onclick="CharacterCreator.saveAndContinue()">
          <span class="material-symbols-outlined" style="font-size: 18px;">check_circle</span>
          <span>Simpan & Lanjut</span>
        </button>
      </div>
    `;

    this.bindEvents();
    this.updatePreview();
  },

  bindEvents() {
    ['hair', 'skin', 'outfit', 'accessory'].forEach(type => {
      document.querySelectorAll(`[data-type="${type}"] .char-opt-btn, [data-type="${type}"] .char-skin-btn, [data-type="${type}"] .char-color-btn`).forEach(btn => {
        btn.addEventListener('click', () => {
          this.selected[type] = btn.dataset.value;
          
          // Animate selection
          const siblings = document.querySelectorAll(`[data-type="${type}"] .char-opt-btn, [data-type="${type}"] .char-skin-btn, [data-type="${type}"] .char-color-btn`);
          siblings.forEach(b => {
            b.classList.remove('selected');
            b.style.transform = 'scale(1)';
          });
          btn.classList.add('selected');
          btn.style.transform = 'scale(1.15)';
          setTimeout(() => { btn.style.transform = 'scale(1)'; }, 250);

          if (type === 'hair' || type === 'skin' || type === 'outfit' || type === 'accessory') {
            this.animatePreview();
          }
        });
      });
    });

    const nameInput = document.querySelector('.char-name-input');
    if (nameInput) {
      nameInput.addEventListener('input', (e) => {
        this.selected.name = e.target.value;
        this.updatePreview();
        const count = document.querySelector('.char-name-count');
        if (count) count.textContent = `${e.target.value.length}/20`;
      });
    }
  },

  animatePreview() {
    const avatar = document.querySelector('.char-avatar');
    if (!avatar) return;
    
    // Trigger re-render with a brief animation delay
    if (this.animFrame) clearTimeout(this.animFrame);
    
    avatar.style.transition = 'transform 0.2s ease, opacity 0.15s ease';
    avatar.style.transform = 'scale(0.92)';
    avatar.style.opacity = '0.6';
    
    this.animFrame = setTimeout(() => {
      this.updatePreview();
      avatar.style.transform = 'scale(1.05)';
      avatar.style.opacity = '1';
      
      setTimeout(() => {
        avatar.style.transform = 'scale(1)';
      }, 180);
    }, 120);
  },

  updatePreview() {
    const avatar = document.querySelector('.char-avatar');
    const nameDisplay = document.querySelector('.char-name-display');

    if (avatar) {
      avatar.innerHTML = this.buildAvatar(this.selected.hair, this.selected.skin, this.selected.outfit, this.selected.accessory, 2);
      avatar.style.transform = 'scale(1)';
      avatar.style.opacity = '1';
    }

    if (nameDisplay) {
      nameDisplay.textContent = this.selected.name || 'Programmer';
    }

    // Update preview glow to match outfit
    const previewCard = document.querySelector('.char-preview');
    if (previewCard) {
      previewCard.style.setProperty('--glow-color', this.selected.outfit);
      previewCard.classList.add('glow-active');
    }
  },

  randomize() {
    const randomBtn = document.querySelector('.char-random-btn');
    if (randomBtn) {
      randomBtn.classList.add('spinning');
      setTimeout(() => randomBtn.classList.remove('spinning'), 600);
    }

    this.selected.hair = this.hairStyles[Math.floor(Math.random() * this.hairStyles.length)].id;
    this.selected.skin = this.skinColors[Math.floor(Math.random() * this.skinColors.length)].id;
    this.selected.outfit = this.outfitColors[Math.floor(Math.random() * this.outfitColors.length)];
    this.selected.accessory = this.accessories[Math.floor(Math.random() * this.accessories.length)].id;

    // Flash render with staggered animation
    const avatar = document.querySelector('.char-avatar');
    if (avatar) {
      avatar.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
      avatar.style.transform = 'rotate(-10deg) scale(0.8)';
      avatar.style.opacity = '0.3';
    }

    setTimeout(() => {
      this.render();
    }, 300);
  },

  saveAndContinue() {
    if (!this.selected.name.trim()) {
      this.selected.name = 'Programmer';
    }

    Storage.updatePlayer({
      hair: this.selected.hair,
      skin: this.selected.skin,
      color: this.selected.outfit,
      accessory: this.selected.accessory,
      name: this.selected.name
    });

    Game.showScreen('intro-screen');
  }
};
