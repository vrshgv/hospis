import React from 'react';

class NavBar extends React.Component{
  state={activeClass:''};
  componentDidMount(){
    window.addEventListener('scroll', () => {
       let activeClass = 'normal';
       if(window.scrollY === 0){
           activeClass = 'top';
       }
       this.setState({ activeClass });
    });
}
    render(){
        return(
            <nav className={`navbar navbar-expand-md navbar-light navbar-inverse px-3 ${this.state.activeClass}`}>
                
                <a className="navbar-brand ml-5" href="#"><img alt='Я с тобой' src='/logo.png'/></a>
                <button className="navbar-toggler order-last order-sm-2 order-md-1" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className=" collapse navbar-collapse smooth-scroll" id="navbarText">
                  <ul className="navbar-nav w-100 d-flex justify-content-center">
                  <li className="nav-item">
                      <a className="nav-link" href="#benefits">Главная</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#benefits">О фонде</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Программы
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Центр поддержки детей с онкологическими заболеваниями</a>
                        <a class="dropdown-item" href="#">Здоровье матери и ребенка</a>
                        <a class="dropdown-item" href="#">Учебно методический центр</a>
                      </div>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Волонтерам
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Информация для волонтеров</a>
                      </div>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Пациентам
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Справочная информация</a>
                        <a class="dropdown-item" href="#">Юридическая информация</a>
                      </div>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Как помочь?
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Реквизиты</a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#benefits">Контакты</a>
                    </li>
                  </ul>
                </div>
                <div className='or order-sm-1 order-md-2'>
                      <a className="nav-link btn my-2 my-sm-0 pro-b px-3" href="#form">Оказать помощь сейчас</a>
                      </div>
              </nav>
            );
         }
}
export default NavBar;