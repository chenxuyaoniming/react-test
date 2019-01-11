import React from 'react';
import {Link,HashRouter as Router ,withRouter } from 'react-router-dom';
import { Input } from 'antd';
import './header.scss';


import http from '../../api/http';

const Search = Input.Search;
class Header extends React.Component{
    constructor(props){
        super(props);
        this.getSong = this.getSong.bind(this);
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
                    <div id='search'>
                        <Search placeholder="歌曲搜索。。。" onSearch={value => this.getSong(value)} enterButton className='input'/>
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
    getSong(id){
        http.searchSong(id).then(res=>{
            console.log(res,'search')
            this.props.history.push({pathname:'/list',query:res.data.data.info})
        })
    }
}

export default withRouter(Header)




