import React, { Component } from 'react';
import { getItem } from '../../utils/webStorage';
import { withRouter } from "react-router-dom";

class Home extends Component {
  componentDidMount() {
    if (!getItem('token')) 
    { this.props.history.replace('/login') }
  }
  render() {
    return (
      <div>
        这里是首页
      </div>
    );
  }
}

export default withRouter(Home);