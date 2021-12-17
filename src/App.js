import React,{Component} from 'react';
import './App.css';
import Bar from './barchart';
import Pie from './Pie'

class App extends Component {
  render() {
    return (
      <div>
        <Bar />
        <br /><br /><br /><br />
        <Pie />
      </div>
    );
  }
}

export default App;