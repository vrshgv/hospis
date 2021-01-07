import React from 'react';
import { NavLink } from 'react-router-dom';

class Nurses extends React.Component {
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
                <h5 className=''>Медсёстры</h5>
                
                        <p className='my-2 ml-2'>
                        Медсестры и медбратья Детского хосписа готовы помочь семьям в уходе за ребенком. Они дают консультации и обучают родителей уходу за стомами, смене стом, способам перемещения в кровати, занимаются подбором и адаптацией технический средств реабилитации и других приспособлений и средств для ухода. Медсестры контролируют состояние ребенка, ведут дневники, на основании которых врач отслеживает динамику, могут помочь родителям помыть ребенка, вывезти на прогулку, обработать пролежни. А также обучают родителей упражнениям и техникам, облегчающим состояние ребенка и предотвращающим вторичные осложнения: профилактика контрактур, сколиоза, дыхательная гимнастика, дренирующий массаж, тейпирование и тп. Медсестры следят за состоянием медицинского оборудования, заменой фильтров и другого расходного материала.
</p>
<br />
      

</div>
            </div>
            </div>
        );
    }
}

export default Nurses;