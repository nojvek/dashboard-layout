// Simple preact dummy component for test
import {h, Component} from 'preact';
import './index.less';

interface ClockState {
  time: number;
}

export class Clock extends Component<{}, ClockState> {
  private timer: any;

  constructor() {
    super();
    // set initial time:
    this.state = {
      time: Date.now(),
    };
  }

  componentDidMount() {
    // update time every second
    this.timer = setInterval(() => {
      this.setState({time: Date.now()});
    }, 1000);
  }

  componentWillUnmount() {
    // stop when not renderable
    clearInterval(this.timer);
  }

  render(props, state) {
    let time = new Date(state.time).toLocaleTimeString();
    return (
      <div>
        <span>{time} so fast</span>
        <div>stuff</div>
      </div>
    );
  }
}
