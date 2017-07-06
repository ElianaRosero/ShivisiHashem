import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import Order from './components/Order';
import OrderPreview from './components/OrderPreview';
import { getCurrentTime, toggleView } from './redux/actions/timeActions';


class App extends Component {
  constructor(props) {
    super(props);
    this.toggleName = this.toggleName.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(getCurrentTime(new Date()));
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
    // this.props.dispatch(getCurrentTime(new Date()))
  }

  toggleName() {
    console.log("i was clicked!")
    const { dispatch } = this.props;
    dispatch(toggleView())
  }

  render() {
    let theTime;
    const { currentTime } = this.props;
    if (currentTime === null) {
      theTime = null;
    } else {
      theTime = currentTime.toLocaleTimeString();
    }

    return (
      <div className="Root-Container">
        <div className="Bsd">
          בסד
        </div>
        <div className="Header">
          Shivisi Hashem
        </div>
        <div className="Name-Container">
            <Order />
        </div>
        <div className="Name-Container-Preview">
           <OrderPreview className="Name-Preview"/>
        </div>
        <div className="Time">
          {theTime}
          <button onClick={this.toggleName}>
            preview next
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const currentTime = state.currentTimeReduced.currentTime;
  console.log("state", currentTime)
  return {
    currentTime
  }
}

export default connect(mapStateToProps)(App);
