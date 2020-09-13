import React from 'react';
import NavBar from './NavBar';
import VideoContent from './VideoContent';
import Benefits from './Benefits';
import ImageContent from './ImageContent';
import Bonuses from './Bonuses';
import Begin from './Begin';
import Form from './Form';
import Footer from './Footer';


class App extends React.Component{

    render(){
        return(
        <div className='container-fluid px-0'>
            <NavBar />            
            <VideoContent />
            <Benefits />
            <ImageContent />
            <Bonuses />
            <Begin />
            <Form />
            <Footer />
        </div>
        );
    }
}

export default App;