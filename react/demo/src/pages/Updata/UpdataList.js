import React, { Component, Fragment } from 'react'
import { Button, message } from 'antd'
import { UpdataList } from '../../api/user'

class Updata extends Component {
    constructor(props) {
        //在组件创建的时候将接收到的props值结构给state
        super()
        ///解构数据  并更新数据
        this.state = ({ ...props.updataInfo })
        // console.log(this)
    }
    componentWillReceiveProps(props) {
        // console.log('props改变', props)
        //props改变发生改变的时候 更新最新的数据
        this.state = ({ ...props.updataInfo })
    }
    ///提交事件
    submit = () => {
        UpdataList(this.state).then((data) => {
            message.success('修改成功')
            ///接收到抽屉
            this.props.refreshList()
        })
        console.log(this.state)
    }
    render() {
        console.log(this)
        let { _id, name, account, pwd, sex, idCard, section, tel } = this.state
        return (
            <Fragment>
                id:{_id}
                <br />
                姓名:<input type='text' value={name} style={{ margin: '10px 0 10px 10px' }}
                    onChange={(e) => {
                        this.setState({ name: e.target.value })
                    }}
                />
                <br />
                账号:<input type='text' value={account} style={{ margin: '10px 0 10px 10px' }}
                    onChange={(e) => {
                        this.setState({ account: e.target.value })
                    }}
                />
                <br />
                密码:<input type='text' value={pwd} style={{ margin: '10px 0 10px 10px' }}
                    onChange={(e) => {
                        this.setState({ pwd: e.target.value })
                    }}
                />
                <br />
                性别:<input type='text' value={sex} style={{ margin: '10px 0 10px 10px' }}
                    onChange={(e) => {
                        this.setState({ sex: e.target.value })
                    }}
                />
                <br />
                职位:<input type='text' value={section} style={{ margin: '10px 0 10px 10px' }}
                    onChange={(e) => {
                        this.setState({ section: e.target.value })
                    }}
                />
                <br />

                身份证:<input type='text' value={idCard} style={{ margin: '10px 0 10px 9px' }}
                    onChange={(e) => {
                        this.setState({ idCard: e.target.value })
                    }}
                />
                <br />
                联系方式:<input type='text' value={tel} style={{ margin: '10px 0 10px 7px' }}
                    onChange={(e) => {
                        this.setState({ tel: e.target.value })
                    }}
                />
                <br />
                {/* ///确认按钮 */}
                <Button type='primary' onClick={this.submit} style={{ margin: '10px 0 10px' }}>确认修改</Button>
            </Fragment>
        )
    }
}
export default Updata;
