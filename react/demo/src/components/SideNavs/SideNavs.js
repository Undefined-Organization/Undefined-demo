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
          key={'sub'+index}
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
          <Menu.Item key={index}>
            <Link to={item.path}>
            <span>
              <Icon type={item.icon} />
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
    console.log(menuList)
    return (
      <Menu
        onClick={this.handleClick}
        defaultSelectedKeys={['1']}
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