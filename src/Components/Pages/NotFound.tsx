import React, { Component } from 'react';
import logo from '../../Assets/Images/logo.png';

class NotFoundPage extends Component {
    render(){
        return(
            <>
            <h1>NotFound</h1>
            <img src={logo}/>
            </>
        )
    }
}

export default NotFoundPage;