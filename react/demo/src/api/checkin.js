import axios from '../utils/axios'

export const addCheckinList = (name, idCard, sex, price, roomNum, tel) =>{
  return new Promise((resolve,reject)=>{
    let url = 'http://localhost:3000/admin/checkin/in'
    let data = {name, idCard, sex, price, roomNum, tel}
    axios.get(url,{params:data})
    .then((data)=>{
      resolve(data)
    })
    .catch((err)=>{
      reject(err)
    })
  })
}
export const getCheckinList = (page,pageSize) =>{
  return new Promise((resolve,reject)=>{
    let data = {page,pageSize}
    let url = 'http://localhost:3000/admin/checkin/get'
    axios.get(url, {params:data})
    .then((data)=>{
      resolve(data)
    })
    .catch((err)=>{
      reject(err)
    })
  })
}