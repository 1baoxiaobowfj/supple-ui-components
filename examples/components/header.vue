<template>
  <div class="header-model">
    <img class="logo" src="../static/imgs/logo.png" alt="">
    <span class="logo-text">SuppleUi</span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.header-model {
  height: 80px;
  line-height: 80px;
  border-bottom: 1px solid #dcdfe6;
  box-sizing: border-box;
}
.logo {
  vertical-align: middle;
}
.logo-text {
  color: #f65b5e;
  margin-left: 10px;
}
</style>
