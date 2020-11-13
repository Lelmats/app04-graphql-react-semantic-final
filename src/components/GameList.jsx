import React, {Component, Fragment} from 'react';
import {Divider, Table, TableBody, TableRow, TableCell, Button} from 'semantic-ui-react';

import {getApolloContext, gql} from '@apollo/client';

const GET_ALL_GAMES = gql`
    {
        games{
            id
            name
            author
            image
            description
            GameGroup{
                name
            }
        }
    }
`;

export default class GameList extends Component{

    state = {
        games: [],
        isLoading: true
    }

    static contextType = getApolloContext(); 

    componentDidMount = async ()=>{
        const {client} = this.context;
        const response = await client.query({query: GET_ALL_GAMES});
        this.setState({games: response.data.games, isLoading: response.loading});
        //console.log(response.data.games);
    }

    inspectGame = id => this.props.history.push({pathname: '/game', state: {gameId: id}});

    showGames = ()=>{
            return this.state.games.map(p =>{
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
                                <TableCell>Grupo</TableCell>
                                <TableCell>{p.GameGroup.name}</TableCell>
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
                {this.showGames()}
            </Fragment>
        );
    }
}