import axios from '../utils/axios'

// 取
export const GetRooms =(page,pageSize)=>{
    return new Promise ((resolve,reject)=>{
        let data = {page,pageSize}
        let url = 'http://39.98.110.188:3000/admin/room/get'
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

// 增
export const addRoom=(data)=>{
    return new Promise((resolve,reject)=>{
        let url = 'http://39.98.110.188:3000/admin/room/add'
        // let data = {roomNum,type,price,area,desc,state}
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

// 删
export const DelData=(_id)=>{
    return new Promise((resolve,reject)=>{
        let data = {_id}
        let url = 'http://39.98.110.188:3000/admin/room/del'
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
// 改
export const updateRoom = (data) => {
    return new Promise ((resolve,reject)=>{
        let url = 'http://39.98.110.188:3000/admin/room/update'
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