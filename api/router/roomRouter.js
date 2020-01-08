const express = require('express')
const router = express.Router()
const room = require('../control/roomControl')

/**
 * @api {get} /admin/room/add 增加房间
 * @apiName add
 * @apiGroup room
 *
 * @apiParam {Number} roomNum 房间号
 * @apiParam {String} type 房间类型 
 * @apiParam {Number} price 房间价格 
 * @apiParam {String} area 房间空间大小
 * @apiParam {String} desc 房间描述 
 * @apiParam {Number} state 房间状态 0=空闲 1=入住
 * @apiParam {Date} ctime 创建时间 
 *
 * @apiSuccess {String} err 状态码
 * @apiSuccess {String} msg  是否成功信息.
 * @apiSuccess {String} info  返回信息.
 */
router.get('/add', (req, res)=>{
  let {roomNum, type, price, area, desc, state} = req.query
  room.add(roomNum, type, price, area, desc, state)
  .then((data)=>{
    res.send({err: 0, msg: '添加成功'})
  })
  .catch((err)=>{
    res.send({err: -1, msg:'添加失败', info: err})
  })
})

/**
 * @api {get} /admin/room/del 删除房间
 * @apiName del
 * @apiGroup room
 *
 * @apiParam {String} _id 房间id
 *
 * @apiSuccess {String} err 状态码
 * @apiSuccess {String} msg  是否成功信息.
 * @apiSuccess {String} info  返回信息.
 */
router.get('/del', (req, res) => {
  let {_id} = req.query
  room.del(_id)
  .then((data)=>{
    res.send({err: 0, msg: '删除成功', info: data})
  })
  .catch((err)=>{
    res.send({err: -1, msg: '删除失败', info: err})
  })
})

/**
 * @api {get} /admin/room/update 房间信息修改
 * @apiName update
 * @apiGroup room
 *
 * @apiParam {String} _id 房间id
 * @apiParam {String} type 房间类型 
 * @apiParam {Number} price 房间价格 
 * @apiParam {String} desc 房间描述 
 *
 * @apiSuccess {String} err 状态码
 * @apiSuccess {String} msg  是否成功信息.
 * @apiSuccess {String} info  返回信息.
 */
router.get('/update', (req, res) => {
  let {_id, type, price, desc} = req.query
  room.update(_id, type, price, desc)
  .then((data)=>{
    res.send({err: 0, msg: '修改成功', info: data})
  })
  .catch((err)=>{
    res.send({err: -1, msg: '修改失败', info: err})
  })
})

/**
 * @api {get} /admin/room/get 房间信息获取
 * @apiName get
 * @apiGroup room
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
  room.get(page,pageSize)
  .then((data)=>{
    res.send({err: 0, msg: '查询成功', info: {list: data}})
  })
  .catch((err)=>{
    res.send({err: -1, msg: '查询失败', info: err})
  })
})

module.exports = router