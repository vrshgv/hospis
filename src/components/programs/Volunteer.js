import React from 'react';
import { NavLink } from 'react-router-dom';

class Volunteer extends React.Component {
    render() {
        return (
            <div className='container volunteer box bg-light px-3 py-5'>
                <div className='row'>
                <div className='col-md-4 col-lg-4'>
                <div className='sidebar shadow-sm'>
                    <ul className='my-2 py-2 list-unstyled'>
                    <NavLink className="my-3" to='/volunteer'><li>Информация для волонтеров</li></NavLink>
                    </ul>
                </div>
                </div>
                <div className='col-md-8 col-lg-8'>
                <h5 className=''>Волонтёрам</h5>
                <p>Детский хоспис активно привлекает к работе волонтеров. Именно волонтеры могут дать семье индивидуальное внимание и помочь исполнить самые необыкновенные мечты. Какие бывают волонтеры:</p>
                <ul className='my-5'>
                    <li><span>музыканты:</span> могут навестить ребенка, поиграть на музыкальных инструментах, спеть;</li>
                    <li><span>волонтеры с собаками и другими животными</span>: могут навестить ребенка вместе со своим питомцем и дать ребенку поиграть с животным;
</li>
                    <li><span>парикмахеры:</span> могут постричь ребенка и маму на дому;
</li>
                    <li><span>кулинары</span>: могут вместе с ребенком и его родителям вместе приготовить необыкновенное блюдо;
</li>
                    <li><span>художники; репетиторы;</span>
</li>
                    <li><span>аниматоры</span> (клоуны, фокусники и др);
</li>
                    <li><span>фотографы</span> для семейных фотосессий;
</li>
                    <li><span>волонтеры-друзья</span>: могут просто общаться с ребенком, играть, поддерживать дружеские отношения;</li>
                    <li><span>курьеры</span>: могут помочь доставить документы или покупки из хосписа в семью;
</li>
                    <li><span>водители</span>: могут помочь свозить на машине ребенка, либо тяжелые посылки от хосписа привезти;</li>
                    <li>
                    ...и многие-многие другие задачи готовы брать на себя <span>волонтеры</span>. 
                    </li>
                </ul>
                <h6 className='my-3 text-bold'>Волонтеры — это здорово! Детский хоспис держится на волонтерах.</h6>
            </div>
            </div>
            </div>
        );
    }
}

export default Volunteer;