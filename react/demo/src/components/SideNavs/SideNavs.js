import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import menu from './menuList'
import { Link } from 'react-router-dom'

const { SubMenu } = Menu; 

class SideNavs extends Component {
  constructor () {
    super()
    this.state = {
      menuList:[]
    }
  }
  componentDidMount () {
    this.setState({menuList: menu})
  }
  renderNavs (list) {
    if(!list.length) return '暂无数据'
    let res = list.map((item,index) => {
      if (item.children) {
        return (
          <SubMenu
          key={item.rootid}
          title={
            <span>
              <Icon type={item.icon} />
              <span>{item.name}</span>
            </span>
          }
        >
            {this.renderNavs(item.children)}
        </SubMenu>
        )
      } else {
        return (
          <Menu.Item key={item.rootid}>
            <Link to={item.path}>
            <span>
            <Icon type={item.icon||''}></Icon>
              <span>{item.name}</span>
            </span>
            </Link>
          </Menu.Item>
        )
      }
    })
    return res
  }
  render() {
    let {menuList} = this.state
    // console.log(this)
    return (
      <Menu
        onClick={this.handleClick}
        defaultSelectedKeys={['0']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
      >
        {this.renderNavs(menuList)}
      </Menu>
    );
  }
}

export default SideNavs;