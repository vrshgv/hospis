import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Main from './components/Main'
import MainFooter from './components/MainFooter'
import About from './components/programs/About'
import Center from './components/programs/Center'
import Health from './components/programs/Health'
import Study from './components/programs/Study'
import Volunteer from './components/programs/Volunteer'
import Info from './components/programs/Info'
import Law from './components/programs/Law'
import Help from './components/programs/Help'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container-fluid px-0">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/about" exact component={About} />
            <Route path="/center" exact component={Center} />
            <Route path="/health" exact component={Health} />
            <Route path="/study" exact component={Study} />
            <Route path="/volunteer" exact component={Volunteer} />
            <Route path="/info" exact component={Info} />
            <Route path="/law" exact component={Law} />
            <Route path="/help" exact component={Help} />
            <Main />
          </Switch>
          <MainFooter />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;