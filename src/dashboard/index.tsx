import {h, Component} from 'preact';
import {Tile} from '../tile';
import './index.less';

interface DashboardState {
  tiles: any[];
}

export class Dashboard extends Component<{}, DashboardState> {
  constructor() {
    super();
    this.state = {
      tiles: [],
    };
  }

  handleAddTileBtnClick = ev => {
    this.state.tiles.push({});
    this.setState({tiles: this.state.tiles});
  };

  render(props, state) {
    return (
      <div class="Dashboard">
        <div class="actions-bar">
          <button onClick={this.handleAddTileBtnClick}>Add Tile</button>
        </div>

        <div class="tiles">
          {state.tiles.map(tile => (
            <Tile />
          ))}
        </div>
      </div>
    );
  }
}
