import React from 'react';

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
      <div class={`footer  ${this.state.activeClass}`}>
        <div class="container">
          <a class='mr-3'>Как помочь</a><img class='mr-3' src='line-blue.svg' />
          <a class='mr-3'>Помочь делом</a><img class='mr-3' src='line-blue.svg' />
          <a class='mr-3'>Помочь деньгами</a><img class='mr-3' src='line-blue.svg' />
          <a class='mr-3'>Помочь вещами</a><img class='mr-3' src='line-blue.svg' />
          <a class='mr-3'>Стать волонтером</a>
        </div>
      </div>
    );
  }
}

export default Footer;