const express = require('express')
const router = express.Router()
const person = require('../control/personControl')

/**
 * @api {get} /admin/person/add 增加员工
 * @apiName in
 * @apiGroup person
 *
 * @apiParam {String} name 员工姓名
 * @apiParam {String} account 员工登录账户 
 * @apiParam {String} pwd 员工登录密码 
 * @apiParam {String} sex 员工性别
 * @apiParam {String} idCard 员工身份证号 
 * @apiParam {Number} section 部门编号
 * @apiParam {Number} tel 手机号
 * @apiParam {Date} ctime 创建时间 
 *
 * @apiSuccess {String} err 状态码
 * @apiSuccess {String} msg  是否成功信息.
 * @apiSuccess {String} info  返回信息.
 */
router.get('/add', (req, res)=>{
  let {name, account, pwd, idCard, sex, section, tel} = req.query
  person.add(name, account, pwd, idCard, sex, section, tel)
  .then((data)=>{
    res.send({err: 0, msg: '添加成功'})
  })
  .catch((err)=>{
    res.send({err: -1, msg:'添加失败', info: err})
  })
})

/**
 * @api {get} /admin/person/del 删除员工
 * @apiName del
 * @apiGroup person
 *
 * @apiParam {String} _id 员工id
 *
 * @apiSuccess {String} err 状态码
 * @apiSuccess {String} msg  是否成功信息.
 * @apiSuccess {String} info  返回信息.
 */
router.get('/del', (req, res) => {
  let {_id} = req.query
  person.del(_id)
  .then((data)=>{
    res.send({err: 0, msg: '删除成功', info: data})
  })
  .catch((err)=>{
    res.send({err: -1, msg: '删除失败', info: err})
  })
})

/**
 * @api {get} /admin/person/update 员工息修改
 * @apiName update
 * @apiGroup person
 *
 * @apiParam {String} _id 员工id
 * @apiParam {String} pwd 员工登录密码 
 * @apiParam {String} sex 员工性别
 * @apiParam {String} idCard 员工身份证号 
 * @apiParam {Number} section 部门编号
 * @apiParam {Number} tel 手机号
 *
 * @apiSuccess {String} err 状态码
 * @apiSuccess {String} msg  是否成功信息.
 * @apiSuccess {String} info  返回信息.
 */
router.get('/update', (req, res) => {
  let {_id,pwd, idCard, sex, section, tel} = req.query
  person.update(_id, pwd, idCard, sex, section, tel)
  .then((data)=>{
    res.send({err: 0, msg: '修改成功', info: data})
  })
  .catch((err)=>{
    res.send({err: -1, msg: '修改失败', info: err})
  })
})

/**
 * @api {get} /admin/person/get 员工信息获取
 * @apiName get
 * @apiGroup person
 *
 * @apiParam {String} page 当前页数
 * @apiParam {String} pageSize 每页数据数量
 * 
 * @apiSuccess {String} err 状态码
 * @apiSuccess {String} msg  是否成功信息.
 * @apiSuccess {String} info  返回信息.
 */
router.get('/get', (req, res) => {
  let page = Number(req.query.page)||1
  let pageSize = Number(req.query.pageSize)||5
  person.get(page,pageSize)
  .then((data)=>{
    res.send({err: 0, msg: '查询成功', info: {list: data}})
  })
  .catch((err)=>{
    res.send({err: -1, msg: '查询失败', info: err})
  })
})

module.exports = router