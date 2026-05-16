# Matrix Digital Bulletin Board (Japanese Support)

映画「マトリックス」の世界観で、好きなメッセージや思想を垂れ流し続けるデジタル電光掲示板です。

## 特徴
- **無限ストリーミング**: 設定したメッセージが下から上へと永遠に流れ続けます。
- **マトリックス・コード挿入**: メッセージの合間に、ランダムなシステムコードやバイナリデータが自動で混入します。
- **超簡単カスタマイズ**: `config.js` の `messages` 配列を書き換えるだけで、自分の好きな言葉を流せます。
- **電光掲示板演出**: 強めの発光エフェクトと3Dモニター演出。

## 使い方 (自分専用にする方法)
1. `config.js` ファイルを開きます。
2. `messages` の中身を、流したい文章に書き換えます。
3. `glitchFrequency` を調整することで、コードが混ざる頻度を変更できます。

## 技術スタック
- HTML5 / CSS3 (3D Transforms) / JavaScript (Vanilla)
- Google Fonts (Noto Sans JP, VT323)
