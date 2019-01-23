import * as React from 'react';
import { Jumbotron } from './jumbotron';
// import { Button, IButtonState } from './button';
// import {
//   duoBusinessWorkStation, duoLab, duoLaunch, duoMultiPlatform,
//   duoNetwork, duoTransferFile, duoStandingDesk, duoBusinessIdeaUser,
//   duoProgrammingTyping, duoPackageTrolley, duoBusinessHandShakeDeal,
//   duoPiggyBank, duoBusinessStartupLaptop, duoRobot
// } from './img/index';
import './App.css';

export namespace App {
  export interface Props {
    // empty
  }

  export interface State {
  }

  export interface Context {
    // empty
  }
}

class App extends React.Component<App.Props, App.State> {
  constructor() {
    super();

    this.state = {
    };
  }

  render() {
    return (
      <div className='app'>
        <div>
          <Jumbotron />
        </div>
      </div>
    );
  }
}

export default App;