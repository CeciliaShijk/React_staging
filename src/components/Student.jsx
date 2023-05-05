import React, { useCallback, useContext, useState } from 'react'
import StuContext from '../store/stuContext';

const Student = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const cxt = useContext(StuContext)

  const delStudent = useCallback(async () => {
    try {

      setLoading(true);

      const res = await fetch(`http://localhost:1337/api/students/${props.stuid}`, {
        method: 'delete'
      });
      
      if (!res.ok) {
        throw new Error('Couldn\'t delete')
      }
      const data = await res.json();
      //触发列表的刷新
     console.log(cxt);
     cxt.fetchData();
     

    } catch (e) {
      setError(e)
     
      
      console.log(e);
      
    } finally {
      setLoading(false);
    }
  }, [])

  const deleteHandler = () => {
    //删除学生
    delStudent();
    
    // console.log(props);
  }
  //const {stu:{name,age,gender,address}}props
  return (
    <>
      <tr>
        <td>{props.stu.name}</td>
        <td>{props.stu.gender}</td>
        <td>{props.stu.age}</td>
        <td>{props.stu.address}</td>
        <td><button onClick={deleteHandler}>删除</button></td>
      </tr>
      {loading && <tr><td colSpan={5}> 正在删除数据。。。</td></tr>}
      {error && <tr><td colSpan={5}> 删除失败</td></tr>}
    </>

  )
}
export default Student
