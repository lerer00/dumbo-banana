import * as React from 'react';
import { Jumbotron } from './jumbotron';
import { Button, IButtonState } from './button';
import {
  duoStandingDesk, duoPiggyBank, duoLaunch
} from './img/index';
import './App.css';

export namespace App {
  export interface Props {
    // empty
  }

  export interface State {
    start: IStartAction;
    done: IDoneAction;
    q1Started: boolean;
    q1Answered: boolean;
    q2Started: boolean;
    q2Answered: boolean;
    welcomeVisible: boolean;
    doneVisible: boolean;
  }

  export interface Context {
    // empty
  }

  export interface IStartAction {
    text: string;
    status: IButtonState;
  }

  export interface IDoneAction {
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
      done: {
        text: 'Recommencer!',
        status: IButtonState.default
      },
      welcomeVisible: true,
      q1Started: false,
      q1Answered: false,
      q2Started: false,
      q2Answered: false,
      doneVisible: false
    };
  }

  render() {
    return (
      <div className='app'>
        <div>
          <Jumbotron />
          <div className='content'>
            <div className={this.state.welcomeVisible ? 'welcome-inner' : 'welcome-inner outside-viewport-up'}>
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
            {/* Question 1 */}
            <div className={`question-inner ${this.state.q1Started ? '' : 'outside-viewport-down'} ${this.state.q1Answered ? 'outside-viewport-up' : ''}`}>
              <div className='question-text-container'>
                <div className='question-image'>
                  <img src={duoPiggyBank} />
                </div>
                <p>Balthazar s’est inscrit sur le jeu serpentsdelave.com. Son mot de passe a été piraté puisqu’il avait utilisé sa date de naissance. Aide-le à reprendre le contrôle avec un de ces mots de passe.</p>
              </div>
              <div className='question-buttons'>
                <Button
                  text={'Loki234'}
                  state={IButtonState.default}
                  action={() => this.setState({ q1Answered: true, q2Started: true })}
                />
                <Button
                  text={'2002balth'}
                  state={IButtonState.default}
                  action={() => this.setState({ q1Answered: true, q2Started: true })}
                />
                <Button
                  text={'E!5F3$45'}
                  state={IButtonState.default}
                  action={() => this.setState({ q1Answered: true, q2Started: true })}
                />
              </div>
              <p className='page-count'>1/2</p>
            </div>
            {/* Question 2 */}
            <div className={`question-inner ${this.state.q2Started ? '' : 'outside-viewport-down'} ${this.state.q2Answered ? 'outside-viewport-up' : ''}`}>
              <div className='question-text-container'>
                <div className='question-image'>
                  <img src={duoPiggyBank} />
                </div>
                <p>Pour obtenir plus de points à son jeu Balthazar a inscrit plusieurs informations afin de participer à un concours. Tu as le droit d’effacer une de ses réponses laquelle choisis tu?</p>
              </div>
              <div className='question-buttons'>
                <Button
                  text={'Loki -> le nom de son chien'}
                  state={IButtonState.default}
                  action={() => this.setState({ q2Answered: true, doneVisible: true })}
                />
                <Button
                  text={'Loin là-bas -> le nom de son école '}
                  state={IButtonState.default}
                  action={() => this.setState({ q2Answered: true, doneVisible: true })}
                />
                <Button
                  text={'Gribouille -> son super héros préféré'}
                  state={IButtonState.default}
                  action={() => this.setState({ q2Answered: true, doneVisible: true })}
                />
              </div>
              <p className='page-count'>2/2</p>
            </div>
            <div className={this.state.doneVisible ? 'welcome-inner' : 'welcome-inner outside-viewport-down'}>
              <h2 className='welcome-title'>
                <img className='logo' src={duoLaunch} />
              </h2>
              <h3 className='welcome-subtitle'>Lorem ipsum dolor sitee </h3>
              <h4 className='welcome-text'>Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
              <Button
                text={this.state.done.text}
                state={this.state.done.status}
                action={() => this.setState({ doneVisible: false, welcomeVisible: true })}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;