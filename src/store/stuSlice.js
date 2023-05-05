import {  createSlice } from "@reduxjs/toolkit";


//RTK构建store
 const stuSlice = createSlice({
    name:'player',
    initialState:{
        name:'zjk',
        age:24,
        gender:'male',
        address:'China'
    },
    reducers:{
        setName(state,action){

            //调用的时候传入需要改的state值
            state.name = action.payload
        },
        setAge(state,action){
            state.age=action.payload
        }
    }
})
export const {setName,setAge} =stuSlice.actions
export const {reducer:stuReducer} = stuSlice;