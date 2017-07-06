import React from 'react';
import { connect } from 'react-redux';

import theName from '../utilities/theName';

class Order extends React.Component{  

       render() {
        let propsToBePassed = {
         time: this.props.currentTime.getHours(),
         letterSize: '400px'
        }
         return (
                <div>
                    {theName(propsToBePassed)}
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