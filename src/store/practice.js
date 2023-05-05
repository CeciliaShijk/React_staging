
//Api 对象创建后，对象中会根据各种方法自动生成对应的钩子函数
//通过钩子函数，可以来向服务器发送请求
//钩子函数的命名规则，getStudents -》useGetStudent

import { configureStore } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { getDefaultNormalizer } from "@testing-library/react";

const studentApi = createApi({
    reducerPath: 'studentApi',
    baseQuery:fetchBaseQuery({
        baseUrl: 'https://localhost:8090/api'
    }),
    endpoints(){
        return{
            getStudent:buildCreateApi.query({
                query(){
                    return 'student'
                }
            }),
            getStudentById:build.query({
                query(){
                    return `student ${student.id}`
                }
            })
        }
    }
})

export const {useGetStudentQuery} = studentApi
export default studentApi;
