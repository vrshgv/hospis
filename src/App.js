import React from 'react';
import NavBar from './components/NavBar';
import Main from './components/Main'
import MainFooter from './components/MainFooter';
import Center from './components/programs/Center'
import Health from './components/programs/Health'
import Study from './components/programs/Study'
import Volunteer from './components/programs/Volunteer'
import Info from './components/programs/Info'
import Law from './components/programs/Law'
import Help from './components/programs/Help'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component{

    render(){
        return(
        <Router>            
        <div className='container-fluid px-0'>
            <NavBar /> 
            <Switch>
            <Route path='/' exact component={Main} /> 
            <Route path='/center' exact component={Center} /> 
            <Route path='/health' exact component={Health} /> 
            <Route path='/study' exact component={Study} />         
            <Route path='/volunteer' exact component={Volunteer} /> 
            <Route path='/info' exact component={Info} /> 
            <Route path='/law' exact component={Law} /> 
            <Route path='/help' exact component={Help} /> 
            <Main />
            </Switch>            
            <MainFooter />
        </div>
        </Router>
        );
    }
}

export default App;