import React from 'react';

export default class OrderTest extends React.Component{  
    constructor(props) {
        super(props);
        this.state = {
            currentTime: this.props.currentTime
        };
        // console.log(this.state.currentTime);
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
        currentTime: this.props.currentTime
        });
   } 

    newOrder(timeAsProp) {
        var hour = timeAsProp;
        let returnValue = [];
        //  var yud = <img height= "380px" alt="yud" key="yud" className="yud" src={require("../img/yud5.png")} />
        //  var hey1 = <img height= "380px" alt="hey1" key="hey1" className="hey1" src={require("../img/hey5.png")} />
        //  var vav = <img height= "380px" alt="vav" key="vav" className="vav" src={require("../img/vav.png")} />
        //  var hey2 = <img height= "380px" alt="hey2" key="hey2" className="hey2" src={require("../img/hey5.png")} />
         var yud = <img height= "400px" alt="yud" key="yud" className="yud" src={require("../img/yud.png")} />
         var hey1 = <img height= "400px" alt="hey1" key="hey1" className="hey1" src={require("../img/firsthey.png")} />
         var vav = <img height= "400px" alt="vav" key="vav" className="vav" src={require("../img/vav.png")} />
         var hey2 = <img height= "400px" alt="hey2" key="hey2" className="hey2" src={require("../img/secondhey.png")} />
        //  console.log(hour)
         if (hour >= 0 && hour <= 5) {
           returnValue = [    
            hey2, vav, hey1, yud    
            ];  
}
        if (hour > 5 && hour <= 10)  {
            returnValue = [
            vav, hey2, hey1, yud     
            ];
}
        
        if (hour > 10 && hour <= 15)  {
            returnValue = [   
            hey2, hey1, vav, yud    
            ]; 
}
        if (hour > 15 && hour <= 20)  {
            returnValue = [ 
            yud, hey2, vav, hey1
            ];  
}       
        if (hour > 20 && hour <= 25)  {
            returnValue = [ 
            hey2, yud, vav, hey1
            ];  
}
        if (hour > 25 && hour <= 30)  {
            returnValue = [
            yud, vav, hey2, hey1
            ];  
}
        if (hour > 30 && hour <= 35)  {
            returnValue = [ 
            hey1, yud, hey2, vav
            ];  
}
        if (hour > 35 && hour <= 40)  {
            returnValue = [ 
            yud, hey1, hey2, vav   
            ];  
}
        if (hour > 40 && hour <= 45)  {
            returnValue = [
            hey1, hey2, yud, vav
            ];  
}
        if (hour > 45 && hour <= 50)  {
            returnValue = [
            vav, hey1, yud, hey2
            ];
}
        if (hour > 50 && hour <= 55)  {
            returnValue = [
            hey1, vav, yud, hey2
            ];  
}
        if (hour > 55 && hour <= 60)  {
            returnValue = [
            vav, yud, hey1, hey2
            ];  
}
        // console.log(returnValue)
    return (

         <div className={'Name Hr'+hour}>{returnValue}</div>    
     );    
}
     render(){
        var time = this.state.currentTime.getSeconds();
        console.log(time);
        return(
            <div>
                 {this.newOrder(time)}
           </div>
           
       )
    }
}