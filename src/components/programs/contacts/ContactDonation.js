import React from 'react';
import { NavLink } from 'react-router-dom';

class ContactDonation extends React.Component {
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
                <h5>Вы можете помочь детям с онкологическими заболеваниями следующими способами:</h5>
                        <p className='font-weight-bold'>
                        1. Отправление сообщения для абонентов
                        </p>
                        <p className='my-2 ml-2'>«Билайн», «АЛТЕЛ», «ТЕЛЕ-2» на номер 5353 со словом «Я с тобой». <br/>

Стоимость сообщения 200 тенге</p>
                        <p className='font-weight-bold'>
                        2. Пополнение электронного кошелька на портале «Qiwi.kz»
                        </p>
                        <p className='my-2 ml-2'>через терминалы оплаты «Qiwi» 8 771 492 5353 <br/>

(Оплата услуг - другие услуги - фонды помощи - ОФПОБ Здоровая Азия (детский хоспис))</p>
                        <img src='/pay2.png' width='400px'/>

                        <p className='font-weight-bold'>
                        3. Перечисление денежных средств в режиме реального времени в системе "StarBanking" в АО "Банк ЦентрКредит»
                        </p>
                        <p className='my-2 ml-2'> в АО«Банк ЦентрКредит»
                        <br/>
                        БИК  KCJBKZKX,   КБЕ,  18,   кнп  321       БИН  030 540 007 604
                        </p>
                        <p className='my-2 ml-2'>Общественный фонд поддержки онкологических больных "Здоровая Азия" <br/>
                        ИИК   KZ 268 560 000 000 076 834 (KZT)<br/>

             KZ 748 562 203 304 851 989 ( RUB)<br/>

             KZ 478 562 203 204 851 974 (USD)<br/>

             KZ 638 562 203 204 851 977 (EUR)</p>
                        <p className='font-weight-bold'>
                        4. Перечисление денежных средств на волонтерскую карту фонда
                        </p>
                        <p className='my-2 ml-2'>
                            <img src='/pay3.jpg' width='400px'></img>
                            <img src='/pay4.jpg' width='400px'></img>
                        </p>
                        <p className='font-weight-bold'>
                        5. Перечисление банковской картой онлайн через платежную странцу CloudPayments вверху страницы с помощью кнопки "Оказать помощь сейчас"
                        </p>
                        <p className='my-2 ml-2'></p>

                        <p className='font-weight-bold'>6.  PayPal - zdorovayaaz@gmail.com:</p>
                        
                    <div class="powr-paypal-button" id="daa2e5b1_1603692892"></div><script src="https://www.powr.io/powr.js?platform=html"></script>                
                        <p className='my-2 ml-2'>
</p>
<br />


                        

</div>

            </div>
            </div>
        );
    }
}

export default ContactDonation;