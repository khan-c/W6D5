import React from 'react';

class Clock extends React.Component {

  componentDidMount() {
    this.intervalID = window.setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  constructor() {
    super();
    this.state = {
      time: new Date()
    };
    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  render() {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const hours = this.state.time.getHours();
    const minutes = this.state.time.getMinutes();
    const seconds = this.state.time.getSeconds();
    const day = days[this.state.time.getDay()];
    const month = months[this.state.time.getMonth()];
    const date = this.state.time.getDate();
    const year = this.state.time.getFullYear();

    return (
      <div className = { 'clock' }>
        <div className={ 'titles' }>
          <h1>Time:</h1>
          <h1>Date:</h1>
        </div>
        <div className={ 'data' }>
          <span>{ hours }:{ minutes }:{ seconds }</span>
          <span>{ day } { month } { date }, { year }</span>
        </div>
      </div>
    );
  }
}

export default Clock;
