const Levels = {
  currentLevel: 0,
  state: {},

  levelData: {
    1: {
      title: 'Welcome Programmer',
      subtitle: 'Kenalan dengan Sekolah',
      icon: Icons.span(Icons.play, '28', 'var(--secondary)'),
      desc: 'Selamat datang di Code Academy! Setiap ruangan di sekolah ini memiliki puzzle pemrograman yang harus kamu selesaikan.',
      question: 'Apakah kamu siap menjadi programmer yang menyelamatkan sekolah?',
      choices: [
        { text: `${Icons.mat('rocket_launch', '16')} Ya, aku siap!`, correct: true, feedback: 'Hebat! Ayo mulai petualanganmu!' },
        { text: `${Icons.mat('help', '16')} Tunggu dulu...`, correct: false, feedback: 'Jangan khawatir! Aku akan membantumu!' }
      ]
    },
    2: {
      title: 'Variable Room',
      subtitle: 'Drag & Drop Data',
      icon: Icons.span(Icons.box, '28', 'var(--accent)'),
      desc: 'Seret dan lepaskan data ke dalam kotak variabel yang benar. String adalah teks, Number adalah angka, Boolean adalah true/false.',
      type: 'dragdrop'
    },
    3: {
      title: 'Input Output',
      subtitle: 'Cocokkan Input dengan Output',
      icon: Icons.span(Icons.shuffle, '28', 'var(--secondary)'),
      desc: 'Cocokkan setiap input dengan output yang benar!',
      type: 'matching'
    },
    4: {
      title: 'If Else',
      subtitle: 'Pilih Keputusan',
      icon: Icons.span(Icons.gitBranch, '28', 'var(--warning)'),
      desc: 'Pilih keputusan yang benar untuk membuka pintu! Gunakan logika if-else.',
      type: 'ifelse'
    },
    5: {
      title: 'Loop Factory',
      subtitle: 'Bantu Robot',
      icon: Icons.span(Icons.repeat, '28', 'var(--secondary)'),
      desc: 'Gunakan perulangan untuk membantu robot menyelesaikan tugasnya!',
      type: 'loop'
    },
    6: {
      title: 'Debug Room',
      subtitle: 'Temukan Bug',
      icon: Icons.span(Icons.bug, '28', 'var(--accent)'),
      desc: 'Temukan dan perbaiki bug pada potongan kode berikut!',
      type: 'debug'
    },
    7: {
      title: 'Function Machine',
      subtitle: 'Susun Alur Program',
      icon: Icons.span(Icons.cpu, '28', 'var(--info)'),
      desc: 'Susun langkah-langkah berikut menjadi alur program yang benar!',
      type: 'function'
    },
    8: {
      title: 'Array Room',
      subtitle: 'Kelola Data dengan Array',
      icon: Icons.span(Icons.database, '28', 'var(--info)'),
      desc: 'Array adalah kumpulan data yang disimpan dalam satu variabel. Pilih index yang benar untuk mengakses data!',
      type: 'array'
    },
    9: {
      title: 'Object Lab',
      subtitle: 'Kenalan dengan Object',
      icon: Icons.span(Icons.cpu, '28', 'var(--warning)'),
      desc: 'Object menyimpan data dengan format key: value. Cocokkan properti dengan nilainya yang benar!',
      type: 'object'
    },
    10: {
      title: 'Boss Battle',
      subtitle: 'Kalahkan Bug King!',
      icon: Icons.span(Icons.sword, '28', 'var(--danger)'),
      desc: 'Kalahkan Bug King dengan menjawab pertanyaan pemrograman!',
      type: 'boss'
    }
  },

  // ========== DIFFICULTY-BASED DATA ==========

  level2DataByDiff: {
    easy: {
      items: [
        { id: 's1', value: '"Hello World"', type: 'string', label: 'String' },
        { id: 'n1', value: '42', type: 'number', label: 'Number' },
        { id: 'b1', value: 'true', type: 'boolean', label: 'Boolean' },
        { id: 's2', value: '"Code Academy"', type: 'string', label: 'String' },
        { id: 'n2', value: '3.14', type: 'number', label: 'Number' },
        { id: 'b2', value: 'false', type: 'boolean', label: 'Boolean' }
      ],
      slots: [
        { id: 'string', label: 'String', type: 'string', accept: ['string'] },
        { id: 'number', label: 'Number', type: 'number', accept: ['number'] },
        { id: 'boolean', label: 'Boolean', type: 'boolean', accept: ['boolean'] }
      ]
    },
    normal: {
      items: [
        { id: 's1', value: '"Programmer"', type: 'string', label: 'String' },
        { id: 's2', value: '"42"', type: 'string', label: 'String' },
        { id: 's3', value: '""', type: 'string', label: 'String' },
        { id: 'n1', value: '100', type: 'number', label: 'Number' },
        { id: 'n2', value: '0', type: 'number', label: 'Number' },
        { id: 'n3', value: '-7.5', type: 'number', label: 'Number' },
        { id: 'b1', value: '!false', type: 'boolean', label: 'Boolean' },
        { id: 'b2', value: '1 > 0', type: 'boolean', label: 'Boolean' },
        { id: 'b3', value: '0 === 0', type: 'boolean', label: 'Boolean' }
      ],
      slots: [
        { id: 'string', label: 'String', type: 'string', accept: ['string'] },
        { id: 'number', label: 'Number', type: 'number', accept: ['number'] },
        { id: 'boolean', label: 'Boolean', type: 'boolean', accept: ['boolean'] }
      ]
    },
    hard: {
      items: [
        { id: 's1', value: '`template`', type: 'string', label: 'String' },
        { id: 's2', value: '"123"', type: 'string', label: 'String' },
        { id: 's3', value: "String(42)", type: 'string', label: 'String' },
        { id: 's4', value: "'\\n'", type: 'string', label: 'String' },
        { id: 'n1', value: 'NaN', type: 'number', label: 'Number' },
        { id: 'n2', value: 'Infinity', type: 'number', label: 'Number' },
        { id: 'n3', value: '0xFF', type: 'number', label: 'Number' },
        { id: 'n4', value: '2e3', type: 'number', label: 'Number' },
        { id: 'b1', value: '!!1', type: 'boolean', label: 'Boolean' },
        { id: 'b2', value: '!!""', type: 'boolean', label: 'Boolean' },
        { id: 'b3', value: 'Boolean(0)', type: 'boolean', label: 'Boolean' },
        { id: 'b4', value: '!![]', type: 'boolean', label: 'Boolean' }
      ],
      slots: [
        { id: 'string', label: 'String', type: 'string', accept: ['string'] },
        { id: 'number', label: 'Number', type: 'number', accept: ['number'] },
        { id: 'boolean', label: 'Boolean', type: 'boolean', accept: ['boolean'] }
      ]
    }
  },

  get level2Data() { return this.level2DataByDiff[Storage.getDifficulty()] || this.level2DataByDiff.easy; },

  level3DataByDiff: {
    easy: [
      { id: 1, input: 'input()', output: 'Membaca data dari user' },
      { id: 2, input: 'print()', output: 'Menampilkan data ke layar' },
      { id: 3, input: 'int()', output: 'Mengubah ke angka' },
      { id: 4, input: 'str()', output: 'Mengubah ke teks' },
      { id: 5, input: 'len()', output: 'Menghitung panjang' },
      { id: 6, input: 'type()', output: 'Mengecek tipe data' }
    ],
    normal: [
      { id: 1, input: 'range()', output: 'Membuat urutan angka' },
      { id: 2, input: 'split()', output: 'Memecah string' },
      { id: 3, input: 'append()', output: 'Menambah item ke list' },
      { id: 4, input: 'float()', output: 'Mengubah ke desimal' },
      { id: 5, input: 'bool()', output: 'Mengubah ke boolean' },
      { id: 6, input: 'list()', output: 'Mengubah ke list' }
    ],
    hard: [
      { id: 1, input: 'map()', output: 'Transformasi setiap elemen' },
      { id: 2, input: 'filter()', output: 'Menyaring elemen' },
      { id: 3, input: 'reduce()', output: 'Menggabungkan jadi satu nilai' },
      { id: 4, input: 'lambda', output: 'Fungsi anonim satu baris' },
      { id: 5, input: 'zip()', output: 'Menggabungkan dua iterable' },
      { id: 6, input: 'enumerate()', output: 'Iterable dengan index' }
    ]
  },

  get level3Data() { return this.level3DataByDiff[Storage.getDifficulty()] || this.level3DataByDiff.easy; },

  level4DataByDiff: {
    easy: [
      {
        scenario: 'Kamu ingin masuk ke ruangan yang hanya bisa dimasuki jika <span class="code-inline">nilai &gt; 75</span>. Nilaimu adalah <span class="code-inline">85</span>. Apa yang harus dilakukan?',
        choices: [
          { text: 'Masuk ruangan', detail: 'if (nilai > 75) → Masuk', correct: true, feedback: 'Benar! 85 > 75, jadi kamu bisa masuk!' },
          { text: 'Tidak masuk', detail: 'else → Tunggu', correct: false, feedback: 'Coba lagi! 85 itu lebih dari 75 lho!' }
        ]
      },
      {
        scenario: 'Kode berikut: <span class="code-inline">if (password == "admin123")</span>. Password yang dimasukkan adalah <span class="code-inline">"admin123"</span>. Apa yang terjadi?',
        choices: [
          { text: `${Icons.mat('check_circle', '16')} Akses Diterima`, detail: 'Password cocok', correct: true, feedback: 'Tepat! Password sesuai, akses diberikan!' },
          { text: `${Icons.mat('cancel', '16')} Akses Ditolak`, detail: 'Password salah', correct: false, feedback: 'Password-nya cocok lho! Coba pilih yang lain.' }
        ]
      },
      {
        scenario: 'Program mengecek: <span class="code-inline">if (umur &gt;= 17)</span>. Umur kamu <span class="code-inline">16</span>. Apa yang terjadi?',
        choices: [
          { text: 'Boleh membuat SIM', detail: 'if (umur >= 17)', correct: false, feedback: '16 itu kurang dari 17, jadi belum boleh!' },
          { text: 'Belum boleh membuat SIM', detail: 'else', correct: true, feedback: 'Benar! 16 < 17, jadi belum memenuhi syarat.' }
        ]
      },
      {
        scenario: 'Kode: <span class="code-inline">if (isRaining == true)</span>. Hari ini <span class="code-inline">tidak hujan</span>. Apa yang dilakukan program?',
        choices: [
          { text: `${Icons.mat('umbrella', '16')} Bawa payung`, detail: 'if (isRaining == true)', correct: false, feedback: 'Tidak hujan, jadi kondisi ini false!' },
          { text: `${Icons.mat('wb_sunny', '16')} Tidak bawa payung`, detail: 'else', correct: true, feedback: 'Benar! Karena isRaining == false, program jalan ke else!' }
        ]
      }
    ],
    normal: [
      {
        scenario: 'Kode: <span class="code-inline">if (x > 5 && x < 10)</span>. Nilai <span class="code-inline">x = 7</span>. Apakah kondisi terpenuhi?',
        choices: [
          { text: 'Ya, terpenuhi', detail: '7 > 5 DAN 7 < 10', correct: true, feedback: 'Benar! Kedua kondisi terpenuhi karena 7 > 5 DAN 7 < 10.' },
          { text: 'Tidak terpenuhi', detail: 'Salah satu false', correct: false, feedback: '7 > 5 itu true, 7 < 10 juga true. Keduanya true!' }
        ]
      },
      {
        scenario: 'Kode: <span class="code-inline">if (x > 10 || y < 5)</span>. Nilai <span class="code-inline">x = 3, y = 2</span>. Apakah kondisi terpenuhi?',
        choices: [
          { text: 'Ya, terpenuhi', detail: 'Salah satu true sudah cukup', correct: true, feedback: 'Benar! x > 10 false, tapi y < 5 true. Operator || hanya butuh satu true!' },
          { text: 'Tidak terpenuhi', detail: 'x > 10 false', correct: false, feedback: 'Operator || hanya butuh satu true! y < 5 sudah true.' }
        ]
      },
      {
        scenario: 'Kode: <span class="code-inline">if (score >= 80) grade = "A"; else if (score >= 60) grade = "B";</span> Score = <span class="code-inline">75</span>. Apa grade-nya?',
        choices: [
          { text: 'Grade A', detail: 'score >= 80', correct: false, feedback: '75 < 80, jadi bukan A!' },
          { text: 'Grade B', detail: 'score >= 60', correct: true, feedback: 'Benar! 75 >= 60 tapi < 80, jadi masuk else if.' }
        ]
      },
      {
        scenario: 'Kode: <span class="code-inline">if (!isLoggedIn)</span>. Nilai <span class="code-inline">isLoggedIn = true</span>. Apakah kode di dalam if dijalankan?',
        choices: [
          { text: 'Ya, dijalankan', detail: 'isLoggedIn true', correct: false, feedback: '!true = false, jadi kode di dalam if TIDAK dijalankan.' },
          { text: 'Tidak dijalankan', detail: '!true = false', correct: true, feedback: 'Benar! Operator ! membalik true jadi false.' }
        ]
      }
    ],
    hard: [
      {
        scenario: 'Kode: <span class="code-inline">x = 0; if (x) alert("yes"); else alert("no");</span> Apa output-nya?',
        choices: [
          { text: 'yes', detail: 'x = 0 → truthy?', correct: false, feedback: '0 adalah falsy di JavaScript!' },
          { text: 'no', detail: '0 adalah falsy', correct: true, feedback: 'Benar! 0, "", null, undefined, NaN adalah falsy values.' }
        ]
      },
      {
        scenario: 'Kode: <span class="code-inline">let x = "5"; if (x == 5) result = "A"; if (x === 5) result = "B";</span> Apa result terakhir?',
        choices: [
          { text: 'A', detail: '== melakukan type coercion', correct: true, feedback: 'Benar! == coerce "5" ke 5 (true), tapi === cek tipe juga (string !== number = false). Result tetap "A".' },
          { text: 'B', detail: '=== lebih ketat', correct: false, feedback: '=== membandingkan tipe juga. "5" (string) !== 5 (number), jadi result tetap "A"!' }
        ]
      },
      {
        scenario: 'Kode: <span class="code-inline">let val = null ?? "default";</span> Apa nilai val?',
        choices: [
          { text: '"default"', detail: 'null ?? fallback', correct: true, feedback: 'Benar! ?? (nullish coalescing) return right-hand side jika left adalah null atau undefined.' },
          { text: 'null', detail: 'null tetap null', correct: false, feedback: 'Operator ?? khusus untuk null/undefined, akan return "default"!' }
        ]
      },
      {
        scenario: 'Kode: <span class="code-inline">let x = [1,2,3]; if (x) alert("truthy");</span> Apakah alert dijalankan?',
        choices: [
          { text: 'Ya, karena array truthy', detail: 'Array selalu truthy', correct: true, feedback: 'Benar! Array (bahkan kosong []) adalah truthy di JavaScript.' },
          { text: 'Tidak, array kosong falsy', detail: 'Array tidak kosong', correct: false, feedback: 'Semua object termasuk array adalah truthy, bahkan [] kosong!' }
        ]
      }
    ]
  },

  get level4Data() { return this.level4DataByDiff[Storage.getDifficulty()] || this.level4DataByDiff.easy; },

  level5Config: {
    easy: { count: 5, options: ['5', '3', '10'], correct: '5' },
    normal: { count: 8, options: ['8', '5', '12'], correct: '8' },
    hard: { count: 12, options: ['12', '8', '20'], correct: '12' }
  },

  get level5Conf() { return this.level5Config[Storage.getDifficulty()] || this.level5Config.easy; },

  level5State: { count: 0, maxCount: 5, isRunning: false, log: [], phase: 'story' },

  get level5Story() {
    const conf = this.level5Conf;
    return `
    <div style="text-align: center;">
      <div style="font-size: 4rem; margin-bottom: 15px;">${Icons.mat('factory', '64')}</div>
      <h4 style="color: var(--secondary); margin-bottom: 10px; font-family: var(--pixel-font); font-size: 0.65rem;">PABRIK CODING</h4>
      <p style="margin-bottom: 15px;">Robot <strong>R-42</strong> sedang kewalahan! Ada <strong>${conf.count} kotak</strong> yang harus dipindahkan dari conveyor belt ke gudang penyimpanan.</p>
      <p style="color: var(--text-secondary); margin-bottom: 8px;">Robot hanya bisa memindahkan <strong>1 kotak</strong> per instruksi.</p>
      <p style="color: var(--accent); font-family: var(--pixel-font); font-size: 0.5rem;">Gunakan perulangan (loop) untuk membantu robot bekerja!</p>
    </div>
  `;
  },

  get level5LoopCode() {
    const conf = this.level5Conf;
    return `
    <div style="text-align: left; background: #0d0d1a; border-radius: 10px; padding: 16px; font-family: 'Courier New', monospace; font-size: 0.8rem; line-height: 2; border: 1px solid rgba(108,92,231,0.3); width: 100%;">
      <div style="color: #6c6ca0;">--- Loop Factory ---</div>
      <div><span style="color: #74b9ff;">for</span> (<span style="color: #fdcb6e;">let</span> i = <span style="color: #00cec9;">0</span>; i &lt; ${conf.options.map(v => `<span style="color: #ff6b6b; background: rgba(255,107,107,0.15); padding: 0 6px; border-radius: 4px; cursor: pointer;" onclick="Levels.answerLoop('${v}')" id="loop-opt-${v}">${v}</span>`).join(' <span style="color: #6c6ca0;">atau</span> ')}; i++) {
      <span style="color: #6c6ca0;">    // Pindahkan 1 kotak</span>
      <span style="color: #00b894;">    moveBox</span>();
    }</div>
      <div style="color: #6c6ca0; margin-top: 8px; font-size: 0.7rem;">${Icons.mat('lightbulb', '14')} Klik angka yang benar untuk jumlah perulangan!</div>
    </div>
  `;
  },

  level6DataByDiff: {
    easy: [
      {
        code: `1  function hitungLuas() {\n2    let panjang = 10;\n3    let lebar = 5;\n4    let luas = panjang + lebar;  // [BUG]\n5    return luas;\n6  }`,
        bugLine: 4, bugFix: 'Ganti + dengan *', explanation: 'Luas = panjang x lebar, bukan panjang + lebar!',
        correct: 'let luas = panjang * lebar;'
      },
      {
        code: `1  function cekNilai(nilai) {\n2    if (nilai = 100) {  // [BUG]\n3      return "Sempurna!";\n4    }\n5    return "Belum sempurna";\n6  }`,
        bugLine: 2, bugFix: 'Ganti = dengan ===', explanation: 'Perbandingan pakai ===, bukan = (assignment)!',
        correct: 'if (nilai === 100) {'
      },
      {
        code: `1  function sapa(nama) {\n2    console.log("Halo " + nama;\n3  }  // [BUG]`,
        bugLine: 2, bugFix: 'Tutup kurung yang hilang )', explanation: 'Kurung tutup ) hilang setelah variabel nama!',
        correct: 'console.log("Halo " + nama);'
      }
    ],
    normal: [
      {
        code: `1  function hitungRataRata(arr) {\n2    let total = 0;\n3    for (let i = 0; i <= arr.length; i++) {  // [BUG]\n4      total += arr[i];\n5    }\n6    return total / arr.length;\n7  }`,
        bugLine: 3, bugFix: 'Ganti <= dengan <', explanation: 'Off-by-one! i <= arr.length melewati batas array (undefined).',
        correct: 'for (let i = 0; i < arr.length; i++) {'
      },
      {
        code: `1  function cekGanjil(num) {\n2    if (num % 2 = 1) {  // [BUG]\n3      return true;\n4    }\n5    return false;\n6  }`,
        bugLine: 2, bugFix: 'Ganti = dengan ===', explanation: '= adalah assignment, === adalah perbandingan!',
        correct: 'if (num % 2 === 1) {'
      },
      {
        code: `1  let counter = 10;\n2  while (counter > 0) {\n3    console.log(counter);\n4    // counter--;  // [BUG]\n5  }`,
        bugLine: 4, bugFix: 'Uncomment counter--', explanation: 'Tanpa counter--, loop ini infinite karena counter tidak pernah berkurang!',
        correct: 'counter--;'
      },
      {
        code: `1  function tambah(a, b) {\n2    let hasil = a + b;\n3    console.log(hasil);\n4    // return hasil;  // [BUG]\n5  }`,
        bugLine: 4, bugFix: 'Uncomment return hasil', explanation: 'Tanpa return, function mengembalikan undefined!',
        correct: 'return hasil;'
      }
    ],
    hard: [
      {
        code: `1  for (var i = 0; i < 5; i++) {\n2    setTimeout(function() {\n3      console.log(i);  // [BUG]\n4    }, 1000);\n5  }`,
        bugLine: 3, bugFix: 'Gunakan let bukan var', explanation: 'var tidak punya block scope, semua callback share i yang sama (5)!',
        correct: 'for (let i = 0; i < 5; i++) {'
      },
      {
        code: `1  const arr = [1, 2, 3];\n2  arr.forEach(async (item) => {\n3    await processItem(item);  // [BUG]\n4  });  // forEach tidak menunggu async!\n5  console.log("Selesai");`,
        bugLine: 2, bugFix: 'Gunakan for...of untuk async', explanation: 'forEach tidak menunggu async/await. Gunakan for...of loop!',
        correct: 'for (const item of arr) { await processItem(item); }'
      },
      {
        code: `1  function Person(name) {\n2    this.name = name;\n3  }\n4  const p = Person("Budi");  // [BUG]\n5  console.log(p.name);`,
        bugLine: 4, bugFix: 'Tambahkan new keyword', explanation: 'Constructor function harus dipanggil dengan new, tanpa new this merujuk ke global!',
        correct: 'const p = new Person("Budi");'
      },
      {
        code: `1  const obj = {x: 1};\n2  const copy = obj;  // [BUG]\n3  copy.x = 99;\n4  console.log(obj.x); // 99!`,
        bugLine: 2, bugFix: 'Gunakan spread atau Object.assign', explanation: 'Object assignment meng-copy reference, bukan value! Gunakan {...obj} untuk shallow copy.',
        correct: 'const copy = {...obj};'
      },
      {
        code: `1  function sum(a, b) {\n2    if (typeof a !== "number")\n3      return;\n4      throw new Error("Invalid");  // [BUG]\n5    return a + b;\n6  }`,
        bugLine: 4, bugFix: 'Indentasi menipu! throw tidak dalam if', explanation: 'Tanpa {}, hanya baris pertama setelah if yang masuk blok. throw selalu dijalankan!',
        correct: 'if (typeof a !== "number") { return; throw new Error("Invalid"); }'
      }
    ]
  },

  get level6Data() { return this.level6DataByDiff[Storage.getDifficulty()] || this.level6DataByDiff.easy; },

  level7DataByDiff: {
    easy: {
      steps: [
        { id: 'start', label: 'Start', icon: Icons.mat('play_circle', '20'), class: 'start' },
        { id: 'input', label: 'Input', icon: Icons.mat('keyboard', '20'), class: 'input' },
        { id: 'process', label: 'Process', icon: Icons.mat('settings', '20'), class: 'process' },
        { id: 'output', label: 'Output', icon: Icons.mat('print', '20'), class: 'output' },
        { id: 'end', label: 'End', icon: Icons.mat('stop_circle', '20'), class: 'end' }
      ],
      correctOrder: ['start', 'input', 'process', 'output', 'end']
    },
    normal: {
      steps: [
        { id: 'start', label: 'Start', icon: Icons.mat('play_circle', '20'), class: 'start' },
        { id: 'init', label: 'Initialize', icon: Icons.mat('restart_alt', '20'), class: 'input' },
        { id: 'input', label: 'Input', icon: Icons.mat('keyboard', '20'), class: 'input' },
        { id: 'validate', label: 'Validate', icon: Icons.mat('verified', '20'), class: 'process' },
        { id: 'process', label: 'Process', icon: Icons.mat('settings', '20'), class: 'process' },
        { id: 'output', label: 'Output', icon: Icons.mat('print', '20'), class: 'output' },
        { id: 'end', label: 'End', icon: Icons.mat('stop_circle', '20'), class: 'end' }
      ],
      correctOrder: ['start', 'init', 'input', 'validate', 'process', 'output', 'end']
    },
    hard: {
      steps: [
        { id: 'start', label: 'Start', icon: Icons.mat('play_circle', '20'), class: 'start' },
        { id: 'init', label: 'Initialize', icon: Icons.mat('restart_alt', '20'), class: 'input' },
        { id: 'input', label: 'Input', icon: Icons.mat('keyboard', '20'), class: 'input' },
        { id: 'validate', label: 'Validate', icon: Icons.mat('verified', '20'), class: 'process' },
        { id: 'sanitize', label: 'Sanitize', icon: Icons.mat('cleaning_services', '20'), class: 'process' },
        { id: 'process', label: 'Process', icon: Icons.mat('settings', '20'), class: 'process' },
        { id: 'format', label: 'Format', icon: Icons.mat('format_paint', '20'), class: 'output' },
        { id: 'output', label: 'Output', icon: Icons.mat('print', '20'), class: 'output' },
        { id: 'end', label: 'End', icon: Icons.mat('stop_circle', '20'), class: 'end' }
      ],
      correctOrder: ['start', 'init', 'input', 'validate', 'sanitize', 'process', 'format', 'output', 'end']
    }
  },

  get level7Data() { return this.level7DataByDiff[Storage.getDifficulty()] || this.level7DataByDiff.easy; },

  bossDataByDiff: {
    easy: [
      {
        question: 'Apa output dari: <span class="code-inline">console.log("Hello " + "World")</span>?',
        answers: [
          { text: 'Hello World', correct: true }, { text: 'HelloWorld', correct: false },
          { text: 'Hello + World', correct: false }, { text: 'Error', correct: false }
        ]
      },
      {
        question: 'Manakah yang merupakan <span class="code-inline">variabel</span> yang valid di JavaScript?',
        answers: [
          { text: 'let nama = "Budi"', correct: true }, { text: 'var 1nama = "Budi"', correct: false },
          { text: 'let nama-saya = "Budi"', correct: false }, { text: 'var class = "Budi"', correct: false }
        ]
      },
      {
        question: 'Apa hasil dari <span class="code-inline">5 + "5"</span> di JavaScript?',
        answers: [
          { text: '55', correct: true }, { text: '10', correct: false },
          { text: 'Error', correct: false }, { text: 'undefined', correct: false }
        ]
      },
      {
        question: 'Perulangan <span class="code-inline">for</span> dijalankan selama kondisi masih...',
        answers: [
          { text: 'true', correct: true }, { text: 'false', correct: false },
          { text: '0', correct: false }, { text: 'null', correct: false }
        ]
      },
      {
        question: 'Apa fungsi dari <span class="code-inline">return</span> dalam function?',
        answers: [
          { text: 'Mengembalikan nilai', correct: true }, { text: 'Mencetak ke layar', correct: false },
          { text: 'Mengulang kode', correct: false }, { text: 'Membuat variabel', correct: false }
        ]
      },
      {
        question: 'Array di JavaScript dimulai dari index ke berapa?',
        answers: [
          { text: '0', correct: true }, { text: '1', correct: false },
          { text: '-1', correct: false }, { text: 'undefined', correct: false }
        ]
      },
      {
        question: 'Apa output dari: <span class="code-inline">2 ** 3</span>?',
        answers: [
          { text: '8', correct: true }, { text: '6', correct: false },
          { text: '9', correct: false }, { text: '5', correct: false }
        ]
      },
      {
        question: 'Manakah yang merupakan <span class="code-inline">function</span>?',
        answers: [
          { text: 'function sapa() {}', correct: true }, { text: 'let sapa = {}', correct: false },
          { text: 'let sapa = []', correct: false }, { text: 'if (sapa) {}', correct: false }
        ]
      }
    ],
    normal: [
      {
        question: 'Apa output: <span class="code-inline">typeof null</span>?',
        answers: [
          { text: '"object"', correct: true }, { text: '"null"', correct: false },
          { text: '"undefined"', correct: false }, { text: 'Error', correct: false }
        ]
      },
      {
        question: 'Apa output: <span class="code-inline">[1,2,3].indexOf(4)</span>?',
        answers: [
          { text: '-1', correct: true }, { text: 'undefined', correct: false },
          { text: 'false', correct: false }, { text: '0', correct: false }
        ]
      },
      {
        question: '<span class="code-inline">let x = [1,2]; let y = x; y.push(3);</span> Berapa x.length?',
        answers: [
          { text: '3', correct: true }, { text: '2', correct: false },
          { text: 'Error', correct: false }, { text: 'undefined', correct: false }
        ]
      },
      {
        question: 'Apa perbedaan <span class="code-inline">==</span> dan <span class="code-inline">===</span>?',
        answers: [
          { text: '=== cek tipe juga', correct: true }, { text: 'Sama saja', correct: false },
          { text: '== lebih ketat', correct: false }, { text: '=== hanya angka', correct: false }
        ]
      },
      {
        question: 'Apa output: <span class="code-inline">"hello".toUpperCase()</span>?',
        answers: [
          { text: '"HELLO"', correct: true }, { text: '"Hello"', correct: false },
          { text: '"hello"', correct: false }, { text: 'Error', correct: false }
        ]
      },
      {
        question: 'Method mana yang MENGUBAH array asli?',
        answers: [
          { text: 'push()', correct: true }, { text: 'map()', correct: false },
          { text: 'filter()', correct: false }, { text: 'concat()', correct: false }
        ]
      },
      {
        question: 'Apa output: <span class="code-inline">Boolean("")</span>?',
        answers: [
          { text: 'false', correct: true }, { text: 'true', correct: false },
          { text: 'undefined', correct: false }, { text: '"false"', correct: false }
        ]
      },
      {
        question: '<span class="code-inline">const obj = {a:1}; obj.a = 2;</span> Error atau tidak?',
        answers: [
          { text: 'Tidak error', correct: true }, { text: 'Error: const', correct: false },
          { text: 'Error: readonly', correct: false }, { text: 'undefined', correct: false }
        ]
      }
    ],
    hard: [
      {
        question: 'Apa output: <span class="code-inline">0.1 + 0.2 === 0.3</span>?',
        answers: [
          { text: 'false', correct: true }, { text: 'true', correct: false },
          { text: 'NaN', correct: false }, { text: 'Error', correct: false }
        ]
      },
      {
        question: 'Apa output: <span class="code-inline">typeof NaN</span>?',
        answers: [
          { text: '"number"', correct: true }, { text: '"NaN"', correct: false },
          { text: '"undefined"', correct: false }, { text: '"object"', correct: false }
        ]
      },
      {
        question: '<span class="code-inline">[10,9,8].sort()</span> menghasilkan?',
        answers: [
          { text: '[10, 8, 9]', correct: true }, { text: '[8, 9, 10]', correct: false },
          { text: '[10, 9, 8]', correct: false }, { text: 'Error', correct: false }
        ]
      },
      {
        question: 'Apa output: <span class="code-inline">[] == ![]</span>?',
        answers: [
          { text: 'true', correct: true }, { text: 'false', correct: false },
          { text: 'Error', correct: false }, { text: 'undefined', correct: false }
        ]
      },
      {
        question: '<span class="code-inline">let a = {}; let b = {}; a == b;</span> Hasilnya?',
        answers: [
          { text: 'false', correct: true }, { text: 'true', correct: false },
          { text: 'Error', correct: false }, { text: 'undefined', correct: false }
        ]
      },
      {
        question: 'Apa yang terjadi: <span class="code-inline">console.log(x); let x = 5;</span>?',
        answers: [
          { text: 'ReferenceError', correct: true }, { text: 'undefined', correct: false },
          { text: '5', correct: false }, { text: 'null', correct: false }
        ]
      },
      {
        question: '<span class="code-inline">"b" + "a" + +"a" + "a"</span> menghasilkan?',
        answers: [
          { text: '"baNaNa"', correct: true }, { text: '"baaa"', correct: false },
          { text: 'Error', correct: false }, { text: '"ba0a"', correct: false }
        ]
      },
      {
        question: 'Apa output: <span class="code-inline">[..."hello"]</span>?',
        answers: [
          { text: '["h","e","l","l","o"]', correct: true }, { text: '["hello"]', correct: false },
          { text: 'Error', correct: false }, { text: '"hello"', correct: false }
        ]
      },
      {
        question: '<span class="code-inline">Promise.resolve(1).then(console.log); console.log(2);</span> Urutan output?',
        answers: [
          { text: '2, 1', correct: true }, { text: '1, 2', correct: false },
          { text: '2', correct: false }, { text: 'Error', correct: false }
        ]
      },
      {
        question: 'Apa output: <span class="code-inline">Math.max()</span>?',
        answers: [
          { text: '-Infinity', correct: true }, { text: '0', correct: false },
          { text: 'undefined', correct: false }, { text: 'Error', correct: false }
        ]
      }
    ]
  },

  get bossData() { return this.bossDataByDiff[Storage.getDifficulty()] || this.bossDataByDiff.easy; },

  bossDamageByDiff: { easy: 15, normal: 12, hard: 10 },

  // ========== LEVEL 8 & 9 DIFFICULTY ==========

  level8Questions: {
    easy: [
      {
        code: `<div style="color: #6c6ca0;">// Array Bahasa Pemrograman</div>
<div><span style="color: #74b9ff;">let</span> bahasa = [<span style="color: #55efc4;">"Python"</span>, <span style="color: #55efc4;">"JavaScript"</span>, <span style="color: #55efc4;">"Java"</span>, <span style="color: #55efc4;">"C++"</span>];</div>
<div style="color: #6c6ca0; margin-top: 8px;">// Index:    0           1            2        3</div>`,
        question: 'Akses index berapa untuk mendapatkan "Java"?',
        options: ['0', '1', '2', '3'],
        correct: '2',
        feedback: 'Benar! bahasa[2] = "Java". Index dimulai dari 0!'
      },
      {
        code: `<div style="color: #6c6ca0;">let buah = ["Apel", "Mangga", "Jeruk", "Anggur"];</div>`,
        question: 'Berapa panjang array <strong>buah</strong>?',
        options: ['3', '4', '5', '2'],
        correct: '4',
        feedback: 'Benar! Ada 4 elemen: Apel(0), Mangga(1), Jeruk(2), Anggur(3) → buah.length = 4!'
      },
      {
        code: `<div style="color: #6c6ca0;">let angka = [10, 20, 30, 40, 50];</div>
<div>angka[0] = 99;</div>`,
        question: 'Setelah kode dijalankan, bagaimana isi array <strong>angka</strong>?',
        options: ['[99, 20, 30, 40, 50]', '[10, 20, 30, 40, 50]', '[99, 99, 99, 99, 99]', 'Error'],
        correct: '[99, 20, 30, 40, 50]',
        feedback: 'Benar! angka[0] = 99 mengubah elemen pertama tanpa mempengaruhi yang lain!'
      },
      {
        code: `<div style="color: #6c6ca0;">let hewan = ["Kucing", "Anjing", "Ikan"];</div>
<div>let hewanKedua = hewan[1];</div>`,
        question: 'Apa nilai dari <strong>hewanKedua</strong>?',
        options: ['"Kucing"', '"Anjing"', '"Ikan"', 'undefined'],
        correct: '"Anjing"',
        feedback: 'Benar! hewan[1] = "Anjing". Ingat, index dimulai dari 0! Kucing=0, Anjing=1, Ikan=2.'
      }
    ],
    normal: [
      {
        code: `<div style="color: #6c6ca0;">let arr = [1, 2, 3];</div>
<div>arr.push(4);</div>
<div>arr.push(5);</div>`,
        question: 'Setelah kode dijalankan, isi arr adalah?',
        options: ['[1, 2, 3, 4, 5]', '[5, 4, 3, 2, 1]', '[1, 2, 3]', '[4, 5, 1, 2, 3]'],
        correct: '[1, 2, 3, 4, 5]',
        feedback: 'Benar! push() menambahkan elemen di akhir array!'
      },
      {
        code: `<div style="color: #6c6ca0;">let arr = [1, 2, 3];</div>
<div>let last = arr.pop();</div>`,
        question: 'Apa nilai <strong>last</strong> dan isi <strong>arr</strong> sekarang?',
        options: ['last=3, arr=[1,2]', 'last=1, arr=[2,3]', 'last=3, arr=[1,2,3]', 'last=1, arr=[1,2,3]'],
        correct: 'last=3, arr=[1,2]',
        feedback: 'Benar! pop() menghapus dan mengembalikan elemen TERAKHIR array!'
      },
      {
        code: `<div style="color: #6c6ca0;">let arr = [10, 20, 30];</div>
<div>arr.unshift(5);</div>`,
        question: 'Sekarang isi arr adalah?',
        options: ['[5, 10, 20, 30]', '[10, 20, 30, 5]', '[5, 10, 20, 30, 5]', '[10, 20, 30]'],
        correct: '[5, 10, 20, 30]',
        feedback: 'Benar! unshift() menambahkan elemen di AWAL array!'
      },
      {
        code: `<div style="color: #6c6ca0;">let arr = ["a", "b", "c", "d", "e"];</div>
<div>let sliced = arr.slice(1, 4);</div>`,
        question: 'Apa nilai <strong>sliced</strong>?',
        options: ['["b", "c", "d"]', '["a", "b", "c"]', '["b", "c", "d", "e"]', '["c", "d", "e"]'],
        correct: '["b", "c", "d"]',
        feedback: 'Benar! slice(1,4) mengambil dari index 1 sampai SEBELUM index 4!'
      }
    ],
    hard: [
      {
        code: `<div style="color: #6c6ca0;">const arr = [1, 2, 3, 4, 5];</div>
<div>const [a, b, ...rest] = arr;</div>`,
        question: 'Apa nilai <strong>a</strong>, <strong>b</strong>, dan <strong>rest</strong>?',
        options: ['a=1, b=2, rest=[3,4,5]', 'a=1, b=2, rest=[1,2]', 'a=1, b=2, rest=[4,5]', 'a=[1,2], b=[3,4], rest=[5]'],
        correct: 'a=1, b=2, rest=[3,4,5]',
        feedback: 'Benar! Destructuring: a ambil index 0, b ambil index 1, ...rest ambil sisanya!'
      },
      {
        code: `<div style="color: #6c6ca0;">let arr1 = [1, 2];</div>
<div>let arr2 = [3, 4];</div>
<div>let combined = [...arr1, ...arr2];</div>`,
        question: 'Apa nilai <strong>combined</strong>?',
        options: ['[1, 2, 3, 4]', '[[1, 2], [3, 4]]', '[3, 4, 1, 2]', '[[1,2],[3,4]]'],
        correct: '[1, 2, 3, 4]',
        feedback: 'Benar! Spread operator (...) menyebarkan isi array menjadi elemen individual!'
      },
      {
        code: `<div style="color: #6c6ca0;">let numbers = [1, 2, 3, 4];</div>
<div>let doubled = numbers.map(n => n * 2);</div>`,
        question: 'Apa nilai <strong>doubled</strong>?',
        options: ['[2, 4, 6, 8]', '[1, 2, 3, 4]', '[1, 4, 9, 16]', '[1, 2, 3, 4, 1, 2, 3, 4]'],
        correct: '[2, 4, 6, 8]',
        feedback: 'Benar! map() menjalankan fungsi pada setiap elemen dan menghasilkan array baru!'
      },
      {
        code: `<div style="color: #6c6ca0;">let ages = [15, 22, 17, 30, 12];</div>
<div>let adults = ages.filter(age => age >= 18);</div>`,
        question: 'Apa nilai <strong>adults</strong>?',
        options: ['[22, 30]', '[15, 22, 17, 30, 12]', '[15, 17, 12]', '[22, 17, 30]'],
        correct: '[22, 30]',
        feedback: 'Benar! filter() membuat array baru hanya dengan elemen yang memenuhi kondisi (age >= 18)!'
      }
    ]
  },

  level9Questions: {
    easy: [
      {
        code: `<div style="color: #6c6ca0;">let siswa = {</div>
<div>  nama: <span style="color: #55efc4;">"Budi"</span>,</div>
<div>  umur: <span style="color: #ff6b6b;">16</span>,</div>
<div>  kelas: <span style="color: #55efc4;">"X RPL"</span></div>
<div style="color: #6c6ca0;">}</div>`,
        question: 'Akses <strong>siswa.umur</strong> akan menghasilkan?',
        options: ['"Budi"', '16', '"X RPL"', 'undefined'],
        correct: '16',
        feedback: 'Benar! siswa.umur = 16. Gunakan dot (.) untuk akses properti object!'
      },
      {
        code: `<div style="color: #6c6ca0;">let mobil = {</div>
<div>  merk: <span style="color: #55efc4;">"Toyota"</span>,</div>
<div>  tahun: <span style="color: #ff6b6b;">2020</span>,</div>
<div>  warna: <span style="color: #55efc4;">"Merah"</span></div>
<div style="color: #6c6ca0;">}</div>`,
        question: 'Bagaimana cara mengakses properti <strong>merk</strong>?',
        options: ['mobil.merk', 'mobil["tahun"]', 'mobil.warna', 'merk.mobil'],
        correct: 'mobil.merk',
        feedback: 'Benar! Gunakan namaObject.namaProperti untuk mengakses nilai!'
      },
      {
        code: `<div style="color: #6c6ca0;">let buku = {</div>
<div>  judul: <span style="color: #55efc4;">"Harry Potter"</span>,</div>
<div>  halaman: <span style="color: #ff6b6b;">500</span></div>
<div style="color: #6c6ca0;">};</div>
<div>buku.penerbit = <span style="color: #55efc4;">"Gramedia"</span>;</div>`,
        question: 'Apa yang terjadi setelah kode terakhir dijalankan?',
        options: ['Properti penerbit ditambahkan', 'Error', 'Property lama dihapus', 'Tidak terjadi apa-apa'],
        correct: 'Properti penerbit ditambahkan',
        feedback: 'Benar! Kamu bisa menambah properti baru ke object kapan saja dengan assignment!'
      },
      {
        code: `<div style="color: #6c6ca0;">let game = {</div>
<div>  title: <span style="color: #55efc4;">"Code Academy"</span>,</div>
<div>  level: <span style="color: #ff6b6b;">8</span></div>
<div style="color: #6c6ca0;">}</div>`,
        question: 'Akses properti <strong>title</strong> menggunakan bracket notation?',
        options: ['game["title"]', 'game.title', 'game(title)', 'title.game'],
        correct: 'game["title"]',
        feedback: 'Benar! game["title"] = "Code Academy". Bracket notation menggunakan string!'
      }
    ],
    normal: [
      {
        code: `<div style="color: #6c6ca0;">let siswa = {</div>
<div>  nama: <span style="color: #55efc4;">"Budi"</span>,</div>
<div>  alamat: {</div>
<div>    kota: <span style="color: #55efc4;">"Jakarta"</span>,</div>
<div>    kodePos: <span style="color: #ff6b6b;">12345</span></div>
<div>  }</div>
<div style="color: #6c6ca0;">}</div>`,
        question: 'Akses <strong>siswa.alamat.kota</strong> menghasilkan?',
        options: ['"Jakarta"', '"Budi"', '12345', 'undefined'],
        correct: '"Jakarta"',
        feedback: 'Benar! Nested object: chain dot notation untuk mengakses properti bersarang!'
      },
      {
        code: `<div style="color: #6c6ca0;">let siswa = {</div>
<div>  nama: <span style="color: #55efc4;">"Budi"</span>,</div>
<div>  nilai: {</div>
<div>    mtk: <span style="color: #ff6b6b;">85</span>,</div>
<div>    ipa: <span style="color: #ff6b6b;">90</span></div>
<div>  }</div>
<div style="color: #6c6ca0;">}</div>`,
        question: 'Akses nilai Matematika Budi?',
        options: ['siswa.nilai.mtk', 'siswa["nilai"]["mtk"]', 'Keduanya benar', 'siswa.mtk'],
        correct: 'Keduanya benar',
        feedback: 'Benar! Bisa pakai dot: siswa.nilai.mtk ATAU bracket: siswa["nilai"]["mtk"]!'
      },
      {
        code: `<div style="color: #6c6ca0;">let key = "nama";</div>
<div>let orang = { nama: "Sari", umur: 17 };</div>`,
        question: 'Akses <strong>orang[key]</strong> menghasilkan?',
        options: ['"Sari"', '17', '"nama"', 'undefined'],
        correct: '"Sari"',
        feedback: 'Benar! Bracket notation bisa menggunakan variabel sebagai key! orang["nama"] = "Sari"!'
      },
      {
        code: `<div style="color: #6c6ca0;">let user = {</div>
<div>  name: <span style="color: #55efc4;">"Alex"</span>,</div>
<div>  greet() { <span style="color: #74b9ff;">return</span> <span style="color: #55efc4;">"Halo, "</span> + this.name; }</div>
<div style="color: #6c6ca0;">}</div>`,
        question: '<strong>user.greet()</strong> menghasilkan?',
        options: ['"Halo, Alex"', '"Halo, "', '"Halo, user"', 'Error'],
        correct: '"Halo, Alex"',
        feedback: 'Benar! Method greet() mengakses this.name milik object itu sendiri!'
      }
    ],
    hard: [
      {
        code: `<div style="color: #6c6ca0;">const calc = {</div>
<div>  value: <span style="color: #ff6b6b;">10</span>,</div>
<div>  add(n) { <span style="color: #74b9ff;">return</span> { ...this, value: this.value + n }; },</div>
<div>  getValue() { <span style="color: #74b9ff;">return</span> this.value; }</div>
<div style="color: #6c6ca0;">}</div>`,
        question: '<strong>calc.add(5).getValue()</strong> menghasilkan?',
        options: ['15', '10', 'Error', 'undefined'],
        correct: '15',
        feedback: 'Benar! add(5) return object baru dengan value: 10+5=15, lalu getValue() return 15!'
      },
      {
        code: `<div style="color: #6c6ca0;">const obj1 = { x: 1 };</div>
<div>const obj2 = obj1;</div>
<div>obj2.x = 99;</div>`,
        question: 'Sekarang <strong>obj1.x</strong> bernilai?',
        options: ['99', '1', 'Error', 'undefined'],
        correct: '99',
        feedback: 'Benar! Object di-copy by reference. obj1 dan obj2 mengacu ke object yang SAMA!'
      },
      {
        code: `<div style="color: #6c6ca0;">const person = {</div>
<div>  name: <span style="color: #55efc4;">"Budi"</span>,</div>
<div>  age: <span style="color: #ff6b6b;">17</span></div>
<div style="color: #6c6ca0;">};</div>
<div>const { name, age } = person;</div>`,
        question: 'Apa nilai <strong>name</strong> setelah destructuring?',
        options: ['"Budi"', '17', 'undefined', '"person"'],
        correct: '"Budi"',
        feedback: 'Benar! Destructuring object: const { name } = person → name = person.name!'
      },
      {
        code: `<div style="color: #6c6ca0;">const data = {</div>
<div>  items: [<span style="color: #ff6b6b;">1</span>, <span style="color: #ff6b6b;">2</span>, <span style="color: #ff6b6b;">3</span>],</div>
<div>  getFirst() {</div>
<div>    <span style="color: #74b9ff;">return</span> this.items[<span style="color: #ff6b6b;">0</span>];</div>
<div>  }</div>
<div style="color: #6c6ca0;">}</div>`,
        question: '<strong>data.getFirst()</strong> menghasilkan?',
        options: ['1', '[1, 2, 3]', '"items"', 'undefined'],
        correct: '1',
        feedback: 'Benar! this.items mengakses properti items milik object yang sama, [0] ambil elemen pertama!'
      }
    ]
  },

  // ========== INIT ==========

  init(levelNum) {
    this.currentLevel = levelNum;
    this.state = {};
    Game.startTimer();

    const screen = document.getElementById('level-screen');

    if (levelNum <= 9) {
      const data = this.levelData[levelNum];
      document.getElementById('level-title').innerHTML = `${data.icon} ${data.title}`;
      document.getElementById('level-subtitle').textContent = data.subtitle;

      const body = screen.querySelector('.level-body');
      body.innerHTML = this.getLevelHTML(levelNum);
      this.initLevelLogic(levelNum);
      this.updateScore();
      Game.showScreen('level-screen');
    } else if (levelNum === 10) {
      this.initBossLevel();
    }
  },

  getLevelHTML(levelNum) {
    switch (levelNum) {
      case 1: return this.getLevel1HTML();
      case 2: return this.getLevel2HTML();
      case 3: return this.getLevel3HTML();
      case 4: return this.getLevel4HTML();
      case 5: return this.getLevel5HTML();
      case 6: return this.getLevel6HTML();
      case 7: return this.getLevel7HTML();
      case 8: return this.getLevel8HTML();
      case 9: return this.getLevel9HTML();
      default: return '<p>Level tidak ditemukan!</p>';
    }
  },

  getLevel1HTML() {
    const data = this.levelData[1];
    return `
      <h3>${data.icon} ${data.title}</h3>
      <p class="level-desc">${data.desc}</p>
      <p style="margin-bottom: 20px; font-size: 0.9rem;">${data.question}</p>
      <div style="display: flex; gap: 15px;">
        ${data.choices.map((c, i) => `
          <button class="btn ${c.correct ? 'btn-secondary' : 'btn-ghost'}" onclick="Levels.answerLevel1(${i})">
            ${c.text}
          </button>
        `).join('')}
      </div>
      <div id="level1-feedback" style="margin-top: 20px;"></div>
    `;
  },

  answerLevel1(choiceIndex) {
    const data = this.levelData[1];
    const choice = data.choices[choiceIndex];
    const feedback = document.getElementById('level1-feedback');

    if (choice.correct) {
      Game.playSound('correct');
      feedback.innerHTML = `<p style="color: var(--success);">${Icons.mat('check_circle', '16')} ${choice.feedback}</p>`;
      Game.addScore(100);
      Game.completeLevel(1);
      Game.showToast(`${Icons.mat('celebration', '16')} Selamat! Level 1 selesai!`, 'success');
    } else {
      Game.playSound('wrong');
      feedback.innerHTML = `<p style="color: var(--danger);">${Icons.mat('cancel', '16')} ${choice.feedback}</p>`;
    }
  },

  getLevel2HTML() {
    const data = this.level2Data;
    return `
      <h3>${Icons.span(Icons.box, '28', 'var(--accent)')} Variable Room</h3>
      <p class="level-desc">Seret data ke dalam kotak variabel yang sesuai!</p>

      <div class="drag-container">
        <div class="data-items" id="data-items">
          ${data.items.map(item => `
            <div class="data-item ${item.type}" draggable="true" data-id="${item.id}" data-type="${item.type}">
              ${item.value}
            </div>
          `).join('')}
        </div>

        <div class="variable-slots" id="variable-slots">
          ${data.slots.map(slot => `
            <div class="variable-slot" data-accept="${slot.type}" data-id="${slot.id}">
              <div class="slot-label">${slot.label}</div>
              <div class="slot-value" id="slot-${slot.id}"></div>
            </div>
          `).join('')}
        </div>
      </div>

      <div id="level2-feedback" style="margin-top: 15px;"></div>
    `;
  },

  initLevel2() {
    const items = document.querySelectorAll('.data-item');
    const slots = document.querySelectorAll('.variable-slot');
    let matched = 0;
    const totalToMatch = this.level2Data.items.length;

    items.forEach(item => {
      item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', JSON.stringify({
          id: item.dataset.id, type: item.dataset.type, value: item.textContent.trim()
        }));
        item.classList.add('dragging');
      });
      item.addEventListener('dragend', () => { item.classList.remove('dragging'); });
    });

    slots.forEach(slot => {
      slot.addEventListener('dragover', (e) => { e.preventDefault(); slot.classList.add('drag-over'); });
      slot.addEventListener('dragleave', () => { slot.classList.remove('drag-over'); });

      slot.addEventListener('drop', (e) => {
        e.preventDefault();
        slot.classList.remove('drag-over');

        const data = JSON.parse(e.dataTransfer.getData('text/plain'));
        const acceptType = slot.dataset.accept;
        const feedback = document.getElementById('level2-feedback');

        if (data.type === acceptType) {
          const slotValue = document.getElementById(`slot-${slot.dataset.id}`);
          slotValue.innerHTML += `<span class="data-item ${data.type} slot-badge">${data.value}</span>`;
          slot.classList.add('filled');

          const draggedItem = document.querySelector(`.data-item[data-id="${data.id}"]`);
          if (draggedItem) draggedItem.remove();
          matched++;

          let progressEl = slot.querySelector('.slot-progress');
          if (!progressEl) {
            progressEl = document.createElement('div');
            progressEl.className = 'slot-progress';
            slot.appendChild(progressEl);
          }
          const itemsInSlot = slotValue.querySelectorAll('.slot-badge').length;
          progressEl.textContent = `${itemsInSlot} item`;

          feedback.innerHTML = `<p style="color: var(--success);">${Icons.mat('check_circle', '16')} Benar! ${data.value} adalah ${acceptType} (${matched}/${totalToMatch})</p>`;

          if (matched >= totalToMatch) {
            setTimeout(() => {
              Game.playSound('victory');
              feedback.innerHTML = `<p style="color: var(--success); font-size: 1rem;">${Icons.mat('celebration', '16')} Semua ${totalToMatch} variabel tersimpan dengan benar!</p>`;
              Game.addScore(100);
              Game.completeLevel(2);
              Game.showToast(`${Icons.mat('celebration', '16')} Level 2 Selesai!`, 'success');
            }, 500);
          }
        } else {
          Game.playSound('wrong');
          feedback.innerHTML = `<p style="color: var(--danger);">${Icons.mat('cancel', '16')} Salah! ${data.value} bukan ${acceptType}</p>`;
        }
      });
    });
  },

  getLevel3HTML() {
    const data = this.level3Data;
    const shuffledOutputs = [...data].sort(() => Math.random() - 0.5);

    return `
      <h3>${Icons.span(Icons.shuffle, '28', 'var(--secondary)')} Input Output</h3>
      <p class="level-desc">Klik input, lalu klik output yang sesuai!</p>

      <div class="io-container">
        <div class="io-matching">
          <div style="text-align: center; font-family: var(--pixel-font); font-size: 0.5rem; color: var(--text-muted); margin-bottom: 10px;">INPUT</div>
          <div style="text-align: center; font-family: var(--pixel-font); font-size: 0.5rem; color: var(--text-muted); margin-bottom: 10px;">OUTPUT</div>

          <div id="io-inputs">
            ${data.map(item => `
              <div class="io-item" data-id="${item.id}" data-type="input">${item.input}</div>
            `).join('')}
          </div>

          <div id="io-outputs">
            ${shuffledOutputs.map(item => `
              <div class="io-item" data-id="${item.id}" data-type="output">${item.output}</div>
            `).join('')}
          </div>
        </div>
      </div>

      <div id="level3-feedback" style="margin-top: 15px;"></div>
    `;
  },

  initLevel3() {
    let selectedInput = null;
    let matched = 0;
    const total = this.level3Data.length;
    const inputs = document.querySelectorAll('#io-inputs .io-item');
    const outputs = document.querySelectorAll('#io-outputs .io-item');

    inputs.forEach(input => {
      input.addEventListener('click', () => {
        if (input.classList.contains('matched')) return;
        inputs.forEach(i => i.classList.remove('selected'));
        input.classList.add('selected');
        selectedInput = input.dataset.id;
      });
    });

    outputs.forEach(output => {
      output.addEventListener('click', () => {
        if (output.classList.contains('matched') || !selectedInput) return;
        const feedback = document.getElementById('level3-feedback');

        if (output.dataset.id === selectedInput) {
          const inputEl = document.querySelector(`#io-inputs .io-item[data-id="${selectedInput}"]`);
          inputEl.classList.remove('selected');
          inputEl.classList.add('matched');
          output.classList.add('matched');
          matched++;
          feedback.innerHTML = `<p style="color: var(--success);">${Icons.mat('check_circle', '16')} Cocok! (${matched}/${total})</p>`;
          selectedInput = null;
          Game.playSound('correct');

          if (matched >= total) {
            setTimeout(() => {
              Game.playSound('victory');
              feedback.innerHTML = `<p style="color: var(--success); font-size: 1rem;">${Icons.mat('celebration', '16')} Semua pasangan benar!</p>`;
              Game.addScore(100);
              Game.completeLevel(3);
              Game.showToast(`${Icons.mat('celebration', '16')} Level 3 Selesai!`, 'success');
            }, 500);
          }
        } else {
          Game.playSound('wrong');
          feedback.innerHTML = `<p style="color: var(--danger);">${Icons.mat('cancel', '16')} Tidak cocok! Coba lagi.</p>`;
          output.classList.add('wrong');
          setTimeout(() => output.classList.remove('wrong'), 500);
        }
      });
    });
  },

  getLevel4HTML() {
    return `
      <h3>${Icons.span(Icons.gitBranch, '28', 'var(--warning)')} If Else</h3>
      <p class="level-desc">Pilih keputusan yang tepat untuk setiap situasi!</p>
      <div class="ifelse-container" id="ifelse-container"></div>
      <div id="level4-feedback" style="margin-top: 15px;"></div>
    `;
  },

  initLevel4() {
    this.state.scenarioIndex = 0;
    this.state.correctCount = 0;
    this.showIfElseScenario();
  },

  showIfElseScenario() {
    const container = document.getElementById('ifelse-container');
    const feedback = document.getElementById('level4-feedback');
    const scenarios = this.level4Data;

    if (this.state.scenarioIndex >= scenarios.length) {
      feedback.innerHTML = `<p style="color: var(--success); font-size: 1rem;">${Icons.mat('celebration', '16')} ${this.state.correctCount} dari ${scenarios.length} benar! Level selesai!</p>`;
      Game.playSound('victory');
      Game.addScore(100);
      Game.completeLevel(4);
      Game.showToast(`${Icons.mat('celebration', '16')} Level 4 Selesai!`, 'success');
      return;
    }

    const scenario = scenarios[this.state.scenarioIndex];
    feedback.innerHTML = '';

    container.innerHTML = `
      <p class="scenario-text">${scenario.scenario}</p>
      <div class="choices-container">
        ${scenario.choices.map((c, i) => `
          <div class="choice-card" onclick="Levels.answerIfElse(${i})">
            <h4>${c.text}</h4>
            <p>${c.detail}</p>
          </div>
        `).join('')}
      </div>
    `;
  },

  answerIfElse(choiceIndex) {
    const scenario = this.level4Data[this.state.scenarioIndex];
    const choice = scenario.choices[choiceIndex];
    const feedback = document.getElementById('level4-feedback');
    const cards = document.querySelectorAll('.choice-card');

    cards.forEach((card, i) => {
      card.style.pointerEvents = 'none';
      if (scenario.choices[i].correct) card.classList.add('correct');
      else if (i === choiceIndex && !choice.correct) card.classList.add('wrong');
    });

    if (choice.correct) {
      Game.playSound('correct');
      this.state.correctCount++;
      feedback.innerHTML = `<p style="color: var(--success);">${Icons.mat('check_circle', '16')} ${choice.feedback}</p>`;
    } else {
      Game.playSound('wrong');
      feedback.innerHTML = `<p style="color: var(--danger);">${Icons.mat('cancel', '16')} ${choice.feedback}</p>`;
    }

    this.state.scenarioIndex++;
    setTimeout(() => this.showIfElseScenario(), 1500);
  },

  getLevel5HTML() {
    return `
      <h3>${Icons.span(Icons.repeat, '28', 'var(--secondary)')} Loop Factory</h3>
      <p class="level-desc">Robot R-42 di pabrik coding perlu bantuanmu! Gunakan perulangan (loop) untuk memindahkan kotak.</p>

      <div class="loop-container">
        <div id="level5-content" style="width: 100%;">
          ${this.level5Story}
        </div>

        <button class="btn btn-secondary" id="level5-next-btn" onclick="Levels.showLoopCode()">
          ${Icons.mat('arrow_forward', '18')} Lanjut ke Kode!
        </button>
      </div>

      <div id="level5-feedback" style="margin-top: 15px;"></div>
    `;
  },

  showLoopCode() {
    const content = document.getElementById('level5-content');
    const btn = document.getElementById('level5-next-btn');
    content.innerHTML = this.level5LoopCode;
    btn.style.display = 'none';
  },

  answerLoop(value) {
    const conf = this.level5Conf;
    conf.options.forEach(v => {
      const el = document.getElementById(`loop-opt-${v}`);
      if (el) { el.style.background = 'rgba(255,107,107,0.15)'; el.style.color = '#ff6b6b'; }
    });

    const clicked = document.getElementById(`loop-opt-${value}`);
    if (clicked) {
      clicked.style.background = value === conf.correct ? 'rgba(0,184,148,0.3)' : 'rgba(255,107,107,0.3)';
      clicked.style.color = value === conf.correct ? '#00b894' : '#ff6b6b';
    }

    const feedback = document.getElementById('level5-feedback');

    if (value === conf.correct) {
      Game.playSound('correct');
      feedback.innerHTML = `<p style="color: var(--success);">${Icons.mat('check_circle', '16')} Benar! Ada ${conf.count} kotak, jadi loop harus diulang ${conf.count} kali!</p>`;

      setTimeout(() => {
        const content = document.getElementById('level5-content');
        content.innerHTML = `
          <div style="text-align: center; width: 100%;">
            <div style="animation: float 2s ease-in-out infinite;" id="robot-anim">${Icons.mat('smart_toy', '64')}</div>
            <div class="loop-counter" id="loop-counter" style="margin: 15px 0;">${Icons.mat('hourglass_empty', '16')} Memindahkan...</div>
            <div class="action-log" id="action-log" style="width: 100%; max-height: 120px; overflow-y: auto; padding: 12px; background: rgba(0,0,0,0.3); border-radius: 8px; font-family: var(--pixel-font); font-size: 0.5rem; color: var(--text-secondary); line-height: 2; text-align: left;">
              <div style="color: var(--text-muted);">Menjalankan loop...</div>
            </div>
          </div>
        `;

        let count = 0;
        const total = conf.count;
        const robotEl = document.getElementById('robot-anim');
        const counterEl = document.getElementById('loop-counter');
        const logEl = document.getElementById('action-log');
        logEl.innerHTML = '';

        const interval = setInterval(() => {
          if (count >= total) {
            clearInterval(interval);
            if (robotEl) robotEl.style.animation = 'none';
            if (counterEl) counterEl.innerHTML = `${Icons.mat('check_circle', '16')} Selesai! Semua kotak dipindahkan!`;
            if (logEl) logEl.innerHTML += `<div style="color: var(--success);">${Icons.mat('refresh', '14')} Loop selesai! Robot berhasil!</div>`;

            feedback.innerHTML = `<p style="color: var(--success); font-size: 1rem;">${Icons.mat('celebration', '16')} Robot R-42 berhasil memindahkan semua kotak!</p>`;
            Game.playSound('victory');
            Game.addScore(100);
            Game.completeLevel(5);
            Game.showToast(`${Icons.mat('celebration', '16')} Level 5 Selesai!`, 'success');
            return;
          }

          count++;
          const remaining = total - count;
          if (counterEl) counterEl.innerHTML = `${Icons.mat('inventory_2', '16')} Kotak ke-${count} dari ${total} dipindahkan (Sisa: ${remaining})`;
          if (logEl) logEl.innerHTML += `<div style="color: var(--secondary);">${Icons.mat('inventory_2', '14')} Kotak #${count} → dipindahkan ke gudang! (Sisa: ${remaining})</div>`;
          if (logEl) logEl.scrollTop = logEl.scrollHeight;

          if (robotEl) {
            robotEl.style.transform = 'translateY(-25px)';
            setTimeout(() => { robotEl.style.transform = 'translateY(0)'; }, 200);
          }
        }, 700);
      }, 1000);
    } else {
      Game.playSound('wrong');
      const wrongNum = parseInt(value);
      const hint = wrongNum < conf.count ? `${wrongNum} kotak? Tapi ada ${conf.count} kotak yang harus dipindahkan!` : `${wrongNum} kali? Kebanyakan! Robot cuma perlu pindahin ${conf.count} kotak.`;
      feedback.innerHTML = `<p style="color: var(--danger);">${Icons.mat('cancel', '16')} Salah! ${hint}</p>`;
    }
  },

  initLevel5() {
    const conf = this.level5Conf;
    this.level5State = { count: 0, maxCount: conf.count, isRunning: false, log: [], phase: 'story' };
  },

  getLevel6HTML() {
    return `
      <h3>${Icons.span(Icons.bug, '28', 'var(--accent)')} Debug Room</h3>
      <p class="level-desc">Klik baris kode yang mengandung bug!</p>
      <div class="debug-container" id="debug-container"></div>
      <div id="level6-feedback" style="margin-top: 15px;"></div>
    `;
  },

  initLevel6() {
    this.state.bugIndex = 0;
    this.state.foundCount = 0;
    this.showDebugBug();
  },

  showDebugBug() {
    const container = document.getElementById('debug-container');
    const feedback = document.getElementById('level6-feedback');
    const bugs = this.level6Data;

    if (this.state.bugIndex >= bugs.length) {
      feedback.innerHTML = `<p style="color: var(--success); font-size: 1rem;">${Icons.mat('celebration', '16')} ${this.state.foundCount} dari ${bugs.length} bug ditemukan! Level selesai!</p>`;
      Game.playSound('victory');
      Game.addScore(100);
      Game.completeLevel(6);
      Game.showToast(`${Icons.mat('celebration', '16')} Level 6 Selesai!`, 'success');
      return;
    }

    const bug = bugs[this.state.bugIndex];
    feedback.innerHTML = '';

    container.innerHTML = `
      <div class="debug-code" id="debug-code">
        ${bug.code.split('\n').map((line, i) => {
          const lineNum = i + 1;
          return `<div>
            <span class="line-number">${lineNum}</span>
            <span data-line="${lineNum}">${line.replace(/\/\/.*$/, '<span style="color: #6c6ca0;">$&</span>')}</span>
          </div>`;
        }).join('')}
      </div>
      <div class="level-hint">${Icons.mat('lightbulb', '14')} Klik baris yang mengandung bug!</div>
    `;

    const codeLines = container.querySelectorAll('#debug-code span[data-line]');
    codeLines.forEach(el => {
      el.addEventListener('click', () => {
        const lineNum = parseInt(el.dataset.line);
        if (el.classList.contains('found')) return;

        if (lineNum === bug.bugLine) {
          el.classList.add('found');
          this.state.foundCount++;

          let points = 100;
          let feedbackMsg = `${Icons.mat('check_circle', '16')} Bug ditemukan! ${bug.bugFix}`;
          if (this.state.bugIndex === 0) {
            points = 150;
            feedbackMsg = `${Icons.mat('check_circle', '16')} Perfect! ${bug.bugFix}`;
          }

          feedback.innerHTML = `<p style="color: var(--success);">${feedbackMsg} (+${points} poin)</p>`;
          this.state.bugIndex++;
          setTimeout(() => this.showDebugBug(), 1500);
        } else {
          Game.playSound('wrong');
          el.style.background = 'rgba(255,107,107,0.15)';
          feedback.innerHTML = `<p style="color: var(--danger);">${Icons.mat('cancel', '16')} Baris ini tidak ada bug! Coba baris lain.</p>`;
          setTimeout(() => { el.style.background = 'transparent'; }, 500);
        }
      });
    });
  },

  getLevel7HTML() {
    const data = this.level7Data;
    const shuffledSteps = [...data.steps].sort(() => Math.random() - 0.5);

    return `
      <h3>${Icons.span(Icons.cpu, '28', 'var(--info)')} Function Machine</h3>
      <p class="level-desc">Susun langkah-langkah berikut menjadi alur program yang benar!</p>

      <div class="function-container">
        <div class="function-flow" id="function-flow">
          ${shuffledSteps.map(step => `
            <div class="flow-step ${step.class}" draggable="true" data-id="${step.id}">
              ${step.icon} ${step.label}
            </div>
          `).join('')}
        </div>

        <div class="function-sequence" id="function-sequence">
          <span style="color: var(--text-muted); font-size: 0.8rem;">Seret langkah ke sini...</span>
        </div>

        <div style="display: flex; gap: 10px; justify-content: center;">
          <button class="btn btn-secondary btn-sm" onclick="Levels.checkFunctionOrder()">${Icons.mat('check_circle', '16')} Cek Urutan</button>
          <button class="btn btn-ghost btn-sm" onclick="Levels.resetFunction()">${Icons.mat('refresh', '16')} Reset</button>
        </div>
      </div>

      <div id="level7-feedback" style="margin-top: 15px;"></div>
    `;
  },

  initLevel7() {
    this.state.placedSteps = [];
    const flowSteps = document.querySelectorAll('#function-flow .flow-step');
    const sequence = document.getElementById('function-sequence');

    flowSteps.forEach(step => {
      step.addEventListener('dragstart', (e) => {
        if (step.classList.contains('placed')) { e.preventDefault(); return; }
        e.dataTransfer.setData('text/plain', step.dataset.id);
        step.classList.add('dragging');
      });
      step.addEventListener('dragend', () => { step.classList.remove('dragging'); });
    });

    sequence.addEventListener('dragover', (e) => { e.preventDefault(); });
    sequence.addEventListener('drop', (e) => {
      e.preventDefault();
      this.placeStep(e.dataTransfer.getData('text/plain'));
    });

    flowSteps.forEach(step => {
      step.addEventListener('click', () => {
        if (!step.classList.contains('placed')) this.placeStep(step.dataset.id);
      });
    });
  },

  placeStep(id) {
    if (this.state.placedSteps.includes(id)) return;
    const sourceStep = document.querySelector(`#function-flow .flow-step[data-id="${id}"]`);
    if (sourceStep) sourceStep.classList.add('placed');
    this.state.placedSteps.push(id);
    this.renderSequence();
  },

  renderSequence() {
    const sequence = document.getElementById('function-sequence');
    const allSteps = this.level7Data.steps;

    if (this.state.placedSteps.length === 0) {
      sequence.innerHTML = '<span style="color: var(--text-muted); font-size: 0.8rem;">Seret langkah ke sini...</span>';
      return;
    }

    sequence.innerHTML = this.state.placedSteps.map(id => {
      const step = allSteps.find(s => s.id === id);
      if (!step) return '';
      return `<div class="flow-step ${step.class}" style="cursor: default;">${step.icon} ${step.label}</div>`;
    }).join('');
  },

  checkFunctionOrder() {
    const feedback = document.getElementById('level7-feedback');
    const correctOrder = this.level7Data.correctOrder;

    if (this.state.placedSteps.length < correctOrder.length) {
      feedback.innerHTML = `<p style="color: var(--warning);">${Icons.mat('warning', '16')} Masih ada langkah yang belum ditempatkan!</p>`;
      return;
    }

    let isCorrect = true;
    for (let i = 0; i < correctOrder.length; i++) {
      if (this.state.placedSteps[i] !== correctOrder[i]) { isCorrect = false; break; }
    }

    if (isCorrect) {
      Game.playSound('victory');
      feedback.innerHTML = `<p style="color: var(--success); font-size: 1rem;">${Icons.mat('celebration', '16')} Urutan sempurna! Function siap digunakan!</p>`;
      Game.addScore(100);
      Game.completeLevel(7);
      Game.showToast(`${Icons.mat('celebration', '16')} Level 7 Selesai!`, 'success');
    } else {
      feedback.innerHTML = `<p style="color: var(--danger);">${Icons.mat('cancel', '16')} Urutan masih salah! Coba lagi.<br>
        <span style="font-size: 0.8rem;">Petunjuk: ${correctOrder.map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' → ')}</span></p>`;
    }
  },

  resetFunction() {
    this.state.placedSteps = [];
    document.querySelectorAll('#function-flow .flow-step').forEach(step => { step.classList.remove('placed'); });
    document.getElementById('function-sequence').innerHTML = '<span style="color: var(--text-muted); font-size: 0.8rem;">Seret langkah ke sini...</span>';
    document.getElementById('level7-feedback').innerHTML = '';
  },

  // ========== LEVEL 8 (ARRAY - Multi Round) ==========

  getLevel8HTML() {
    return `
      <h3>${Icons.span(Icons.database, '28', 'var(--info)')} Array Room</h3>
      <p class="level-desc">Array menyimpan banyak data berurutan. Setiap data punya index (nomor urut) mulai dari 0.</p>
      <div id="level8-container" style="width: 100%; max-width: 550px;">
        <div id="level8-question-area"></div>
      </div>
      <div id="level8-feedback" style="margin-top: 15px;"></div>
    `;
  },

  initLevel8() {
    this.state.arrayRound = 0;
    this.state.arrayCorrect = 0;
    this.showArrayQuestion();
  },

  showArrayQuestion() {
    const questions = this.level8Questions[Storage.getDifficulty()] || this.level8Questions.easy;
    const feedback = document.getElementById('level8-feedback');

    if (this.state.arrayRound >= questions.length) {
      feedback.innerHTML = `<p style="color: var(--success); font-size: 1rem;">${Icons.mat('celebration', '16')} ${this.state.arrayCorrect} dari ${questions.length} benar! Array Master!</p>`;
      Game.playSound('victory');
      Game.addScore(100);
      Game.completeLevel(8);
      Game.showToast(`${Icons.mat('celebration', '16')} Level 8 Selesai!`, 'success');
      return;
    }

    const q = questions[this.state.arrayRound];
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    feedback.innerHTML = '';

    const container = document.getElementById('level8-question-area');
    container.innerHTML = `
      <div style="background: #0d0d1a; border-radius: 10px; padding: 16px; font-family: 'Courier New', monospace; font-size: 0.8rem; line-height: 2; border: 1px solid rgba(108,92,231,0.3); text-align: left;">
        ${q.code}
      </div>
      <div style="display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 12px; color: var(--text-muted); font-size: 0.7rem;">
        <span style="background: rgba(124,111,247,0.1); padding: 4px 12px; border-radius: 20px; font-family: var(--cyber-font);">
          SOAL ${this.state.arrayRound + 1}/${questions.length}
        </span>
      </div>
      <p style="text-align: center; color: var(--text-primary); margin: 16px 0;">${q.question}</p>
      <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
        ${shuffledOptions.map(opt => `
          <button class="btn btn-ghost" onclick="Levels.answerArray('${opt.replace(/'/g, "\\'")}')">${opt}</button>
        `).join('')}
      </div>
    `;
  },

  answerArray(value) {
    const questions = this.level8Questions[Storage.getDifficulty()] || this.level8Questions.easy;
    const q = questions[this.state.arrayRound];
    const feedback = document.getElementById('level8-feedback');
    const buttons = document.querySelectorAll('#level8-question-area .btn');
    buttons.forEach(btn => { btn.style.pointerEvents = 'none'; });

    if (value === q.correct) {
      Game.playSound('correct');
      this.state.arrayCorrect++;
      feedback.innerHTML = `<p style="color: var(--success);">${Icons.mat('check_circle', '16')} ${q.feedback}</p>`;
      Game.addScore(25);
    } else {
      Game.playSound('wrong');
      feedback.innerHTML = `<p style="color: var(--danger);">${Icons.mat('cancel', '16')} Hampir! Jawaban yang benar adalah: ${q.correct}</p>`;
    }

    buttons.forEach(btn => {
      if (btn.textContent.trim().replace(/['"]/g, '') === q.correct.replace(/['"]/g, '')) {
        btn.style.borderColor = 'var(--success)';
        btn.style.background = 'rgba(0,212,160,0.1)';
      }
    });

    this.state.arrayRound++;
    setTimeout(() => this.showArrayQuestion(), 1500);
  },

  // ========== LEVEL 9 (OBJECT - Multi Round) ==========

  getLevel9HTML() {
    return `
      <h3>${Icons.span(Icons.cpu, '28', 'var(--warning)')} Object Lab</h3>
      <p class="level-desc">Object menyimpan data dengan pasangan <strong>key: value</strong>. Pilih jawaban yang tepat!</p>
      <div id="level9-container" style="width: 100%; max-width: 550px;">
        <div id="level9-question-area"></div>
      </div>
      <div id="level9-feedback" style="margin-top: 15px;"></div>
    `;
  },

  initLevel9() {
    this.state.objectRound = 0;
    this.state.objectCorrect = 0;
    this.showObjectQuestion();
  },

  showObjectQuestion() {
    const questions = this.level9Questions[Storage.getDifficulty()] || this.level9Questions.easy;
    const feedback = document.getElementById('level9-feedback');

    if (this.state.objectRound >= questions.length) {
      feedback.innerHTML = `<p style="color: var(--success); font-size: 1rem;">${Icons.mat('celebration', '16')} ${this.state.objectCorrect} dari ${questions.length} benar! Object Master!</p>`;
      Game.playSound('victory');
      Game.addScore(100);
      Game.completeLevel(9);
      Game.showToast(`${Icons.mat('celebration', '16')} Level 9 Selesai!`, 'success');
      return;
    }

    const q = questions[this.state.objectRound];
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    feedback.innerHTML = '';

    const container = document.getElementById('level9-question-area');
    container.innerHTML = `
      <div style="background: #0d0d1a; border-radius: 10px; padding: 16px; font-family: 'Courier New', monospace; font-size: 0.8rem; line-height: 2; border: 1px solid rgba(108,92,231,0.3); text-align: left;">
        ${q.code}
      </div>
      <div style="display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 12px; color: var(--text-muted); font-size: 0.7rem;">
        <span style="background: rgba(124,111,247,0.1); padding: 4px 12px; border-radius: 20px; font-family: var(--cyber-font);">
          SOAL ${this.state.objectRound + 1}/${questions.length}
        </span>
      </div>
      <p style="text-align: center; color: var(--text-primary); margin: 16px 0;">${q.question}</p>
      <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
        ${shuffledOptions.map(opt => `
          <button class="btn btn-ghost" onclick="Levels.answerObject('${opt.replace(/'/g, "\\'")}')">${opt}</button>
        `).join('')}
      </div>
    `;
  },

  answerObject(value) {
    const questions = this.level9Questions[Storage.getDifficulty()] || this.level9Questions.easy;
    const q = questions[this.state.objectRound];
    const feedback = document.getElementById('level9-feedback');
    const buttons = document.querySelectorAll('#level9-question-area .btn');
    buttons.forEach(btn => { btn.style.pointerEvents = 'none'; });

    if (value === q.correct) {
      Game.playSound('correct');
      this.state.objectCorrect++;
      feedback.innerHTML = `<p style="color: var(--success);">${Icons.mat('check_circle', '16')} ${q.feedback}</p>`;
      Game.addScore(25);
    } else {
      Game.playSound('wrong');
      feedback.innerHTML = `<p style="color: var(--danger);">${Icons.mat('cancel', '16')} Hampir! Jawaban yang benar adalah: ${q.correct}</p>`;
    }

    buttons.forEach(btn => {
      if (btn.textContent.trim().replace(/['"]/g, '') === q.correct.replace(/['"]/g, '')) {
        btn.style.borderColor = 'var(--success)';
        btn.style.background = 'rgba(0,212,160,0.1)';
      }
    });

    this.state.objectRound++;
    setTimeout(() => this.showObjectQuestion(), 1500);
  },

  // ========== BOSS BATTLE ==========

  initBossLevel() {
    this.state.bossQuestionIndex = 0;
    this.state.bossHP = 100;
    this.state.bossMaxHP = 100;

    Game.showScreen('level-screen');
    const screen = document.getElementById('level-screen');
    screen.querySelector('.level-title').innerHTML = `${Icons.span(Icons.sword, '28', 'var(--danger)')} Boss Battle: Bug King`;
    screen.querySelector('#level-subtitle').textContent = 'Kalahkan Bug King!';

    const body = screen.querySelector('.level-body');
    body.innerHTML = `
      <div class="boss-container">
        <div class="boss-header">
          <span style="font-family: var(--pixel-font); font-size: 0.6rem; color: var(--danger);">${Icons.mat('bug_report', '18')} BUG KING</span>
          <div class="boss-hp-bar">
            <div class="boss-hp-fill" id="boss-hp-fill" style="width: 100%"></div>
          </div>
          <span id="boss-hp-text" style="font-family: var(--pixel-font); font-size: 0.5rem; color: var(--danger);">100/100</span>
        </div>

        <div class="boss-arena" id="boss-arena">
          <div class="boss-character" id="boss-character">
            <span class="material-symbols-outlined" style="font-size: 80px; color: var(--danger);">bug_report</span>
          </div>
          <div class="boss-question" id="boss-question"></div>
        </div>

        <div id="boss-feedback" style="text-align: center;"></div>
      </div>
    `;

    this.showBossQuestion();
  },

  showBossQuestion() {
    const questions = this.bossData;

    if (this.state.bossQuestionIndex >= questions.length || this.state.bossHP <= 0) {
      this.bossDefeated();
      return;
    }

    const q = questions[this.state.bossQuestionIndex];
    const questionEl = document.getElementById('boss-question');
    const feedback = document.getElementById('boss-feedback');
    feedback.innerHTML = '';

    const shuffledAnswers = [...q.answers].sort(() => Math.random() - 0.5);

    questionEl.innerHTML = `
      <h3>${Icons.mat('swords', '20')} Serangan #${this.state.bossQuestionIndex + 1}</h3>
      <p>${q.question}</p>
      <div class="boss-answers">
        ${shuffledAnswers.map((a, i) => `
          <button class="boss-answer-btn" onclick="Levels.answerBoss(${i}, ${a.correct})">
            ${a.text}
          </button>
        `).join('')}
      </div>
    `;
  },

  answerBoss(index, isCorrect) {
    const buttons = document.querySelectorAll('.boss-answer-btn');
    buttons.forEach(btn => { btn.style.pointerEvents = 'none'; });

    const feedback = document.getElementById('boss-feedback');
    const bossChar = document.getElementById('boss-character');
    const bossHP = document.getElementById('boss-hp-fill');
    const bossHPText = document.getElementById('boss-hp-text');
    const damage = this.bossDamageByDiff[Storage.getDifficulty()] || 15;

    if (isCorrect) {
      this.state.bossHP = Math.max(0, this.state.bossHP - damage);
      bossHP.style.width = `${(this.state.bossHP / this.state.bossMaxHP) * 100}%`;
      bossHPText.textContent = `${this.state.bossHP}/${this.state.bossMaxHP}`;

      buttons[index].classList.add('correct');
      bossChar.classList.add('hit');
      document.getElementById('level-screen').classList.add('screen-shake');

      setTimeout(() => {
        bossChar.classList.remove('hit');
        document.getElementById('level-screen').classList.remove('screen-shake');
      }, 500);

      Game.playSound('boss');
      Game.playSound('correct');
      feedback.innerHTML = `<p style="color: var(--success);">${Icons.mat('bolt', '16')} Serangan berhasil! -${damage} HP! (+100 poin)</p>`;
      Game.addScore(100);

      if (this.state.bossHP <= 0) {
        setTimeout(() => this.bossDefeated(), 1000);
        return;
      }

      this.state.bossQuestionIndex++;
      setTimeout(() => this.showBossQuestion(), 1500);
    } else {
      buttons[index].classList.add('wrong');
      Game.playSound('wrong');
      feedback.innerHTML = `<p style="color: var(--danger);">${Icons.mat('cancel', '16')} Serangan gagal! Coba lagi!</p>`;

      setTimeout(() => {
        buttons.forEach(btn => { btn.style.pointerEvents = 'auto'; btn.classList.remove('wrong'); });
      }, 1000);
    }
  },

  bossDefeated() {
    const questionEl = document.getElementById('boss-question');
    const bossChar = document.getElementById('boss-character');

    bossChar.innerHTML = `<span class="material-symbols-outlined" style="font-size: 80px; color: var(--text-muted);">dangerous</span>`;
    bossChar.classList.add('defeated');

    questionEl.innerHTML = `
      <h3 style="color: var(--success);">${Icons.mat('celebration', '20')} BUG KING BERHASIL DIKALAHKAN!</h3>
      <p style="font-size: 1.2rem; color: var(--secondary); margin: 20px 0;">
        Code Academy terselamatkan!
      </p>
      <button class="btn btn-primary btn-lg" onclick="Levels.afterBoss()">
        ${Icons.mat('arrow_forward', '20')} Lihat Hasil
      </button>
    `;

    this.state.bossQuestionIndex++;
    Game.completeLevel(10);
  },

  afterBoss() {
    Storage.checkAchievements(Storage.getProgress());
    Game.afterBossComplete();
  },

  // ========== HINTS ==========

  useHint() {
    const progress = Storage.getProgress();
    if (progress.hintsUsed >= 3) {
      Game.showToast('Kamu sudah menggunakan 3 hint!', 'warning');
      return;
    }

    let hint = '';
    switch (this.currentLevel) {
      case 2: hint = 'String diapit kutipan "", Number adalah angka, Boolean hanya true/false'; break;
      case 3: hint = 'Coba ingat fungsi dasar pemrograman!'; break;
      case 4: hint = 'Baca kondisi if dengan teliti. Perhatikan operator perbandingan!'; break;
      case 5: hint = `Loop mengulang instruksi beberapa kali. Robot butuh ${this.level5Conf.count} kali pengulangan!`; break;
      case 6: hint = 'Cari kesalahan sintaks atau logika pada kode...'; break;
      case 7: hint = 'Start adalah awal, End adalah akhir. Process mengolah Input jadi Output!'; break;
      default: hint = 'Gunakan logika dan pengetahuan codingmu!';
    }

    Storage.updateProgress({ hintsUsed: progress.hintsUsed + 1 });
    Game.addScore(-20);
    Game.showToast(`${Icons.mat('lightbulb', '16')} ${hint}`, 'info');

    const hintEl = document.querySelector('.level-hint');
    if (hintEl) {
      hintEl.innerHTML = `${Icons.mat('lightbulb', '14')} ${hint}`;
      hintEl.style.display = 'block';
    }
  },

  initLevelLogic(levelNum) {
    switch (levelNum) {
      case 2: setTimeout(() => this.initLevel2(), 100); break;
      case 3: setTimeout(() => this.initLevel3(), 100); break;
      case 4: setTimeout(() => this.initLevel4(), 100); break;
      case 5: setTimeout(() => this.initLevel5(), 100); break;
      case 6: setTimeout(() => this.initLevel6(), 100); break;
      case 7: setTimeout(() => this.initLevel7(), 100); break;
      case 8: setTimeout(() => this.initLevel8(), 100); break;
      case 9: setTimeout(() => this.initLevel9(), 100); break;
    }
  },

  updateScore() {
    const score = Storage.getScore();
    const scoreEl = document.getElementById('level-score-value');
    if (scoreEl) scoreEl.textContent = score;
  }
};
