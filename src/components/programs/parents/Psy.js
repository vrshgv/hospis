import React from 'react';
import { NavLink } from 'react-router-dom';

class Psy extends React.Component {
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
                <h5 className=''>Психологи</h5>
                
                        <p className='my-2 ml-2'>
                        Психологи Детского хосписа готовы оказать разовую консультацию, а также проводить регулярные психотерапевтические занятия по запросу родителей — с ребенком, его братьями и сестрами, родителями и любыми другими членами семьи, а также со всей семьей вместе. Психолог может помочь болеющему ребенку принять свое состояние, задать вопросы, которые он давно не решался задать. Братьям и сестрам психолог может помочь найти свое место в семье и в помощи болеющему брату-сестре, помочь справиться с внутренними проблемами, сложностями с учебой, в отношениях с родителями, с поведенческими проблемами. Для родителей психолог может быть человеком, которому можно выговориться, который может помочь найти точку опоры и обрести равновесие.

</p>
<br />
      

</div>
            </div>
            </div>
        );
    }
}

export default Psy;