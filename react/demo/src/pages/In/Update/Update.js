import React, { Component,Fragment} from 'react';
import { Input, Radio, Button, message } from 'antd';
import {updateCheckinList} from '../../../api/checkin'

class Update extends Component {
  constructor(props){
    super()
    console.log(this)
    this.state = {...props.updateInfo}
  }
  componentWillReceiveProps(props){
    this.setState({...props.updateInfo})
  }
  submit(){
    updateCheckinList(this.state)
    .then((data)=>{
      message.success('修改成功')
      this.props.refreshList()
    })
  }
  render() {
    let {name, idCard, sex, price, roomNum, tel} = this.state
    return (
      <Fragment>
        <div>
          <p>姓名：{name}</p>
          <p>身份证号：{idCard}</p>
          <div>
            <Radio.Group defaultValue="a" buttonStyle="solid"
            onChange={(e)=>{
              this.setState({sex:e.target.value})
            }}>
              <Radio.Button value="男">男</Radio.Button>
              <Radio.Button value="女">女</Radio.Button>
            </Radio.Group>
          </div>
          <Input
          addonBefore='收款金额'
          value={price}
          onChange={(e)=>{
            this.setState({price:e.target.value})
          }}></Input>
          <Input
          addonBefore='房间号'
          value={roomNum}
          onChange={(e)=>{
            this.setState({roomNum:e.target.value})
          }}></Input>
          <Input
          addonBefore='电话号'
          value={tel}
          onChange={(e)=>{
            this.setState({tel:e.target.value})
          }}></Input>
          <Button type='primary' onClick={this.submit.bind(this)}>提交</Button>
        </div>
      </Fragment>
    );
  }
}

export default Update;