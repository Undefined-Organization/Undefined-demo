import axios from '../utils/axios'

export const UserLogin=(userName,passWord)=>{
    return new Promise((resolve,reject)=>{
        let url='http://39.98.110.188:3000/admin/user/login'
        let account =userName
        let pwd =passWord
        axios.post(url,{account,pwd})
        .then((res)=>{
          resolve(res)
        })
        .catch((err)=>{
           reject(err)
        })
    })
}