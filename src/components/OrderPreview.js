import React from 'react';
import { connect } from 'react-redux';

import theName from '../utilities/theName';

class OrderPreview extends React.Component {

    render() {
        let propsToBePassed = {
         time: this.props.currentTime.getHours() + 1,
         letterSize: '100px'
        }
        if (this.props.previewOn === true) {
            return (
                <div>
                    {theName(propsToBePassed)}
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
