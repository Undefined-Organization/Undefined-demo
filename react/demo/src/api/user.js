import axios from '../utils/axios'

export const UserLogin=(userName,passWord)=>{
    return new Promise((resolve,reject)=>{
        let url='hehe/v1/admin/user/login'
        axios.post(url,{userName,passWord})
        .then((res)=>{
          resolve(res)
        })
        .catch((err)=>{
           reject(err)
        })
    })
}