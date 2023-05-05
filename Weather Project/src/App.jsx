import React, {  useState } from 'react'


import React from 'react'

export default function App() {
  const [count, setCount]=useState(1)
  return (
    <div>
      <h1>当前的求和结果为:{count}</h1>
    </div>
  )
}
