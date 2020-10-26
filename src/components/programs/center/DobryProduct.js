import React from 'react';
import { NavLink } from 'react-router-dom';

class DobryProduct extends React.Component {
    render() {
        return (
            <div className='container box bg-light px-5 py-5'>
                <div className='row'><div className='col-md-4 col-lg-4'>
                <div className='sidebar shadow-sm'>
                    <ul className='my-2 py-2 list-unstyled'>
                        <NavLink className="my-3" to='/help-center'><li>Центр паллиативной помощи</li></NavLink>
                        <NavLink className="my-3" to='/stacionar'><li>Стационар детского хосписа</li></NavLink>

                        <NavLink className="my-3" to='/brave-box'><li>Коробка храбрости</li></NavLink>
                        <NavLink className="my-3" to='/mobile-service'><li>Выездная служба</li></NavLink>
                        <NavLink className="my-3" to='/dobry-product'><li>Добрый продукт</li></NavLink>
                    </ul>
                </div>
                </div>
                <div className='col-md-8 col-lg-8'>
                <h5 className=''>Добрый продукт</h5>
                
                        <p className='my-2 ml-2'>10 ЛЕТ- 10 ДОБРЫХ ДЕЛ ДЛЯ ДЕТСКОГО ХОСПИСА! Дорогие Друзья Детского хосписа, сегодня мы представляем ВАМ ВТОРОЙ БЛАГОТВОРИТЕЛЬНЫЙ ПРОЕКТ ДЛЯ ДЕТСКОГО ХОСПИСА! 
</p>
<br />
                        <p className='my-2 ml-2'>Это "Добрый продукт" от Кондитерской фабрики "РАХАТ" - шоколад "Казахстанский", "Веселый зоопарк", "Вкус детства", покупая который, наши Друзья Детского хосписа смогут помочь нашим детям с онкологическими заболеваниями, помочь им справиться с болезнью, улучшить качество жизни, так как все средства от продажи будут перечисляться в Детский хоспис! ВЕДЬ ДОБРЫЙ ПРОДУКТ - ДЛЯ ДОБРА, И ДОБРО ВЕРНЕТСЯ КАЖДОМУ БУМЕРАНГОМ! ПОДДЕРЖИТЕ ЭТОТ ЗАМЕЧАТЕЛЬНЫЙ ДОБРЫЙ ПРОЕКТ! ВЫ ПОДАРИТЕ ЖИЗНЬ БОЛЬНОМУ РЕБЕНКУ И СЧАСТЬЕ В ЕГО СЕМЬЮ!
</p>

                        

</div>
<div className='row py-3 px-5'>
<div className='col'>
<img class="img-fluid img-thumbnail" src="dobr.jpeg"/>
</div>
<div className='col'>
<img class="img-fluid img-thumbnail"  src="dobr2.png"/>
</div>

</div>
            </div>
            </div>
        );
    }
}

export default DobryProduct;