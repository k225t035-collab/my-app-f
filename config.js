const CONFIG = {
    // 画面の一番上に表示されるタイトル
    siteTitle: "MATRIX_DASHBOARD // v2.0",

    // 流したいメッセージ（ここを自由に変更してください）
    messages: [
        "Welcome to the Real World.",
        "真実を知りたくはないか？",
        "この場所は、あなたの意識が作り出した幻影に過ぎない。",
        "好きなことを、好きなだけ。ここに記すことができる。",
        "The Matrix has you...",
        "デジタルな電光掲示板へようこそ。",
        "自由とは、不自由の中にこそ存在する。",
        "思考を止めれば、そこで終わりだ。",
        "Keep moving forward.",
        "コードの海に溺れる準備はできているか？"
    ],

    // システム設定
    settings: {
        typingSpeed: 50,      // 文字が出る速さ
        lineInterval: 1000,   // 次の行が出るまでの待機時間
        glitchFrequency: 0.3, // マトリックス風コードが混じる確率 (0.0 〜 1.0)
    },

    // 演出用の「適当なコード」フラグメント
    codeFragments: [
        "01101001 01101110 01101001 01110100",
        "0x48 0x65 0x6C 0x6C 0x6F 0x20 0x57 0x6F 0x72 0x6C 0x64",
        "void matrix_init() { if(system == NULL) return; }",
        "CONNECTING... [OK] -> 127.0.0.1:8080",
        "std::cout << \"ACCESS GRANTED\" << std::endl;",
        "import kernel; kernel.reboot(force=True);",
        "while(true) { soul.process(); memory.leak(); }",
        "f7 a2 d3 e1 09 bc 44 11 88 23"
    ]
};
