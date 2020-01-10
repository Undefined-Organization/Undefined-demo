import React, { Component } from 'react';
import SideNav from '../../components/SideNavs/SideNavs'
import {withRouter} from 'react-router-dom'
import Style from './admin.module.less'
import { Layout ,Dropdown} from 'antd';
import {getItem} from '../../utils/webStorage'
import HeaderNav from '../../components/HeaderNav/HeaderNav'
const { Header, Sider, Content, Footer } = Layout;


class Admin extends Component {
  constructor(){
    super()
    this.state = {
      uid:'',
      name:''
    }
  }
  componentDidMount(){
   this.setState({uid: getItem('name')})
  //  console.log(getItem('uid'))
  }
  
  render() {
    // console.log(this)
    let {uid}= this.state
    return (
      <Layout className={Style.admin}>
        <Sider>
          <SideNav></SideNav>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
          <HeaderNav ></HeaderNav>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
          {/* <Footer>
            Footer
          </Footer> */}
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(Admin)