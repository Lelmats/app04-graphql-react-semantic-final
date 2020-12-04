import React, {Component, Fragment} from "react";
import {Divider, Table, TableBody, TableRow, TableCell, Button, Select} from 'semantic-ui-react';

import {getApolloContext, gql} from '@apollo/client';

const GET_ALL_GROUPS= gql`
    {
        gameGroups{
            id
            name
            games
            {
                id
                name
            }
        }
    }
`;

export default class GameGroupList extends Component{

    static contextType = getApolloContext(); 

    state = {
        gameGroups: [],
        isLoading: true,
        groupsOptions: [],
        games: []
    }

    //handleGroup = (e, {value}) => this.setState({fieldGroup: value});

    handleGroup = (e, {value}) => {
        //console.log(value);
        const group = this.state.gameGroups.find(group => group.id === value);
        //console.log(group.products);
        this.setState({games: group.games});
        console.log(this.state.games);
    }
    

    inspectGame = id => this.props.history.push({pathname: '/game', state: {gameId: id}});


    componentDidMount = async ()=>{
        const {client} = this.context;
        const response = await client.query({query: GET_ALL_GROUPS});
        this.setState({gameGroups: response.data.gameGroups, isLoading: response.loading, 
        groupsOptions: response.data.gameGroups.map(group =>{
            return {key: group.id, value: group.id, text: group.name}
        })});
        //console.log(this.state.productGroups);
        //console.log(response.loading);
    }

    showGroups = ()=> {
        const {isLoading, gameGroups, games} = this.state;
            return games.map(p =>{
                //return <div key={p.id}>{p.name}</div>;
                return <Fragment>
                    <Button floated='right' primary content='Inspeccionar' onClick={()=>this.inspectGame(p.id)}/>
                    <Divider hidden/>
                    <Table definition>
                    <TableBody>
                            <TableRow>
                                <TableCell width={2}>Nombre</TableCell>
                                <TableCell>{p.name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Código</TableCell>
                                <TableCell>{p.id}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Divider/>                   
                </Fragment>
            });
    }

    
    render() {
        return (
            <Fragment>
                <Select placeholder='Selecciona un grupo' options={this.state.groupsOptions} onChange={this.handleGroup}/>
                {this.showGroups()}
            </Fragment>
        );
    }
}