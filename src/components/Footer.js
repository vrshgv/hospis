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
          <NavLink to='/how-to-help' class='mr-3'>Как помочь</NavLink><img class='mr-3' src='line-blue.svg' />
          <NavLink to='/help-deeds' class='mr-3'>Помочь делом</NavLink><img class='mr-3' src='line-blue.svg' />
          <NavLink to='/donation' class='mr-3'>Помочь деньгами</NavLink><img class='mr-3' src='line-blue.svg' />
          <NavLink to='/help-clothes' class='mr-3'>Помочь вещами</NavLink><img class='mr-3' src='line-blue.svg' />
          <NavLink to='/volunteer' class='mr-3'>Стать волонтером</NavLink>
        </div>
      </div>
    );
  }
}

export default Footer;