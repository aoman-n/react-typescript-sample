import * as React from 'react';
import Header from '../organisms/Header';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Header search={true} />
        <div className="header">Typescript Project!</div>
        <div className="main">main area</div>
      </div>
    );
  }
}

export default App;
