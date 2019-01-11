
import React from 'react';

import './redSong.scss'
import {Link,HashRouter as Router ,withRouter } from 'react-router-dom';
import http from '../../api/http'

class RedSong extends React.Component{
    constructor(props){
        super(props);
    }
    // to={`/list/${item.specialid}`} query:res.data.list.list.info
    toList(id){
        http.redSong(id).then(res=>{
            console.log(res)
            this.props.history.push({pathname:'/list',query:res.data.list.list.info})
        })
    }

    render(){
        let List = null ;
        if(this.props.list){
            List = this.props.list.map((item,index)=>(
                <a className='redsong-box' key={index} onClick={this.toList.bind(this,item.specialid)}>
                    <div className='redsong-img'>
                        <img src={item.user_avatar}/>
                    </div>
                    <b>{item.specialname}</b>
                </a>
            ))
        }
        
        return(
                <div className='redsong-list'>
                        {List}
                </div>
            
        )
    }
}

export default withRouter(RedSong)