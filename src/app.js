// import './app.css'
import {HashRouter as Router,Route,Link } from 'react-router-dom';
import './app.scss'
import React from 'react';
import ReactDom from 'react-dom';
import Index from './index';

import 'antd/dist/antd.css'

ReactDom.render(<Index/>,document.getElementById('app'))

console.log('===启动成功===')