import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import Order from './components/Order';
import OrderPreview from './components/OrderPreview';
import { getCurrentTime, toggleView } from './redux/actions/timeActions';


class App extends Component {
  constructor(props) {
    super(props);
    this.toggleView = this.toggleView.bind(this);
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

  toggleView() {
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
          Redux Test
        </div>
        <div className="Name-Container" onClick={this.toggleView}>
          <Order />
        </div>
        <div className="Name-Container-Preview">
          <OrderPreview />
        </div>
        <div className="Time">
          <button 
          onClick={this.toggleView}>
          preview next
          </button>
          {theTime}
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
