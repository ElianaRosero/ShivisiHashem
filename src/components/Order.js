import React from 'react';


export default class Order extends React.Component{  
    constructor(props) {
        super(props);
        this.state = {
            currentTime: this.props.currentTime
        };
        // console.log(this.state.currentTime);
    }

    newOrder(timeAsProp) {
        var hour = timeAsProp;
        let returnValue = [];
         var yud = <img height= "380px" alt="yud" key="yud" className="yud" src={require("../img/yud5.png")} />
         var hey1 = <img height= "380px" alt="hey1" key="hey1" className="hey1" src={require("../img/hey5.png")} />
         var vav = <img height= "380px" alt="vav" key="vav" className="vav" src={require("../img/vav.png")} />
         var hey2 = <img height= "380px" alt="hey2" key="hey2" className="hey2" src={require("../img/hey5.png")} />
        //  var yud = <img height= "400px" alt="yud" key="yud" className="yud" src={require("../img/yud.png")} />
        //  var hey1 = <img height= "400px" alt="hey1" key="hey1" className="hey1" src={require("../img/hey1.png")} />
        //  var vav = <img height= "400px" alt="vav" key="vav" className="vav" src={require("../img/vav.png")} />
        //  var hey2 = <img height= "400px" alt="hey2" key="hey2" className="hey2" src={require("../img/hey2.png")} />
        //  console.log(hour)
         if (hour === 0 || hour === 12) {
           returnValue = [    
            hey2, vav, hey1, yud    
            ];  
}
        if (hour === 1 || hour === 13) {
            returnValue = [
            vav, hey2, hey1, yud     
            ];
}
        
        if (hour === 2 || hour === 14) {
            returnValue = [   
            hey2, hey1, vav, yud    
            ]; 
}
        if (hour === 3 || hour === 15) {
            returnValue = [ 
            yud, hey2, vav, hey1
            ];  
}       
        if (hour === 4 || hour === 16) {
            returnValue = [ 
            hey2, yud, vav, hey1
            ];  
}
        if (hour === 5 || hour === 17) {
            returnValue = [
            yud, vav, hey2, hey1
            ];  
}
        if (hour === 6 || hour === 18) {
            returnValue = [ 
            hey1, yud, hey2, vav
            ];  
}
        if (hour === 7 || hour === 19) {
            returnValue = [ 
            yud, hey1, hey2, vav   
            ];  
}
        if (hour === 8 || hour === 20) {
            returnValue = [
            hey1, hey2, yud, vav
            ];  
}
        if (hour === 9 || hour === 21) {
            returnValue = [
            vav, hey1, yud, hey2
            ];
}
        if (hour === 10 || hour === 22) {
            returnValue = [
            hey1, vav, yud, hey2
            ];  
}
        if (hour === 11 || hour === 23) {
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
        var time = this.state.currentTime.getHours();
        console.log(time);
        return(
            <div>
                 {this.newOrder(time)}
           </div>
           
       )
    }
}