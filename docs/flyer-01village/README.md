# CLS別府 A4チラシ（ゼロイチビレッジ配布用）

2026/11/11（水）ゼロイチビレッジのイベントで、参加者にクリアファイルで配布するチラシ。

- `CLS別府_A4チラシ.pdf` … 印刷用（A4 縦、塗り足しなし、フォント埋め込み・ロゴはベクター）
- `CLS別府_A4チラシ.png` … 共有・プレビュー用（350dpi）
- `flyer.html` … 元データ。`render.js` で PDF / PNG を書き出す

掲載内容：第2回 2027/1/23（土）13:00〜、会場 別府市レンガホール（旧別府郵便電話局電話分室）、
公式サイト QR（https://www.cls-beppu.com/）、LINE オープンチャット QR。

## 書き出し方

```sh
# fonts/ に Noto Sans JP と Zen Maru Gothic を展開しておく
npm pack @fontsource/noto-sans-jp @fontsource/zen-maru-gothic
# fonts/fontsource-noto-sans-jp-5.3.1/package/ などに展開してから
node render.js   # out.pdf / out_350dpi.png が出力される
```

ロゴは `../business-card/assets/logo.ai` の13番目のアートボード（白・縦組み）を SVG 化し、黒背景を除いたもの。
背景写真 `assets/bg.jpg` は別府の湯けむり夜景（Drive「背景画像」の元写真）。
