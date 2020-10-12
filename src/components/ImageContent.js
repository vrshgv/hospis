/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { NavLink } from 'react-router-dom';

class ImageContent extends React.Component {
  render() {
    return (
      <div className="container imagecontent">
        <div className="row d-flext justify-content-around imagecontent imagecontent_r">
          <div className="col-md-6 order-lg-1 order-first order-sm-1 float-right d-flex align-items-center">
            <div className="content_d d4 text-left">
            <div className="content_d  text-left">
              <p className="mb-3 h2">
                Детский хоспис
                {' '}
                <span>«Я с тобой»</span>
              </p>
              <p className="mb-4 videocontent_p">
                Первый в Казахстане детский хоспис <br/> для детей
                с онкологическими заболеваниями 
                <br />
                «Я с тобой»
              </p>
              <p>
                Контактная информация:
                <br />
                Детский хоспис «Я с тобой»
                <br />
                <a href="tel:+77279778152">+7 727 977-81-52</a>
                <br />
                <a href="tel:+77074925352">+7 707 492-53-52</a>
                <br />
                <a href="mailto:zdorovayaaz@gmail.com">zdorovayaaz@gmail.com</a>
                <br />
              </p>
              <NavLink className="btn my-2 px-3 pink" to='/help'>
                Как помочь детскому хоспису?
              </NavLink>
            </div>
            </div>
          </div>
          <div className="col-md-6 order-2 order-last order-md-2">
          <img className="img-fluid" src="/family.png" width='500px' />
          </div>
        </div>

        <div className="row d-flext mt-6 imagecontent_r justify-content-around">
          <div className="col-md-6 order-lg-1 order-last order-sm-2">
            <img className="img-fluid i1" src="/charity2.png" />
          </div>
          <div className="col-md-6 order-lg-2 order-sm-1 order-first float-right d-flex align-items-center">
            <div className="content_d d1 text-left">
              <p className="h2">Миссия Первого Детского хосписа в Казахстане</p>
              <p className="text-wrap text-left">
                Хоспис – это обеспечение качества жизни безнадежно больного ребенка, помощь и поддержка
                его родных и близких, оказание социальной, медицинской, психологической и духовной
                помощи. Вся миссия хосписа рождалась из того, что нам говорили наши маленькие пациенты.
                Мы брали все требования к хоспису не "из головы", а из самой жизни, маленькие
                пациенты были нашими лучшими учителями...
                <br />
                Мы помогаем жить, несмотря на болезнь. Помогаем наполнить жизнь интересными, значимыми
                событиями, учим ребенка приобретать новые знания и навыки жить с болезнью, выражать себя
                через игру и творчество.
              </p>
            </div>
          </div>
        </div>
        <div className="row d-flex mt-6 justify-content-around imagecontent_r">
          <div className="col-md-6 order-lg-1 order-sm-1 order-first float-right d-flex align-items-center">
            <div className="content_d d2 text-left">
              <p className="h2">Задачи хосписа</p>
                <ul className='list-styled text-wrap text-left'>
                  <li>Обеспечение качества жизни безнадежно больного ребенка</li>
                  <li>Помощь и поддержка его родных и близких, родных братьев и сестер</li>
                  <li>
                    Оказание социальной, медицинской, психологической и духовной помощи неизлечимо
                    больным детям в возрасте от 0 до 18 лет
                  </li>
                  <li>Поддержка родных и близких после утраты ребенка, период горевания</li>
                </ul>
            </div>
          </div>
          <div className="col-md-6 order-lg-2 order-last order-sm-2">
            <img className="img-fluid i2" src="/stet.png" />
          </div>
        </div>
        <div className="row mt-6 d-flext justify-content-around imagecontent_r">
          <div className="col-md-6 order-lg-1 order-last order-sm-2">
            <img className="img-fluid i3" src="/charity1.png" />
          </div>
          <div className="col-md-6 order-lg-2 order-first order-sm-1 float-right d-flex align-items-center">
            <div className="content_d d3 text-left">
              <p className="h2">Деятельность хосписа</p>
              <p className="text-wrap text-left">
                Центр паллиативной помощи детскому населению «Я с тобой» — это стационар на 16 коек, в
                котором паллиативная помощь оказывается детям, когда требуется респираторная поддержка,
                длительное обезболивание, поддержка уставшего и истощенного от болезни организма
                ребенка. В Центре есть паллиативная палата для новорожденных на 6 кроваток, здесь
                оказывается медицинский уход за новорожденными с тяжелыми и жизнеугрожающими
                заболеваниями.
              </p>
            </div>
          </div>
        </div>
        <div className="row d-flext justify-content-around imagecontent imagecontent_r">
          <div className="col-md-6 order-lg-1 order-first order-sm-1 float-right d-flex align-items-center">
            <div className="content_d d4 text-left">
              <p className="h2">Паллиативная помощь детям на дому</p>
              <p className="text-wrap text-left">
                Команда выездной службы, в составе которой – врач педиатр-онколог, медсестра, психолог и
                социальный работник, выезжает к детям на дом, оказывает консультационную помощь,
                медицинскую помощь по уходу. Социальная поддержка семьи продуктами питания, одеждой,
                медикаментам. Зная, что к ним всегда на помощь придет Выездная служба, дети и родители
                обретают надежду, и направляют все силы на борьбу с болезнью. Большое значение Выездная
                служба придает поддержке сиблингов (братьев и сестер), проживающих в семье с больным
                ребенком, которые чувствуют свою ущемленность, из-за отсутствия должного внимания со
                стороны мамы.
              </p>
            </div>
          </div>
          <div className="col-md-6 order-2 order-last order-md-2">
            <img className="img-fluid i4" src="/familyhome.jpeg" />
          </div>
        </div>
        <div className="row mt-6 d-flext justify-content-around imagecontent_r">
          <div className="col-md-6 order-lg-1 order-last order-sm-2">
            <img className="img-fluid i3" src="/vol.png" />
          </div>
          <div className="col-md-6 order-lg-2 order-first order-sm-1 float-right d-flex align-items-center">
            <div className="content_d d3 text-left">
              <p className="h2">Волонтерство</p>
              <p className="text-wrap text-left">
                Вы можете приехать в наш Детский хоспис и сказать, что Вы хотите стать волонтером.
                Хоспис активно привлекает к своей деятельности волонтеров не только из Казахстана, но и
                из-за рубежа. Последнее время все популярнее становится корпоративное волонтерство. Мы
                помогаем жить, несмотря на тяжелую болезнь. Помогаем наполнить жизнь интересными,
                значимыми событиями, чтобы оставить это в памяти ребенка, родных и близких. Для нас
                важно, не сколько времени осталось жить, а как качественно и интересно прожить остаток
                времени…прожить с улыбкой, без боли и страданий, в заботе, в любви и ласке…
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageContent;
