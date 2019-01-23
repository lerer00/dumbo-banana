import * as React from 'react';
import { Jumbotron } from './jumbotron';
import { Button, IButtonState } from './button';
import {
  duoStandingDesk,
} from './img/index';
import './App.css';

export namespace App {
  export interface Props {
    // empty
  }

  export interface State {
    start: IStartAction;
    welcomeVisible: boolean;
    q1Visible: boolean;
  }

  export interface Context {
    // empty
  }

  export interface IStartAction {
    text: string;
    status: IButtonState;
  }
}

class App extends React.Component<App.Props, App.State> {
  constructor() {
    super();

    this.state = {
      start: {
        text: 'Aidez Jhonny!',
        status: IButtonState.default
      },
      welcomeVisible: true,
      q1Visible: false
    };
  }

  render() {
    return (
      <div className='app'>
        <div>
          <Jumbotron />
          <div className='content'>
            <div className={this.state.welcomeVisible ? 'welcome-inner' : 'welcome-inner outside-up'}>
              <h2 className='welcome-title'>
                <img className='logo' src={duoStandingDesk} />
              </h2>
              <h3 className='welcome-subtitle'>Lorem ipsum dolor sitee </h3>
              <h4 className='welcome-text'>Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
              <Button
                text={this.state.start.text}
                state={this.state.start.status}
                action={() => this.setState({ welcomeVisible: false, q1Visible: true })}
              />
            </div>
            <div className={this.state.q1Visible ? 'question-inner' : 'question-inner outside-down'}>
              <h2 className='question-title'>
                #1
              </h2>
              <h4 className='question-text'>Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
              {/* <Button
                text={this.state.start.text}
                state={this.state.start.status}
                action={() => this.setState({ welcomeVisible: false })}
              /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;