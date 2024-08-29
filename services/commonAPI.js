import axios from "axios";
export const commonAPI=async(httpMethod,url,reqbody)=>{
  let reqConfig={
    method:httpMethod,
    url,
    headers:{"content-type":"application/json" },
    data:reqbody
}
  return await axios(reqConfig).then((res)=>{
    return res}).catch(err=>{
      return err
    })
}