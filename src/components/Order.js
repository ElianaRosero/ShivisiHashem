import React from 'react';
import { connect } from 'react-redux';

import newOrder from '../utilities/newOrder';

class Order extends React.Component{  

     render(){
        var time = this.props.currentTime.getHours();
        return(
            <div>
                 {newOrder(time)}
           </div>   
       )
    }
}
function mapStateToProps(state) {
    const currentTime = state.currentTimeReduced.currentTime;
    console.log("mapStateToPropsORDER", currentTime);
    return{
        currentTime
    }
}


export default connect(mapStateToProps)(Order);
