import React from 'react';
import {HashRouter as Router,Route,Link ,Redirect,Switch} from 'react-router-dom';
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
            <div id='index'>
                <Header data={this.state.name}/>
                
                    <Router>
                        <Switch>
                            <Route path='/about' component={About} />
                            <Route path='/list/:data' component={List}/>
                            <Redirect from='/' to='/about' />

                        </Switch>
                    </Router>
                    
                
                <Footer/>
            </div>
           
        )
    }
}


export default Home