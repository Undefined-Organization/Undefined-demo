import React, { Component } from 'react';
import {Dropdown,Menu,Icon, message,notification} from 'antd'
import {getItem,clear} from '../../utils/webStorage'
import {UserLogout} from '../../api/user'
const menuData=[
  {path:'',name:'个人信息',icon:'user'},
  {path:'',name:'个人设置',icon:'user'},
  {path:'',name:'退出登录',icon:'user'},

]
const openNotificationWithIcon =(type,msg) => {
  notification[type]({
    message: '退出结果',
    description:msg,
    duration:1
  });
};

class HeaderNav extends Component{
  constructor(){
    super()
    this.state = {
      uid:'',
      name:''
    }
  }
  componentDidMount(){
    this.setState({name: getItem('name')})
   //  console.log(getItem('uid'))
   }
clickMenu=(e)=>{
 let {key}=e 
 console.log(key)
 switch (Number(key)) {
   case 2:
    //退出登录 
    //调用接口
    //删除本地数据
    // 去不去登录页面随意 
    UserLogout()
    .then((res)=>{
      clear() 
      openNotificationWithIcon('success','退出成功')
      window.location.href="http://localhost:3000/#/login"
    })
    .catch((err)=>{
  
      openNotificationWithIcon('error','退出失败请重试')
    })
     break;
 
   default:
     break;
 }
}  
renderMenu(menuData){
  return(
    <Menu onClick={this.clickMenu}>
      {menuData.map((item,index)=>{
        return(
            <Menu.Item key={index}>
              <span>
                <Icon type='user'></Icon>  
                <span>{item.name}</span>
              </span>
            </Menu.Item>
        )
      })}
    </Menu>
  )
}
render() {
  let {name} =this.state
    return (
      <Dropdown overlay={this.renderMenu(menuData)} >
        <a className="ant-dropdown-link" href="#" style={{margin:'0 0 0 30px',display:'inline-block'}}>
          {name} <Icon type="down" />
        </a>
      </Dropdown>
    );
}
}

export default HeaderNav;
