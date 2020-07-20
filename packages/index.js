import SuppleButton from './supple-button'
import FeInput from './input'
const components = [
  SuppleButton,
  FeInput
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
  FeInput
}
export default {
  install,
  version
}
