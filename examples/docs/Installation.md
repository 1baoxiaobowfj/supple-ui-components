## 安装

### npm 安装
```shell
npm i supple-ui-components
```

### 使用说明

你可以引入整个supple-ui-components，也可进行按需加载组件
1. 完整引入
在 main.js 中写入以下内容：

```js
  import Vue from 'vue';
  import SuppleUiComponents from 'supple-ui-components';
  import 'supple-ui-components/lib/theme-chalk/index.css';
  import App from './App.vue';

  Vue.use(SuppleUiComponents);

  new Vue({
    el: '#app',
    render: h => h(App)
  });
```
2. 按需引入

```shell
npm i babel-plugin-component -D
```

如果只是单独引用了我们得组件, 在babel.config.js写入

```js
  module.exports = {
    presets: [
      '@vue/cli-plugin-babel/preset'
    ],
    plugins: [
      [
        "component",
        {
          "libraryName": "supple-ui-components",
          "styleLibraryName": "theme-chalk"
        }
      ]
    ]
  }
```

如果同时引入了Element和我们的组件, 在babel.config.js写入

```js
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "supple-ui-components",
        "styleLibraryName": "theme-chalk"
      },
      "supple-ui-components"
    ],
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      },
      "element-ui"
    ]
  ]
}
```

在 main.js 中写入以下内容：

```js
  import Vue from 'vue';
  import { SuppleButton } from 'supple-ui-components';
  import App from './App.vue';

  Vue.use(SuppleButton);

  new Vue({
    el: '#app',
    render: h => h(App)
  });
```