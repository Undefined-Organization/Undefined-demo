import React, { Component } from 'react';
import { Table, Pagination } from 'antd'
import columns from './columns'
import { getCheckinList } from '../../api/checkin'

class In extends Component {
  constructor(){
    super()
    this.state = {
      dataSource: [],
      allCount:0,
      pageSize:5
    }
  }
  componentDidMount(){
    this.getList()
  }
  getList(page = 1){
    let {pageSize}=this.setState
    getCheckinList(page,pageSize)
    .then((data) => {
      console.log(data)
      if(data.err === 1){
        this.setState({dataSource:data.info.list.res, allCount:data.info.list.allCount})
      }
    })
  }
  render() {
    let { dataSource,allCount,pageSize} = this.state
    return (
      <div>
        <Table columns={columns} dataSource={dataSource}
        pagination={false} rowKey='_id'
        ></Table>
        <Pagination defaultCurrent={1} total={allCount} pageSize={pageSize}
        onChange={(page)=>{
          this.getList(page)
        }} />
      </div>
    );
  }
}

export default In;