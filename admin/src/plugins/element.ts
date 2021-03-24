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

export default (app: App): void => {
  app.use(ElAside)
  app.use(ElContainer)
  app.use(ElHeader)
  app.use(ElMain)
  app.use(ElButton)
  app.use(ElMenu)
  app.use(ElMenuItem)
  app.use(ElSubmenu)
  app.use(ElMenuItemGroup)
}
