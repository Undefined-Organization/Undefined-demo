import React, { Component } from 'react';
import { Input, Radio, Button } from 'antd';
import style from './checkin.module.less'
import { addCheckinList } from '../../api/checkin'

class Checkin extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      idCard: '',
      sex: '',
      price: '',
      roomNum: '',
      tel: ''
    }
  }
  submit(){
    let {name, idCard, sex, price, roomNum, tel} = this.state
    addCheckinList(name, idCard, sex, price, roomNum, tel)
  }
  render() {
    let {name, idCard, sex, price, roomNum, tel} = this.state
    return (
      <div>
        <div className={style.iptList}>
          <Input
          addonBefore='姓名'
          value={name}
          onChange={(e)=>{
            this.setState({name:e.target.value})
          }}></Input>
          <Input
          addonBefore='身份证号'
          value={idCard}
          onChange={(e)=>{
            this.setState({idCard:e.target.value})
          }}></Input>
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
      </div>
    );
  }
}

export default Checkin;