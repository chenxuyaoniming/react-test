import React from 'react';
import {withRouter} from 'react-router-dom';
import './about.scss'
import http from 'axios';
import Swiper from '../swiper/swiper';
import RedSong from '../redSong/redSong'
import https from '../../api/http';
class About extends React.Component{
    constructor(){
        super()
        this.state = {
            banner:null,
            list:null
        }
    }
    render(){
        
        return(
            <div className='section-wrap'>
                <div className='section-home section-margin'>
                    <Swiper banner={this.state.banner}/>
                    <div className='section-redsong '>
                        <h2>推荐歌单</h2>
                        <RedSong list={this.state.list}/>
                    </div>
                </div>
                
            </div>
        )
    }
    componentDidMount(){
        var _this = this;
        https.banner().then(res=>{
            _this.setState({
                banner:res.data.banner
            })
        })

        https.songList().then(res=>{
            console.log(res.data.plist.list.info,'list')
            this.setState({
                list:res.data.plist.list.info
            })
        })
    }

}

export default withRouter(About)