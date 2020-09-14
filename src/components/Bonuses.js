import React from 'react';

class Bonuses extends React.Component {
    render() {
        return (
            <div className='container bonuses mt-5 benefitscontent'>
                <div className='row'>
                    <div className='col text-center'>
                        <h4>Lorem ipsum dolor sit amet, consectetu</h4>
                        <p className='mt-4 text-wrap content_p'>Lorem ipsum dolor sit amet, consectetuLorem ipsum dolor sit amet, consectetuLorem ipsum dolor sit amet, consectetuLorem ipsum dolor sit amet, consectetu</p>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-md-4'>
                        <img src='/bonus-1.svg' className='mx-auto d-block'></img>
                        <p className='bonus_h text-center mt-4'>Lorem ipsum dolor sit amet, consectetu</p>
                        <p className='bonus_p text-wrap'>Lorem ipsum dolor sit amet, consectetuLorem ipsum dolor sit amet, consectetuLorem ipsum dolor sit amet, consectetuLorem ipsum dolor sit amet, consectetu</p>
                    </div>
                    <div className='col-md-4'>
                        <img src='/bonus-1.svg' className='mx-auto d-block'></img>
                        <p className='bonus_h text-center mt-4'>Lorem ipsum dolor sit amet, consectetu</p>
                        <p className='bonus_p text-wrap'>Lorem ipsum dolor sit amet, consectetuLorem ipsum dolor sit amet, consectetuLorem ipsum dolor sit amet, consectetu</p>
                    </div>
                    <div className='col-md-4'>
                        <img src='/bonus-1.svg' className='mx-auto d-block'></img>
                        <p className='bonus_h text-center mt-4'>Lorem ipsum dolor sit amet, consectetu</p>
                        <p className='bonus_p text-wrap'>Lorem ipsum dolor sit amet, consectetuLorem ipsum dolor sit amet, consectetuLorem ipsum dolor sit amet, consectetu</p>
                    </div>
                </div>
                <div className='row text-center trustcontent'>
                    <div className='col text-center'>
                        <p className='bonus_p2'>Нам доверяют</p>
                    </div>
                </div>
                <div className='row trustimg mt-4 mx-auto'>
                    <div className='col col_img d-flex justify-content-center'>
                        <div className='img_d pr-5'><img className='img img-fluid' src='/adgs.svg' /></div>
                        <div className='img_d pr-5'><img className='img img-fluid' src='/min.png' /></div>
                        <div className='img_d pr-5'><img className='img img-fluid' src='/mts.png' /></div>
                        <div className='img_d pr-5'><img className='img img-fluid' src='/sud.svg' /></div>
                    </div>
                </div>
                <div className='row mt-4 mx-auto'>
                    <div className='col col_img d-flex justify-content-center'>
                        <div className='img_d pr-5'><img className='img img-fluid' src='/aktobe.svg' /></div>
                        <div className='img_d pr-5'><img className='img img-fluid' src='/pavlodar.svg' /></div>
                        <div className='img_d pr-5'><img className='img img-fluid' src='/atam.svg' /></div>
                        <div className='img_d pr-5'><img className='img img-fluid' src='/tson.svg' /></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bonuses;