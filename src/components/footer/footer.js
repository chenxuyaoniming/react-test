
import React from 'react';

import './footer.scss';

import store from '../../redux/store';

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div id='footer' onMouseEnter={this.enter.bind(this)} ref='footer'
                 onMouseLeave = {this.out.bind(this)}
            >
                
            </div>
        )
    }

    enter(){
        console.log(this);
        this.refs.footer.removeAttribute('class')
        this.refs.footer.setAttribute('class','toShow')
    }

    out(){
        setTimeout((res)=>{
            this.refs.footer.removeAttribute('class')
            this.refs.footer.setAttribute('class','toHidden')
        },3000)

    }

    
}
store.subscribe(()=>{
    console.log(store.getState(),'store')
})
export default Footer