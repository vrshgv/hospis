import React from 'react';
import { NavLink } from 'react-router-dom';

class Footer extends React.Component {
  state = { activeClass: '' };
  componentDidMount() {
    window.addEventListener('scroll', () => {
      let activeClass = 'normal';
      if (window.scrollY === 0) {
        activeClass = 'top d-none';
      } 
      this.setState({ activeClass });
    });
  }
  
  render() {
    return (
      <div class={`footer mobile-none ${this.state.activeClass}`}>
        <div class="container">
          <NavLink to='/how-to'>Как помочь</NavLink><img  src='line-blue.svg' />
          <NavLink to='/help-deeds'>Помочь делом</NavLink><img  src='line-blue.svg' />
          <NavLink to='/help-donate'>Помочь деньгами</NavLink><img  src='line-blue.svg' />
          <NavLink to='/help-clothes'>Помочь вещами</NavLink><img  src='line-blue.svg' />
          <NavLink to='/help-volunteer'>Стать волонтером</NavLink>
        </div>
      </div>
    );
  }
}

export default Footer;