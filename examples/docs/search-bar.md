## SearchBar 按钮
搜索栏，自动布局

### 基础用法

:::demo 使用传递 :data="fromData"传递参数格式如下

```html
    <template>
    <supple-search-bar :data="fromData">搜索</supple-search-bar>
    </template>

    <script>
    export default {
    data() {
        return {
        fromData: [
            {
            lable: "企业名称:",
            id: "1",
            value: "",
            palceholder: "请输入企业名称",
            type: "text",
            ref: "qymc",
            inputStyle: { width: 100, size: 'medium', inputClassName: 'no-border-radius' }
            },
            {
            lable: "企业名称:",
            id: "2",
            value: "",
            palceholder: "请输入企业名称",
            type: "text",
            ref: "qymc",
            inputStyle: { width: 100, size: 'small' }
            },
            {
            lable: "企业名称:",
            id: "3",
            value: "",
            palceholder: "请输入企业名称",
            type: "text",
            ref: "qymc",
            inputStyle: { width: 300, size: 'mini'}
            },
            {
            lable: "企业名称:",
            id: "4",
            value: "",
            palceholder: "请输入企业名称",
            type: "text",
            ref: "qymc",
            inputStyle: { width: 300 }
            },
            {
            lable: "企业名称:",
            id: "5",
            value: "",
            palceholder: "请输入企业名称",
            type: "text",
            ref: "qymc",
            inputStyle: { width: 300 }
            }
        ]
        };
    },
    methods: {}
    };
    </script>
    <style>
    @import '';
    .no-border-radius .el-input__inner {
        border-radius: 0;
        background: red;
    }
    </style>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   large,medium,small,mini            |    large    |
| type     | 类型   | string    |   text |     —    |
| inputStyle.width     | 输入框宽度   | number    | - | -   |
| inputStyle.inputClassName     | 输入框的类名   | string    | - | -  |


