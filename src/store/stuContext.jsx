import React from "react"


const StuContext=React.createContext({
    fetchDataa:()=>{},
    //该被定义的名字将不会被采用，会被App中替代的value覆盖，且value对象用key代替
    nameOne:''
})

export default StuContext