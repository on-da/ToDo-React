ToDoアプリをReact.jsやReduxを使って作ってみた
=================================

1.完成までの流れ
2.引用
---------------------------------

###　完成までのながれ

JS単独で電卓を作ってみたので今度はReact（フレームワーク）やRedux（状態管理ツール）を使ってみる

ToDoリストの基本的な機能をコードをリアクトで書き、ストアとレデューサーを追加する。

リロードしたら入力した内容が消えるのはしょぼいのでRedux Persistを使いローカルストレージの機能を追加する

パーシストレデューサー、パーシスターを追加

エラー発生。永続化したため、値がテキストに変換され、元に戻せなくなるエラー。
※Item.jsの let f=d.getHours~の部分

Store.jsのaddReduceを変更して対応

ブラックリスト、ホワイトリストを追加してリロード時はやることリストのみを保持するように

永続化のON/OFFが出来るようにチェックボックスを作る

CSSを使って見栄えをよくする。Reactと相性がいいCSSフレームワークを探して使ってみる
→material-uiがお勧めされてたのでそれを使ってみる






### 引用

・書籍
[React.js＆Next.js超入門　著:掌田津耶乃]


・Webサイト
※Reactと相性のいいCSSフレームワークを探すのに参考にした
[Qiita 1:https://qiita.com/usagi-f/items/9c675737ef44d0bfcb4e]
[Qiita 2:https://qiita.com/kyrieleison/items/39ce30dd2d204791a9ea]