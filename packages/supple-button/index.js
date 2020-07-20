import SuppleButton from './src/supple-button.vue'
// 为组件提供 install 安装方法，供按需引入
SuppleButton.install = function (Vue) {
  Vue.component(SuppleButton.name, SuppleButton)
}
export default SuppleButton
