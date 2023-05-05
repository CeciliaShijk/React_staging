import { configureStore } from "@reduxjs/toolkit";
import studentApi from "./practice";
import { schoolReducer } from "./schoolSlice";
import { stuReducer } from "./stuSlice";

const store = configureStore({
    reducer:{
        student:stuReducer,
        school:schoolReducer,
        [studentApi.reducerPath]:studentApi.reducer
    }
})
export default store;

