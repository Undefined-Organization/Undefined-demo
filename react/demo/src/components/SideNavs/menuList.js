export default [
  {
    name: '首页',
    icon: 'home',
    path: '/admin/home',
    rootid: '0'
  },
  {
    name: '员工管理',
    icon: 'idcard',
    path: '/admin/staff',
    rootid: '1',
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
    rootid: '4',
    children: [
      {
        name: "会员列表",
        icon: 'database',
        path: "/admin/vip/list",
        rootid: "4-0"
      },
      {
        name: "会员添加",
        icon: 'file-add',
        path: "/admin/vip/add",
        rootid: "4-1"
      }
    ]
  }
]