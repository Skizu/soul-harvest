import * as React from 'react';
import ActionBar from './ActionBar';
import '../style/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <div className="App-action-bar">
            <ActionBar/>
          </div>
      </div>
    );
  }
}

export default App;
