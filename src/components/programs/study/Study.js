import React from 'react';
import { NavLink } from 'react-router-dom';

class Study extends React.Component {
    render() {
        return (
            <div className='container box px-5 bg-light py-5'>
                <div className='row'>
                <div className='col-md-4 col-lg-4'>
                <div className='sidebar shadow-sm'>
                    <ul className='my-2 py-2 list-unstyled'>
                    <NavLink className="my-3" to='/study'><li>Обучающие семинары для врачей</li></NavLink>
                    </ul>
                </div>
                </div>
                <div className='col-md-8 col-lg-8'>
                Обучающие семинары для врачей
                </div>
                </div>
            </div>
        );
    }
}

export default Study;