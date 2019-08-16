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
}

interface TileProps {
  tile: TileInfo;
}

export class Tile extends Component<TileProps, TileState> {
  tileEl: HTMLElement;
  lastClientX: number;
  lastClientY: number;

  constructor() {
    super();
    this.state = {
      x: 0,
      y: 20,
      w: 100,
      h: 100,
    };
  }

  handleTileInsert = (el: HTMLElement) => {
    this.tileEl = el;
    console.log(`tileInsert`, el.textContent);
  };

  handleTileMouseDown = (ev: MouseEvent) => {
    console.log(ev.type);
    this.lastClientX = ev.clientX;
    this.lastClientY = ev.clientY;
    document.addEventListener(`mousemove`, this.handleTileMouseMove);
    document.addEventListener(`mouseup`, this.handleTileMouseUp);
    // document.addEventListener(`mouseout`, this.handleTileMouseUp);
  };

  handleTileMouseUp = (ev: MouseEvent) => {
    document.removeEventListener(`mousemove`, this.handleTileMouseMove);
    document.removeEventListener(`mouseup`, this.handleTileMouseUp);
    // document.removeEventListener(`mouseout`, this.handleTileMouseUp);
    console.log(ev.type);
  };

  handleTileMouseMove = (ev: MouseEvent) => {
    console.log(ev.type);
    this.setState({x: this.state.x + ev.clientX - this.lastClientX});
    this.setState({y: this.state.y + ev.clientY - this.lastClientY});
    this.lastClientX = ev.clientX;
    this.lastClientY = ev.clientY;
  };

  render(props, state) {
    return (
      <div
        ref={this.handleTileInsert}
        class="Tile"
        style={{
          left: `${state.x}px`,
          top: `${state.y}px`,
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
