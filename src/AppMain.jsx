import React, { Component } from 'react';
import Clock from './Clock';
import Stopwatch from './Stopwatch';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class AppMain extends Component{
  constructor(props){
    super(props);
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: ''
    }
  }

  changeDeadline() {
    this.setState({deadline: this.state.newDeadline});
  }

  render(){
    return (
      <div className='App'>
        <div className='App-title'>Countdown to { this.state.deadline }</div>

        <Clock
          deadline = { this.state.deadline }
        />

        <Form inline>
          <FormControl
            className="Deadline-input"
            type="text"
            placeholder='Input date'
            onChange={ event => this.setState({ newDeadline: event.target.value }) }
          />

          <Button
            onClick={ () => this.changeDeadline() }>
            Submit
          </Button>
        </Form>

        <hr />

        <div className='App-title'>JW Stopwatch</div>
        <Stopwatch />
      </div>
    )
  }
}

export default AppMain;