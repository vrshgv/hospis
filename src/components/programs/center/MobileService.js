import React from 'react';
import { NavLink } from 'react-router-dom';

class MobileService extends React.Component {
    render() {
        return (
            <div className='container box bg-light px-5 py-5'>
                <div className='row'><div className='col-md-4 col-lg-4'>
                <div className='sidebar shadow-sm'>
                    <ul className='my-2 py-2 list-unstyled'>
                        <NavLink className="my-3" to='/help-center'><li>Центр паллиативной помощи</li></NavLink>
                        <NavLink className="my-3" to='/stacionar'><li>Стационар детского хосписа</li></NavLink>

                        <NavLink className="my-3" to='/brave-box'><li>Коробка храбрости</li></NavLink>
                        <NavLink className="my-3" to='/mobile-service'><li>Выездная служба</li></NavLink>
                        <NavLink className="my-3" to='/dobry-product'><li>Добрый продукт</li></NavLink>

                    </ul>
                </div>
                </div>
                <div className='col-md-8 col-lg-8'>
                <h5 className=''>Выездная служба</h5>
                <p>Выездная служба Детского хосписа с 2012 года оказывает паллиативную помощь детям и молодым взрослым на дому в городе Алматы и Алматинской области, по каждому району города и области ведется совместная работа с врачами и социальными работниками.</p>
                <br />
                <p>Задачи выездной службы – создать условия для организации  стационара на дому, чтобы ребенок мог жить дома, а не в больнице; облегчить симптомы заболевания, повысить качество жизни ребенка и наполнить его жизнь радостными событиями; дать поддержку всем членам семьи; в терминальный период заболевания предоставить ребенку возможность умереть дома без боли рядом с близкими, а не одному в реанимации.</p>
                <br />
                <h5>Услуги выездной службы:</h5>
                <p className='font-weight-bold'>
                Медицинская поддержка:
                        </p>
                        <p className='my-2 ml-2'>Контроль симптомов и паллиативный уход, помощь в конце жизни (включая круглосуточный индивидуальный пост на дому у умирающего ребенка), круглосуточная горячая линия, обучение членов семьи паллиативному уходу и использованию оборудования;  Оказание специализированной паллиативной медицинской помощи врачами и медсестрами, специалистами по респираторной поддержке и физической терапии, консультации узких специалистов (невролога, диетолога и др.).
</p>
<p className='font-weight-bold'>
Психолого-педагогическая поддержка:
                        </p>
                        <p className='my-2 ml-2'>Консультации психолога, игрового терапевта, специалиста по альтернативной коммуникации.
</p>
<p className='font-weight-bold'>
Правовая и юридическая поддержка:
                        </p>
                        <p className='my-2 ml-2'>Консультации юриста и социального работника по вопросам прав ребенка-инвалида, положенных льгот; помощь в решении конфликтных ситуаций с учреждениями здравоохранения, социальной защиты и образования.
</p>
<p className='font-weight-bold'>
Благотворительная помощь:
                        </p>
                        <p className='my-2 ml-2'>Приобретение лечебного питания, лекарств, расходных материалов, технических средств, оплата анализов, обследований, транспортировки.
</p>
<p className='font-weight-bold'>
Социализация:
                        </p>
                        <p className='my-2 ml-2'>Мероприятия для детей вне дома, посещение бассейна, мечетей, церкви, игровые занятия, совместные прогулки, экскурсии, праздники и т.п)
</p>
</div>
            </div>
            <div className='row py-3 px-5'>
<div className='col'>
<img class="img-fluid img-thumbnail" src="vyezd.jpg"/>
</div>
<div className='col'>
<img class="img-fluid img-thumbnail" src="vyezd2.jpg"/>
</div>
<div className='col'>
<img class="img-fluid img-thumbnail"  src="vyezd3.jpg"/>
</div>
</div>
<div className='row py-3 px-5'>
<div className='col'>
<img class="img-fluid img-thumbnail" src="vyezd4.jpg"/>
</div>
<div className='col'>
<img class="img-fluid img-thumbnail" src="vyezd5.jpg"/>
</div>
<div className='col'>
<img class="img-fluid img-thumbnail"  src="vyezd6.jpg"/>
</div>
</div>
            </div>
        );
    }
}

export default MobileService;