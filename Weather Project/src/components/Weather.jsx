import React,{Component}from 'react';

export default class Weather extends Component {
    state=  {isHot:true}
    changeWeather=()=>{
     //获取到当前的状态
     const {isHot}=this.state;
          
     //取反赋值
     this.setState({isHot:!this.state.isHot})
    }
    render(){
        return(
            <div>
                <h1>今天天气很{this.state.isHot? '炎热':'凉爽'}</h1>
                <button onClick={this.changeWeather}>点击切换状态</button>
            </div>
        )
    }
}
