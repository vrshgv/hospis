import React from 'react';
import { NavLink } from 'react-router-dom';

class Clothes extends React.Component {
    render() {
        return (
            <div className='container box bg-light px-5 py-5'>
                <div className='row'><div className='col-md-4 col-lg-4'>
                <div className='sidebar shadow-sm'>
                    <ul className='my-2 py-2 list-unstyled'>
                        <NavLink className="my-3" to='/how-to'><li>Как помочь?</li></NavLink>
                        <NavLink className="my-3" to='/help-deeds'><li>Помочь делом</li></NavLink>
                        <NavLink className="my-3" to='/help-donate'><li>Помочь деньгами</li></NavLink>
                        <NavLink className="my-3" to='/help-clothes'><li>Помочь вещами</li></NavLink>
                        <NavLink className="my-3" to='/help-volunteer'><li>Стать волонтёром</li></NavLink>
                    </ul>
                </div>
                </div>
                <div className='col-md-8 col-lg-8'>
                <h5 className=''>Помочь вещами</h5>
                
                        <p className='my-2 ml-2'>
</p>
<br />


                        

</div>

            </div>
            </div>
        );
    }
}

export default Clothes;