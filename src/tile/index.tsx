// Simple preact dummy component for test
import {h, Component} from 'preact';
import './index.less';

export interface TileInfo {
  id: string;
}

interface TileState {
  x: number;
  y: number;
  w: number;
  h: number;
  isDragging: boolean;
}

interface TileProps {
  tile: TileInfo;
}

const SIZE = 200;

export class Tile extends Component<TileProps, TileState> {
  tileEl: HTMLElement;
  lastClientX: number;
  lastClientY: number;

  constructor() {
    super();
    this.state = {
      x: 0,
      y: 0,
      w: SIZE - 1, // because border
      h: SIZE - 1,
      isDragging: false,
    };
  }

  handleTileInsert = (el: HTMLElement) => {
    this.tileEl = el;
    console.log(`tileInsert`, el.textContent);
  };

  handleTileMouseDown = (ev: MouseEvent) => {
    this.lastClientX = ev.clientX;
    this.lastClientY = ev.clientY;
    this.setState({isDragging: true});
    document.addEventListener(`mousemove`, this.handleTileMouseMove);
    document.addEventListener(`mouseup`, this.handleTileMouseUp);
  };

  handleTileMouseUp = (ev: MouseEvent) => {
    document.removeEventListener(`mousemove`, this.handleTileMouseMove);
    document.removeEventListener(`mouseup`, this.handleTileMouseUp);
    console.log(this.state);
    this.setState({x: Math.round(this.state.x / SIZE) * SIZE});
    this.setState({y: Math.round(this.state.y / SIZE) * SIZE});
    this.setState({isDragging: false});
    console.log(this.state);
    console.log(ev.type);
  };

  handleTileMouseMove = (ev: MouseEvent) => {
    this.setState({x: this.state.x + ev.clientX - this.lastClientX});
    this.setState({y: this.state.y + ev.clientY - this.lastClientY});
    this.lastClientX = ev.clientX;
    this.lastClientY = ev.clientY;
  };

  render(props, state) {
    return (
      <div
        ref={this.handleTileInsert}
        class={[`Tile`, state.isDragging ? `dragging` : ``].filter(Boolean).join(` `)}
        style={{
          transform: `translate(${state.x}px, ${state.y}px)`,
          width: `${state.w}px`,
          height: `${state.h}px`,
        }}
        onMouseDown={this.handleTileMouseDown}
      >
        <span>{props.tile.id}</span>
      </div>
    );
  }
}
