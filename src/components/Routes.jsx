import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeView from './HomeView';
import Uploads from "./Upload";
//import ProductList from './ProductList';


export default class Routes extends Component{

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/addgames' component={Uploads}/>
                    <Route path='/' component={HomeView}/>
                </Switch>
            </BrowserRouter>
        );
    }
}