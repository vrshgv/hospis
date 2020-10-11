import React from 'react';

class MainFooter extends React.Component {
    render() {
        return (
            <div class="page-footer px-0 pt-5 font-small special-color-dark">

            <div class="container text-center text-md-left">
              <div class="row">
          
                <div class="col mx-auto">
          
                  <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Контактная информация</h5>
          
                  <ul class="list-unstyled">
                    <li>
                        Детский хоспис "Я с тобой", 2020   <i class="fas fa-hand-holding-heart"></i>
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
                    <br/>
                    <li>
                    Республика Казахстан, Алматинская область, Карасайский район, село Кыргауылды, улица Самал, дом 40</li>
                  </ul>
                  <div class='mt-3'>
                      <p class='mb-2'>Мы в соцсетях:</p>
                      <a href="#"class='mr-3'><i class="fab fa-facebook-f fa-2x"></i></a> 
							<a href="#" class='mr-3'><i class="fab fa-instagram fa-2x"></i></a> 
							<a href="#"><i class="fab fa-vk fa-2x"></i></a>

                  </div>
          
                </div>
          
                <hr class="clearfix w-100 d-md-none"/>
          
                <div class="col mx-auto">
                <h5 class="font-weight-bold text-uppercase mt-3 mb-4">На карте</h5>

          
                  <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa454879341bfe44a6cc2730c583b6e3dd6de900f3377c09e2960ddd9802f1fbb&amp;source=constructor" width="340" height="274" frameborder="0"></iframe>

          
                </div>
          
                <hr class="clearfix w-100 d-md-none"/>
          
                <div class="col mx-auto">
          
                  <p class="font-weight-bold mt-3 mb-4">Главная</p>
				  <p class="mt-3 mb-2">О фонде</p>
                  <p class="mt-3 mb-2">Программы</p>
                  <ul class="list-unstyled">
                    <li>
                    Центр поддержки детей с онкологическими заболеваниями
                        <ul class='list-unstyled pl-3 py-2'>
                            <li><a href="#">Центр паллиативной помощи</a></li>
                            <li><a href="#">Коробка храбрости</a></li>
                            <li><a href="#">Выездная служба</a></li>
                        </ul>
                    </li>
                    <li>
                    Здоровье матери и ребенка
                        <ul class='list-unstyled pl-3 py-2'>
                            <li><a href="#">РЖМ и РШМ</a></li>
                            <li><a href="#">Школа пациента</a></li>
                            <li><a href="#">Малыш, я с тобой</a></li>
                        </ul>
                    </li>
                    <li>
                    Учебно методический центр
                        <ul class='list-unstyled pl-3 py-2'>
                            <li><a href="#">Обучающие семинары для врачей</a></li>
                        </ul>
                    </li>
                    
                  </ul>
          
                </div>
          
                <hr class="clearfix w-100 d-md-none"/>
          
              </div>
          
            </div>
          
            
          
          </div>
        );
    }
}

export default MainFooter;
