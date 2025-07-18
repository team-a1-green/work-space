# 🎯 おみくじシステム


HTML・CSS・Bootstrap・JavaScriptを使った、「おみくじWebアプリ」です。  
運勢・コメント・ラッキーアイテム・ラッキーな場所・ラッキーな言葉をランダムに表示します。

---



## 📌 プロジェクト概要

| 項目 | 内容 |
|------|------|
| 📆 開発期間 | 2025年06月27日 ～ 2025年07月06日（予定） |
| 👥 開発メンバー | sasami komisinn kin-sk  |
| 🛠 技術構成 | HTML / CSS / Bootstrap / JavaScript |


---
## 🛠 命名規則 & 開発ルール

### 🔢 ブランチ運用
- `develop` ブランチを作成済み

- 各自の作業用ブランチ名は以下の形式でお願いします：

- issue番号/作業内容_名前（英小文字）

- 例：`issue12/add-login-form`

- 作成したブランチは `develop` にマージして進めます。

---

### 📛 命名規則（id / class）

| 項目         | 規則                                           |
|--------------|------------------------------------------------|
| **id の使用**    | ページ内リンクの飛び先タグにのみ使用                    |
| **命名形式**    | ケバブケース（例：`lucky-item-box`）                  |
| **単語選び**    | 省略せず、意味が明確な英単語を使用                      |
| **命名基準**    | 見た目や位置ではなく意味で命名する（❌ `blue-box`、✅ `result-message`） |

### 🎯 CSS設計方針

- SMACSSの考え方を取り入れ、CSSを以下の役割ごとに整理します：

  - Base（基本スタイル）  
  - Layout（レイアウト用スタイル）  
  - Module（再利用可能な部品）  
  - State（状態変化用スタイル）  
  - Theme（テーマ別スタイル）

- その上で、OOCSSの「部品（オブジェクト）設計」の考え方も組み合わせて使う
- 詳細な命名ルールやは、以下の記事を参考にしてください：  
  [moshashugyo.com CSS命名ルールまとめ](https://moshashugyo.com/media/css-naming-rules)

## 📝 コミットメッセージのルール

- **日本語でわかりやすく簡潔に書く**ことを基本とします。  
- 何をしたのか、なぜしたのかが伝わるように記述してください。
- Issueにリンクさせてコミットメッセージは書いてください。
- Issue以外の修正は以下に記載しておきます。

### 例
- `ユーザー登録画面のバリデーションを追加 #42`  
- `おみくじ結果表示の不具合を修正 #24`  
- `READMEに開発ルールを追記 "#56`

## 🔗 Issueリンク方法

### Issueリンク（自動クローズなし）
コミットメッセージに `#番号` を含めると、そのIssueにリンクが貼られますが、自動でクローズはされません。
git commit -m "ナビゲーションバーのコンポーネントを追加 #42"

### Issueリンク（自動クローズあり）
#### 🔧 使用できるキーワード

以下のキーワードのいずれかを使い、`#Issue番号` を続けて書くと、**そのコミットがデフォルトブランチにマージされたときにIssueが自動でクローズ**されます。

- `fix`
- `fixes`
- `fixed`
- `close`
- `closes`
- `closed`
- `resolve`
- `resolves`
- `resolved`

---


## 🔖 ブランチ命名ルール（Issueなし）

| 種類       | 命名例                    | 説明                              |
|------------|---------------------------|-----------------------------------|
| `feature/` | `feature/add-header`      | 新しい機能や画面を追加する時     |
| `docs/`    | `docs/update-readme`      | READMEやドキュメントの修正       |
| `fix/`     | `fix/fix-button-style`    | バグ・不具合を修正する時         |

Issueに関しては以下の記事を参考にしてください：
[Issue管理の基本とコツ - Zenn](https://zenn.dev/mukkun69n/articles/a375062803b7c4)

# 📂ディレクトリ構成

```
word-space/
├──index.html          # メインHTML
├── html
│   └── developer.html      # 製作者ページ
│   └── about.html          # 概要ページ
├── css/
│   └── index.css           # メインCSS
│   └── developer.css       # 製作者ページCSS
│   └── about.css           # 概要CSS
├── js/
│   └── main.js             # JavaScriptロジック
├── assets/
│   └── images/             # 画像等
└── README.md               # このファイル
```

# 📋 開発中のタスク一覧

#2 [Canvaでデザインの作成]([https://github.com/team-a1-green/work-space/issues/2)  
#3 [おみくじのデータ構造を定義する]([https://github.com/team-a1-green/work-space/issues/3)  
#4 [おみくじ画面の基本レイアウト（HTML）を作成する]([https://github.com/team-a1-green/work-space/issues/4)  
#6 [ランダム抽選の関数を実装する]([https://github.com/team-a1-green/work-space/issues/6)  
#8 [Bootstrap、CSSを導入して見た目を整える]([https://github.com/team-a1-green/work-space/issues/8)  
#9 [ボタンを押すと結果を表示する処理を作る]([https://github.com/team-a1-green/work-space/issues/9)  
#10 [「もう一度引く」ボタンを実装する]([https://github.com/team-a1-green/work-space/issues/10)  
#18 [トップページからおみくじページに切り替わらない(bug)]([https://github.com/team-a1-green/work-space/issues/18)



---
# ✨主な機能

- おみくじ（運勢＋コメント＋ラッキーな言葉＋音楽＋ゲーム）
- もう一度引ける機能
- Bootstrapによるレスポンシブ対応
---
