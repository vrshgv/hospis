import React from 'react';
import { NavLink } from 'react-router-dom';

class Art extends React.Component {
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
                <h5 className=''>Арт-терапевты</h5>
                
                        <p className='my-2 ml-2'>
                        Пациенты Детского хосписа, как и все дети, больше всего на свете любят играть. Поэтому в хосписе наряду с медицинскими сотрудниками работают игровые терапевты. Арт терапевты навещают детей на дому, пытаются найти для каждого ребенка интересные для него игры и занятия с учетом возраста и состояния ребенка, чтобы ребенок мог максимально участвовать в игре. По желанию родителей  терапевт может обучить членов семьи или няню ребенка играм, а также помочь составить программу развития и обучения.</p>
<br />
                        <p className='my-2 ml-2'>
                        Арт терапевт может помочь найти школу или развивающий центр, где ребенок мог бы обучаться независимо от своего состояния. Терапевт помогает семье подобрать игрушки, способ коммуникации, создать развивающее пространство. Если есть запрос со стороны семьи,  терапевт может вместе с родителями работать на развитие навыков самообслуживания у ребенка и работать над процессом питания, перемещения, позиционирования. Мы убеждены, что каждый ребенок может учиться и развиваться. Арт терапевт может помочь поставить цели и выбрать методы помощи ребенку в развитии и обучении. Раз в месяц терапевты проводят групповые занятия для детей.

</p>


</div>
            </div>
            </div>
        );
    }
}

export default Art;