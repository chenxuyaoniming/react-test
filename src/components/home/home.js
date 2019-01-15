import React from 'react';
import {BrowserRouter as Router,Route,Link ,Redirect,Switch,withRouter} from 'react-router-dom';
import About from '../about/about'
import './home.scss'
import Header from '../header/header'
import Footer from '../footer/footer'
import {Button,Icon} from 'antd';
import List from '../list/list'
class Home extends React.Component{
    constructor(){
        super();
        this.state={
            name:'header'
        }
    }

    aaa(){
        console.log(this.props)
        this.props.history.push('/')
    }
    render(){
        return(
            
                <div id='index'>     
                    <Header data={this.state.name}/>
                    <div className='index-back' >
                        {/* <Link to='/'> */}
                        <Button type="primary"  onClick={this.aaa.bind(this)}>
                            <Icon type="left" />
                        </Button>
                        {/* </Link> */}
                       
                    </div>               
                    <Switch>
                        <Route path='/' exact component={About} />
                        <Route path='/list' exact component={List}/>
                        {/* <Redirect from='/' to='/about' /> */}
                    </Switch>
                    <Footer/>  
                </div>
            
        )
    }
}


export default withRouter(Home)