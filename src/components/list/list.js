
import React from 'react';
import http  from '../../api/http';
import {Link} from 'react-router-dom';

import {song} from '../../redux/action';
import store from '../../redux/store';

class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list:null,
            song:""
        }
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
            <div>
                {List}
                <audio  id="singSong"></audio>
            </div>
        )
    }

    componentDidMount(){
        console.log('==list==',this.props.match.params.data)
        var _this = this;
        var id = this.props.match.params.data;
        http.redSong(id).then(res=>{
            console.log(res)
            _this.setState({
                list:res.data.list.list.info
            })
        })
    }

    toPLay(e){
        // console.log(id,'id')
        var _this = this;
        console.log(e.target)
        http.getSong(e.target.getAttribute('data')).then(res=>{
            console.log(res.data.url)
            // _this.setState({
            //     song:res.data.url
            // })
            store.dispatch(song(res.data.url))
            var ctx = document.querySelector('#singSong')
            ctx.src = res.data.url
            ctx.play()
        })
        
    }
}


export default List