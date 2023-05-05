import React from 'react'
import Student from './Student'
import './StudentList.css'

const StudentList = (props) =>{
    //props为stuData
    // const { stus } = props
    
    return (
        <div className='table'>
            <table >
                <caption>学生列表</caption>
                <thead>
                    <tr>
                        <th>姓名</th>
                        <th>性别</th>
                        <th>年龄</th>
                        <th>地址</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {stus.map((stu)=><Student key={stu.id} stu={stu.attributes}/>)} */}
                    {props.stus.map(item=> <Student key={item.id} stu={item.attributes} stuid={item.id}/> )}
                </tbody>
            </table>
        </div>
    )
}
export default StudentList;
