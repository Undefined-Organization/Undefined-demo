export default [
  {
    name: '首页',
    icon: 'home',
    path: '/admin/home',
    rootid: '0'
  },
  {
    name: '高级管理',
    icon: 'idcard',
    path: '/admin/staff',
    rootid: '1',
    children:[
      {
        name:'员工管理',
        rootid: '1-0',
        path:'/admin/staff/personnel'
      },
      {
        name:'添加员工',
        rootid: '1-1',
        path:'/admin/staff/Addlist'
      },
    ]
  },
  {
    name: '入住管理',
    icon: 'account-book',
    path: '/admin/checkin',
    rootid: '2'
  },
  {
    name: '房间管理',
    icon: 'shop',
    path: '/admin/room',
    rootid: '3'
  },
  {
    name: '会员管理',
    icon: 'credit-card',
    path: '/admin/vip',
    rootid: '4'
  }
]