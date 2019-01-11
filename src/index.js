import React from 'react';
import {BrowserRouter as Router,Route,Link ,Redirect,Switch} from 'react-router-dom';
import About from './components/about/about'
import './index.scss'
import Header from './components/header/header'
import Footer from './components/footer/footer'

import List from './components/list/list'
class Home extends React.Component{
    constructor(){
        super();
        this.state={
            name:'header'
        }
    }

    render(){
        return(
            <Router>
                <div id='index'>     
                    <Header data={this.state.name}/>               
                            <Switch>
                                <Route path='/about' component={About} />
                                <Route path='/list' component={List}/>
                                <Redirect from='/' to='/about' />
                            </Switch>
                    <Footer/>  
                </div>
            </Router>

           
        )
    }
}


export default Home