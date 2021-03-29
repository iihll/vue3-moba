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
  ElMenuItemGroup,
  ElInput,
  ElFormItem,
  ElForm,
  ElCard,
  ElTable,
  ElTableColumn,
  ElOption,
  ElSelect,
  ElDialog
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
  ElMenuItemGroup,
  ElInput,
  ElFormItem,
  ElForm,
  ElCard,
  ElTable,
  ElTableColumn,
  ElOption,
  ElSelect,
  ElDialog
]

export default (app: App): void => {
  components.forEach((component) => {
    app.use(component)
  })
}
