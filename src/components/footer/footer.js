
import React from 'react';

import './footer.scss';
import { Avatar ,Button,message , Progress} from 'antd';
import store from '../../redux/store';
var timer ;
class Footer extends React.Component{
    constructor(props){
        super(props);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.onchanges = this.onchanges.bind(this)
        this.state = {
            url:[],
            count:0,
            playSong:null
        }
    }

    render(){
        return(
            <div id='footer' onMouseEnter={this.enter.bind(this)} ref='footer'
                 onMouseLeave = {this.out.bind(this)}
            >   
                <div className='footer-content'>
                    <div className='user-header'>
                        <Avatar icon='user' style={{height:'100%',width:'100%',}}></Avatar> 
                    </div>
                    <p className='user-name'>正在播放：<b>{this.state.playSong ? this.state.playSong.fileName : null}</b></p>
                    

                    <div className='user-contr'>
                        <Button shape="circle" type="primary" style={{color:'#fff',fontSize:'14px',height:'40px',width:'40px'}} onClick={this.play}>播放</Button>
                        <Button shape="circle" type="primary" style={{color:'#fff',fontSize:'14px',height:'40px',width:'40px'}} onClick= {this.pause}>暂停</Button>
                        <Button shape="circle" type="primary" style={{color:'#fff',fontSize:'14px',height:'40px',width:'40px'}}>音量+</Button>
                        <Button shape="circle" type="primary" style={{color:'#fff',fontSize:'14px',height:'40px',width:'40px'}}>音量—</Button>
                    </div>

                    <audio ref='audio'></audio>
                </div>
                
                
            </div>
        )
    }
    onchanges(){
        console.log(store.getState(),'getstate')
        this.setState({
            playSong:store.getState().song
        })
        this.audio = this.refs.audio;
        this.audio.src = this.state.playSong.url;
        this.audio.play()

    }
    componentDidMount(){
        store.subscribe(this.onchanges)
    }
    shouldComponentUpdate(a,b){
        console.log(a,b,'update')
        
        return true;
    }

    enter(){
        clearTimeout(timer)
        this.refs.footer.removeAttribute('class')
        this.refs.footer.setAttribute('class','toShow')
    }

    out(){
        timer = setTimeout((res)=>{
            this.refs.footer.removeAttribute('class')
            this.refs.footer.setAttribute('class','toHidden')
        },3000)

    }
    pause(){
        this.audio.pause()
    }
    play(){
        if(this.audio){
            this.audio.play()
        }else{
            message.info('请选择歌曲。。。')
        }
    }

}

export default Footer