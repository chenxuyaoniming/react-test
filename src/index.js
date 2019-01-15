import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';

import Home from './components/home/home'
class Index extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Router>
                <div>
                    <Route path='/'  component={Home}></Route>
                </div>
            </Router>
        )
    }
}


export default Index