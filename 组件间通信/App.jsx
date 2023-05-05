
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setAge } from './store/stuSlice';
import { setName as setSchoolName, setAddress } from './store/schoolSlice';
import { useGetStudentQuery } from './store';
import studentApi from './store';

export default function App() {
	//useSelector用来加载state中的数据 参数为所有的state 返回的可以指定 想要返回的reducer的state
	const student = useSelector(state => state.student);
	const { school } = useSelector(state => state);
	const {data, issuccess,isLoading} =useGetStudentQuery()
	//找到dispatch的函数
	const dispatch = useDispatch()
	const changeName = () => {
		// 调用函数的时候来选择需要调用的具体reducer方法
		dispatch(setName('张继科'))
	}
	const changeAge = () => {
		dispatch(setAge(35))
	}
	const changeNameSchool = () => {
		dispatch(setSchoolName('高老庄'))
	}
	const changeAddressSchool = () => {
		dispatch(setAddress('高老庄第一街道'))
	}
	return (
		<div>
			{/* 得到的就是一个对象 name age gender和address */}
			{/* <p>{JSON.stringify(student)}</p> */}
			{/* <p>{JSON.stringify(school)}</p> */}
			<p>
				{student.name}---
				{student.age}---
				{student.gender}---
				{student.address}

			</p>
			<button onClick={changeName}>修改name</button>
			<button onClick={changeAge}>修改age</button>
			<hr />
			<p>
				{school.name}---
				{school.address}
			</p>

			<hr />

			<button onClick={changeNameSchool}>修改School Name</button>
			<button onClick={changeAddressSchool}>修改School Address</button>
		</div>
	)
}




