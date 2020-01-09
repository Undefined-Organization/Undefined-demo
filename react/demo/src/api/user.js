import axios from '../utils/axios'
export const UserLogin=(userName,passWord)=>{
        return new Promise((resolve,reject)=>{
            let url='hehe/v1/admin/user/login'
            axios.post(url,{userName,passWord})
            .then((res)=>{
              resolve(res)
            })
            .catch((err)=>{
               reject(err)
            })
        })
    }
////获取接口
export const UserList = (page, pageSize) => {
    return new Promise((resolve, reject) => {
        let url = 'http://39.98.110.188:3000/admin/person/get'
        let data= {page, pageSize}
        axios.get(url, {params: data})
            .then((res) => {
                // console.log(res)
                if (res.err === 0) {
                    resolve(res)
                } else {
                    reject(res)
                }
            })
            .catch((err) => {
                reject(err)
            })
    })
}

///删除数据接口
export const DelList = (_id) => {
    return new Promise((resolve, reject) => {
        let url = 'http://39.98.110.188:3000/admin/person/del'
        let data= {_id}
        axios.get(url, {params: data})
            .then((res) => {
                // console.log(res)
                if (res.err === 0) {
                    resolve(res)
                } else {
                    reject(res)
                }
            })
            .catch((err) => {
                reject(err)
            })
    })
}

///添加数据接口
export const AddList = (name,account,pwd,sex,idCard,section,tel) => {
    return new Promise((resolve, reject) => {
        let url = 'http://39.98.110.188:3000/admin/person/add'
        let data= {name,account,pwd,sex,idCard,section,tel}
        axios.get(url, {params:{name,account,pwd,sex,idCard,section,tel}})
            .then((res) => {
                console.log(res)
                if (res.err === 0) {
                    resolve(res)
                }
            })
            .catch((err) => {
                reject(err)
            })
    })
}

// /修改数据接口
export const UpdataList = (data) => {
    return new Promise((resolve, reject) => {
        let url = 'http://39.98.110.188:3000/admin/person/update'
        axios.get(url, {params:data})
            .then((res) => {
                console.log(res)
                if (res.err === 0) {
                    resolve(res)
                }
            })
            .catch((err) => {
                reject(err)
            })
    })
}

////搜索接口
export const SearchList = (page, pageSize,kw) => {
    return new Promise((resolve, reject) => {
        let url = 'http://39.98.110.188:3000/admin/person/getByKw'
        let data= {page, pageSize,kw}
        axios.get(url, {params: data})
            .then((res) => {
                // console.log(res)
                if (res.err === 0) {
                    resolve(res)
                } else {
                    reject(res)
                }
            })
            .catch((err) => {
                reject(err)
            })
    })
}