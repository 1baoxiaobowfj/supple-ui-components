import SuppleButton from './supple-button'
import SuppleSearchBar from './supple-search-bar'
const components = [
  SuppleButton,
  SuppleSearchBar
]
const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)
  })
};
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {
  install,
  SuppleButton,
  SuppleSearchBar
}
export default {
  install
}
