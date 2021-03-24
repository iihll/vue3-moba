import { App } from 'vue'
import {
  ElAside,
  ElContainer,
  ElHeader,
  ElMain,
  ElButton,
  ElMenu,
  ElMenuItem,
  ElSubmenu,
  ElMenuItemGroup
} from 'element-plus'

const components = [
  ElAside,
  ElContainer,
  ElHeader,
  ElMain,
  ElButton,
  ElMenu,
  ElMenuItem,
  ElSubmenu,
  ElMenuItemGroup
]

export default (app: App): void => {
  components.forEach((component) => {
    app.use(component)
  })
}
