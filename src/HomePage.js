import React from 'react';
import Navbars from './NavBars';
import Title from './Title';
function HomePage() {
    return (
        <div className="home-page">
            <Title />
            <h1>Welcome to the Home Page!</h1>
            <p>You are logged in successfully.</p>
            <Navbars />
        </div>
    );
}
export default HomePage;
