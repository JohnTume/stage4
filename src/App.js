import React from 'react';
import './App.css';
import {MyComponent} from './symptopmnfo';
// import {MyTitle1} from './WarningHeader.js';
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
// import Card from './Cards/CardUI.js/index.js';
import Cards from './Cards/Cards';
// import CommentOverview from './experience/CommentOverview';
import Navi from './navCom/Navi.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {InspireContainer} from './Inspire/InspireContainer';
import CommentsContainer from './commentConnect/CommentsContainer';
import aboutProject from './aboutUs/aboutUs.js'
// import {Divider} from '@material-ui/core';


export class App extends React.Component {
    // for index1 fix image render() {   return (     <div className="App">
    // <MyTitle1></MyTitle1>     <Cards></Cards>     </div>   ); } return( )
    //         <CommentOverview class="centered"></CommentOverview>
    render() {
        return (        
            <BrowserRouter>
                   {/* this Navi is not working */}
                    <Navi className = 'navbar'></Navi>
                <div className="container">
                    <Switch>
                    <Route exact path='/' component={Cards} />
                    <Route exact path='/commentOverview' component={CommentsContainer} />
                    <Route exact path='/Inspire' component={InspireContainer} />
                    <Route exact path='/AboutUs' component={aboutProject} />
                    </Switch>
                </div>
            </BrowserRouter> 
        );
    }
}
