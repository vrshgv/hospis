import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component{
  state={activeClass:'', checked:false};
  componentDidMount(){
    window.addEventListener('scroll', () => {
       let activeClass = 'normal';
       if(window.scrollY === 0){
           activeClass = 'top';
       }
       this.setState({ activeClass });
    });
}
  onCheckChange(){
    this.setState({checked: !this.state.checked});

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
                    <NavLink className="nav-link" to='/'>О фонде</NavLink>
                    </li>
                    <li class="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Программы
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <NavLink className="dropdown-item" to='/help-center'>Центр поддержки детей с онкологическими заболеваниями</NavLink>
                        <NavLink className="dropdown-item" to='/rjm'>Здоровье матери и ребенка</NavLink>
                        <NavLink className="dropdown-item" to='/study'>Учебно-методический центр</NavLink>
                      </div>
                    </li>
                    <li class="nav-item dropdown">
                      <NavLink className="nav-link" to='/volunteer'>Волонтёрам</NavLink>
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
                      <a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Как помочь?
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <NavLink className="dropdown-item" to='/how-to-help'>Реквизиты</NavLink>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#footer">Контакты</a>
                    </li>
                  </ul>
                </div>
                <div className='or order-sm-1 order-md-2'>
                      <a className="nav-link btn my-2 my-sm-0 pro-b px-3" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" >Оказать помощь сейчас</a>
                      <div class="collapse" id="collapseExample">
                      <div class="card card-body">
                      <input class='form-control' placeholder='Ваш email' id='ph_accountId'></input>
                      <input class='form-control' id='amount' placeholder='Сумма платежа'></input>
                      <div class='d-flex my-2 justify-content-center align-items-center'>
                      <input type='checkbox' onChange={()=>this.onCheckChange()} class='mr-2' id='recurrent'/>
                      <label class='text-lowercase mb-0' htmlFor='recurrent'>Ежемесячный платеж</label>
                      </div>
                      {this.state.checked &&
                        <p class='sm-text my-2'>Следующий платеж на эту же сумму будет осуществлен автоматически через один месяц в 09:00. В любое время Вы можете отменить автоплатеж по этой <a target='_blank' href='http://my.cloudpayments.kz/Unsubscribe'>ссылке</a>.</p>
                      }
                      <a className="btn btn-sm my-2 mx-auto d-block px-auto" id='pay' >Оказать помощь</a>
                      <div class="powr-paypal-button" id="daa2e5b1_1603692892"></div><script src="https://www.powr.io/powr.js?platform=html"></script>
                      </div>
                      </div>
                      </div>
              </nav>
            );
         }
}
export default NavBar;