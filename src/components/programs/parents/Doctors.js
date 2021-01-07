import React from 'react';
import { NavLink } from 'react-router-dom';

class Doctors extends React.Component {
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
                <h5 className=''>Врачи</h5>
                
                        <p className='my-2 ml-2'>
                        В хосписе работают врачи-педиатры, специалисты по паллиативной помощи. Они не лечат основное заболевание, но готовы помочь справиться с симптомами, вместе с родителями составить план медицинской поддержки для ребенка. Проблемы, с которыми работают врачи Детского хосписа: подбор терапии против боли, тошноты и рвоты, судорог и дистонических приступов, подбор питания и нутритивная поддержка, решение проблем со стулом, сном, респираторная поддержка, подбор и обучение работе с медицинским оборудованием. В сферу деятельность врача детского хосписа также входят проблемы зрения и слуха, ортопедии, позиционирования и активизации ребенка, замена стом, лечение вирусных, грибковых заболеваний. Пациентов Детского хосписа также консультируют диетолог, онколог, офтальмолог, невролог, пульмонолог, реаниматолог и другие внешние специалисты.
</p>
<br />
      

</div>
            </div>
            </div>
        );
    }
}

export default Doctors;