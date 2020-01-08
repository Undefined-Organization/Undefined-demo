import axios from '../utils/axios'

export const addCheckinList = (name, idCard, sex, price, roomNum, tel) =>{
  return new Promise((resolve,reject)=>{
    let url = 'http://39.98.110.188:3000/admin/checkin/in'
    let data = {name, idCard, sex, price, roomNum, tel}
    axios.get(url,{params:data})
    .then((data)=>{
      if(data.err===0){
        resolve(data)
      }else{
        reject(data)
      }
    })
    .catch((err)=>{
      reject(err)
    })
  })
}
export const getCheckinList = (page,pageSize,type) =>{
  return new Promise((resolve,reject)=>{
    let data = {page,pageSize,type}
    let url = 'http://39.98.110.188:3000/admin/checkin/getByType'
    axios.get(url, {params:data})
    .then((data)=>{
      if(data.err===0){
        resolve(data)
      }else{
        reject(data)
      }
    })
    .catch((err)=>{
      reject(err)
    })
  })
}
export const delCheckinList = (_id) =>{
  return new Promise((resolve,reject)=>{
    let data = {_id}
    let url = 'http://39.98.110.188:3000/admin/checkin/del'
    axios.get(url, {params:data})
    .then((data)=>{
      if(data.err===0){
        resolve(data)
      }else{
        reject(data)
      }
    })
    .catch((err)=>{
      reject(err)
    })
  })
}
export const outCheckinList = (_id) =>{
  return new Promise((resolve,reject)=>{
    let data = {_id}
    let url = 'http://39.98.110.188:3000/admin/checkin/out'
    axios.get(url, {params:data})
    .then((data)=>{
      if(data.err===0){
        resolve(data)
      }else{
        reject(data)
      }
    })
    .catch((err)=>{
      reject(err)
    })
  })
}
export const updateCheckinList = (data) =>{
  return new Promise((resolve,reject)=>{
    let url = 'http://39.98.110.188:3000/admin/checkin/update'
    axios.get(url, {params:data})
    .then((data)=>{
      if(data.err===0){
        resolve(data)
      }else{
        reject(data)
      }
    })
    .catch((err)=>{
      reject(err)
    })
  })
}
export const getListByKw = (page,pageSize,kw) =>{
  return new Promise((resolve,reject)=>{
    let url = 'http://39.98.110.188:3000/admin/checkin/getByKw'
    let data = {page,pageSize,kw}
    axios.get(url, {params:data})
    .then((data)=>{
      if(data.err===0){
        resolve(data)
      }else{
        reject(data)
      }
    })
    .catch((err)=>{
      reject(err)
    })
  })
}