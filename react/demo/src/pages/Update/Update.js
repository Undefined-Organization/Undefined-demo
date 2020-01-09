import React,{Component,Fragment} from 'react'
import {updateRoom} from '../../api/room'
import {Button,message} from 'antd'
class UpdateRoom extends Component{
    constructor(props){
        super()
        // 在组件创建的时候将接受到的props值解构给state
        this.state={...props.updateInfo}
        console.log(this)
    }
    componentWillReceiveProps(props){
        console.log('props改变',props)
        this.setState({...props.updateInfo})
    }
    submit=()=>{
        updateRoom(this.state).then((data)=>{
            message.success('修改成功')
            this.props.refreshList()
        })
    }
    render(){
        let {_id,roomNum,type,price,area,desc,state} = this.state
        return(
           <Fragment>
                id:{_id}
                <br/>
                房间号：<input type='text' value={roomNum} onChange={(e)=>{this.setState({roomNum:e.target.value})}}/><br/>
                房间类型：<input type='text' value={type} onChange={(e)=>{this.setState({type:e.target.value})}}/><br/>
                房间价格<input type='text' value={price} onChange={(e)=>{this.setState({price:e.target.value})}}/><br/>
                房间空间大小：<input type='text' value={area} onChange={(e)=>{this.setState({area:e.target.value})}}/><br/>
                房间描述：<input type='text' value={desc} onChange={(e)=>{this.setState({desc:e.target.value})}}/><br/>
                房间状态：<input type='text' value={state} onChange={(e)=>{this.setState({state:e.target.value})}}/><br/>
                <Button type='primary' onClick={this.submit}>修改</Button>
           </Fragment>
        )
    }
}
export default UpdateRoom