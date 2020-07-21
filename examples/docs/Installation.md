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