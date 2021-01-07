import React from 'react';
import { NavLink } from 'react-router-dom';

class Center extends React.Component {
    render() {
        return (
            <div className='container box px-5 bg-light py-5'>
                <div className='row'>
                <div className='col-md-8 col-lg-8'>
                <div className='sidebar shadow-sm'>
                    <ul className='my-2 py-2 list-unstyled'>
                        <NavLink className="my-3" to='/help-center'><li>Центр паллиативной помощи</li></NavLink>
                        <NavLink className="my-3" to='/mobile-service'><li>Выездная служба</li></NavLink>
                    </ul>
                </div>
                </div>
                <div className='col-md-8 col-lg-8'>
                Center
                </div>
                </div>
            </div>
        );
    }
}

export default Center;