import React,{Component,Fragment} from 'react'
import {GetRooms,DelData} from '../../api/room'
import {Table,Pagination,Spin,Button,Popconfirm, message,Drawer} from 'antd'
import UpdateRoom from '../Update/Update'

const pageSize=3
class Room extends Component{
    constructor(){
        super()
        this.columns=[
            {
                title:'房间号',
                dataIndex:'roomNum'
            },
            {
                title:'房间类型',
                dataIndex:'type'
            },
            {
                title:'房间价格',
                dataIndex:'price'
            },
            {
                title:'房间空间大小',
                dataIndex:'area'
            },
            {
                title:'房间描述',
                dataIndex:'desc'
            },
            {
                title:'房间状态',
                dataIndex:'state',
               
            },
            {
                title:'操作',
                render:(data)=>{
                    return(
                        <Fragment>
                            <Popconfirm
                            title='确定要删除此数据吗?'
                            onConfirm={()=>{
                                this.delData(data._id)
                            }}
                            okText='删除'
                            cancelText='取消'
                            >
                            <Button type='danger' size='small'>删除</Button>
                            </Popconfirm>
                            <Button type='primary' size='small' onClick={()=>{
                                this.setState({drawerShow:true,updateInfo:data})
                            }}>修改</Button>
                        </Fragment>
                    )
                }
            }
        ]
        this.state={
            dataSource:[],
            nowPage:1,// 当前页数
            allCount:0,// 总数据条数
            spinning:false,
            drawerShow:false,
            updateInfo:{}
        }
    }
    componentDidMount(){
        this.getTableData(1)
    }
    delData(id){
        // 网络请求
        let {nowPage}=this.state
        console.log(nowPage)
        DelData(id)
        .then(()=>{
            message.success('删除ok',1)
            this.getTableData(nowPage)
        })
    }
    getTableData(page=1){
        // 根据页数获取网络数据
        this.setState({spinning:true})
        GetRooms(page,pageSize)
        .then((res)=>{
            console.log(res)
            this.setState({dataSource:res.info.list.res,allCount:res.info.list.allCount,spinning:false})
        })
    }
    render(){
        let {dataSource,spinning,allCount,drawerShow,updateInfo,nowPage} = this.state
        return(
            <div>
                <Spin spinning={spinning}>
                    <Table 
                        columns={this.columns}
                        dataSource={dataSource}
                        rowKey='_id'
                        pagination={false}
                    ></Table>
               </Spin>
               <Pagination 
                  defaultCurrent={nowPage}
                  simple
                  total={allCount}
                  pageSize={pageSize}
                  onChange={(page)=>{
                     console.log('目标页数',page)
                     this.getTableData(page)
                     this.setState({nowPage:page})
                  }}
               />
               <Drawer
                 closable={true} // 是否显示右上角的关闭按钮
                 onClose={()=>{this.setState({drawerShow:false})}} // 点击遮罩层或右上角叉或取消按钮的回调
                 visible={drawerShow} // Drawer 是否可见
               >
                  <UpdateRoom 
                     updateInfo={updateInfo}
                     refreshList={()=>{
                         this.setState({drawerShow:false})
                         // 更新完毕后刷新页面
                         this.getTableData(nowPage)
                     }}
                  ></UpdateRoom>
               </Drawer>
            </div>
        )
    }
}
export default Room