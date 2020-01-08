import React, { Component, Fragment} from 'react';
import { Table, Pagination, Button, Popconfirm, Tag, Drawer, message, Radio, Input} from 'antd'
import { getCheckinList,delCheckinList,outCheckinList, getListByKw } from '../../api/checkin'
import Update from './Update/Update'

const { Search } = Input;

class In extends Component {
  constructor(){
    super()
    this.columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        width:100,
        fixed:'left'
      },
      {
        title: '身份证号',
        dataIndex: 'idCard',
        key: 'idCard',
        width:200
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        width:70
      },
      {
        title: '收款金额',
        dataIndex: 'price',
        key: 'price',
        width:100
      },
      {
        title: '房间号',
        dataIndex: 'roomNum',
        key: 'roomNum',
        width:80
      },
      {
        title: '电话号',
        dataIndex: 'tel',
        key: 'tel',
        width:150
      },
      {
        title: '入住时间',
        dataIndex: 'ctime',
        key: 'ctime',
        ellipsis: true,
        width:150
      },
      {
        title: '退房时间',
        dataIndex: 'ntime',
        key: 'ntime',
        ellipsis: true,
        width:150
      },
      {
        title:'操作',
        fixed:'right',
        width:200,
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
      updateInfo:{},
      stateValue:2
    }
  }
  componentDidMount(){
    this.getList()
  }
  delData(_id){
    delCheckinList(_id)
    .then(()=>{
      message.success('删除成功')
      this.getList(this.state.pageNow,this.state.stateValue)
    })
  }
  checkout(_id){
    outCheckinList(_id)
    .then(()=>{
      message.success('退房成功')
      this.getList(this.state.pageNow,this.state.stateValue)
    })
  }
  getList(page=1,type=2){
    let {pageSize}=this.state
    getCheckinList(page,pageSize,type)
    .then((data) => {
      this.setState({dataSource:data.info.list.res, allCount:data.info.list.allCount})
    })
  }
  search(page=1,kw){
    let {pageSize}=this.state
    getListByKw(page,pageSize,kw)
    .then((data)=>{
      message.success('查询成功')
      this.setState({dataSource:data.info.list.res, allCount:data.info.list.allCount})
    })
  }
  render() {
    let { dataSource,allCount,pageSize,drawerShow,updateInfo,pageNow,stateValue} = this.state
    return (
      <div>
        <p>
        <Search
          placeholder="请输入查询的姓名"
          onSearch={(value) => {
            this.search(1,value)
          }}
          style={{ width: 200 }}
        />
        </p>
        <Radio.Group  value={stateValue} onChange={(e)=>{
          this.getList(1,e.target.value)
          this.setState({stateValue:e.target.value})
        }}>
          <Radio.Button value={2}>全部</Radio.Button>
          <Radio.Button value={0}>正在入住</Radio.Button>
          <Radio.Button value={1}>已退房</Radio.Button>
        </Radio.Group>
        <Table columns={this.columns} dataSource={dataSource}
        pagination={false} rowKey='_id' scroll={{x:500,y:500}}
        ></Table>
        <Pagination defaultCurrent={pageNow} total={allCount} pageSize={pageSize}
        onChange={(page)=>{
          this.getList(page,stateValue)
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
            this.getList(this.state.pageNow,this.state.stateValue)
          }}></Update>
        </Drawer>
      </div>
    );
  }
}

export default In;