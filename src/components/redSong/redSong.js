
import React from 'react';

import './redSong.scss'
import {Link,HashRouter as Router} from 'react-router-dom';

class RedSong extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let List = null ;
        if(this.props.list){
            List = this.props.list.map((item,index)=>(
                <Link className='redsong-box' key={index} to={`/list/${item.specialid}`}>
                    <div className='redsong-img'>
                        <img src={item.user_avatar}/>
                    </div>
                    <b>{item.specialname}</b>
                </Link>
            ))
        }
        
        return(
            <div className='redsong-list'>

                    {List}
                
            </div>
        )
    }
}

export default RedSong