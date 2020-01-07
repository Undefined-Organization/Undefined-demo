import React ,{ Fragment } from 'react'
import {Button, Popconfirm} from 'antd'
export default [
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
          <Button type="primary" size='small'>修改</Button>
          <Popconfirm title='确认要删除此条数据？'
          onConfirm={()=>{
            console.log(data._id)
            // this.delData()
          }}>
            <Button type="danger" size='small'>删除</Button>
          </Popconfirm>
        </Fragment>
      )
    }
  }
]