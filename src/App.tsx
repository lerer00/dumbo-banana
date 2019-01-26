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
    q1Started: boolean;
    q1Answered: boolean;
    q2Started: boolean;
    q2Answered: boolean;
    q3Started: boolean;
    q3Answered: boolean;
    q4Started: boolean;
    q4Answered: boolean;
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
      q1Started: false,
      q1Answered: false,
      q2Started: false,
      q2Answered: false,
      q3Started: false,
      q3Answered: false,
      q4Started: false,
      q4Answered: false,
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
                action={() => this.setState({ welcomeVisible: false, q1Started: true })}
              />
            </div>
            <div className={`question-inner ${this.state.q1Started ? '' : 'outside-down'} ${this.state.q1Answered ? 'question-answered' : ''}`}>
              <h2 className='question-title'>
                #1
              </h2>
              <h4 className='question-text'>Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
              <Button
                text={'Answer 1'}
                state={IButtonState.default}
                action={() => this.setState({ q1Answered: true, q2Started: true })}
              />
            </div>
            <div className={`question-inner ${this.state.q2Started ? '' : 'outside-down'} ${this.state.q2Answered ? 'question-answered' : ''}`}>
              <h2 className='question-title'>
                #2
              </h2>
              <h4 className='question-text'>Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
              <Button
                text={'Answer 2'}
                state={IButtonState.default}
                action={() => this.setState({ q2Answered: true, q3Started: true })}
              />
            </div>
            <div className={`question-inner ${this.state.q3Started ? '' : 'outside-down'} ${this.state.q3Answered ? 'question-answered' : ''}`}>
              <h2 className='question-title'>
                #3
              </h2>
              <h4 className='question-text'>Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
              <Button
                text={'Answer 1'}
                state={IButtonState.default}
                action={() => this.setState({ q3Answered: true, q4Started: true })}
              />
            </div>
            <div className={`question-inner ${this.state.q4Started ? '' : 'outside-down'} ${this.state.q4Answered ? 'question-answered' : ''}`}>
              <h2 className='question-title'>
                #4
              </h2>
              <h4 className='question-text'>Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
              <Button
                text={'Answer 2'}
                state={IButtonState.default}
                action={() => this.setState({})}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;