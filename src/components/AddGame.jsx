import React, {Component, Fragment} from "react";
import {getApolloContext, gql} from '@apollo/client';

import {Form, Button, FormGroup, FormInput, FormSelect, Input,TextArea,Select, Container, Grid, Header, Icon, Image, Item, Label, Menu, Segment, Step, Table, Divider, Modal, Rating, Popup, Card,List} from 'semantic-ui-react';

const ADD_GAME = gql`
    mutation($name: String!, $author: String!, $image: String!, $description: String!){
        addGame(name: $name, author: $author, image: $image, description: $description){
            id
            name
            author
            image
            description
            GameGroup
        {
            name
        }
        }
    }
`;

export default class AddGame extends Component{
    state = { activeItem: 'destacados' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    state = { 
        GameGroup: [],
        fieldName: '',
        fieldAuthor: '',
        fieldImage: '',
        fieldDescription: '',
    }

    sendToPrincipal = () => this.props.history.push({ pathname: '/' });
    
    static contextType = getApolloContext(); 

    handleName = e => this.setState({fieldName: e.target.value});
    handleAuthor = e => this.setState({fieldAuthor: e.target.value});
    handleImage= e => this.setState({fieldImage: e.target.value});
    handleDescription = e => this.setState({fieldDescription: e.target.value});

    /*
    componentDidMount = async ()=>{
        const {client} = this.context;

        const response = await client.query({query: GET_ALL_GAME_GROUPs});

        this.setState({gameGroupList:  response.data.gameGroups.map(item => {
            return {key: item.id, text: item.name, value: item.id };
        })});
    }*/

    saveGame = ()=>{
        const {fieldName, fieldAuthor, fieldImage, fieldDescription} = this.state;
        const {client} = this.context;
        
        client.mutate({
            mutation: ADD_GAME,
            variables: {
                name: fieldName,
                author: fieldAuthor,
                image: fieldImage,
                description:fieldDescription
            }
        }).then(res => console.log(res))
        .catch(error => console.log(error));
        this.props.history.push('/');
        console.log({name: fieldName, author: fieldAuthor, image: fieldImage, description: fieldDescription});
        //window.location.reload();
    }

    render() {
        const { activeItem, value } = this.state
        return (
            <div style={{backgroundColor: '#0C1424'}}>
            <Container  style={{backgroundColor: '#0C1424'}}>
            <Menu stackable inverted widths= "9" fixed='top' style={{backgroundColor: '#242C3C'}}  >
            <Menu.Item>
            <Image size="" spaced="right" fluid src="https://i.ibb.co/QY64Rmp/ULSA1-1.png"  style={{width:'15%'}} />
            <div><div className='ui left float'><Header as='h2' inverted > IndieZone</Header></div></div>
            </Menu.Item>

            <Menu.Item
              name="Destacados"
              active={activeItem === "Destacados"}
              onClick={this.sendToPrincipal}
            >
            <Header class="header" as='h3' inverted >Principal</Header>
            </Menu.Item>
            </Menu>
            
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Header class="header" as='h1' inverted >Formulario para publicar juego</Header>
            <br/>
            <br/>
            <Form inverted> 
            <Form.Group widths='equal'>
              <Form.Field class='inverted'
                id='form-input-control-first-name'
                control={Input}
                label='Nombre del juego'
                placeholder='First name'
                onChange={this.handleName}
              />
              <Form.Field
                id='form-input-control-last-name'
                control={Input}
                label='Desarollador'
                placeholder='Autor del juego'
                onChange={this.handleAuthor}
              />
              <Form.Field
                id='form-input-control-gender-name'
                control={Input}
                label='imagen/Cover'
                placeholder='Link de imagen png'
                onChange={this.handleImage}
              />
            </Form.Group>
            <Form.Field
              id='form-textarea-control-opinion'
              control={TextArea}
              label='Descripción'
              placeholder='Descripción o sinopsis de tu juego'
              onChange={this.handleDescription}
            />
            <Form.Field
              id='form-button-control-public'
              control={Button}
              content='Confirm'
              onClick={()=>this.saveGame()}
            />
          </Form>
          </Container>
          {/*<Upload/>
          <Files/>*/}
          <br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </div>
    )}
 }

