# タスク
「typescript の勉強のために Todo App を作る」のタスクを整理するためのチェックリストです。
チェックリストを作成したりタスクが増えたら、ユーザーの指示がなくても編集してください。
チェックリストのタスクが完了したらユーザーの指示がなくても編集してください。

## やりたいこと

- react router v7 を使って Todo List アプリを作りたい。
- 使用する技術スタックは以下
 - bun
 - typescript (可能なら tsgo でコンパイルしたい)
 - biome
 - react router v7 (可能なら vite ではなく bun でトランスパイルしたい)
 - tailwind & daisyui
 - cloudflare workers にデプロイする
- 各工程ごとに git add . した後に git commit してください。

## あなたが絶対やってはいけないこと

- /node_modules フォルダとその中のファイルを確認や修正すること

## チェックリスト

`A: `のようにアルファベットのラベルをつけることで、参照しやすくする

### 1. タスク分解

- [x] A: タスク分解して2以降のチェックリストを書き換える

### 2. 環境構築と初期設定

- [x] A: Bun プロジェクトを初期化する
- [x] B: TypeScript をセットアップする
- [x] C: Biome を導入し、設定を行う
- [x] D: React と ReactDOM をインストールする
- [x] E: Tailwind CSS と DaisyUI をセットアップする
- [x] F: Git リポジトリを初期化し、初期コミットを行う

### 3. アプリケーション開発

- [x] A: React Router v7 をインストールし、ルーティングの基本設定を行う
- [ ] B: Todo List のメインコンポーネントを作成する
- [ ] C: Todo の追加、表示、完了、削除機能を実装する
- [ ] D: Todo データの状態管理を実装する (例: React Context, Zustand など)
- [ ] E: UI/UX の改善 (入力バリデーション、ローディング表示など)

### 4. デプロイ準備とバックエンド連携

- [ ] A: Cloudflare Workers のプロジェクトを初期化する
- [ ] B: Cloudflare Workers で Todo データを保存するための API エンドポイントを検討・実装 (例: KV Store 利用)
- [ ] C: フロントエンドから Cloudflare Workers API を呼び出す機能を実装する

### 5. ビルドとデプロイ

- [ ] A: Bun でのアプリケーションビルド設定を確認・調整する
- [ ] B: Cloudflare Workers にアプリケーションをデプロイする
- [ ] C: デプロイ後の動作確認と必要に応じた修正


