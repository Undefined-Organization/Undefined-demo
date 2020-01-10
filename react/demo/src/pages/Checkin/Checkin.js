import React, { Component } from 'react';
import { Input, Radio, Button,message } from 'antd';
import style from './checkin.module.less'
import { addCheckinList } from '../../api/checkin'
import { withRouter } from 'react-router-dom'

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
      .then(()=>{
        message.success('入住成功')
        this.props.history.push('/admin/in')
      })
  }
  render() {
    let {name, idCard, sex, price, roomNum, tel} = this.state
    return (
      <div>
        <h3 className={style.title}>登记入住</h3>
        <div className={style.iptList}>
          <Input
          addonBefore='姓名'
          value={name}
          onChange={(e)=>{
            this.setState({name:e.target.value})
          }}
          className={style.ipt}></Input>
          <Input
          addonBefore='身份证号'
          value={idCard}
          className={style.ipt}
          onChange={(e)=>{
            this.setState({idCard:e.target.value})
          }}></Input>
          <div>
            <Radio.Group defaultValue="a" buttonStyle="solid"
            className={style.ipt}
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
          className={style.ipt}
          onChange={(e)=>{
            this.setState({price:e.target.value})
          }}></Input>
          <Input
          addonBefore='房间号'
          value={roomNum}
          className={style.ipt}
          onChange={(e)=>{
            this.setState({roomNum:e.target.value})
          }}></Input>
          <Input
          addonBefore='电话号'
          value={tel}
          className={style.ipt}
          onChange={(e)=>{
            this.setState({tel:e.target.value})
          }}></Input>
          <Button type='primary' onClick={this.submit.bind(this)}>提交</Button>
        </div>
      </div>
    );
  }
}

export default withRouter(Checkin);