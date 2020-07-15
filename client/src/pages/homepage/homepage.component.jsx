import React from 'react';
import './homepage.styles.scss';
import AboutUs from '../../components/about-us/about-us.component';
import Directory from '../../components/directory/directory.component';

const HomePage = () => (
    <div className='homepage'>
        <AboutUs />
        <Directory />
    </div>
)

export default HomePage;