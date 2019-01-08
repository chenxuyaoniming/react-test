import React from 'react';
import {Link,HashRouter as Router} from 'react-router-dom';

import './header.scss'

class Header extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div id='header'>
                <div id="logo">
                    网易云音乐
                </div> 
            </div>
        )
    }
}

export default Header




