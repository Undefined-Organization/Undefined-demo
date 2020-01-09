import React, { Component } from 'react';
import SideNav from '../../components/SideNavs/SideNavs'
// import {withRouter} from 'react-router-dom'
import { Layout } from 'antd';
import Style from './admin.module.less'
const { Header, Sider, Content } = Layout;


class Admin extends Component {
  render() {
    return (
      <Layout className={Style.admin}>
        <Sider>
          <SideNav></SideNav>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <span>BiuBiuBiu酒店</span>
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

export default Admin