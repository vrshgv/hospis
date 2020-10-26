import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Main from './components/Main'
import MainFooter from './components/MainFooter'
import Center from './components/programs/center/Center'
import Rjm from './components/programs/mother-and-child/Rjm'
import Hospis from './components/programs/mother-and-child/Hospis'
import School from './components/programs/mother-and-child/School'

import Study from './components/programs/study/Study'
import Volunteer from './components/programs/Volunteer'
import Info from './components/programs/info/Info'
import Parents from './components/programs/info/Parents'

import Law from './components/programs/law/Law'
import Help from './components/programs/help/Help'
import Donation from './components/programs/help/Donation'
import Clothes from './components/programs/help/Clothes'
import Delom from './components/programs/help/Delom'


import HelpCenter from './components/programs/center/HelpCenter'
import BraveBox from './components/programs/center/BraveBox'
import MobileService from './components/programs/center/MobileService'
import DobryProduct from './components/programs/center/DobryProduct'
import Stacionar from './components/programs/center/Stacionar'
import ScrollToTop from './Scroll'

class App extends React.Component {
  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)} >
        <ScrollToTop>
        <div className="container-fluid px-0">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/center" exact component={Center} />

            <Route path="/rjm" exact component={Rjm} />
            <Route path="/hospis" exact component={Hospis} />
            <Route path="/school" exact component={School} />


            <Route path="/study" exact component={Study} />
            <Route path="/volunteer" exact component={Volunteer} />

            <Route path="/info" exact component={Info} />
            <Route path="/parents" exact component={Parents} />

            <Route path="/law" exact component={Law} />
            <Route path="/how-to-help" exact component={Help} />
            <Route path="/help-deeds" exact component={Delom} />
            <Route path="/help-clothes" exact component={Clothes} />
            <Route path="/donation" exact component={Donation} />

            <Route path="/help-center" exact component={HelpCenter} />
            <Route path="/brave-box" exact component={BraveBox} />
            <Route path="/mobile-service" exact component={MobileService} />
            <Route path="/dobry-product" exact component={DobryProduct} />
            <Route path="/stacionar" exact component={Stacionar} />


            <Main />
          </Switch>
          <MainFooter />
          <Footer />
        </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;