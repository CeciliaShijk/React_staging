//引入react核心库，当年通过script标签引入 - 默认暴露
import React from 'react';
//引入react-dom库，当年通过script标签引入 - 默认暴露
import ReactDOM from 'react-dom/client';
//引入样式
import './index.css';
//引入app根组件
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //默认是最新的版本 一般不写
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
