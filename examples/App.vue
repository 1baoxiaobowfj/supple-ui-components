<template>
  <div id="demo-total">
    <header><header-model /></header>
    <section class="section-total">
      <nav class="nav-menu"><menu-model /></nav>
      <div class="line"></div>
      <section class="container" :style="{minHeight: `${minHeight}px`}"><router-view /></section>
    </section>
  </div>
</template>
<script>
import HeaderModel from "./components/header";
import MenuModel from "./components/menu";
export default {
  components: {
    HeaderModel,
    MenuModel
  },
  data() {
    return {
      minHeight: 100,
    };
  },
  mounted() {
    this.minHeight = window.innerHeight - 80;
  },
  methods: {}
};
</script>
<style>
/* 引入代码高亮样式 */
@import "~highlight.js/styles/color-brewer.css";
.section-total {
  position: relative;
}
.nav-menu {
  display: inline-block;
  width: 200px;
  vertical-align: top;
}
.container {
  display: inline-block;
  width: calc(100% - 201px);
  box-sizing: border-box;
  padding-left: 30px;
}
.line {
  height: 100%;
  display: inline-block;
  position: absolute;
  width: 1px;
  background: #dcdfe6;
  left: 200px;
}
</style>
