import React from 'react';
import { NavLink } from 'react-router-dom';

class BraveBox extends React.Component {
    render() {
        return (
            <div className='container box px-5 bg-light py-5'>
                <div className='row'><div className='col-md-4 col-lg-4'>
                <div className='sidebar shadow-sm'>
                    <ul className='my-2 py-2 list-unstyled'>
                    <NavLink className="my-3" to='/corporate'><li>Корпоративная благотворительность</li></NavLink>
                        <NavLink className="my-3" to='/dobry-product'><li>Добрый Продукт</li></NavLink>

                        <NavLink className="my-3" to='/brave-box'><li>Коробка храбрости</li></NavLink>
                        <NavLink className="my-3" to='/donation'><li>Реквизиты</li></NavLink>

                    </ul>
                </div>
                </div>
                <div className='col-md-8 col-lg-8'>
                <h5 className=''>Коробка храбрости</h5>
                <h6>Сборы для данной акции актуальны всегда!</h6>
                
                        <p className='my-2 ml-2'>Храбрых мальчишек всегда порадуют:маленькие машинки, лучше металлические. Бакуганы – раскрывающиеся в драконов и монстров шарики (с карточкой или без). Маленькие наборы. Роботы. Солдатики. Фигурки Angry Birds.и т.д.
</p>

                        <p className='my-2 ml-2'>Отважные девочки будут рады, если найдут в коробке:маленьких кукол и пупсов в одежке. Маленький пони (My little pony) и куколка LOL – это просто суперхиты, высушивают слезы в один миг. Зверюшки с огромными глазами из серии Littlest Pets Shop, тоже то, что надо.
</p>

                        <p className='my-2 ml-2'>Также смелых малышей радуют: Разные дикие и домашние звери – “как настоящие“, особенно лошади и собаки с кошками. Настольные игры. Магнитные зверушки. Магниты на лапках дают возможность повесить друга на капельницу. Смешарики в разных формах и проявлениях. Игрушки, магниты, брелки. Маленькие заводные игрушки – их сейчас много, лучше ходячие или едущие, а не для ванны. Пальчиковые игрушки – из разных материалов. Брелки для телефона – красивые и забавные, ими тоже можно украсить капельницу.
Для самых маленьких пациентов: погремушки, развивающие игрушки, кубики, непромокаемые книжки.
</p><br />
<p className='font-weight-bold'>
Что нельзя в ”Коробку Храбрости”:</p>
                        <p className='my-2 ml-2'>стеклянные и керамические бьющиеся игрушки, колючие, острые, мягкие, непрочные или с большим количеством мелких деталей. В стерильной процедурной нежелательны игрушки б/у (ведь у малышей слабый иммунитет). Не нужна детская косметика. Не нужны заколки!
</p>

</div>
<div className='row py-3 px-5'>
<div className='col'>
<img class="img-fluid img-thumbnail" src="kor.jpg"/>
</div>
<div className='col'>
<img class="img-fluid img-thumbnail"  src="kor2.jpeg"/>
</div>
<div className='col'>
<img class="img-fluid img-thumbnail"  src="kor3.jpg"/>
</div>
</div>
            </div>
            </div>
        );
    }
}

export default BraveBox;