import React from 'react';
import { NavLink } from 'react-router-dom';

class MainFooter extends React.Component {
    render() {
        return (
            <div class="page-footer px-0 pt-5 font-small special-color-dark" id='footer'>
            <div class="container text-center text-md-left">
              <div class="row">
                <div class="col mx-auto">
                  <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Контактная информация</h5>          
                  <ul class="list-unstyled">
                    <li>
                        Детский хоспис "Я с тобой", 2021   <i class="fas fa-hand-holding-heart"></i>
                    </li>
                    
                    <br/>
                    <li>
                      <a href="tel:+77279778152">+7 727 977-81-52</a>
                    </li>
                    <li>
                      <a href="tel:+77074925352">+7 707 492-53-52</a>
                      <br/>
                    </li>
                    <li><a href='mailto:zdorovayaaz@gmail.com'>zdorovayaaz@gmail.com</a></li>
                    <li>
                    <div class="my-2 powr-paypal-button" id="daa2e5b1_1603692892"></div><script src="https://www.powr.io/powr.js?platform=html"></script>
                    </li>
                    <li>
                    Республика Казахстан, Алматинская область, Карасайский район, село Кыргауылды, улица Самал, дом 40</li>
                  </ul>
                </div>

                <hr class="clearfix w-100 d-md-none"/>          
                <div class="col mx-auto">
                <h5 class="font-weight-bold text-uppercase mt-3 mb-4">На карте</h5>
                  <iframe class='embed-responsive-item' src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa454879341bfe44a6cc2730c583b6e3dd6de900f3377c09e2960ddd9802f1fbb&amp;source=constructor" width="340" height="274" frameBorder="0"></iframe>
                </div>
          
                <hr class="clearfix w-100 d-md-none"/>
          
                <div class="col mt-3">
                  <NavLink to='/' class="font-weight-bold mt-3">Главная</NavLink>
                  <ul class="list-unstyled">
                    <li className="mb-3 mt-3 ml-3">
                    <NavLink to='/volunteer'>Волонтёрам</NavLink>
                    </li>
                    <li className="mb-3 ml-3">
                    <NavLink to='/parents'>Родителям</NavLink>
                    </li>
                    <li className="mb-3 ml-3">
                    <NavLink to='/how-to-help'>Благотворителям</NavLink>
                    </li>
                    <li className="mb-3 ml-3">
                    <NavLink to='/help-center'>Центр Поддержки Детей с Онкологическими Заболеваниями</NavLink>
                    </li>   
                    <li className="mb-3 ml-3">
                    <NavLink to='/requisites'>Контакты</NavLink>
                    </li> 
                  </ul>
                  <div class=''>
                      <p class='mb-2'>Мы в соцсетях:</p>
                      <a href="https://www.facebook.com/detsky.hospis" target='_blank' class='mr-3'><i class="fab fa-facebook-f fa-2x"></i></a> 
							        <a href="https://www.instagram.com/detskyhospis/" target='_blank' class='mr-3'><i class="fab fa-instagram fa-2x"></i></a> 
							        <a href="https://vk.com/iamwith_you" target='_blank'><i class="fab fa-vk fa-2x"></i></a>
                  </div>
                </div>
                <hr class="clearfix w-100 d-md-none"/>
              </div>
            </div>
          </div>
        );
    }
}

export default MainFooter;
