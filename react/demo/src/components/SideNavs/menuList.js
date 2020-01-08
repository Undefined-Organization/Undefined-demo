export default [
  {
    name: '首页',
    icon: 'home',
    path: '/admin/home',
    rootid: '1'
  },
  {
    name: '员工管理',
    icon: 'idcard',
    path: '/admin/staff',
    rootid: '2',
  },
  {
    name: '入住管理',
    icon: 'account-book',
    path: '',
    rootid: '3',
    children: [
      {
        name: '已入住',
        path: '/admin/in',
        rootid: '3-1'
      },
      {
        name: '登记入住',
        path: '/admin/checkin',
        rootid: '3-2'
      }
    ]
  },
  {
    name: '房间管理',
    icon: 'shop',
    path: '',
    rootid: '4'
  },
  {
    name: '会员管理',
    icon: 'credit-card',
    path: '/admin/vip',
    rootid: '5'
  }
]