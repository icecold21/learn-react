import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';


class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: 0,
      status: false,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }
  // lifecycle
  componentWillMount() {
    // before it renders to the application
  }

  componentDidMount() {
    setInterval(() => this.getWatchTime(this.state.startTime), 1000);
  }

  toggleWatch() {
    if(this.state.status) {
      this.setState({ startTime: '', status: false });
    } else {
      this.setState({ startTime: Date.parse(new Date()), status: true });
    }
  }

  getWatchTime(startTime) {
    if(this.state.status) {
      let time    = Date.parse(Date.now() - startTime);
      let mili    = Math.floor(time / 1000) % 1000;
      let seconds = Math.floor(time / 1000) % 60;
      let minutes = Math.floor(time / 1000 / 60) % 60;
      let hours   = Math.floor(time / 1000 / 3600) % 24;
      let days    = Math.floor(time / (1000 * 3600 * 24));
      this.setState({ days, hours, minutes, seconds });
    } else {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  }

  leadingZero(num) {
    return num < 10 ? ('0' + num) : num;
  }

  render() {
    // this.getTimeUntil(this.props.deadline); this is infinite loop error
    return(
      <div>
        <div>
          <div className='Stopwatch-days'>{ this.leadingZero(this.state.days) } days</div>
          <div className='Stopwatch-hours'>{ this.leadingZero(this.state.hours) } hours</div>
          <div className='Stopwatch-minutes'>{ this.leadingZero(this.state.minutes) } minutes</div>
          <div className='Stopwatch-seconds'>{ this.leadingZero(this.state.seconds) } seconds</div>
        </div>

        <Button
          onClick={ () => this.toggleWatch() }>
          { this.state.status === true ? 'Stop' : "Start" }
        </Button>
      </div>
    )
  }
}

export default Stopwatch;