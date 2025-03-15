# vending_machine
自動販売機の動作を模したプログラムを実装。

##　機能
display：飲み物の一覧を表示する
buy：飲み物を購入する
refill：在庫を補充する

## 実行例
```bash
display();
```

```bash
# Display drinks #
Milk | 120 | 
Cola | 150 | Sold out
Beer | 220 | 
```

```bash
refill([
  { type: "Milk", quantity: 2 },
  { type: "Beer", quantity: 3 },
]);
```

```bash
OK | 2 Milk have been refilled
OK | 3 Beer have been refilled
```

```bash
buy("Milk", 100);
buy("Milk", 200);
```

```bash
NG | Not enough paymentAmount for Milk
OK | Milk purchased
```

## ファイル構成
```bash
vending_machine/
├── node_modules #Node.jsモジュール
├── package.json #Node.js設定
├── tscongig.json #TS設定
└── src/
    └── vending.ts #プロジェクトのメインフォルダ
    └── vending_machine.ts #型とlog関数定義 && テスト
```

## LICENSE
progate path　[自動販売機のプログラムを実装しよう](https://app.path.progate.com/tasks/aapC5avVjKUOCKVuyDdWD/pages/overview)
