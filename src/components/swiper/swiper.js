
import React from 'react';
import {Carousel} from 'antd';
import './swiper.scss'

class Swiper extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let Banner = null;
        if(this.props.banner){
            Banner = this.props.banner.map((item,v)=>(
                <div key={v} className='bannerList'>
                    <div>
                        <img src={item.imgurl} alt='pic' className='bannerPic'/>
                    </div>
                    <b>{item.title}</b>
                </div>
                )
            )
        }
        return(
            <Carousel>
                {Banner}

            </Carousel>
        )
    }

}


export default Swiper