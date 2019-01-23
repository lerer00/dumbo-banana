import * as React from 'react';
import './index.css';

export namespace Tile {
    export interface Props extends ITile {
        // empty
    }

    export interface State {
        // empty
    }

    export interface Context {
        // empty
    }
}

export enum TileType {
    info = 1,
}

export interface ITile {
    type: TileType;
    icon: any;
    title: string;
    description: string;
}

export class Tile extends React.Component<Tile.Props, Tile.State> {
    constructor(props?: Tile.Props, context?: Tile.Context) {
        super(props, context);
    }

    render() {
        return (
            <div className='tile'>
                <div className='tile-inner'>
                    <img className='tile-icon' src={this.props.icon} />
                    <h1 className='tile-title'>{this.props.title}</h1>
                    <p className='tile-description'>{this.props.description}</p>
                </div>
            </div>
        );
    }
}