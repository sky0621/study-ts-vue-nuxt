# PLUGINS

**This directory is not required, you can delete it if you don't want to use it.**

plugins ディレクトリには、ルートの Vue.js アプリケーションをインスタンス化する前に実行したい JavaScript プラグインを入れます。
ここはコンポーネントをグローバルに登録したり、関数や定数を挿入するための場所です。

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/plugins).

以降はVue.jsでの説明。

See https://jp.vuejs.org/v2/guide/plugins.html

プラグインは通常 Vue にグローバルレベルで機能を追加します。プラグインに対しては厳密に定義されたスコープはありません。プラグインはいくつかのタイプがあります:

    1つ、または複数のグローバル・メソッドを追加します。例: vue-custom-element

    1つ、または複数のグローバル・アセットを追加します。ディレクティブ/フィルタ/トランジションなど。例: vue-touch

    グローバル・ミックスインにより、1つ、または複数のコンポーネントオプションを追加します。例: vue-router

    Vue.prototype に記述することにより、1つまたは、複数の Vue インスタンスメソッドを追加します。

    同時に上記のいくつかの組み合わせを注入しながら、独自の API を提供するライブラリ。例: vue-router

Vue.use() グローバルメソッドを呼び出すことによってプラグインを使用します。
これは new Vue() を呼び出してアプリを起動するよりも前に行われる必要があります:

Vue.use は、同じプラグインを 1 回以上使用することを自動的に防ぎます。
そのため、同じプラグインを同時に複数回呼び出しても、一度しかそのプラグインをインストールしません。

Vue.js プラグインは install メソッドを公開する必要があります。
このメソッドは第 1 引数は Vue コンストラクタ、第 2 引数は任意で options が指定されて呼び出されます:
