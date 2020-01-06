import React, { Component } from 'react'
import styles from './login.module.less'
import { UserLogin } from '../../api/user'
import { setItem } from '../../utils/webStorage'
import { Card, Form, Input, Icon, Checkbox, Button, message } from 'antd'

class Login extends Component {
    login = () => {
        let { getFieldValue, validateFields } = this.props.form
        validateFields((err, data) => {
            // console.log(err, data)
            if (err) return message.error('输入有误请重试')
            let { username, password } = data
            UserLogin(username, password)
                .then((res) => {
                    console.log(1111)
                    console.log('then', res)
                    setItem('token', res.token)
                    setItem('uid', res.uid)
                    setItem('rootIds', res.rootList)
                    message.success('登陆成功，1s后自动跳转',1,()=>{
                        this.props.history.replace('./admin/home')
                    })
                })
                .catch((err)=>{
                    console.log(222)
                    message.error('登陆失败请重试',1)
                })
        })
    }
    render() {
        // console.log(this)
        const { getFieldDecorator } = this.props.form;

        return (

            <div className={styles.login}>
                <Card title='用户登录' className={styles['login-card']}>
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox>记住密码</Checkbox>)}

                        <Button onClick={this.login} type="primary" style={{ margin: "0 0 0 20px" }}>
                            登录
                         </Button>

                    </Form.Item>
                </Card>
            </div>
        )
    }
}
export default Form.create()(Login) 