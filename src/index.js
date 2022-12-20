//引入react核心库，当年通过script标签引入 - 默认暴露
import React from 'react';

//引入react-dom库，当年通过script标签引入 - 默认暴露
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
//引入app根组件
import App from './App';

const container=document.getElementById('root');
const root=ReactDOMClient.createRoot(container);
root.render(<App/>)



