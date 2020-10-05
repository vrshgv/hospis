import React from 'react';
import Header from './Header';
import SubHeader from './SubHeader';
import ImageContent from './ImageContent';
import Footer from './Footer'

class Main extends React.Component {
    render() {
        return (
            <div className='container box bg-light py-5'>
                <Header />
                <SubHeader />
                <ImageContent />
                <Footer />
            </div>
        );
    }
}

export default Main;