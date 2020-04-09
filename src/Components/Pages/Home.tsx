import React, { Component } from 'react';
import logo from '../../Assets/Images/logo.png';

class HomePage extends Component {
    render(){
        return(
            <>
            <h1>Welcome to POP social-media a place to share your world with others</h1>
            <img src={logo}/>
            </>
        )
    }
}

export default HomePage;