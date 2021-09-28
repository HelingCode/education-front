import request from '@/utils/request'

export default {
    
    //添加课程信息
    addCourseInfo(courseInfo){
        return request({
            url: `/eduservice/educourse/addCourseInfo`,
            method: 'post',
            data:courseInfo
          })
    },
    //根据id查询课程信息
    getCourseInfoById(id){
        return request({
            url: `/eduservice/educourse/getCourseInfoById/${id}`,
            method: 'get'
          })
    },
     //修改课程信息
     updateCourseInfo(courseInfo){
        return request({
            url: `/eduservice/educourse/updateCourseInfo`,
            method: 'post',
            data:courseInfo
          })
    },
    //根据课程id查询课程发布信息
    getCoursePublishById(id){
        return request({
            url: `/eduservice/educourse/getCoursePublishById/${id}`,
            method: 'get'
          })
    },
    //根据id发布课程
    publishCourse(id){
        return request({
            url: `/eduservice/educourse/publishCourse/${id}`,
            method: 'put'
          })
    },
    //查询所有课程信息
    getCourseInfo(){
        return request({
            url: `/eduservice/educourse/getCourseInfo`,
            method: 'get'
          })
    },
    //根据id删除课程相关信息
    delCourseInfo(id){
        return request({
            url: `/eduservice/educourse/delCourseInfo/${id}`,
            method: 'delete'
          })
    },

    //带条件分页查询课程列表
    getCoursePageVo(current,limit,courseQuery){
        return request({
            url: `/eduservice/educourse/getCoursePageVo/${current}/${limit}`,
            method: 'post',
            data: courseQuery  //转化json传递getCoursePageVo/{current}/{limit}
          })
    }


}