
import React from 'react';
import http  from '../../api/http';
import {Link,withRouter} from 'react-router-dom';
import {Button,Icon} from 'antd';
import {song} from '../../redux/action';
import store from '../../redux/store';

import './list.scss';
class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list:null,
            song:"",
            update:false
        }
    }
    componentWillReceiveProps(data){
        console.log(data,'new')
        this.setState({
            list:data.location.query
        })
    }
    render(){
        let List = null ;
        if(this.state.list){
            List = this.state.list.map((item,index)=>(
                <div className='redSong-list' key={index}  > 
                        <b onClick={this.toPLay} data={item.hash}>{item.filename}</b>
                        <div className='redSong-button'>
                            <Button onClick={this.toPLay} data={item.hash}>播放</Button>
                            <Button onClick={this.toList} data={item.hash}>添加到歌单</Button>
                        </div>
                </div>
            ))
        }
        return(
            <div className='list-wrap'>
                <div className='list'>
                    {List}    
                </div>
            </div>
        )
    }

    componentDidMount(){
        console.log('==list==',this)
        this.setState({
            list:this.props.location.query,
            update:true
        })
    }
    toPLay(e){
        // console.log(id,'id')
        var _this = this;
        http.getSong(e.target.getAttribute('data')).then(res=>{
            var obj = {type:'url',song:res.data}
            console.log(obj)
            store.dispatch(song(obj))
        })
        
    }
    toList(e){
        var _this = this;
        http.getSong(e.target.getAttribute('data')).then(res=>{
            var obj = {type:'list',song:res.data}
            console.log(obj)
            store.dispatch(song(obj))
        })
    }
}


export default withRouter(List)