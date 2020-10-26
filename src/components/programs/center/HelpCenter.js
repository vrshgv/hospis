import React from 'react';
import { NavLink } from 'react-router-dom';

class HelpCenter extends React.Component {
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
                <h5 className=''>Центр паллиативной помощи</h5>
                
                        <p className='my-2 ml-2'>Центр паллиативной помощи « Я с тобой» принял первых детей на медицинскую, психологическую поддержку. Самому маленькому нашему пациенту нет и года, но им очень нравится в Центре, здесь они мужественно преодолевают 
свой диагноз и учатся жить дальше!
</p>
<br />
                        <p className='my-2 ml-2'>В Центре дети находятся без родителей, это учит их быть самостоятельными, мамы и папы получают психологическую передышку! Дети из социальных семей нуждаются в одежде, обуви, лекарствах, памперсах, очень нужно питание для самой маленькой пациентки, у нее опухоль почки, смесь "Similac"для маловесных и недоношенных детей! Вы можете помочь через наш сайт в разделе "Как помочь".
</p>

                        

</div>
<div className='row py-3 px-5'>
<div className='col'>
<img class="img-fluid img-thumbnail" src="helpc.jpg"/>
</div>
<div className='col'>
<img class="img-fluid img-thumbnail"  src="helpc2.jpg"/>
</div>
<div className='col'>
<img class="img-fluid img-thumbnail"  src="helpc3.jpg"/>
</div>
</div>
            </div>
            </div>
        );
    }
}

export default HelpCenter;