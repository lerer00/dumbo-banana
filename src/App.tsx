import * as React from 'react';
import { Jumbotron } from './jumbotron';
import { Button, IButtonState } from './button';
import {
  duoStandingDesk, duoLaunch,
  duoCheckHexagon, duoCloseHexagon,
  q1, 
  // q2,
  // q3, q4, q5, q6, q7, q8, q9, q10, q11, q12,
  // q13, q14, q15, q16, q17, q18, q19, q20
} from './img/index';
import './App.css';

export namespace App {
  export interface Props {
    // empty
  }

  export interface State {
    start: IStartAction;
    done: IDoneAction;
    welcomeVisible: boolean;
    doneVisible: boolean;
    questions: Array<IQuestion>;
    overlay: IOverlayAction;
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

  export interface IOverlayAction {
    visible: boolean;
    image: any;
    title: string;
    text: string;
    ok: Function;
  }

  export interface IQuestion {
    id: string;
    text: string;
    visible: boolean;
    answered: boolean;
    icon: any;
    answers: Array<IAnswer>;
  }

  export interface IAnswer {
    id: string;
    text: string;
    result: QuestionResult;
    action: Function;
  }
}

export enum QuestionResult {
  GOOD,
  BAD
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
      doneVisible: false,
      questions: [
        {
          id: '1',
          text: 'Balthazar s’est inscrit sur le jeu serpentsdelave.com. Son mot de passe a été piraté puisqu’il avait utilisé sa date de naissance. Aide-le à reprendre le contrôle avec un de ces mots de passe.',
          visible: false,
          answered: false,
          icon: q1,
          answers: [
            {
              id: '1',
              text: 'Loki234',
              action: () => { this.setState({}); },
              result: QuestionResult.BAD
            },
            {
              id: '2',
              text: '2002balth',
              action: () => { this.setState({}); },
              result: QuestionResult.BAD
            },
            {
              id: '3',
              text: 'E!5F3$45',
              action: () => { this.endTest(1); },
              result: QuestionResult.GOOD
            }
          ]
        }
      ],
      overlay: {
        visible: false,
        image: undefined,
        title: 'Undefined',
        text: 'Undefined',
        ok: () => { console.log('Undefined'); }
      }
    };
  }

  showOverlay(result: QuestionResult, action: Function) {
    switch (result) {
      case QuestionResult.BAD: {
        this.setState({
          overlay: {
            visible: true,
            image: duoCloseHexagon,
            title: 'Mauvaise réponse 😞',
            text: 'Tu n\'as pas répondu correctement a la question. Tu n\'as pas répondu correctement a la question. Tu n\'as pas répondu correctement a la question.',
            ok: () => { this.hideOverlay(); }
          }
        });
        break;
      }
      case QuestionResult.GOOD: {
        this.setState({
          overlay: {
            visible: true,
            image: duoCheckHexagon,
            title: 'Bravo 🎉',
            text: 'Tu a bien répondu a la question. Tu a bien répondu a la question. Tu a bien répondu a la question. Tu a bien répondu a la question.',
            ok: () => { this.hideOverlay(); action(); }
          }
        });
        break;
      }
      default: {
        break;
      }
    }
  }

  startTest() {
    var questions = this.state.questions;
    questions[0].visible = true;

    this.setState({
      welcomeVisible: false, questions: questions
    });
  }

  gotoNextQuestion(currentQuestionIndex: number) {
    var questions = this.state.questions;
    questions[currentQuestionIndex - 1].answered = true;
    questions[currentQuestionIndex].visible = true;

    this.setState({
      questions: questions
    });
  }

  endTest(currentQuestionIndex: number) {
    var questions = this.state.questions;
    questions[currentQuestionIndex - 1].answered = true;

    this.setState({
      doneVisible: true, questions: questions
    });
  }

  hideOverlay() {
    this.setState({
      overlay: {
        visible: false,
        image: undefined,
        title: 'Undefined',
        text: 'Undefined',
        ok: () => { console.log(''); }
      }
    });
  }

  reset() {
    this.setState({
      start: {
        text: 'Aidez Jhonny!',
        status: IButtonState.default
      },
      done: {
        text: 'Recommencer!',
        status: IButtonState.default
      },
      welcomeVisible: true,
      doneVisible: false,
      questions: [
        {
          id: '1',
          text: 'Balthazar s’est inscrit sur le jeu serpentsdelave.com. Son mot de passe a été piraté puisqu’il avait utilisé sa date de naissance. Aide-le à reprendre le contrôle avec un de ces mots de passe.',
          visible: false,
          answered: false,
          icon: q1,
          answers: [
            {
              id: '1',
              text: 'Loki234',
              action: () => { this.setState({}); },
              result: QuestionResult.BAD
            },
            {
              id: '2',
              text: '2002balth',
              action: () => { this.setState({}); },
              result: QuestionResult.BAD
            },
            {
              id: '3',
              text: 'E!5F3$45',
              action: () => { this.endTest(1); },
              result: QuestionResult.GOOD
            }
          ]
        }
      ],
      overlay: {
        visible: false,
        image: undefined,
        title: 'Undefined',
        text: 'Undefined',
        ok: () => { console.log('Undefined'); }
      }
    });
  }

  render() {
    return (
      <div className='app'>
        <div>
          <Jumbotron />
          <div className='content'>
            {/* BEGIN */}
            <div className={this.state.welcomeVisible ? 'welcome-inner' : 'welcome-inner outside-viewport-up'}>
              <h2 className='welcome-title'>
                <img className='logo' src={duoStandingDesk} />
              </h2>
              <h3 className='welcome-subtitle'>Lorem ipsum dolor sitee </h3>
              <h4 className='welcome-text'>Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
              <Button
                text={this.state.start.text}
                state={this.state.start.status}
                action={() => { this.startTest(); }}
              />
            </div>

            {/* QUESTIONS */}
            {this.state.questions.map((question) =>
              <div key={question.id} className={`question-inner ${question.visible ? '' : 'outside-viewport-down'} ${question.answered ? 'outside-viewport-up' : ''}`}>
                <div className='question-text-container'>
                  <div className='question-image'>
                    <img src={question.icon} />
                  </div>
                  <p>{question.text}</p>
                </div>
                <div className='question-buttons'>
                  {question.answers.map((answer) =>
                    <Button key={answer.id} text={answer.text} state={IButtonState.default} action={() => this.showOverlay(answer.result, answer.action)} />
                  )}
                </div>
                <p className='page-count'>{question.id}/{this.state.questions.length}</p>
              </div>
            )}

            {/* END */}
            <div className={this.state.doneVisible ? 'welcome-inner' : 'welcome-inner outside-viewport-down'}>
              <h2 className='welcome-title'>
                <img className='logo' src={duoLaunch} />
              </h2>
              <h3 className='welcome-subtitle'>Lorem ipsum dolor sitee </h3>
              <h4 className='welcome-text'>Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
              <Button
                text={this.state.done.text}
                state={this.state.done.status}
                action={() => { this.reset(); }}
              />
            </div>
            
            {/* OVERLAY */}
            <div className={`overlay ${this.state.overlay.visible ? '' : 'overlay-hidden'}`}>
              <div className='overlay-inner'>
                <h2 className='overlay-image'>
                  <img src={this.state.overlay.image} />
                </h2>
                <h3 className='overlay-title'>{this.state.overlay.title}</h3>
                <h4 className='overlay-text'>{this.state.overlay.text}</h4>
                <Button
                  text={'Ok'}
                  state={this.state.done.status}
                  action={this.state.overlay.ok}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;