import React from 'react';
import {render} from 'react-dom';
import {Switch, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Calendar from './Calendar';
import Application from './Application';
import Progress from './Progress';

export default class MainContent extends React.Component {
  render () {
    return(
        <div className="pageWrapper">
            <Header />
            <div className = 'mainBody'>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/calendar' component={Calendar}/>
                <Route path='/application' component={Application}/>
                <Route path='/progress' component={Progress}/>
            </Switch>
            </div>
        </div>
    )
  }
}
