import React, { Component, Fragment } from 'react';
import { Drawer, Form,  Input, Table, Pagination, Select, Spin, Button, Popconfirm, message } from 'antd'
import { GetVips, DelVips,GetVipType,GetVipKw } from "../../../api/vips";
// import {getItem} from '../../../utils/webStorage'
import VipUpdate from '../Update/Update.js'

const pageSize = 3
const { Option } = Select;
class vipList extends Component {
    constructor() {
        super()
        this.columns = [
            {
                title: "姓名",
                dataIndex: 'name',
                width: 100,
                // fixed:'left'
            },
            {
                title: '会员类型',
                dataIndex: 'vipType',
                width: 150
            },
            {
                title: "照片",
                dataIndex: 'img',
                width: 200,
                render(data) {
                    return (
                        <img src={data} width='80' height='80' />
                    )
                }
            },
            {
                title: '描述',
                dataIndex: 'desc'

            },
            {
                title: "操作",
                width: 200,
                render: (data, { pages }) => {
                    return (
                        <Fragment>
                            <Button type='primary' size='small' onClick={() => {
                                this.setState({ drawerShow: true,UpdataInfo:data })
                            }} >修改</Button>
                            <Popconfirm
                                title="是否确定删除？"
                                onConfirm={() => {
                                    // console.log(data._id)
                                    console.log(this)
                                    this.delData(data._id, { pages })
                                }}
                                okText='删除'
                                cancelText='取消'
                            >
                                <Button type='danger' size='small' style={{ margin: '0 0 0 3px' }}>删除</Button>
                            </Popconfirm>
                        </Fragment>
                    )
                }
            }
        ]
        this.state = {
            dataSource: [],
            nowPage: 0,
            allCount: 0,
            spinning: false,
            pages: 0,
            current: 1,
            drawerShow: false,
            UpdataInfo:[],
            select:''
        }
    }
    getTableData(nowPage) {
        //根据页数获取网络数据
        this.setState({ spinning: true, pages: nowPage })
        GetVips(nowPage, pageSize)
            .then((res) => {
                this.setState({ spinning: false })
                // console.log(res)
                this.setState({ dataSource: res.list.vips, allCount: res.list.allCount })
            })
    }
    delData(id, pages) {
        DelVips(id).then(() => {
            message.success('删除成功', 1)
            this.getTableData(pages)
        })
        // console.log(11111)
    }
    componentDidMount() {
        this.getTableData(1)
    }
    handleChange=(value)=> {
        console.log(value);
        if(value === "全部"){
            this.getTableData()
        }else{
            GetVipType(value)
            .then((res)=>{
                // console.log(res)
                this.setState({ dataSource: res.list.vips, allCount: res.list.allCount })
            })
        }
    }
    render() {
        let {select,UpdataInfo, dataSource, allCount, spinning,  drawerShow } = this.state
        return (
            <div>
                <Drawer width='400' visible={drawerShow} closable={true} onClose={() => {
                    this.setState({ drawerShow: false })
                }}>
                <VipUpdate UpdataInfo={UpdataInfo} refreshList={()=>{
                     this.setState({ drawerShow: false })
                     this.getTableData()
                }}></VipUpdate>
                </Drawer>
                <Select onChange={this.handleChange} defaultValue="全部" style={{ width: 120, margin: '0 0 5px 0' }} >
                    <Option value="全部">全部</Option>
                    <Option value="至尊会员">至尊会员</Option>
                    <Option value="砖石会员">砖石会员</Option>
                    <Option value="铂金会员">铂金会员</Option>
                    <Option value="黄金会员">黄金会员</Option>
                    <Option value="白银会员">白银会员</Option>
                    <Option value="青铜会员">青铜会员</Option>
                    <Option value="黑铁会员">黑铁会员</Option>
                </Select>
                <Input type='text' value={select}
                    onChange={(e) => {
                        this.setState({ select: e.target.value })
                        GetVipKw( e.target.value)
                        .then((res)=>{
                            console.log(res)
                            this.setState({ dataSource: res.list.vips, allCount: res.list.allCount })
                        })
                    }} style={{ display: 'inline-block', width: '300px', margin: '0 0 20px 50px' }} />
                <Spin spinning={spinning}>
                    <Table pagination={false} rowKey='_id' columns={this.columns} dataSource={dataSource}>

                    </Table>
                </Spin>
                <Pagination
                    onChange={(page) => {
                        // console.log(page)
                        console.log(page);
                        this.setState({
                            current: page,
                        });
                        this.getTableData(page)
                    }}
                    style={{ margin: '5px 0 0 ' }}
                    simple
                    defaultCurrent={1} current={this.state.current} total={allCount} pageSize={pageSize} />
            </div>
        );
    }
}

export default Form.create()(vipList);