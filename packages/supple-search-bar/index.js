import SuppleSearchBar from './src/supple-search-bar.vue'
// 为组件提供 install 安装方法，供按需引入
SuppleSearchBar.install = function (Vue) {
  Vue.component(SuppleSearchBar.name, SuppleSearchBar)
}
export default SuppleSearchBar
