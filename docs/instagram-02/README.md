# CLS別府 第2回 Instagram告知画像

第2回（2027/1/23（土）13:00〜、別府市レンガホール）の Instagram 告知投稿用。縦長 1080×1350（4:5）の7枚組カルーセル。
投稿キャプションの `-` 区切りごとに1枚。

1. 表紙（開催決定・日時・会場・申込受付中）
2. PROGRAM：県内リーダー登壇／運営の達人セッション／全員参加型ワークショップ
3. VENUE：第0回の会場レンガホール、本編＋交流会を1会場で
4. ENTRY：Peatix 申込（QR は `qr_peatix.svg`、segno で生成）
5. COMING SOON：詳細は追記予定、前夜祭・地獄蒸しツアー・2次会ツアー・大人の遠足
6. ABOUT：CLS別府とは、ボランティア運営
7. OFFICIAL WEBSITE：公式サイト QR、開催レポート・PURPOSE

## 書き出し方

```sh
cd fonts && npm pack @fontsource/noto-sans-jp @fontsource/zen-maru-gothic
for f in *.tgz; do d=${f%.tgz}; mkdir -p $d && tar xzf $f -C $d; done; cd ..
node render.js
```

背景とロゴは `../flyer-01village/assets/` を参照。`logo_color.svg` は白ロゴの色を墨色（#2a2420）に置き換えたもの。
