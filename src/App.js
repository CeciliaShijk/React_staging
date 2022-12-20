//用类定义组件
import React from 'react';
import Weather from './components/Weather.jsx';
// import { Provider } from'react-redux';
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Weather />
      </div>
    )
  }
}
