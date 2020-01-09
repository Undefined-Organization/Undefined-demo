import React,{Component,Fragment} from 'react'
import {addRoom} from '../../api/room'
import {Button,message} from 'antd'
class Roomadd extends Component{
    constructor(){
        super()
        //roomNum,type,price,area,desc,state
        this.state={
           roomNum:2503687,
           type:'豪华至尊room',
           price:998,
           area:'big',
           desc:'土豪必住',
           state:0
        }
    }
    submit=()=>{
      let {roomNum,type,price,area,desc,state} = this.state
      console.log(this.state)
        addRoom(this.state)
        .then(()=>{message.success('添加ok',1)})
        .catch(()=>{message.error('添加失败',1)})
    }
    render(){
        let {roomNum,type,price,area,desc,state} = this.state
        return(
           <div>
              roomNum:<br/><input type='text' value={roomNum}
                onChange={(e)=>{
                    this.setState({roomNum:Number(e.target.value)})
                }}
              />
              <br/>
              type:<br/><input type='text' value={type}
                onChange={(e)=>{
                    this.setState({type:e.target.value})
                }}
              />
              <br/>
              price:<br/><input type='text' value={price}
                onChange={(e)=>{
                    this.setState({price:Number(e.target.value)})
                }}
              />
              <br/>
              area:<br/><input type='text' value={area}
                onChange={(e)=>{
                    this.setState({area:e.target.value})
                }}
              />
              <br/>
              desc:<br/><input type='text' value={desc}
                onChange={(e)=>{
                    this.setState({desc:e.target.value})
                }}
              />
              <br/>
              state:<br/><input type='text' value={state}
                onChange={(e)=>{
                    this.setState({state:Number(e.target.value)})
                }}
              />
              <br/>
              <Button type='primary' onClick={this.submit}>添加房间</Button>
           </div>
        )
    }
}
export default Roomadd