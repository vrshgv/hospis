import React from 'react';
import { NavLink } from 'react-router-dom';

class Law extends React.Component {
    render() {
        return (
            <div className='container box px-5 bg-light py-5'>
                <div className='row'>
                <div className='col-md-4 col-lg-4'>
                <div className='sidebar shadow-sm'>
                    <ul className='my-2 py-2 list-unstyled'>
                    <NavLink className="my-3" to='/doctors'><li>Врачи</li></NavLink>
                        <NavLink className="my-3" to='/nurses'><li>Медсёстры</li></NavLink>

                        <NavLink className="my-3" to='/psychologists'><li>Психологи</li></NavLink>
                        <NavLink className="my-3" to='/art'><li>Арт-терапевты</li></NavLink>
                        <NavLink className="my-3" to='/law'><li>Правовая и юридическая помощь</li></NavLink>
                        <NavLink className="my-3" to='/support'><li>Духовная поддержка</li></NavLink>                    </ul>
                </div>
                </div>
                <div className='col-md-8 col-lg-8'>
                <h5>Правовая и юридическая помощь</h5>
                        <p className='my-2 ml-2'>Государство довольно много гарантирует семьям с детьми-инвалидами, но к сожалению, получают семьи от государства совсем мало. Отчасти это связано с отсутствием информации — часто семьи не знают всех своих прав. Либо знают, но не имеют сил и времени, чтобы эти права отстаивать и добиваться положенного. Правовой отдел Детского хосписа информирует родителей обо всех положенных им правах и льготах. Это касается вопросов получения лекарств, технических средств реабилитации, расходных материалов, питания, оборудования, а также льгот и выплат.
</p>
                        <p className='my-2 ml-2'>Как оформить инвалидность, как получить или заполнить индивидуальную программу реабилитации, как оформить и получить пенсию,  дополнительный выходной на работе для родителей, как выбить бесплатные лекарства, электроподъемника, получить компенсацию за самостоятельное приобретенные технические средства реабилитации, добиться госпитализации в больницу или путевки в санаторий, как пройти медико-социальную экспертизу или психолого-педагогическую комиссию, как записать ребенка в школу — со всеми этими и многими другими вопросами работает Правовой отдел детского хосписа.

</p>
<p className='my-2 ml-2'>Семьям, в которых объективно нет возможности ходить по инстанциям и чиновникам самостоятельно, социальный работник может помочь и по доверенности стать представителем семьи в медицинских и социальных учреждениях. В случае, если права семьи нарушаются, юрист детского хосписа может помочь составить обращение в вышестоящие инстанции. В нашем законодательстве много пробелов и неточностей, и потребности ребенка не всегда гарантированы и защищены. Если возникла такая необходимость, наш юрист поможет с обращением в суд.


</p>
            
                </div>
                </div>
            </div>
        );
    }
}

export default Law;