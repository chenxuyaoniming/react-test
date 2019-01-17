import React from 'react';
import { List, Avatar } from 'antd';
import './songList.scss';

class SongList extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let list ;
        console.log(this.props.data,'songList')
        if(this.props.data.length>0){
            list = <List
                    itemLayout="horizontal"
                    dataSource={this.props.data}
                    renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                        title={item.fileName}
                        />
                    </List.Item>
                )}/> 
        }else{
            list = <p>现在没有歌单奥</p>
        }
        return(
            <div className='songList-wrap'>
                {
                   list 
                }
            </div>
        )
    }
}


export default SongList