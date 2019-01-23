import * as React from 'react';
import axios from 'axios';
import { Jumbotron } from './jumbotron';
import { Button, IButtonState } from './button';
import {
  duoBusinessWorkStation, duoLab, duoLaunch, duoMultiPlatform,
  duoNetwork, duoTransferFile, duoStandingDesk, duoBusinessIdeaUser,
  duoProgrammingTyping, duoPackageTrolley, duoBusinessHandShakeDeal,
  duoPiggyBank, duoBusinessStartupLaptop, duoRobot
} from './img/index';
import './App.css';

export namespace App {
  export interface Props {
    // empty
  }

  export interface State {
    help: IHelpForm;
    subscribe: ISubscribeForm;
  }

  export interface Context {
    // empty
  }
}

export interface IHelpForm {
  sent: boolean;
  status: IButtonState;
  text: string;
  value: string;
}

export interface ISubscribeForm {
  sent: boolean;
  status: IButtonState;
  text: string;
  value: string;
}

class App extends React.Component<App.Props, App.State> {
  constructor() {
    super();

    this.state = {
      subscribe: {
        sent: false,
        status: IButtonState.default,
        text: 'Subscribe',
        value: ''
      },
      help: {
        sent: false,
        status: IButtonState.default,
        text: 'Get in touch',
        value: ''
      }
    };

    this.handleHelpEmailValueChange = this.handleHelpEmailValueChange.bind(this);
    this.handleSubscribeEmailValueChange = this.handleSubscribeEmailValueChange.bind(this);
    this.whitepaperAction = this.whitepaperAction.bind(this);
    this.help = this.help.bind(this);
    this.subscribe = this.subscribe.bind(this);
  }

  whitepaperAction() {
    // Here redirect to our github or reroute to another page.
  }

  help() {
    if (this.state.help.value.length <= 0) {
      this.setState({
        help: {
          sent: false,
          status: IButtonState.error,
          text: 'Error',
          value: ''
        }
      });

      return;
    }
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(this.state.help.value.toLowerCase())) {
      this.setState({
        help: {
          sent: false,
          status: IButtonState.error,
          text: 'Error',
          value: ''
        }
      });

      return;
    }

