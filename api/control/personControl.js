const model = require('../db/model/personModel')

async function add(name, account, pwd, idCard, sex, section, tel){
  let res = await model.insertMany({name, account, pwd, idCard, sex, section, tel})
}
async function del(_id){
  let  res = await model.deleteOne({_id:_id})
  return res
}
async function update(_id, pwd, idCard, sex, section, tel){
  let  res = await model.updateOne({_id:_id},{pwd, idCard, sex, section, tel})
  return res
}
async function get(page,pageSize){
  let all = await model.find()
  let allCount = all.length
  let res = await model.find().skip((page-1)*pageSize).limit(pageSize)
  return {res,allCount}
}
module.exports = {add, del, update, get}