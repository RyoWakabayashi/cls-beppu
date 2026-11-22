# CLS別府 第2回 Instagram告知画像

第2回（2027/1/23（土）13:00〜、別府市レンガホール）の Instagram 告知投稿用。2枚組のカルーセル。

- `CLS別府_第2回_insta_1_*.png` … 1枚目：キービジュアル（日付・会場・申込受付中）
- `CLS別府_第2回_insta_2_*.png` … 2枚目：みどころ4つ＋企画中の関連イベント＋申込案内
- `_4x5` は 1080×1350（フィード推奨の縦長）、`_1x1` は 1080×1080（正方形）。カルーセルは同じ比率で揃える。

## 書き出し方

```sh
cd fonts && npm pack @fontsource/noto-sans-jp @fontsource/zen-maru-gothic
for f in *.tgz; do d=${f%.tgz}; mkdir -p $d && tar xzf $f -C $d; done; cd ..
node render.js
```

背景とロゴは `../flyer-01village/assets/` を参照。`logo_color.svg` は白ロゴの色を墨色（#2a2420）に置き換えたもの。
