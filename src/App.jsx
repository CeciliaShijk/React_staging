

import React, { useEffect, useState, useCallback } from 'react'
import StudentList from './components/StudentList';
import StuContext from './store/stuContext';
/**
 * 
 * 组件初始化的时候就要向服务器发请求加载数据 先加载一次
 */
export default function App() {
	// const [stuData, setStuData]= useState(STU_DATA);
	const [stuData, setStuData] = useState([]);
	//记录数据正在加载
	const [loading, setLoading] = useState(false)

	const [error, setError] = useState(null)
	//刷新不重新加载
	const fetchData = useCallback(async () => {
		try {
			setLoading(true);
			const res = await fetch('http://localhost:1337/api/students');
			if (res.ok) {
				const data = await res.json();
				console.log(data.data);
				setStuData(data.data)
			} else {
				console.log('error');
				throw new Error('there is an error while fetching')
			}
		} catch (e) {
			console.log(e);
			setError(e)
		} finally {

			setLoading(false)
		}

	}, [])

	useEffect(() => {
		//method1
		// setLoading(true)
		// 	fetch('http://localhost:1337/api/student')
		// 	.then((res)=>{
		// 		if(res.ok){
		// 			return res.json(res)
		// 		}else{
		// 			throw new Error('there is an error while fetching')
		// 		}
		// 	}).then(data=>{
		// 		setStuData(data.data)
		// 		setLoading(false)
		// 	}).catch(e=>{setLoading(false);setError(e)})
		fetchData()
	}, [])

	const loadDataHandle = () => {
		fetchData()
	}


	return (
		<StuContext.Provider value={{ fetchData }}>
			<div>
				<button onClick={loadDataHandle}>加载数据</button>
				{(!loading && !error) && <StudentList stus={stuData} />}
				{loading && <p>loading</p>}
				{error && <p>error</p>}
			</div>
		</StuContext.Provider>

	)
}
