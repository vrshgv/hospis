import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Main from './components/Main'
import MainFooter from './components/MainFooter'

import Volunteer from './components/programs/Volunteer'
import Parents from './components/programs/parents/Parents'
import Nurses from './components/programs/parents/Nurses'
import Doctors from './components/programs/parents/Doctors'
import Support from './components/programs/parents/Support'
import Art from './components/programs/parents/Art'
import Psy from './components/programs/parents/Psy'
import Events from './components/programs/parents/Events'


import ContactDonation from './components/programs/contacts/ContactDonation'
import Form from './components/programs/contacts/Form'
import Press from './components/programs/contacts/Press'
 

import Law from './components/programs/parents/Law'
import Help from './components/programs/help/Help'
import Donation from './components/programs/help/Donation'
import Clothes from './components/programs/sticky-footer/Clothes'
import Delom from './components/programs/sticky-footer/Delom'
import Corporate from './components/programs/help/Corporate'

import HelpCenter from './components/programs/center/HelpCenter'
import BraveBox from './components/programs/center/BraveBox'
import MobileService from './components/programs/center/MobileService'
import DobryProduct from './components/programs/center/DobryProduct'
import ScrollToTop from './Scroll'
import FooterDonation from './components/programs/sticky-footer/FooterDonation';
import FooterVolunteer from './components/programs/sticky-footer/FooterVolunteer';
import HowTo from './components/programs/sticky-footer/HowTo';


class App extends React.Component {
  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)} >
        <ScrollToTop>
        <div className="container-fluid px-0">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Main} />
    
            <Route path="/volunteer" exact component={Volunteer} />
            <Route path="/requisites" exact component={ContactDonation} />
            <Route path="/form" exact component={Form} />
            <Route path="/press" exact component={Press} />

            <Route path="/parents" exact component={Parents} />
            <Route path="/doctors" exact component={Doctors} />
            <Route path="/nurses" exact component={Nurses} />
            <Route path="/psychologists" exact component={Psy} />
            <Route path="/events" exact component={Events} />
            <Route path="/art" exact component={Art} />
            <Route path="/support" exact component={Support} />
            <Route path="/law" exact component={Law} />


            <Route path="/how-to-help" exact component={Help} />
            <Route path="/donation" exact component={Donation} />
            <Route path="/corporate" exact component={Corporate} />

            <Route path="/how-to" exact component={HowTo} />
            <Route path="/help-clothes" exact component={Clothes} />
            <Route path="/help-deeds" exact component={Delom} />
            <Route path="/help-donate" exact component={FooterDonation} />
            <Route path="/help-volunteer" exact component={FooterVolunteer} />

            <Route path="/help-center" exact component={HelpCenter} />
            <Route path="/brave-box" exact component={BraveBox} />
            <Route path="/mobile-service" exact component={MobileService} />
            <Route path="/dobry-product" exact component={DobryProduct} />


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