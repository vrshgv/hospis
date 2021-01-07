import React from 'react';
import { NavLink } from 'react-router-dom';

class Parents extends React.Component {
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
                <h5 className=''>Родителям</h5>
                
                        <p className='my-2'>
                        Детский хоспис «Я с тобой» создан для того, чтобы помогать семьям с неизлечимо больными детьми в самый сложный период жизни. Обратиться в хоспис не означает опустить руки и признать, что ребенок скоро умрет. В хосписе мы вместе с родителями создаем максимально комфортные условия для последних дней жизни ребенка, подбираем симптоматическую терапию и заботимся о качестве его жизни. Детский хоспис может помочь в этом. Бесплатно предоставляет семьям с неизлечимо больными детьми и молодыми взрослыми постоянное медицинское сопровождение, психологическую, социально-правовую и благотворительную поддержку на дому и в стационаре.</p>
<br />
      

</div>
            </div>
            </div>
        );
    }
}

export default Parents;