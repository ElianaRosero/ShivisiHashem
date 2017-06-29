import React from 'react';
import { connect } from 'react-redux';

import newOrder from '../utilities/newOrder';

class OrderPreview extends React.Component {

    render() {
        var time = this.props.currentTime.getHours() + 1;
        if (this.props.previewOn === true) {
            return (
                <div>
                    {newOrder(time)}
                </div>
            )
        } else {
            return null
        }
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


export default connect(mapStateToProps)(OrderPreview);
