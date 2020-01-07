const model = require('../db/model/checkinModel')

async function add(name, idCard, sex, price, roomNum, tel){
  let res = await model.insertMany({name, idCard, sex, price, roomNum, tel})
}
async function del(_id){
  let  res = await model.deleteOne({_id:_id})
  return res
}
async function update(_id, sex, price, roomNum, tel){
  let  res = await model.updateOne({_id:_id},{ sex, price, roomNum, tel})
  return res
}
async function get(page,pageSize){
  let all = await model.find()
  let allCount = all.length
  let res = await model.find().skip((page-1)*pageSize).limit(pageSize)
  return {res,allCount}
}
async function out(_id){
  let res = await model.updateOne({_id: _id}, {state: 1})
  return res
}
module.exports = {add, del, update, get, out}