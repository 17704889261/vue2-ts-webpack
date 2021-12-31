import {
  Input,
  Button,
  Card,
  Form,
  FormItem,
  ColorPicker,
  Alert,
  Message,
  Loading,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Drawer,
  Divider,
  Container,
  Header,
  Main,
  Footer,
  Aside,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Table,
  TableColumn
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/zh-CN'

const components = [
  Input,
  Button,
  Card,
  Form,
  FormItem,
  ColorPicker,
  Alert,
  Loading.directive,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Drawer,
  Divider,
  Container,
  Header,
  Main,
  Footer,
  Aside,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Table,
  TableColumn
]

export default (app: any) => {
  components.forEach(v => {
    app.use(v)
  })

  app.prototype.$message = Message
  app.prototype.$loading = Loading.service
  // todo: 剩余需要挂载在 prototype 上的元素
  // app.prototype.$alert = Message.alert
  // app.prototype.$confirm = Message.confirm
  // app.prototype.$prompt = Message.prompt
  // app.prototype.$messageBox = MessageBox
  // app.prototype.$notification = Notification

  app.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }
}
