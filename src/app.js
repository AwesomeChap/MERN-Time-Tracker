import React, {Component,Fragment} from 'react';
import ReactDOM from 'react-dom';
import TimerWrapper from './components/TimerWrapper'
import './css/styles.css';
// import './css/animations.css';
import './css/semantic/dist/semantic.min.css';
import Anim from './playground/animation2';
import Home from './components/home';

class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Home>
        <div id="main" className="main ui">
            <h1 className="ui centered custom-h1">Timers</h1>
          <TimerWrapper/>
        </div>
        {/* <Anim/> */}
      </Home>
    );
  }
}

ReactDOM.render(<App/>,document.getElementById('content'));