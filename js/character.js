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
  outfitColors: ['#6C5CE7', '#00CEC9', '#FD79A8', '#FDCB6E', '#00B894', '#E17055', '#74B9FF', '#A29BFE'],
  accessories: [
    { id: 'none', name: 'None', icon: 'block' },
    { id: 'glasses', name: 'Glasses', icon: 'visibility' },
    { id: 'headphones', name: 'Headphones', icon: 'headphones' },
    { id: 'cap', name: 'Cap', icon: 'sports_baseball' },
    { id: 'mask', name: 'Mask', icon: 'masks' }
  ],

  selected: {
    hair: 'spiky',
    skin: 'light',
    outfit: '#6C5CE7',
    accessory: 'none',
    name: ''
  },

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
      headphones: `<div style="position:absolute;top:${6*s}px;left:50%;transform:translateX(-50%);width:${36*s}px;height:${22*s}px;">
        <div style="position:absolute;top:0;left:${4*s}px;right:${4*s}px;height:${6*s}px;border:${2*s}px solid #555;border-bottom:none;border-radius:${14*s}px ${14*s}px 0 0;"></div>
        <div style="position:absolute;bottom:0;left:0;width:${8*s}px;height:${10*s}px;background:#555;border-radius:${3*s}px;"></div>
        <div style="position:absolute;bottom:0;right:0;width:${8*s}px;height:${10*s}px;background:#555;border-radius:${3*s}px;"></div>
      </div>`,
      cap: `<div style="position:absolute;top:${2*s}px;left:50%;transform:translateX(-50%);">
        <div style="width:${30*s}px;height:${10*s}px;background:${outfit};border-radius:${10*s}px ${10*s}px 0 0;filter:brightness(0.8);"></div>
        <div style="width:${36*s}px;height:${4*s}px;background:${outfit};border-radius:${2*s}px;filter:brightness(0.7);margin-left:${-3*s}px;"></div>
      </div>`,
      mask: `<div style="position:absolute;top:${26*s}px;left:50%;transform:translateX(-50%);width:${22*s}px;height:${10*s}px;background:rgba(100,200,255,0.4);border-radius:${3*s}px;border:${1*s}px solid rgba(100,200,255,0.6);"></div>`
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
      <div class="option-group">
        <h3>Gaya Rambut</h3>
        <div class="option-grid avatar-grid" data-type="hair">
          ${this.hairStyles.map(h => `
            <button class="option-btn ${this.selected.hair === h.id ? 'selected' : ''}" data-value="${h.id}" title="${h.name}">
              <div style="transform:scale(0.6);pointer-events:none;">${this.buildAvatar(h.id, this.selected.skin, this.selected.outfit, 'none', 1)}</div>
            </button>
          `).join('')}
        </div>
      </div>

      <div class="option-group">
        <h3>Warna Kulit</h3>
        <div class="option-grid" data-type="skin">
          ${this.skinColors.map(c => `
            <button class="option-btn color-btn ${this.selected.skin === c.id ? 'selected' : ''}"
                    data-value="${c.id}" style="background: ${c.color};">
            </button>
          `).join('')}
        </div>
      </div>

      <div class="option-group">
        <h3>Warna Outfit</h3>
        <div class="option-grid" data-type="outfit">
          ${this.outfitColors.map(c => `
            <button class="option-btn color-btn ${this.selected.outfit === c ? 'selected' : ''}"
                    data-value="${c}" style="background: ${c};">
            </button>
          `).join('')}
        </div>
      </div>

      <div class="option-group">
        <h3>Aksesori</h3>
        <div class="option-grid avatar-grid" data-type="accessory">
          ${this.accessories.map(a => `
            <button class="option-btn ${this.selected.accessory === a.id ? 'selected' : ''}" data-value="${a.id}" title="${a.name}">
              <div style="transform:scale(0.6);pointer-events:none;">${this.buildAvatar(this.selected.hair, this.selected.skin, this.selected.outfit, a.id, 1)}</div>
            </button>
          `).join('')}
        </div>
      </div>

      <div class="option-group">
        <h3>Nama Karakter</h3>
        <input type="text" class="char-name-input"
               placeholder="Masukkan namamu..."
               value="${this.selected.name}"
               maxlength="20">
      </div>

      <div class="char-actions">
        <button class="btn btn-secondary btn-sm" onclick="CharacterCreator.randomize()">
          <span class="material-symbols-outlined" style="font-size: 18px;">casino</span> Random
        </button>
        <button class="btn btn-primary btn-sm" onclick="CharacterCreator.saveAndContinue()">
          <span class="material-symbols-outlined" style="font-size: 18px;">check_circle</span> Simpan & Lanjut
        </button>
      </div>
    `;

    this.bindEvents();
    this.updatePreview();
  },

  bindEvents() {
    ['hair', 'skin', 'outfit', 'accessory'].forEach(type => {
      document.querySelectorAll(`[data-type="${type}"] .option-btn`).forEach(btn => {
        btn.addEventListener('click', () => {
          this.selected[type] = btn.dataset.value;
          document.querySelectorAll(`[data-type="${type}"] .option-btn`).forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          if (type === 'hair' || type === 'skin' || type === 'outfit' || type === 'accessory') this.render();
        });
      });
    });

    const nameInput = document.querySelector('.char-name-input');
    if (nameInput) {
      nameInput.addEventListener('input', (e) => {
        this.selected.name = e.target.value;
        this.updatePreview();
      });
    }
  },

  updatePreview() {
    const avatar = document.querySelector('.char-avatar');
    const nameDisplay = document.querySelector('.char-name-display');

    if (avatar) {
      avatar.innerHTML = this.buildAvatar(this.selected.hair, this.selected.skin, this.selected.outfit, this.selected.accessory, 1.8);
    }

    if (nameDisplay) {
      nameDisplay.textContent = this.selected.name || 'Programmer';
    }
  },

  randomize() {
    this.selected.hair = this.hairStyles[Math.floor(Math.random() * this.hairStyles.length)].id;
    this.selected.skin = this.skinColors[Math.floor(Math.random() * this.skinColors.length)].id;
    this.selected.outfit = this.outfitColors[Math.floor(Math.random() * this.outfitColors.length)];
    this.selected.accessory = this.accessories[Math.floor(Math.random() * this.accessories.length)].id;
    this.render();
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

    Game.showScreen('tutorial-screen');
  }
};
