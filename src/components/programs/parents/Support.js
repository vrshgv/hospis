import React from 'react';
import { NavLink } from 'react-router-dom';

class Support extends React.Component {
    render() {
        return (
            <div className='container box bg-light px-5 py-5'>
                <div className='row'><div className='col-md-4 col-lg-4'>
                <div className='sidebar shadow-sm'>
                    <ul className='my-2 py-2 list-unstyled'>
                        <NavLink className="my-3" to='/doctors'><li>Врачи</li></NavLink>
                        <NavLink className="my-3" to='/nurses'><li>Медсёстры</li></NavLink>

                        <NavLink className="my-3" to='/psychologists'><li>Психологи</li></NavLink>
                        <NavLink className="my-3" to='/art'><li>Арт-терапевты</li></NavLink>
                        <NavLink className="my-3" to='/law'><li>Правовая и юридическая помощь</li></NavLink>
                        <NavLink className="my-3" to='/support'><li>Духовная поддержка</li></NavLink>

                    </ul>
                </div>
                </div>
                <div className='col-md-8 col-lg-8'>
                <h5 className=''>Духовная поддержка</h5>
                
                        <p className='my-2 ml-2'>
                        Детскому хоспису помогают служители мечети и православные священники, которые готовы причащать и исповедовать детей на дому. С ними можно просто поговорить — по телефону или лично. По запросу семей детский хоспис готов организовывать помощь любых конфессий.</p>
<br />
      

</div>
            </div>
            </div>
        );
    }
}

export default Support;