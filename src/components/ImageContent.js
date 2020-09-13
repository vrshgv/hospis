import React from 'react';

class ImageContent extends React.Component{
    render(){
        return (
            <div className='container imagecontent'>
                <div className='row d-flext justify-content-around imagecontent_r'>
                <div className="col-md-6 col-lg-7 pr-0 mr-0">
                                 
                <img className='img-fluid img-jopa pl-3' src='/5299.jpg'/>

                                 </div>
                            <div className="col-md-6 col-lg-5 pr-10">
                                <div className='content_d pl-7 text-right'>
                                    <p className='mb-3 h2'>Детский хоспис <span>«Я с тобой»</span></p>
                                    <p className='mb-4 videocontent_p'>Первый в Казахстане детский хоспис для детей  
                                            <br />с онкологическими заболеваниями «Я с тобой»</p>
                                    <p>Контактная информация:<br />
                                        Детский хоспис «Я с тобой»<br />
                                        +7 727 977-81-52<br />
                                        +7 707 492 5352<br />
                                        zdorovayaaz@gmail.com<br />
                                        </p>
                                        <p class="text-info pointer" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Схема проезда&#9662;</p>
                                        <div class="collapse mb-2" id="collapseExample">
                                        <div className='mb-2'>Республика Казахстан, Алматинская область, Карасайский район, село Кыргауылды, улица Самал, дом 40</div>
                                        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa454879341bfe44a6cc2730c583b6e3dd6de900f3377c09e2960ddd9802f1fbb&amp;source=constructor" width="340" height="274" frameborder="0"></iframe>
                                        </div>
                                        <a className="btn my-2 px-3 pink" href="">Как помочь детскому хоспису?</a>                        
                                </div>
                                </div>
                             
                    
                </div>
                <div className='row d-flext mt-6 imagecontent_r justify-content-around'>
                    <div className='col-md-6 order-lg-1 order-last order-sm-2'>
                        <img className='img-fluid i1' src='/.svg'/>
                    </div>
                    <div className='col-md-6 order-lg-2 order-sm-1 order-first float-right d-flex align-items-center'>
                        <div className='content_d d1 text-left'>
                        <p className='h2'>Миссия Первого Детского хосписа в Казахстане:<br /></p>
                        <p className='text-wrap text-left'>Хоспис – это обеспечение качества жизни безнадежно больного ребенка, помощь и поддержка его родных и близких, оказание социальной, медицинской, психологической и духовной помощи. Вся миссия хосписа рождалась из того, что нам говорили наши маленькие пациенты. Мы брали все требования к хоспису не "из головы", а из самой жизни, маленькие пациенты были нашими лучшими учителями...<br />
Мы помогаем жить, несмотря на болезнь. Помогаем наполнить жизнь интересными, значимыми событиями, учим ребенка приобретать новые знания и навыки жить с болезнью, выражать себя через игру и творчество.</p>
                        </div>
                    </div>
                </div>
                <div className='row d-flex mt-6 justify-content-around imagecontent_r'>
                    <div className='col-md-6 order-lg-1 order-sm-1 order-first float-right d-flex align-items-center'>
                        <div className='content_d d2 text-left'>
                        <p className='h2'>Задачи хосписа:</p>
                        <p className='text-wrap text-left'>обеспечение качества жизни безнадежно  больного ребенка, помощь и поддержка его родных и близких, родных братьев и сестер, оказание социальной, медицинской, психологической и духовной помощи неизлечимо больным детям в возрасте от 0 до 18 лет. Поддержка родных и близких после утраты ребенка, период горевания.</p>
                        </div>
                    </div>
                    <div className='col-md-6 order-lg-2 order-last order-sm-2'>
                        <img className='img-fluid i2' src=''/>
                    </div>
                </div>
                <div className='row mt-6 d-flext justify-content-around imagecontent_r'>
                    <div className='col-md-6 order-lg-1 order-last order-sm-2'>
                        <img className='img-fluid i3' src=''/>
                    </div>
                    <div className='col-md-6 order-lg-2 order-first order-sm-1 float-right d-flex align-items-center'>
                        <div className='content_d d3 text-left'>
                        <p className='h2'>Деятельность хосписа:</p>
                        <p className='text-wrap text-left'>Центр паллиативной помощи детскому населению «Я с тобой» — это стационар на 16 коек, в котором паллиативная помощь оказывается детям, когда требуется респираторная поддержка, длительное обезболивание, поддержка уставшего и истощенного от болезни организма ребенка. В Центре есть паллиативная палата для новорожденных на 6 кроваток, здесь оказывается медицинский уход за новорожденными с тяжелыми и жизнеугрожающими заболеваниями.</p>
                        </div>
                    </div>
                </div>
                <div className='row d-flext justify-content-around imagecontent imagecontent_r'>
                    <div className='col-md-6 order-lg-1 order-first order-sm-1 float-right d-flex align-items-center'>
                        <div className='content_d d4 text-left'>
                        <p className='h2'>Lorem ipsum dolor sit amet, consectetu <br />Lorem ipsum dolor sit amet, consectetu</p>
                        <p className='text-wrap text-left'>Lorem ipsum dolor sit amet, consectetuLorem ipsum dolor sit amet, consectetuLorem ipsum dolor sit amet, consectetuLorem ipsum dolor sit amet, consectetu</p>
                        </div>
                    </div>
                    <div className='col-md-6 order-2 order-last order-md-2'>
                        <img className='img-fluid i4' src=''/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageContent;