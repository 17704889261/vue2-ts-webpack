import { Input, Button, Loading, Alert, ColorPicker } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/zh-CN'

const components = [Input, Button, Loading.directive, Alert, ColorPicker]
const componentProtos = [
  Loading.service
  // todo: 剩余需要挂载在 prototype 上的元素
  // MessageBox,
  // MessageBox.alert,
  // MessageBox.confirm,
  // MessageBox.prompt,
  // Notification,
  // Message
]

export default (app: any) => {
  components.forEach(v => {
    app.use(v)
  })
  componentProtos.forEach(v => {
    app.prototype[`$${v.name}`] = v
  })
  app.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }
}
