import React, {Component, Fragment} from 'react';
import {getApolloContext, gql} from '@apollo/client';
import {Table, TableBody, TableRow, TableCell, Form, Button, Divider, FormGroup, FormInput, FormSelect} from 'semantic-ui-react';

const GET_GAME_BY_ID = gql`
    query($id: ID!){
        game(id: $id){
            id
            name
            gameGroup{
                name
            }
        }
    }
`;

const UPDATE_ONE_GAME = gql`
    mutation($id: ID!, $name: String!, $gameGroupId: ID!){
        editGame(id: $id, name: $name, gameGroupId: $gameGroupId){
            id
            name
            gameGroup{
                name
            }
        }
    }
`;

const GET_ALL_GAME_GROUPs = gql`
    {
        gameGroups{
            id
            name
        }
    }
`;

export default class Game extends Component{

    state = {
        id: '',
        name: '',
        gameGroup: '',
        gameGroupList: [],
        fieldName: '',
        fieldGroup: ''
    }

    static contextType = getApolloContext(); 

    componentDidMount = async ()=>{
        //console.log(this.props.history.location.state.productId);
        const {client} = this.context;
        const response = await client.query({
            query: GET_GAME_BY_ID,
            variables: {
                id: this.props.history.location.state.gameId
            }
        });
        const {id, name, gameGroup} = response.data.game;
        this.setState({id: id, name: name, gameGroup: gameGroup.name});

        const response2 = await client.query({query: GET_ALL_GAME_GROUPs});

        this.setState({gameGroupList:  response2.data.gameGroups.map(item => {
            return {key: item.id, text: item.name, value: item.id };
        })});
          
        //console.log(this.state.productGroupList);

    }

    updateGameData = ()=>{
        const {client} = this.context;
        const {id, fieldName, fieldGroup} = this.state;
        client.mutate({
            mutation: UPDATE_ONE_GAME,
            variables: {
                id: id,
                name: fieldName,
                gameGroupId: fieldGroup
            }
        }).then(res => console.log(res))
        .catch(error => console.log(error));
        window.location.reload();
        //console.log({id: id, name: fieldName, price: fieldPrice, productGroupId: fieldGroup});
    }

    handleName = e => this.setState({fieldName: e.target.value});
    handleGroup = (e, {value}) => this.setState({fieldGroup: value});

    render() {
        const {id, name, gameGroup} = this.state;
        return (
            <Fragment>
                <Table definition>
                    <TableBody>
                        <TableRow>
                            <TableCell width={2}>Nombre</TableCell>
                            <TableCell>{name}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Grupo</TableCell>
                            <TableCell>{gameGroup}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Código</TableCell>
                            <TableCell>{id}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Divider hidden/>
                <Form>
                    <FormGroup widths='equal'>
                        <FormInput label='Nombre Juego' placeholder='Nombre Juego' onChange={this.handleName}/>
                        <FormSelect options={this.state.gameGroupList} label='Grupo' placeholder='Grupo' onChange={this.handleGroup}/>
                    </FormGroup>
                    <Button content='Confirmar' onClick={this.updateGameData}/>
                </Form>
            </Fragment>
        );
    }
}