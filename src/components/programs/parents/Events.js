import React from 'react';
import { NavLink } from 'react-router-dom';

class Events extends React.Component {
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
                <h5 className=''>Мероприятия</h5>
                
                        <p className='my-2 ml-2'>
                        В Детском хосписе мы очень хотим, чтобы дети как можно меньше сидели дома, чтобы родители общались между собой, и в жизни было как можно больше ярких и интересных событий. Поэтому мы все время придумываем разные поводы, чтобы собраться вместе и хорошо провести время. Если вы хотите принять участие в том или ином мероприятии, пожалуйста, сообщите об этом координатору детского хосписа. Количество мест и условия участия бывают ограничены, мы заранее просим прощения, что не всегда можем всюду позвать всех. Но для нас важно знать ваши пожелания, чтобы было на что ориентироваться при организации следующих мероприятий.
</p>
<br />
      

</div>
            </div>
            </div>
        );
    }
}

export default Events;