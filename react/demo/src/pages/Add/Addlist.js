import React, { Component } from 'react';
import { Button, message } from 'antd'
import { AddList } from '../../api/user'
class Add extends Component {
    constructor() {
        super()
        ///添加的数据为空
        this.state = {
        }
    }

    ////提交事件
    submit = () => {
        let { name, account, pwd, sex, idCard, section, tel, } = this.state
        // 判断如果数据存在 提交成功
        if (name, account, pwd, sex, idCard, section, tel) {
            AddList(name, account, pwd, sex, idCard, section, tel)
                .then((data) => {
                    message.success('添加成功', 1)
                    //添加成功跳转到员工业
                    this.props.history.push('/admin/staff/personnel')
                })
                .catch((err) => {
                    this.data = ''
                    message.error('添加失败', 1)
                })
        ////数据不存在弹出请正确填写
        } else {
            message.error('请正确填写', 1)
        }

    }
    ///取消提交事件
    cancel = () => {
        this.props.history.push('/admin/staff/personnel')
    }

    render() {
        let { name, account, pwd, sex, idCard, section, tel } = this.state
        return (
            <div className='nana' style={{ width: '500px', height: '470px', border: '5px solid #ccc', margin: '0 auto', padding: '60px', paddingLeft: '120px' }}>

                姓 名:<input type='text' placeholder="请输入姓名" style={{ marginLeft: '30px', marginBottom: '20px', fontSize: '6px', border: '2px solid #ccc' }}
                    onChange={(e) => {
                        this.setState({ name: e.target.value })
                    }}
                />
                <br />
                账 号:<input type='text' placeholder="请输入账号" value={account} style={{ marginLeft: '30px', marginBottom: '20px', fontSize: '6px', border: '2px solid #ccc' }}
                    onChange={(e) => {
                        this.setState({ account: e.target.value })
                    }}
                />
                <br />
                密 码:<input type='text' placeholder="请输入密码" style={{ marginLeft: '30px', marginBottom: '20px', fontSize: '6px', border: '2px solid #ccc' }}
                    onChange={(e) => {
                        this.setState({ pwd: e.target.value })
                    }}
                />
                <br />
                性 别:<input type='text' placeholder="请输入性别" value={sex} style={{ marginLeft: '30px', marginBottom: '20px', fontSize: '6px', border: '2px solid #ccc' }}
                    onChange={(e) => {
                        this.setState({ sex: e.target.value })
                    }}
                />
                <br />
                身份证:<input type='text' placeholder="请输入身份证" style={{ marginLeft: '20px', marginBottom: '20px', fontSize: '6px', border: '2px solid #ccc' }}
                    onChange={(e) => {
                        this.setState({ idCard: e.target.value })
                    }}
                />
                <br />
                部 门:<input type='text' placeholder="请输入所在部门" style={{ marginLeft: '30px', marginBottom: '20px', fontSize: '6px', border: '2px solid #ccc' }}
                    onChange={(e) => {
                        this.setState({ section: e.target.value })
                    }}
                />
                <br />
                联系方式:<input type='text' placeholder="请输入联系方式" style={{ marginLeft: '20px', marginBottom: '20px', fontSize: '6px', border: '2px solid #ccc' }}
                    onChange={(e) => {
                        this.setState({ tel: e.target.value })
                    }}
                />
                <br />
                {/* ///提交和取消按钮 */}
                <Button style={{ width: '80px', }} type='primary' onClick={this.submit}>提交</Button>
                <Button style={{ width: '80px', background: '#67C23A', marginLeft: '60px', border: '2px solid #67C23A' }} type='primary' onClick={this.cancel}>取消</Button>
            </div>
        )
    }
}
export default Add;