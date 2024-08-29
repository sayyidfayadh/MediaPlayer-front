import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./server_url";
//upload video
export const uploadVideoAPI=async(video)=>{
  return await commonAPI("POST",`${SERVER_URL}/allVideos`,video)
}
//get alluploadvideos
export const getAllUploadedVideosAPI=async()=>{
  return await commonAPI("GET",`${SERVER_URL}/allVideos`,"")
}
//get a video
export const getAVideoAPI=async(id)=>{
  return await commonAPI("GET",`${SERVER_URL}/allVideos/${id}`,"")
}
//delete a video
export const deleteVideosAPI=async(id)=>{
  return await commonAPI("DELETE",`${SERVER_URL}/allVideos/${id}`,{})
}
//addvideohistory
export const addVideoHistoryAPI=async(video)=>{
  return await commonAPI("POST",`${SERVER_URL}/history`,video)
}
//get history
export const getVideoHistoryAPI=async()=>{
  return await commonAPI("GET",`${SERVER_URL}/history`,"")
}
//delete HISTORY
export const deletVideoHistoryAPI=async(id)=>{
  return await commonAPI("DELETE",`${SERVER_URL}/history/${id}`,{})
}

//add category
export const addVideoCategoryAPI=async(category)=>{
  return await commonAPI("POST",`${SERVER_URL}/category`,category)
}

//getcategory
export const getVideoCategoryAPI=async()=>{
  return await commonAPI("GET",`${SERVER_URL}/category`,"")
}
//delete category
export const deletVideoCategoryAPI=async(id)=>{
  return await commonAPI("DELETE",`${SERVER_URL}/category/${id}`,{})
}
//update category
export const updateCategoryAPI=async(id,categoryDetails)=>{
  return await commonAPI("PUT",`${SERVER_URL}/category/${id}`,categoryDetails)
}