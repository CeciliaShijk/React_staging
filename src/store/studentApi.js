import {buildCreateApi, createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
//创建Api对象
//用来创建RTKQ中的Api对象  所有功能都需要这个对象进行
const studentApi = createApi({
reducerPath:'studentApi',//Api标识，不能和其他的Api或者reducer重复
baseQuery:fetchBaseQuery({//fetch封装的函数
    baseUrl:"http://localhost/api/"
}), //指定查询基础信息，发送请求使用的工具
endpoints(){
    return {
        //build是具体请求的构建器，通过build来设置请求的相关信息
        getStudents:build.query({
            query(){
                //用来指定子路径
                return 'students'
            }
        }),
        
    };
}//endpoints用来吃定Api中的各种功能，是一个方法，需要一个对象作为返回值
});

export const teacherApi =createApi({
    reducerPath: 'teacher',
    baseQuery:fetchBaseQuery({
        baseUrl: 'http://localhost/8090/api'
    }),
    endpoints(){
        return{
            getTeacher:build.query({
                query(){
                    return 'teacher'
                }
            })
        }
    }
})

export const {useStudentAPiQuery} = studentApi
export default studentApi;