    if (!this.state.help.sent) {
      axios.post(process.env.REACT_APP_HUB_URL + '/mails?type=help', {
        to: this.state.help.value
      }).then((result) => {
        if (result.status === 200) {
          this.setState({
            help: {
              sent: true,
              status: IButtonState.success,
              text: 'Success',
              value: this.state.help.value
            }
          });
        } else {
          this.setState({
            help: {
              sent: false,
              status: IButtonState.warning,
              text: 'Retry',
              value: this.state.help.value
            }
          });
        }
      }).catch((error) => {
        this.setState({
          help: {
            sent: false,
            status: IButtonState.error,
            text: 'Error',
            value: this.state.help.value
          }
        });
      });
    }
  }

  handleHelpEmailValueChange(e: any) {
    var tmpHelp = {
      sent: false,
      status: IButtonState.default,
      text: 'Get in touch',
      value: e.target.value
    };

    this.setState({
      help: tmpHelp
    });
  }

  subscribe() {
    if (this.state.subscribe.value.length <= 0) {
      this.setState({
        subscribe: {
          sent: false,
          status: IButtonState.error,
          text: 'Error',
          value: ''
        }
      });

      return;
    }
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(this.state.subscribe.value.toLowerCase())) {
      this.setState({
        subscribe: {
          sent: false,
          status: IButtonState.error,
          text: 'Error',
          value: ''
        }
      });

      return;
    }

    if (!this.state.subscribe.sent) {
      axios.post(process.env.REACT_APP_HUB_URL + '/mails?type=subscribe', {
        to: this.state.subscribe.value
      }).then((result) => {
        if (result.status === 200) {
          this.setState({
            subscribe: {
              sent: true,
              status: IButtonState.success,
              text: 'Success',
              value: this.state.subscribe.value
            }
          });
        } else {
          this.setState({
            subscribe: {
              sent: false,
              status: IButtonState.warning,
              text: 'Retry',
              value: this.state.subscribe.value
            }
          });
        }
      }).catch((error) => {
        this.setState({
          subscribe: {
            sent: false,
            status: IButtonState.error,
            text: 'Error',
            value: this.state.subscribe.value
          }
        });
      });
    }
  }

  handleSubscribeEmailValueChange(e: any) {
    var tmpSubscribe = {
      sent: false,
      status: IButtonState.default,
      text: 'Subscribe',
      value: e.target.value
    };

    this.setState({
      subscribe: tmpSubscribe
    });
  }

  openInNewTab(url: string) {
    var win: Window | null = window.open(url, '_blank');
    if (win === null) {
      return;
    }
    win.focus();
  }

  render() {
    return (
      <div className='app'>
        <div>
          <Jumbotron />
          <div className='white-division overview'>
            <div className='centered-division'>
              <div className='grid'>
                <div className='illustration'>
                  <img src={duoLab} />
                </div>
                <div className='content'>
                  <h1 className='title-3 on-light line-separated'>A stuck industry</h1>
                  <p className='description'>As time goes on, new technologies appear and whole industries are reshaped. This time, travel
and hospitality business could be on the brink of being rethought from scratch. As of today, all
online travel agencies are having a hard time knowing what assets are available in each hotel
around the globe. Big companies own this kind of data and they are asking big bucks to
access it. In the end, it’s not the online travel agency who’s paying them because the bill is being passed
down to users and hotel owners. This information should be available to everyone at low cost or even at no
cost at all.</p>
                </div>
              </div>
            </div>
            <div className='centered-division'>
              <div className='grid'>
                <div className='illustration'>
                  <img src={duoLaunch} />
                </div>
                <div className='content'>
                  <h1 className='title-3 on-light line-separated'>Becoming independant</h1>
                  <p className='description'>The gap between users and hotel's assets can now be bridged. Every room, corporate event
venue and even bed could now act as a sole entity and keep their own information in a
decentralized manner. They are now considered smart assets who keep track of their own availabilities,
prices and metadata information based on how they are programmed. This creates a whole new
ecosystem without unnecessary third-parties that were adding friction and cost throughout the process.</p>
                </div>
              </div>
            </div>
            <div className='centered-division'>
              <div className='grid'>
                <div className='illustration'>
                  <img src={duoRobot} />
                </div>
                <div className='content'>
                  <h1 className='title-3 on-light line-separated'>Our solution ⚡</h1>
                  <p className='description'>By providing a public booking ledger available to anyone on the planet at all time without downtime 
                  and mainly for free, we'll be able to change the way hotels and users do business together. The first online travel agency built on 
                  top of this infrastructure will be <a href='https://latude-booking-portal.herokuapp.com/' target='_blank'>ours</a> and we expect prices
                  to be the lowest in the industry. On the other side, hotel owners will be able to manage all their assets within a single <a href='https://latude-owner-portal.herokuapp.com/' target='_blank'>platform</a> and 
                  that goes from the creation of theirs smart contracts all the way down to cashing out their hard earned money.</p>
                </div>
              </div>
            </div>
            {/* <div className='centered-division'>
              <div className='grid'>
                <div className='illustration'>
                  <img className='fire fire1' src={duoFire} />
                  <img className='fire fire2' src={duoFire} />
                  <img className='fire fire3' src={duoFire} />
                </div>
                <div className='content'>
                  <h1 className='title-3 on-light line-separated'>The spark</h1>
                  <p className='description'>Blockchain, that’s what allows us to give birth to this project. This decentralized structure will be
the backbone of latude. By embracing this new technology, we’ll be able to provide our users
the lowest price and for hotels, greater profit margins.</p>
                </div>
              </div>
            </div> */}
          </div>
          <div className='memphis-division'>
            <div className='centered-division'>
              <div className='container deployed-network'>
                <div className='row'>
                  <div className='col-2' />
                  <div className='col-8'>
                    <p className='network-identifier'>
                      now deployed on
                      <span className='network-color'>&nbsp;</span>
                      <span className='network-sigle'>RinkeBy</span>
                    </p>
                  </div>
                  <div className='col-2' />
                </div>
              </div>
            </div>
          </div>
          {/* <div className='dashed-division'>
            <div className='centered-division'>
              <div className='container'>
                <div className='row'>
                  <div className='col-2' />
                  <div className='col-8'>
                    <h1 className='title on-light line-separated'>Read our whitepaper</h1>
                    <p className='description description-center'>This whitepaper covers up every technical hurdle that we’ll need to resolve. Those are all
achievable within a respectable time frame. It is going to be updated frequently.</p>
                    <Button
                      text='Read our whitepaper'
                      state={IButtonState.default}
                      action={this.whitepaperAction}
                    />
                  </div>
                  <div className='col-2' />
                </div>
              </div>
            </div>
          </div> */}
          <div className='dashed-division subscription'>
            <div className='centered-division'>
              <div className='container'>
                <div className='row'>
                  <div className='col-2' />
                  <div className='col-8'>
                    <h1 className='title on-light line-separated'>Get a sneak peek</h1>
                    <p className='description description-center'>Subscribe to our newsletter to see what we've been working on and what's next. Don't worry,
                    we know that emails suck but ours don't.</p>
                    <div className='form'>
                      <input type='text' placeholder='john.doe@gmail.com' value={this.state.subscribe.value} onChange={this.handleSubscribeEmailValueChange} />
                      <Button
                        text={this.state.subscribe.text}
                        state={this.state.subscribe.status}
                        action={this.subscribe}
                      />
                    </div>
                  </div>
                  <div className='col-2' />
                </div>
              </div>
            </div>
          </div>
          <div className='blue-gradient-division modules'>
            <div className='centered-division'>
              <div className='container'>
                <div className='row'>
                  <div className='col-2' />
                  <div className='col-8'>
                    <h1 className='title on-dark line-separated'>The latude. network</h1>
                    <p className='description on-dark'>Multiple pieces are needed to create the whole infrastructure. From the ethereum blockchain to
our multiple clients, those are all needed to achieve massive success. Easy to use, secure, fast,
beautiful and intuitive are our guideline. Below are key pieces that are currently in
development.</p>
                  </div>
                  <div className='col-2' />
                </div>
                <div className='row'>
                  <div className='col-2'>
                    <img className='module-icon on-dark-icon' src={duoTransferFile} />
                  </div>
                  <div className='col-10'>
                    <h1 className='title-2 on-dark'>Module #1: smart contracts</h1>
                    <p className='description description-left on-dark'>Multiple contracts are needed for hotel assets to become "smart. They will have their
own availabilities, metadata informations and much more. There'll also be a mechanism
to accept paiments. This will allow users to pay with ether or fiat.</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-2'>
                    <img className='module-icon on-dark-icon' src={duoNetwork} />
                  </div>
                  <div className='col-10'>
                    <h1 className='title-2 on-dark'>Module #2: ethereum listener</h1>
                    <p className='description description-left on-dark'>A server is needed to gather every booking and keeps track in a ledger in parallel
because its nearly impossible to query the blockchain like a relational database. On
each block mined, information will be appended and our ledger will be in sync. This is
needed for online travel agencies to know what are the availabilities.</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-2'>
                    <img className='module-icon on-dark-icon' src={duoBusinessWorkStation} />
                  </div>
                  <div className='col-10'>
                    <h1 className='title-2 on-dark'>Module #3: DApp for owners</h1>
                    <p className='description description-left on-dark'>Hotel owners will be able to interact with the blockchain via a decentralized application.
Multiple actions like setting prices, managing informations, viewing availabilities,
collecting money from their assets and much more will be a possibility through this
client.</p>
                    <Button
                      text='Try it now on RinkeBy'
                      state={IButtonState.info}
                      action={() => this.openInNewTab('https://latude-booking-portal.herokuapp.com/')}
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-2'>
                    <img className='module-icon on-dark-icon' src={duoMultiPlatform} />
                  </div>
                  <div className='col-10'>
                    <h1 className='title-2 on-dark'>Module #4: DApp for users</h1>
                    <p className='description description-left on-dark'>This is what the users will use to book their stay in any hotel around the globe. They will
be able to find exactly what they are looking for and book, right away in fiat or ether.
This will be connected with our listener module and the ethereum blockchain.</p>
                    <Button
                      text='Try it now on RinkeBy'
                      state={IButtonState.info}
                      action={() => this.openInNewTab('https://latude-owner-portal.herokuapp.com/')}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='white-division'>
            <div className='centered-division'>
              <div className='container timeline'>
                <div className='row'>
                  <div className='col-2' />
                  <div className='col-8'>
                    <h1 className='title on-light line-separated'>Timeline</h1>
                    <p className='description on-light'>We’ve got a tough road ahead to hit the mainstream but we’ve got to start somewhere and little
by little climb that ladder to provide every user a decent platform that totally eclipse all current procedure and process. Here’s where we’ve been and what are our future
goals. Stay tuned, as this will be updated.</p>
                  </div>
                  <div className='col-2' />
                </div>
                <div className='row'>
                  <div className='col-2 line-division line-division-after'>
                    <div className='line-event'>
                      <img className='icon' src={duoBusinessIdeaUser} />
                    </div>
                  </div>
                  <div className='col-10'>
                    <h1 className='title-2 on-light'>October 2017: Proof of concept</h1>
                    <p className='description description-left on-light'>By gathering information about current industry and players, we did conceive, that using
the blockchain for this kind of application was feasible and necessary.</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-2 line-division line-division-after'>
                    <div className='line-event'>
                      <img className='icon' src={duoProgrammingTyping} />
                    </div>
                  </div>
                  <div className='col-10'>
                    <h1 className='title-2 on-light'>November 2017: First line of code is written</h1>
                    <p className='description description-left on-light'>The first official project is in progress. The initial module that we were working on is the
platform for hotels and asset management. Giving hotels, the possibility to interact with
the blockchain and add their assets publicly was a good starting point.</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-2 line-division line-division-after'>
                    <div className='line-event'>
                      <img className='icon' src={duoPackageTrolley} />
                    </div>
                  </div>
                  <div className='col-10'>
                    <h1 className='title-2 on-light'>April 2018: Alpha release</h1>
                    <p className='description description-left on-light'>A global solution will be available on the RinkeBy network. You’ll be able to book your
“stay” onto our web application and navigate our service easily. This first release will only accept payment with crypto.</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-2 line-division line-division-after'>
                    <div className='line-event'>
                      <img className='icon' src={duoPiggyBank} />
                    </div>
                  </div>
                  <div className='col-10'>
                    <h1 className='title-2 on-light'>June 2018: Seed round</h1>
                    <p className='description description-left on-light'>First round of financing will be required to gain traction and ease the development. More information on this will follow in due time.</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-2 line-division line-division-after'>
                    <div className='line-event'>
                      <img className='icon' src={duoBusinessHandShakeDeal} />
                    </div>
                  </div>
                  <div className='col-10'>
                    <h1 className='title-2 on-light'>August 2018: Hotel partnerships</h1>
                    <p className='description description-left on-light'>Partnerships announcement that are going to be added on our platforme.</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-2 line-division'>
                    <div className='line-event'>
                      <img className='icon' src={duoBusinessStartupLaptop} />
                    </div>
                  </div>
                  <div className='col-10'>
                    <h1 className='title-2 on-light'>January 2019: 🔥 Official launch</h1>
                    <p className='description description-left on-light'>All feature completed, crypto and fiat will be accepted and the whole marketplace will be available to anyone.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='dashed-division help'>
            <div className='centered-division'>
              <div className='container'>
                <div className='row'>
                  <div className='col-6'>
                    <h1 className='title on-light line-separated'>Wanna help</h1>
                    <p className='description on-light'>If by any mean you find this project interesting, awesome, futuristic and you would like to give
us a hand, we can make something happen. This project is not going to build itself, we always
need help!</p>
                    <div className='form'>
                      <input type='text' placeholder='john.doe@gmail.com' value={this.state.help.value} onChange={this.handleHelpEmailValueChange} />
                      <Button
                        text={this.state.help.text}
                        state={this.state.help.status}
                        action={this.help}
                      />
                    </div>
                  </div>
                  <div className='col-6'>
                    <img src={duoStandingDesk} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='footer blue-division'>
            <div className='centered-division'>
              <p className='on-dark'>All rights reserved. latude. inc.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;