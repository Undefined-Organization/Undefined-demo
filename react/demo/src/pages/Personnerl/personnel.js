import React, { Component, Fragment } from 'react'
import { Table, Button, Form, Pagination, Spin, Popconfirm, message, Drawer, Input } from 'antd'
import { UserList, DelList, SearchList } from '../../api/user'
import Updata from '../Updata/UpdataList'
//每页数据条数
const { Search } = Input;
const pageSize = 5
class Personnel extends Component {
  constructor() {
    super()
    this.columns = [
      { title: 'id', dataIndex: '_id', width: '100px', ellipsis: true },
      { title: '姓名', dataIndex: 'name', width: '80px', ellipsis: true },
      { title: '账号', dataIndex: 'account', width: '80px', ellipsis: true },
      { title: '密码', dataIndex: 'pwd', width: '100px', ellipsis: true },
      { title: '性别', dataIndex: 'sex', width: '70px', ellipsis: true },
      { title: '身份证号', dataIndex: 'idCard', width: '100px', ellipsis: true },
      { title: '部门', dataIndex: 'section', width: '80px', ellipsis: true },
      { title: '联系电话', dataIndex: 'tel', width: '100px', ellipsis: true },
      { title: '创建时间', dataIndex: 'ctime', width: '100px', ellipsis: true },
      {
        title: '操作', width: '250px',
        render: (data) => {
          return (
            //  {/* ////删除事件 */}
            <Fragment>
              {/* ////确认删除模态框 */}
              <Popconfirm
                title='确定要删除本条数据么？'
                onConfirm={() => {
                  this.delData(data._id)
                }}
                okText='确认'
                cancelText='取消'
              >
                <Button type="danger" style={{ marginRight: '20px' }}>删除</Button>
              </Popconfirm>

              {/* 修改数据事件 以及抽屉的显示隐藏*/}
              <Button type="primary" onClick={() => {
                this.setState({ drawerShow: true, updataInfo: data })
              }}>修改</Button>
            </Fragment>
          )
        }
      },
    ]
    this.state = {
      ///抽屉的显示隐藏
      drawerShow: false,
      spinning: false,
      //默认页数
      nowPage: 1,
      //总数
      allcount: 0,
      ///分页数据
      dataSource: [],
      // 更新数据
      updataInfo: {},
    }
  }
  componentDidMount() {
    //获取表格数据
    this.getTableData(1)
  }

  delData(id) {
    //网络请求
    DelList(id).then(() => {
      message.success('删除OK', 1)
      this.getTableData()
    })
    ///更新页面数据
  }

  ///获取table数据
  getTableData(nowPage) {
    this.setState({ spinning: true })
    ///现在的页码数 和 几条数据
    UserList(nowPage, pageSize)
      .then((res) => {
        // console.log(res)
        ////数据渲染 数据以及总条数
        this.setState({ dataSource: res.info.list.res, allCount: res.info.list.allCount, spinning: false })
      })
  }
  ////获取模糊查询数据
  getSearchList(page, value) {
    SearchList(page, pageSize, value)
      .then((res) => {
        // console.log(res)
        this.setState({ dataSource: res.info.list.res, allCount: res.info.list.allCount })
      })
  }


  render() {
    ////刷新当前数据的数据和总条数
    let { dataSource, allCount, spinning, drawerShow, updataInfo } = this.state

    return (
      <div>
        {/* ///input输入框 */}
        <Search
          placeholder="请输入内容"
          enterButton="Search"
          size="large"
          style={{ width: '350px', height: '50px', marginBottom: '10px' }}
          onSearch={value => {
            this.getSearchList(1, value)
          }}
        />

        {/* ///表单 滚动  */}
        <Spin spinning={spinning}>
          <Table columns={this.columns}
            dataSource={dataSource}
            rowKey='_id' scroll={{ y: 330 }}
            pagination={false}
          ></Table>
        </Spin>

        {/* ///总条数 */}
        <Pagination total={allCount}
          // 页面数据
          pageSize={pageSize} style={{ marginTop: '10px', marginLeft: '400px' }}
          // 点击触发onchange事件
          onChange={(page) => {
            // console.log('目标页数',page)
            this.getTableData(page)
          }}
        />

        {/* ///修改框 */}
        <Drawer
          closable={true}
          ////显示隐藏
          onClose={() => { this.setState({ drawerShow: false }) }}
          visible={drawerShow}
        >
          <Updata updataInfo={updataInfo} refreshList={() => {
            ///收起抽屉
            this.setState({ drawerShow: false })
            // 更新完毕后刷新界面 
            this.getTableData()
          }}>
          </Updata>
        </Drawer>
      </div>
    );
  }
}

export default Form.create()(Personnel);