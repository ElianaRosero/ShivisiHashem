import React from 'react';
import { connect } from 'react-redux';

import newOrder from '../utilities/newOrder';

class Order extends React.Component{  

       render() {
        var time = this.props.currentTime.getHours();
         return (
                <div>
                    {newOrder(time)}
                </div>
            )
        // var timePreview = this.props.currentTime.getHours() + 1;
        // if (this.props.previewOn === false) {
        //     return (
        //         <div>
        //             {newOrder(time)}
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             {newOrder(timePreview)}
        //         </div>
        //     )
        // }
    }
}
function mapStateToProps(state) {
    const {
        currentTime,
        previewOn
    } = state.currentTimeReduced;
    console.log("mapStateToPropsORDER", currentTime);
    return {
        currentTime,
        previewOn
    }
}


export default connect(mapStateToProps)(Order);