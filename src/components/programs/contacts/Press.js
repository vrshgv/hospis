import React from 'react';
import { NavLink } from 'react-router-dom';

class Press extends React.Component {
    render() {
        return (
            <div className='container box bg-light px-5 py-5'>
                <div className='row'><div className='col-md-4 col-lg-4'>
                <div className='sidebar shadow-sm'>
                    <ul className='my-2 py-2 list-unstyled'>
                    <NavLink className="my-3" to='/requisites'><li>Реквизиты</li></NavLink>
                        <NavLink className="my-3" to='/form'><li>Анкета для пациентов</li></NavLink>

                        <NavLink className="my-3" to='/press'><li>Для СМИ</li></NavLink>
                    </ul>
                </div>
                </div>
                <div className='col-md-8 col-lg-8'>
                <h5 className=''>Для СМИ</h5>
                
                        <p className='my-2'>
                        Дорогие друзья! Детский хоспис «Я с тобой»  существует в основном на благотворительные пожертвования, и наиболее эффективный способ привлекать эти пожертования — публикации в СМИ.

Мы с радостью поможем вам организовать и подготовить материалы о работе Детского хосписа, о жизни наших подопечных детей, о мероприятиях, которые мы проводим, интервью с сотрудниками и волонтёрами, любые другие виды публикаций.
<br/>
<br/>
Вы можете обратиться в пресс-службу Детского хосписа: 
<br/>
+7 771 492 5353 @ zdorovayaaz@gmail.com
<br/>
Все материалы с сайта «Детский хоспис» могут быть использованы с указанием источника.
                        </p>
<br />
                     


</div>
            </div>
            </div>
        );
    }
}

export default Press;