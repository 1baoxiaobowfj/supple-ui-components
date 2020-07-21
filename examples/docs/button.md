## Button 按钮
常用的操作按钮。

### 基础用法
基础的按钮用法。
:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```html
    <el-row>
        <supple-button>默认按钮</supple-button>
        <supple-button type="primary">主要按钮</supple-button>
        <supple-button type="success">成功按钮</supple-button>
        <supple-button type="info">信息按钮</supple-button>
        <supple-button type="warning">警告按钮</supple-button>
        <supple-button type="danger">危险按钮</supple-button>
    </el-row>
    <el-row>
        <supple-button plain>朴素按钮</supple-button>
        <supple-button type="primary" plain>主要按钮</supple-button>
        <supple-button type="success" plain>成功按钮</supple-button>
        <supple-button type="info" plain>信息按钮</supple-button>
        <supple-button type="warning" plain>警告按钮</supple-button>
        <supple-button type="danger" plain>危险按钮</supple-button>
    </el-row>
```
:::
### 禁用状态
按钮不可用状态。
:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```html
 <el-row>
        <supple-button>默认按钮</supple-button>
        <supple-button type="primary" disabled>主要按钮</supple-button>
        <supple-button type="success" disabled>成功按钮</supple-button>
        <supple-button type="info" disabled>信息按钮</supple-button>
        <supple-button type="warning" disabled>警告按钮</supple-button>
        <supple-button type="danger" disabled>危险按钮</supple-button>
    </el-row>
    <el-row>
        <supple-button plain disabled>朴素按钮</supple-button>
        <supple-button type="primary" plain disabled>主要按钮</supple-button>
        <supple-button type="success" plain disabled>成功按钮</supple-button>
        <supple-button type="info" plain disabled>信息按钮</supple-button>
        <supple-button type="warning" plain disabled>警告按钮</supple-button>
        <supple-button type="danger" plain disabled>危险按钮</supple-button>
    </el-row>
```
:::