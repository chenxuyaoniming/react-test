import React from 'react';
import {Link,HashRouter as Router} from 'react-router-dom';

import './header.scss';
import http from 'axios';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:null
        }
    } 
    render(){
        return(
            <div id='header'>
                <div id="logo">
                    网易云音乐
                </div> 
                <div className='loginBtn'>
                    <button className='login headerBtn' onClick={this.toLogin}>登陆</button>
                    {this.showRegister()}
                </div>

            </div>
        )
    }

    toLogin(){
        console.log('我登陆了')
        
    }
    showRegister(){
        console.log('register')
        return <button className='headerBtn btnRight'>注册</button>
        
    }

    componentDidMount(o,n){
        console.log(http,'axios')
    }
}

export default Header




