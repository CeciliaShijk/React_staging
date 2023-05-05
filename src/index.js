import React from 'react'

import App from './App'

// import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
// import { Provider } from 'react-redux';
// import store from './store';


 
ReactDOMClient.createRoot(document.getElementById('root')).render(<App/>)

// store.subscribe(()=>{
    // ReactDOMClient.createRoot(document.getElementById('root')).render(<App/>)
// })
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     // <Provider store = { store }>
//         <App/>
//     // </Provider>

// )