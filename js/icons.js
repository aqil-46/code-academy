/* =============================================
   CODE ACADEMY - SVG Icon Library
   Inline SVG icons untuk ganti emoji
   ============================================= */

const Icons = {
  // Simple SVG helper - creates an SVG string with given content
  _svg(paths, viewBox = '0 0 24 24') {
    return `<svg width="24" height="24" viewBox="${viewBox}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;
  },

  // ========== NAVIGATION & UI ==========
  get home() { return this._svg('<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>'); },
  get star() { return this._svg('<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>'); },
  get map() { return this._svg('<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>'); },
  get settings() { return this._svg('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>'); },
  get back() { return this._svg('<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>'); },
  get play() { return this._svg('<polygon points="5 3 19 12 5 21 5 3"/>'); },
  get check() { return this._svg('<polyline points="20 6 9 17 4 12"/>'); },
  get x() { return this._svg('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'); },
  get menu() { return this._svg('<line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>'); },
  get clock() { return this._svg('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'); },
  get heart() { return this._svg('<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>'); },
  get users() { return this._svg('<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'); },
  
  // ========== CODE & PROGRAMMING ==========
  get code() { return this._svg('<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>'); },
  get terminal() { return this._svg('<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>'); },
  get database() { return this._svg('<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>'); },
  get cpu() { return this._svg('<rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>'); },
  get fileCode() { return this._svg('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>'); },
  get gitBranch() { return this._svg('<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>'); },
  get bug() { return this._svg('<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M4 8h16"/><path d="M4 12h16"/><path d="M2 16h4a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4h4"/><line x1="12" y1="8" x2="12" y2="20"/>'); },
  get lightbulb() { return this._svg('<path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.6-.55 1.3-1.27 1.76-2.1A5 5 0 0 0 6.33 9.3C6.84 10.7 8 12.17 9 13v3h6v-2c.03-.3.07-.61.09-1z"/>'); },
  get refresh() { return this._svg('<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>'); },
  get target() { return this._svg('<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>'); },
  
  // ========== SCHOOL & ACADEMY ==========
  get book() { return this._svg('<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>'); },
  get graduation() { return this._svg('<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>'); },
  get trophy() { return this._svg('<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C5 2 7 3 8 4.5V6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5C19 2 17 3 16 4.5V6"/><path d="M8 8v2a4 4 0 0 0 8 0V8"/><path d="M12 16v4"/><path d="M8 22h8"/>'); },
  get shield() { return this._svg('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'); },
  get award() { return this._svg('<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>'); },
  
  // ========== GAME ELEMENTS ==========
  get robot() { return this._svg('<rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/>'); },
  get box() { return this._svg('<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>'); },
  get shuffle() { return this._svg('<polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/>'); },
  get repeat() { return this._svg('<polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>'); },
  get server() { return this._svg('<rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>'); },
  
  // ========== BOSS & ENEMY ==========
  get skull() { return this._svg('<circle cx="12" cy="12" r="10"/><path d="M8 14a1 1 0 0 0 0-2c-1 0-1.5 1-1.5 2S7 14 8 14z"/><path d="M16 14a1 1 0 0 0 0-2c-1 0-1.5 1-1.5 2S15 14 16 14z"/><path d="M9 15c0 1.66 1.34 3 3 3s3-1.34 3-3"/>'); },
  get zap() { return this._svg('<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>'); },
  get sword() { return this._svg('<polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/><line x1="13" y1="19" x2="19" y2="13"/><line x1="16" y1="16" x2="20" y2="20"/><line x1="19" y1="21" x2="21" y2="19"/>'); },
  
  // ========== ARROW KEYS ==========
  get arrowUp() { return this._svg('<line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>'); },
  get arrowDown() { return this._svg('<line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>'); },
  get arrowLeft() { return this._svg('<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>'); },
  get arrowRight() { return this._svg('<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>'); },
  
  // ========== DATA TYPE ICONS ==========
  get typeText() { return this._svg('<path d="M4 7V4h16v3"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/>', '0 0 24 24'); },
  get typeNumber() { return this._svg('<path d="M4 4h16v16H4z"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="12" y1="8" x2="12" y2="16"/>'); },
  get typeBoolean() { return this._svg('<circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5"/>'); },
  
  // Helper: big version (for display, 48x48)
  _big(svgContent) {
    return svgContent.replace('width="24" height="24"', 'width="48" height="48"');
  },
  
  // Helper: xl version (for badges, 64x64)
  _xl(svgContent) {
    return svgContent.replace('width="24" height="24"', 'width="64" height="64"');
  },
  
  // Get inline icon as colored SVG
  colored(svgContent, color) {
    return svgContent.replace('stroke="currentColor"', `stroke="${color || 'currentColor'}"`);
  },

  // Get icon wrapped in span with custom size
  span(svgContent, size = '24', color = null) {
    const sized = svgContent.replace(/width="24" height="24"/, `width="${size}" height="${size}"`);
    const colored = color ? sized.replace('stroke="currentColor"', `stroke="${color}"`) : sized;
    return `<span class="svg-icon" style="display: inline-flex; align-items: center; justify-content: center; width: ${size}px; height: ${size}px;">${colored}</span>`;
  },

  // ========== GOOGLE MATERIAL ICONS ==========
  // Use Material Symbols for consistent, scalable icons
  mat(name, size = '24') {
    return `<span class="material-symbols-outlined" style="font-size: ${size}px; line-height: 1;">${name}</span>`;
  },

  // Material icon with label text
  matBtn(name, text, size = '20') {
    return `${Icons.mat(name, size)} ${text}`;
  }
};
