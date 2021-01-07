import React from 'react';
import { NavLink } from 'react-router-dom';

class Corporate extends React.Component {
    render() {
        return (
            <div className='container box bg-light px-5 py-5'>
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
                <h5 className=''>Корпоративная благотворительность</h5>
                
                        <p className='my-2 ml-2'>
                        Мы всегда радуемся, когда нам помогают целые компании или организации. Это здорово, что люди, работающие вместе, объединяются в едином порыве, чтобы помочь неизлечимо больным детям. Корпоративная благотворительность — это не только способ поддержать тех, кто в этом нуждается, но и возможность для сотрудников стать сплочённее и дружнее. Участие таких компаний в благотворительных проектах «КОРОБКА ХРАБРОСТИ»  и «ДОБРЫЙ ПРОДУКТ», которые направлены на поддержку детей с онкологическими заболеваниями или взять шефство над одной из программ детского хосписа.
                        </p>
<br />
                     


</div>
            </div>
            </div>
        );
    }
}

export default Corporate;