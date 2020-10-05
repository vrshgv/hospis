import React from 'react';
import NavBar from './NavBar';
import VideoContent from './VideoContent';
import Benefits from './Benefits';
import ImageContent from './ImageContent';
import Bonuses from './Bonuses';
import Begin from './Begin';
import Footer from './Footer';
import MainFooter from './MainFooter';


class App extends React.Component{

    render(){
        return(
        <div className='container-fluid px-0'>
            <div>
            <NavBar />            
            <VideoContent />
            <Benefits />
            <ImageContent />
            <Bonuses />
            <Begin />
            <Footer />
            </div>
            <MainFooter />
        </div>
        );
    }
}

export default App;