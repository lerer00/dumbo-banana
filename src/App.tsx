import * as React from 'react';
import { Jumbotron } from './jumbotron';
import { Button, IButtonState } from './button';
import {
  duoStandingDesk, duoLaunch,
  duoCheckHexagon, duoCloseHexagon,
  q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12,
  q13, q14, q15, q16, q17, q18, q19, q20
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
  public questions = [
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
          action: () => { this.gotoNextQuestion(1); },
          result: QuestionResult.GOOD
        }
      ]
    },
    {
      id: '2',
      text: 'Pour obtenir plus de points à son jeu Balthazar a inscrit plusieurs informations afin de participer à un concours. Tu as le droit d’effacer une de ses réponses laquelle choisis tu?',
      visible: false,
      answered: false,
      icon: q2,
      answers: [
        {
          id: '1',
          text: 'Loki -> le nom de son chien',
          action: () => { this.setState({}); },
          result: QuestionResult.BAD
        },
        {
          id: '2',
          text: 'Loin là-bas -> le nom de son école',
          action: () => { this.gotoNextQuestion(2); },
          result: QuestionResult.GOOD
        },
        {
          id: '3',
          text: 'Gribouille -> son super héros préféré',
          action: () => { this.setState({}); },
          result: QuestionResult.BAD
        }
      ]
    },
    {
      id: '3',
      text: 'La dernière fois que la boîte courriel de Balthazar a été ouverte, ces messages ont été ouverts. Selon toi lequel de ces messages est en partie responsable des malheurs qui lui arrivent?',
      visible: false,
      answered: false,
      icon: q3,
      answers: [
        {
          id: '1',
          text: 'Rendez-vous pour Loki à la clinque Chien enragé',
          action: () => { this.setState({}); },
          result: QuestionResult.BAD
        },
        {
          id: '2',
          text: 'Confirmation de la sortie avec l’école loin là-bas',
          action: () => { this.setState({}); },
          result: QuestionResult.BAD
        },
        {
          id: '3',
          text: 'Obtenez 2 jeux gratuits en cliquant ici',
          action: () => { this.gotoNextQuestion(3); },
          result: QuestionResult.GOOD
        }
      ]
    },
    {
      id: '4',
      text: 'Propose à Balthazar une solution pour se sécuriser davantage en ligne',
      visible: false,
      answered: false,
      icon: q4,
      answers: [
        {
          id: '1',
          text: 'Acheter un bouclier',
          action: () => { this.setState({}); },
          result: QuestionResult.BAD
        },
        {
          id: '2',
          text: 'Utiliser la vérification en deux étapes',
          action: () => { this.gotoNextQuestion(4); },
          result: QuestionResult.GOOD
        },
        {
          id: '3',
          text: 'Mémoriser automatiquement son mot de passe pour ne pas devoir l’inscrire à nouveau',
          action: () => { this.setState({}); },
          result: QuestionResult.BAD
        }
      ]
    },
    {
      id: '5',
      text: 'Plusieurs applications semblent avoir été téléchargées récemment, laquelle peut avoir causé des ennuis à notre compagnon?',
      visible: false,
      answered: false,
      icon: q5,
      answers: [
        {
          id: '1',
          text: 'Météo média',
          action: () => { this.setState({}); },
          result: QuestionResult.BAD
        },
        {
          id: '2',
          text: '1000 sonneries gratuites',
          action: () => { this.gotoNextQuestion(5); },
          result: QuestionResult.GOOD
        },
        {
          id: '3',
          text: 'FaceTime ',
          action: () => { this.setState({}); },
          result: QuestionResult.BAD
        }
      ]
    },
    {
      id: '6',
      text: 'Une transaction bancaire a été effectuée récemment, quel indice dans l’adresse de l’institution bancaire peut t’informer qu’il s’agit d’un site sécuritaire?',
      visible: false,
      answered: false,
      icon: q6,
      answers: [
        {
          id: '1',
          text: 'http',
          action: () => { this.setState({}); },
          result: QuestionResult.BAD
        },
        {
          id: '2',
          text: 'httpr',
          action: () => { this.setState({}); },
          result: QuestionResult.BAD
        },
        {
          id: '3',
          text: 'https',
          action: () => { this.gotoNextQuestion(6); },
          result: QuestionResult.GOOD
        }
      ]
    },
    {
      id: '7',
      text: 'Balthazar avait de la difficulté à se connecter sur un site Internet de l’école. Il a donc appelé Jean un de ses amis pour lui demander de l’aide. Jean lui explique que sans son mot de passe il ne peut rien faire pour l’aider. Quelle est ta solution?',
      visible: false,
      answered: false,
      icon: q7,
      answers: [
        {
          id: '1',
          text: 'Lui donner le mot de passe',
          action: () => { this.setState({}); },
          result: QuestionResult.BAD
        },
        {
          id: '2',
          text: 'Lui demander son mot de passe en échange du tien',
          action: () => { this.setState({}); },
          result: QuestionResult.BAD
        },
        {
          id: '3',
          text: 'Trouver une autre solution pour accéder au site',
          action: () => { this.gotoNextQuestion(7); },
          result: QuestionResult.GOOD
        }
      ]
    },
    {
      id: '8',
      text: 'Quel élément parmi les suivants pourrait aider Balthazar à protéger son ordinateur?',
      visible: false,
      answered: false,
      icon: q8,
      answers: [
        {
          id: '1',
          text: 'Un pare-feu',
          action: () => { this.gotoNextQuestion(8); },
          result: QuestionResult.GOOD
        },
        {
          id: '2',
          text: 'Un streaming',
          action: () => { this.setState({}); },
          result: QuestionResult.BAD
        },
        {
          id: '3',
          text: 'Un fireball',
          action: () => { this.setState({}); },
          result: QuestionResult.BAD
        }
      ]
    },
    {
      id: '9',
      text: 'Plusieurs publicités apparaissent sur l’ordinateur de même que des messages d’erreur mentionnant que l’ordinateur est lent et qu’il faut le réparer. Qu’est-ce que cela peut vouloir dire?',
      visible: false,
      answered: false,
      icon: q9,
      answers: [
        {
          id: '1',
          text: 'Qu’il faut que tu t’achètes un nouvel ordinateur',
          action: () => { this.setState({}); },
          result: QuestionResult.BAD
        },
        {
          id: '2',
          text: 'Que tu as peut-être été piraté ou que tu pourrais l’être',
          action: () => { this.gotoNextQuestion(9); },
          result: QuestionResult.GOOD
        },
        {
          id: '3',
          text: 'Que tu es dû pour magasiner avec toutes ces publicités',
          action: () => { this.setState({}); },
          result: QuestionResult.BAD
        }
      ]
    },
    {
      id: '10',
      text: 'Balthazar adore que tout le monde suive ce qu’il fait sur Facebook. Selon toi est-ce sécuritaire?',
      visible: false,
      answered: false,
      icon: q10,
      answers: [
        {
          id: '1',
          text: 'Non',
          action: () => { this.gotoNextQuestion(10); },
          result: QuestionResult.GOOD
        },
        {
          id: '2',
          text: 'Oui, car sur Facebook seul les amis peuvent voir ce qu’on publie',
          action: () => { this.setState({}); },
          result: QuestionResult.BAD
        },
        {
          id: '3',
          text: 'Oui, ce n’est jamais un problème ',
          action: () => { this.setState({}); },
          result: QuestionResult.BAD
        }
      ]
    },
    {
      id: '11',
      text: 'Balthazar a reçu un message de sa banque l’informant qu’un retrait a été effectué par erreur et qu’il peut récupérer son argent avec une compensation immédiatement. Qu’est-ce qu’il aurait dû faire?',
      visible: false,
      answered: false,
      icon: q11,
      answers: [
        {
          id: '1',
          text: 'Appeler Jean et lui dire qu’il allait acheter le nouveau jeu vidéo du mois',
          action: () => { this.setState({}); },
          result: QuestionResult.BAD
        },
        {
          id: '2',
          text: 'Demander à un adulte de vérifier avec lui',
          action: () => { this.gotoNextQuestion(11); },
          result: QuestionResult.GOOD
        },
        {
          id: '3',
          text: 'Se dépêcher à remplir les informations afin de profiter de l’erreur de la banque',
          action: () => { this.setState({}); },
          result: QuestionResult.BAD
        }
      ]
    },
    {
      id: '12',
      text: 'Que pourrait faire Balthazar pour s’assurer que les logiciels ou applications qu’il possède sur ses appareils électroniques demeurent sécuritaires?',
      visible: false,
      answered: false,
      icon: q12,
      answers: [
        {
          id: '1',
          text: 'Effectuer les mises à jour',
          action: () => { this.gotoNextQuestion(12); },
          result: QuestionResult.GOOD
        },
        {
          id: '2',
          text: 'En ouvrir qu’une seule à la fois',
          action: () => { this.setState({}); },
          result: QuestionResult.BAD
        },
        {
          id: '3',
          text: 'Regarder les forums et les commentaires pour chaque logiciel ou application',
          action: () => { this.setState({}); },
          result: QuestionResult.BAD
        }
      ]
    },
    {
      id: '13',
      text: 'Vous remarquez que cracheurdefeu.com est un site de jeu fréquemment consulté par Balthazar. 5$ par mois sont nécessaires pour jouer au jeu. Vous voyez que le paiement est fait automatiquement à chaque mois dans le compte des parents de Balthazar. Que pourriez-vous lui suggérer pour éviter les problèmes?',
      visible: false,
      answered: false,
      icon: q13,
      answers: [
        {
          id: '1',
          text: 'D’arrêter de jouer',
          action: () => { this.setState({}); },
          result: QuestionResult.BAD
        },
        {
          id: '2',
          text: 'De proposer à ses parents d’avoir une carte à son nom',
          action: () => { this.setState({}); },
          result: QuestionResult.BAD
        },
        {
          id: '3',
          text: 'De payer avec une carte cadeau',
          action: () => { this.gotoNextQuestion(13); },
          result: QuestionResult.GOOD
        }
      ]
    },
    {
      id: '14',
      text: 'Lequel de ces éléments pourrait protéger Balthazar lorsqu’il navigue sur Internet?',
      visible: false,
      answered: false,
      icon: q14,
      answers: [
        {
          id: '1',
          text: 'Un clavier Bluetooth',
          action: () => { this.setState({}); },
          result: QuestionResult.BAD
        },
        {
          id: '2',
          text: 'Une clé USB cryptée',
          action: () => { this.setState({}); },
          result: QuestionResult.BAD
        },
        {
          id: '3',
          text: 'Un antivirus',
          action: () => { this.gotoNextQuestion(14); },
          result: QuestionResult.GOOD
        }
      ]
    },
    {
      id: '15',
      text: 'Comment Balthazar pourrait s’assurer qu’il est protégé sur les médias sociaux?',
      visible: false,
      answered: false,
      icon: q15,
      answers: [
        {
          id: '1',
          text: 'En modifiant les paramètres de confidentialité',
          action: () => { this.gotoNextQuestion(15); },
          result: QuestionResult.GOOD
        },
        {
          id: '2',
          text: 'En supprimant ce qu’il publie une semaine plus tard',
          action: () => { this.setState({}); },
          result: QuestionResult.BAD
        },
        {
          id: '3',
          text: 'En utilisant une autre adresse courriel que celle qu’il utilise habituellement',
          action: () => { this.setState({}); },
          result: QuestionResult.BAD
        }
      ]
    },
    {
      id: '16',
      text: 'Pour éviter que les transactions en ligne effectuées par Balthazar ne soient retracées que peux-tu faire?',
      visible: false,
      answered: false,
      icon: q16,
      answers: [
        {
          id: '1',
          text: 'Supprimer l’historique',
          action: () => { this.setState({}); },
          result: QuestionResult.BAD
        },
        {
          id: '2',
          text: 'Redémarrer la cache de l’ordinateur',
          action: () => { this.setState({}); },
          result: QuestionResult.BAD
        },
        {
          id: '3',
          text: 'Vider la cache (fichiers Internet temporaires) de l’ordinateur',
          action: () => { this.gotoNextQuestion(16); },
          result: QuestionResult.GOOD
        }
      ]
    },
    {
      id: '17',
      text: 'Vous venez de trouver une chaîne de message à laquelle notre ami a participé. Que faire?',
      visible: false,
      answered: false,
      icon: q17,
      answers: [
        {
          id: '1',
          text: 'Vérifier la source du message',
          action: () => { this.gotoNextQuestion(17); },
          result: QuestionResult.GOOD
        },
        {
          id: '2',
          text: 'L’ouvrir pour voir de quoi il s’agit',
          action: () => { this.setState({}); },
          result: QuestionResult.BAD
        },
        {
          id: '3',
          text: 'Supprimer le message',
          action: () => { this.setState({}); },
          result: QuestionResult.BAD
        }
      ]
    },
    {
      id: '18',
      text: 'Un message de YouTube vient d’apparaitre : Souhaitez vous poursuivre le téléchargement de votre vidéo sur votre page? Vos 10 000 abonnées vous attendent! Ne vous souvenant plus de ce qu’il y a sur la vidéo que faites-vous?',
      visible: false,
      answered: false,
      icon: q18,
      answers: [
        {
          id: '1',
          text: 'Vite on publie, 10 000 abonnés je vais être célèbre',
          action: () => { this.setState({}); },
          result: QuestionResult.BAD
        },
        {
          id: '2',
          text: 'Attendre de voir ce qu’il y a sur la vidéo et m’assurer que je veux vraiment que cela soit à jamais accessible',
          action: () => { this.gotoNextQuestion(18); },
          result: QuestionResult.GOOD
        },
        {
          id: '3',
          text: 'On publie et au pire on la supprime plus tard il n’y a pas de problème',
          action: () => { this.setState({}); },
          result: QuestionResult.BAD
        }
      ]
    },
    {
      id: '19',
      text: 'En terminant de sécuriser les éléments pour Balthazar vous voyez des photos louches. Que faites-vous?',
      visible: false,
      answered: false,
      icon: q19,
      answers: [
        {
          id: '1',
          text: 'Je fais comme si rien n’était, cela ne me regarde pas',
          action: () => { this.setState({}); },
          result: QuestionResult.BAD
        },
        {
          id: '2',
          text: 'Je les envoie à mes amis pour que tout le monde puisse les voir',
          action: () => { this.setState({}); },
          result: QuestionResult.BAD
        },
        {
          id: '3',
          text: 'Je vais prévenir un adulte immédiatement',
          action: () => { this.gotoNextQuestion(19); },
          result: QuestionResult.GOOD
        }
      ]
    },
    {
      id: '20',
      text: 'Je suis enfin libre. Tu es le meilleur, comme promis je vais te remercier! Rejoins-moi dans la cour d’école après les cours, mon ami, je t’attendrai avec ta surprise.',
      visible: false,
      answered: false,
      icon: q20,
      answers: [
        {
          id: '1',
          text: 'Super à tantôt',
          action: () => { this.setState({}); },
          result: QuestionResult.BAD
        },
        {
          id: '2',
          text: 'Non merci',
          action: () => { this.setState({}); },
          result: QuestionResult.BAD
        },
        {
          id: '3',
          text: 'Je vais prévenir un adulte lorsqu’une personne que je n’ai jamais vue me propose un rendez-vous',
          action: () => { this.endTest(20); },
          result: QuestionResult.GOOD
        }
      ]
    }
  ];

  constructor() {
    super();

    this.state = {
      start: {
        text: 'Aidez Balthazar!',
        status: IButtonState.default
      },
      done: {
        text: 'Recommencer!',
        status: IButtonState.default
      },
      welcomeVisible: true,
      doneVisible: false,
      questions: this.questions,
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
      questions: this.questions,
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
              <h3 className='welcome-subtitle'>À la rescousse de Balthazar! 😨</h3>
              <h4 className='welcome-text'>Cher élève de la classe de Madame X je me nomme Balthazar et j’ai grandement besoin de votre aide. J’ai été un peu trop téméraire et j’ai décider de me lance dans les Internet sans vraiment avoir de connaissances sur le sujet. Au travers les médias sociaux, les moteurs de recherche ainsi que dans les jeux en ligne je me suis égaré. N’ayant pas été prudent je crains que je sois prisonnier de ces technologies. Si seulement j’avais des amis qui pourraient m’aider à réparer mes erreurs pour que je puisse sortir de cet endroit. J’aimerais tant pouvoir revoir mes parents et mon chien Loki. Pshhhhhhhhhh… ohhh non les interférences !!! pshhhhhhhh… Aidez-moi svp. Je serai bien vous récompensez afin que vous ne soyez pas dans la même situation que moi. Pshhhhh adieu classe de Madame X que les « likes » soient avec vous.</h4>
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
              <h3 className='welcome-subtitle'>Félicitation 🎉</h3>
              <h4 className='welcome-text'>Félicitation tu as réussis à compléter le parcours maintenant tu es un pro de la sécurité des médias sociaux et d’Internet. N’oublie jamais de demander à un adulte en cas de doute, car les conséquences peuvent être importantes et dangereuses.<br /><br />Au revoir classe de Madame X</h4>
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