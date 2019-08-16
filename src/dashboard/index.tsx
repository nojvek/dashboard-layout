import {h, Component} from 'preact';
import {Tile, TileInfo} from '../tile';
import './index.less';

interface DashboardState {
  tiles: TileInfo[];
}

export class Dashboard extends Component<{}, DashboardState> {
  constructor() {
    super();
    this.state = {
      tiles: [],
    };
  }

  handleAddTileBtnClick = ev => {
    const tiles = this.state.tiles;
    tiles.push({
      id: tiles.length.toString(),
    });
    this.setState({tiles});
  };

  render(props, state) {
    return (
      <div class="Dashboard">
        <div class="actions-bar">
          <button onClick={this.handleAddTileBtnClick}>Add Tile</button>
        </div>

        <div class="tiles">
          {state.tiles.map(tile => (
            <Tile tile={tile} />
          ))}
        </div>
      </div>
    );
  }
}
