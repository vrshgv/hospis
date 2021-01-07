import React from 'react';
import { NavLink } from 'react-router-dom';

class Form extends React.Component {
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
                <div class="powr-form-builder" id="4f4054b8_1610030211"></div><script src="https://www.powr.io/powr.js?platform=html"></script>
<br />
                     


</div>
            </div>
            </div>
        );
    }
}

export default Form;