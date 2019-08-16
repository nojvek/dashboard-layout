import {h, Component} from 'preact';
import {Tile} from '../tile';
import './index.less';

interface DashboardState {
  tiles: any[];
}

export class Dashboard extends Component<{}, DashboardState> {
  handleAddTileBtnClick = ev => {};

  render(props, state) {
    return (
      <div class="Dashboard">
        <div class="actions-bar">
          <button onClick={this.handleAddTileBtnClick}>Add Tile</button>
        </div>

        <div class="tiles">
          <Tile />
          <Tile />
        </div>
      </div>
    );
  }
}
