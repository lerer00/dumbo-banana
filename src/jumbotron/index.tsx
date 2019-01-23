import * as React from 'react';
import './index.css';
import { Button, IButtonState } from '../button';
import {
    duoStandingDesk
} from '../img/index';

var THREE = require('three');

export namespace Jumbotron {
    export interface Props {
        // empty
    }

    export interface State {
        width: number;
        height: number;
        start: IStartAction;
    }

    export interface Context {
        // empty
    }

    export interface IStartAction {
        text: string;
        status: IButtonState;
    }
}

export class Jumbotron extends React.Component<Jumbotron.Props, Jumbotron.State> {
    private separation: number = 40;
    private amountX: number = 200;
    private amountY: number = 35;

    constructor(props?: Jumbotron.Props, context?: Jumbotron.Context) {
        super(props, context);

        this.state = {
            width: window.innerWidth / 2,
            height: window.innerHeight / 2,
            start: {
                text: 'Aidez Jhonny!',
                status: IButtonState.default
            }
        };
    }

    componentDidMount() {
        this.init();
    }

    init() {
        // Bind with the previously create div.
        var tmpContainer = document.querySelector('canvas');
        if (tmpContainer === null) {
            return;
        }

        // Create the camera.
        var tmpCamera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 1, 10000);
        tmpCamera.position.y = 400;
        tmpCamera.position.z = 50;
        tmpCamera.rotation.x = 0.35;

        // Create the scene.
        var tmpScene = new THREE.Scene();

        // Create particles array.
        var tmpParticles = new Array();

        var spriteMap = new THREE.TextureLoader().load('./sprite.png');
        var spriteMaterial = new THREE.SpriteMaterial({ map: spriteMap, color: 0xffffff });

        // Add particles to the scene.
        var i = 0;
        for (var ix = 0; ix < this.amountX; ix++) {
            for (var iy = 0; iy < this.amountY; iy++) {
                var tmpParticle = tmpParticles[i++] = new THREE.Sprite(spriteMaterial);
                tmpParticle.position.x = ix * this.separation - ((this.amountX * this.separation) / 2);
                tmpParticle.position.z = iy * this.separation - ((this.amountY * this.separation) - 10);
                tmpScene.add(tmpParticle);
            }
        }

        // Create the renderer.
        var tmpRenderer = new THREE.WebGLRenderer({
            alpha: true,
            canvas: tmpContainer
        });
        tmpRenderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
        tmpRenderer.setSize(window.innerWidth, window.innerHeight);
        tmpRenderer.render(tmpScene, tmpCamera);
        this.animate(tmpRenderer, tmpParticles, tmpScene, tmpCamera, 0);
    }

    animate(renderer: any, particles: any, scene: any, camera: any, count: number) {
        var i = 0;
        for (var ix = 0; ix < this.amountX; ix++) {
            for (var iy = 0; iy < this.amountY; iy++) {
                var particle = particles[i++];
                particle.position.y += (Math.sin((ix + count) * 0.5)) + (Math.sin((iy + count) * 0.5));
                particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 3 + (Math.sin((iy + count) * 0.5) + 1) * 3;
            }
        }

        renderer.render(scene, camera);
        setTimeout(() => {
            count += 0.3;
            this.animate(renderer, particles, scene, camera, count);
        }, 1);
    }

    render() {
        return (
            <div className='jumbotron'>
                <canvas className='scene scene--full waves' id='scene' />
                <div className='jumbotron-inner'>
                    <h2 className='jumbotron-title'>
                        <img className='logo' src={duoStandingDesk} />
                    </h2>
                    <h3 className='jumbotron-subtitle'>Lorem ipsum dolor sit </h3>
                    <h4 className='jumbotron-text'>Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
                    <Button
                        text={this.state.start.text}
                        state={this.state.start.status}
                        action={() => { console.log('Clicked...'); }}
                    />
                </div>
            </div>
        );
    }
}
