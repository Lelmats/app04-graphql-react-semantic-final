import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddGame from './AddGame';
import GameList from './GameList';
import Game from './Game';
import HomeView from './HomeView';
import GameGroupList from "./GameGroupList";
import Uploads from "./Upload";
//import ProductList from './ProductList';


export default class Routes extends Component{

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/game' component={Game}/>
                    <Route path='/games' component={GameList}/>
                    <Route path='/groups' component={GameGroupList}/>
                    <Route path='/addgames' component={Uploads}/>
                    <Route path='/' component={HomeView}/>
                    
                    
                </Switch>
            </BrowserRouter>
        );
    }
}