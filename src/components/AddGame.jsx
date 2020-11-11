import React, {Component, Fragment} from "react";
import {getApolloContext, gql} from '@apollo/client';
import {Form, Button, FormGroup, FormInput, FormSelect} from 'semantic-ui-react';

const ADD_GAME = gql`
    mutation($name: String!, $gameGroupId: ID!){
        addGame(name: $name, gameGroupId: $gameGroupId){
            id
            name
            GameGroup{
                name
            }
        }
    }
`;

const GET_ALL_GAME_GROUPs = gql`
    {
        GameGroup{
            id
            name
        }
    }
`;


export default class AddGame extends Component{
    state = {
        gameGroupList: [],
        fieldName: '',
        fieldGroup: ''
    }

    static contextType = getApolloContext(); 

    handleName = e => this.setState({fieldName: e.target.value});
    handleGroup = (e, {value}) => this.setState({fieldGroup: value});

    componentDidMount = async ()=>{
        const {client} = this.context;

        const response = await client.query({query: GET_ALL_GAME_GROUPs});

        this.setState({gameGroupList:  response.data.gameGroups.map(item => {
            return {key: item.id, text: item.name, value: item.id };
        })});
    }

    saveGame = ()=>{
        const {fieldName, fieldGroup} = this.state;
        const {client} = this.context;
        
        client.mutate({
            mutation: ADD_GAME,
            variables: {
                name: fieldName,
                gameGroupId: fieldGroup
            }
        }).then(res => console.log(res))
        .catch(error => console.log(error));
        this.props.history.push('/games');
        window.location.reload();
        console.log({name: fieldName, gameGroupId: fieldGroup});
    }

    render() {
        return (
            <Fragment>
                <Form>
                    <FormGroup widths='equal'>
                        <FormInput label='Nombre Juego' placeholder='Nombre Juegof' onChange={this.handleName}/>
                        {//<FormInput type='number' label='Precio' placeholder='Precio' onChange={this.handlePrice}/>
                        }
                        <FormSelect options={this.state.gameGroupList} label='Grupo' placeholder='Grupo' onChange={this.handleGroup}/>
                    </FormGroup>
                    <Button content='Confirmar' onClick={this.saveGame}/>
                </Form>
            </Fragment>
        );
    }
}