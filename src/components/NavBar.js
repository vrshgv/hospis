import React from 'react';
import { NavLink } from 'react-router-dom';

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
            <nav className={`navbar navbar-expand-lg navbar-light navbar-inverse px-3 ${this.state.activeClass}`}>
                <NavLink className='nav-link semibold pb-3' to='/'><img alt='Я с тобой' src='/logo.png'/></NavLink>
                <button className="navbar-toggler order-last order-sm-2 order-md-1" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className=" collapse navbar-collapse smooth-scroll" id="navbarText">
                  <ul className="navbar-nav w-100 d-flex justify-content-center">
                  <li className="nav-item">
                      <NavLink className="nav-link" to='/'>Главная</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to='/about'>О фонде</NavLink>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Программы
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <NavLink className="dropdown-item" to='/center'>Центр поддержки детей с онкологическими заболеваниями</NavLink>
                        <NavLink className="dropdown-item" to='/health'>Здоровье матери и ребенка</NavLink>
                        <NavLink className="dropdown-item" to='/study'>Учебно методический центр</NavLink>
                      </div>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Волонтерам
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <NavLink className="dropdown-item" to='/volunteer'>Информация для волонтеров</NavLink>
                      </div>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Пациентам
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <NavLink className="dropdown-item" to='/info'>Справочная информация</NavLink>
                        <NavLink className="dropdown-item" to='/law'>Юридическая информация</NavLink>
                      </div>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Как помочь?
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <NavLink className="dropdown-item" to='/help'>Реквизиты</NavLink>
                      </div>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/#contacts">Контакты</NavLink>
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