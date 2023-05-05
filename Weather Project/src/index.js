//引入react核心库，当年通过script标签引入 - 默认暴露
import React from 'react';


//引入react-dom库，当年通过script标签引入 - 默认暴露

import * as ReactDOMClient from 'react-dom/client';
//引入app根组件
import App from './App';



ReactDOMClient.createRoot(document.getElementById('root')).render(<App/>)


