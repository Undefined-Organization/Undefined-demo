import axios from '../utils/axios'
// import {getItem} from '../utils/webStorage'

// 获取会员列表
export const GetVips=async(page,pageSize)=>{
    let url ='http://39.98.110.188:3000/admin/vip/getVips'
     let result =await axios.post(url,{page,pageSize})
     if(result.err===0) return result
     else throw result
}
// 删除
export const DelVips=async(vipId)=>{
    let url ='http://39.98.110.188:3000/admin/vip/delVip'
    let result =await axios.post(url,{vipId})
    if(result.err===0) return result
     else throw result
}

// 添加
export const AddVips=async(name,img,vipType,desc)=>{
    let url ='http://39.98.110.188:3000/admin/vip/addVip'
    let result =await axios.post(url,{name,img,vipType,desc})
    if(result.err===0) return result
     else throw result
}

// 修改
export const UpdateVips=async(vipId,name,img,vipType,desc)=>{
    let url ='http://39.98.110.188:3000/admin/vip/updateVip'
    let result =await axios.post(url,{vipId,name,img,vipType,desc})
    if(result.err===0) return result
     else throw result
}

// 分类查询
export const GetVipType=async(vipType)=>{
    let url ='http://39.98.110.188:3000/admin/vip/getVipsByType'
    // console.log(vipType)
    let result =await axios.post(url,{vipType})
    if(result.err===0) return result
     else throw result
}

// 关键字查询
export const GetVipKw=async(kw)=>{
    let url ='http://39.98.110.188:3000/admin/vip/getVipsByKw'
    // console.log(kw)
    let result =await axios.post(url,{kw})
    if(result.err===0) return result
     else throw result
}