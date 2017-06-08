import React /*, { Component }*/ from 'react';
import './App.css';

import Order from './components/Order';
import OrderTest from './components/OrderTest';

export default class App extends React.Component{
    constructor(props) {
       super(props);
       this.state = {
           date: new Date()
       };
       console.log(this.state.date);
    }
    
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
   }

    tick() {
        this.setState({
        date: new Date()
        });
   } 

    render(){
         var theTime = this.state.date.toLocaleTimeString();
        return(        
              <div className="Root-Container">
                <div className="Bsd">
                  בסד
                </div> 
                <div className="Header">
                  Shivisi Hashem
                </div>     
                <div className="Name-Container">
                  <Order currentTime = {this.state.date}/> 
                </div> 
                {/*<div className="Name-Container">
                  <OrderTest currentTime = {this.state.date}/> 
                </div> */}
                <div className="Time">           
                  {theTime}
                </div>
            </div>
        );
    }
}
