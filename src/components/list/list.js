
import React from 'react';
import http  from '../../api/http';
import {Link} from 'react-router-dom';

import {song} from '../../redux/action';
import store from '../../redux/store';

import './list.scss';
class List extends React.Component{
    constructor(props){
        super(props);
        this.getQuery = this.getQuery.bind(this)
        this.state = {
            list:null,
            song:"",
            update:false
        }
    }
    shouldComponentUpdate(a,b){
        console.log(b,'bbbbbb',this.props.location.query)
        // var data = this.props.location.query
        // this.getQuery(data)

        return true

    }
    render(){
        let List = null ;
        if(this.state.list){
            List = this.state.list.map((item,index)=>(
                <div className='redSong-list' key={index}  > 
                        <b onClick={this.toPLay} data={item.hash}>{item.filename}</b>
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
    getQuery(data){
        this.setState({
            list:data
        })
    }
    toPLay(e){
        // console.log(id,'id')
        var _this = this;
        console.log(e.target)
        http.getSong(e.target.getAttribute('data')).then(res=>{
            store.dispatch(song(res.data))
        })
        
    }
}


export default List