import React, { Component } from 'react';
import {Button ,Input, message ,Select} from 'antd'
import { UpdateVips} from "../../../api/vips";
class vipUpdate extends Component {
    constructor(props) {
        super()
        console.log(props)
        this.state = {...props.UpdataInfo}
    }
    componentDidMount() {
    }
    submit = () => {
        let {_id, name, img, vipType, desc } = this.state
        if (!this.state.img) return message.info('请先上传图片')
        let vipId=_id
        UpdateVips(vipId,name, img, vipType, desc)
            .then((res) => {
                console.log(res)
                message.success('修改成功', 1)
                this.props.refreshList()
            })
            .catch((err) => {
                message.error('修改失败', 1)
            })
    }
    upload = () => {
        let file = this.refs.file.files[0]
        if (!file) return message.info('请先选择图片')
        let reader = new FileReader()
        reader.onload = () => {
            // console.log('文件转化结束',reader.result)
            this.setState({ img: reader.result })
        }
        reader.readAsDataURL(file)
    }
    handleChange = (value) => {
        this.setState({ vipType: value })
    }
    render() {
        const { Option } = Select
        let { name, vipType, desc, img } = this.state
        return (
            <div style={{ fontSize: '16px', fontWeight: '550' }}>
                <span style={{ display: 'inline-block', width: '80px'}}>姓名:</span><Input type='text' value={name}
                    onChange={(e) => {
                        this.setState({ name: e.target.value })
                    }} style={{ display: 'inline-block', width: '300px', margin: '0 0 20px 50px' }} />
                <br/>
                <span style={{ display: 'inline-block', width: '80px', margin: '0 50px 20px 0' }}>会员类型:</span>
                <Select style={{ display: 'inline-block', width: '300px',}}  onChange={this.handleChange} defaultValue={vipType} style={{ width: 120, margin: '0 0 5px 0' }} >
                    <Option value="至尊会员">至尊会员</Option>
                    <Option value="砖石会员">砖石会员</Option>
                    <Option value="铂金会员">铂金会员</Option>
                    <Option value="黄金会员">黄金会员</Option>
                    <Option value="白银会员">白银会员</Option>
                    <Option value="青铜会员">青铜会员</Option>
                    <Option value="黑铁会员">黑铁会员</Option>
                </Select>
                
                <br/>
                <span style={{ display: 'inline-block', width: '80px'}}>描述:</span><Input type='text' value={desc}
                    onChange={(e) => {
                        this.setState({ desc: e.target.value })
                    }} style={{ display: 'inline-block', width: '300px', margin: '0 0 20px 50px' }} />
                <br/>
                <span style={{ display: 'inline-block', width: '80px'}}>相片:</span>
                <input type='file' ref='file' />
                <img  width='100 ' height='100' src={img} alt=''/> 
                <Button onClick={this.upload}>上传图片</Button> 
                <br/>
                <Button type='primary' onClick={this.submit}>提交</Button>
            </div>
        );
    }
}

export default vipUpdate;