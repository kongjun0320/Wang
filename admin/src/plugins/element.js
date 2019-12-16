import Vue from 'vue'
import { Button, Container, Menu, Submenu, MenuItemGroup, MenuItem, Aside, Header, Dropdown, DropdownItem, DropdownMenu, Main, Table, TableColumn, Footer, Form, FormItem, Input, Message, MessageBox, Select, Option } from 'element-ui'

Vue.use(Button)
Vue.use(Option)
Vue.use(Select)
Vue.use(Container)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Main)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Footer)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;
