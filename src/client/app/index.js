import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter } from 'react-router-dom';
import MainContent from './components/MainContent';

class App extends React.Component {
  render () {
    return(
        <div className="pageWrapper">
        <BrowserRouter>
          <MainContent />
        </BrowserRouter>
        </div>
    )
  }
}

render(<App/>, document.getElementById('app'));