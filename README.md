## supple-ui-components

### 起源

supple-ui-components 是一套基于Vue-cli开发UI 组件库。开发这个组件库的目的在于：
1. 对于优秀UI组件库`Element-UI`的学习
2. 对`Element-UI`进行补充，自己以后使用他还没有封装的组件比较方便
3. 在工作中的一些常用的'私有'组件的汇总，方便项目的调用

### 说明

- supple-ui-components组件只是尝试学习和封装自己的ui组件,希望后面自己能坚持维护
- 项目里面的组件都是以`supple-`开头

### npm 安装
```
npm i supple-ui-components
```
### 在线文档

http://www.baoxiaobo.top


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