
import React from 'react';

import './footer.scss';
import { Avatar ,Button,message , Progress} from 'antd';
import store from '../../redux/store';
import SongList from '../songList/songList';

var timer ;
class Footer extends React.Component{
    constructor(props){
        super(props);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.onchanges = this.onchanges.bind(this);
        this.AutoPlay = this.AutoPlay.bind(this);
        this.audioRe = this.audioRe.bind(this);
        this.audioAdd = this.audioAdd.bind(this);
        this.state = {
            url:[],
            count:0,
            songList:[],
            playSong:null,
            time:0,
            oldSong:null,
            oldSongList:null,
            isshow:false
        }
    }
    toShowList(){
        this.setState({
            isshow:!this.state.isshow
        })
    }
    render(){
        return(
            <div id='footer' onMouseEnter={this.enter.bind(this)} ref='footer'
                 onMouseLeave = {this.out.bind(this)}
            >   
                <div className='footer-content'>
                    <div className='user-header' onClick={this.toShowList.bind(this)}>
                        <Avatar icon='user' style={{height:'100%',width:'100%',}}></Avatar> 
                    </div>
                    <p className='user-name'>正在播放：<b>{this.state.playSong ? this.state.playSong.fileName : null}</b></p>
                    <div className='user-progress'>
                        <Progress percent={this.state.time} status="active" style={{marginTop:'10px'}}/>
                    </div>

                    <div className='user-contr'>
                        <Button shape="circle" type="primary" style={{color:'#fff',fontSize:'14px',height:'40px',width:'40px'}} onClick={this.play}>播放</Button>
                        <Button shape="circle" type="primary" style={{color:'#fff',fontSize:'14px',height:'40px',width:'40px'}} onClick= {this.pause}>暂停</Button>
                        <Button type="primary" style={{color:'#fff',fontSize:'14px',height:'40px',width:'80px'}} onClick=
                        {this.audioAdd}>上一首</Button>
                        <Button type="primary" style={{color:'#fff',fontSize:'14px',height:'40px',width:'80px'}} onClick=
                        {this.audioRe}>下一首</Button>
                    </div>
                    {
                        this.state.isshow?(<div className='user-songList'>
                        <SongList data={this.state.songList} />
                    </div>):false
                    }
                    
                    <audio ref='audio'></audio>
                </div>
                
                
            </div>
        )
    }
    onchanges(){
        console.log(store.getState())
        var that = this;
        var obj = store.getState();
        if(obj.id === 'url'){
            that.setState({
                playSong:obj.song,
                songList:[obj.song,...that.state.songList],
                count:0
            })
            this.AutoPlay(this.state.playSong.url)
        }
        if(obj.id === 'list'){
            that.setState({
                songList:[...this.state.songList,obj.songList]
            })
            console.log(this.state.songList,'歌单')
        }
    }
    componentDidMount(){
        console.log('didmount')
        this.audio = this.refs.audio;
        store.subscribe(this.onchanges)
    }
    shouldComponentUpdate(a,b){
       
        return true;
    }
    AutoPlay(url){
        this.audio.src = url;
        this.audio.play()
        var _that = this;
        this.audio.timer = setInterval(()=>{
            var t = Math.floor((_that.audio.currentTime/_that.audio.duration)*100) ;
            _that.setState({
                time:t
            })
            if(t === 1000){
                clearInterval(_that.audio.timer);
                var id = ++ this.state.count;
                if(_that.state.songList[id]){
                    _that.setState({
                        playSong:_that.state.songList[id],
                        count:id
                    })
                    _that.AutoPlay(_that.state.playSong.url)
                }else{
                    message.info('歌曲已经播放完毕！！')
                }
            }
        },500)
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
            if(this.audio.src){
                this.audio.play()
            }else{
                if(this.state.songList.length>0){
                    var url = this.state.songList[0].url
                    this.setState({
                        count:0,
                        playSong:this.state.songList[0]
                    })
                    this.AutoPlay(url)
                }else{
                    message.info('歌单里还没有歌曲呢～')
                }
                
            }
        }else{
            message.info('请选择歌曲。。。')
        }
    }
    audioAdd(){
        var id = this.state.count;
            id--;
        if(id>=0){
            this.setState({
                playSong:this.state.songList[id],
                count:id
            })
            this.AutoPlay(this.state.playSong.url)
        }else{
            message.info('已经是最后一首了')            
        }
       
    }
    audioRe(){
        var id = this.state.count;
            id++;
        if(id<this.state.songList.length){
            this.setState({
                playSong:this.state.songList[id],
                count:id
            })
            this.AutoPlay(this.state.playSong.url)
        }else{
            message.info('已经是最后一首了')            
        }
    }

}

export default Footer