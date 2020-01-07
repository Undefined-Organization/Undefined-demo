import React, { Component, Fragment} from 'react';
import { Table, Pagination, Button, Popconfirm,Tag,Drawer,message} from 'antd'
import { getCheckinList,delCheckinList,outCheckinList } from '../../api/checkin'
import Update from './Update/Update'

class In extends Component {
  constructor(){
    super()
    this.columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '身份证号',
        dataIndex: 'idCard',
        key: 'idCard',
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
      },
      {
        title: '收款金额',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: '房间号',
        dataIndex: 'roomNum',
        key: 'roomNum',
      },
      {
        title: '电话号',
        dataIndex: 'tel',
        key: 'tel',
      },
      {
        title: '入住时间',
        dataIndex: 'ctime',
        key: 'ctime',
      },
      {
        title: '退房时间',
        dataIndex: 'ntime',
        key: 'ntime',
      },
      {
        title:'操作',
        render: (data)=>{
          return (
            <Fragment>
              <Button type="primary" size='small' onClick={()=>{
                this.setState({drawerShow:true,updateInfo:data})
              }}>修改</Button>
              <Popconfirm title='确认要删除此条数据？'
              onConfirm={()=>{
                this.delData(data._id)
              }}>
                <Button type="danger" size='small'>删除</Button>
              </Popconfirm>
              {data.state===1||<Button size='small' onClick={()=>{
                this.checkout(data._id)
              }}>退房</Button>}
              {data.state===0||<Tag color="#87d068">已退房</Tag>}
            </Fragment>
          )
        }
      }
    ]
    this.state = {
      dataSource: [],
      pageNow:1,
      allCount:0,
      pageSize:5,
      drawerShow:false,
      updateInfo:{}
    }
  }
  componentDidMount(){
    this.getList()
  }
  delData(_id){
    delCheckinList(_id)
    .then(()=>{
      message.success('删除成功')
      this.getList(this.state.pageNow)
    })
  }
  checkout(_id){
    outCheckinList(_id)
    .then(()=>{
      message.success('退房成功')
      this.getList(this.state.pageNow)
    })
  }
  getList(page=1){
    let {pageSize}=this.state
    getCheckinList(page,pageSize)
    .then((data) => {
      this.setState({dataSource:data.info.list.res, allCount:data.info.list.allCount})     
    })
  }
  render() {
    let { dataSource,allCount,pageSize,drawerShow,updateInfo,pageNow} = this.state
    console.log(pageNow)
    return (
      <div>
        <Table columns={this.columns} dataSource={dataSource}
        pagination={false} rowKey='_id'
        ></Table>
        <Pagination defaultCurrent={pageNow} total={allCount} pageSize={pageSize}
        onChange={(page)=>{
          this.getList(page)
          this.setState({pageNow:page})
        }} />
        <Drawer
          closable={true}
          onClose={()=>{
            this.setState({drawerShow:false})
          }}
          visible={drawerShow}
        >
          <Update updateInfo={updateInfo}
          refreshList={()=>{
            this.setState({drawerShow:false})
            this.getList(this.state.pageNow)
          }}></Update>
        </Drawer>
      </div>
    );
  }
}

export default In;