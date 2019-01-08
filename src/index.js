import React from 'react';
import {HashRouter as Router,Route,Link ,Redirect,Switch} from 'react-router-dom';
import About from './components/about/about'
import './index.scss'
import Header from './components/header/header'
import Footer from './components/footer/footer'
class Home extends React.Component{
    constructor(){
        super();

    }

    render(){
        return(
            <div id='index'>
                <Header/>
                
                    <Router>
                        <Switch>
                            <Route path='/about' component={About} />
                            <Redirect from='/' to='/about' />

                        </Switch>
                    </Router>
                    
                
                <Footer/>
            </div>
           
        )
    }
}


export default Home