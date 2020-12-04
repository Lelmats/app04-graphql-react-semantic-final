import React, { Fragment, Component, createRef, createRef2 } from 'react';
import { getApolloContext, gql } from '@apollo/client';
import {Form, Button, FormGroup, FormInput, FormSelect, Input,TextArea,Select, Container, Grid, Header, Icon, Image, Item, Label, Menu, Segment, Step, Table, Divider, Rating, Popup, Card,List, Sidebar, Checkbox, Dropdown,Progress} from 'semantic-ui-react';
import axios from 'axios';
//import Modal from 'react-bootstrap/Modal';

const ADD_GAME = gql`
    mutation($name: String!, $author: String!, $image: String!, $filePath: String!, $description: String! ){
        addGame(name: $name, author: $author, image: $image,filePath: $filePath, description: $description){
            id
            name
            author
            image
            filePath
            description
        }
    }
`;

const ADD_FILE = gql`
    mutation($name: String!, $path: String!) {
    addFile(name:$name, path:$path)
        {
            id
            name
            path
        }
    }
`;




export default class Uploads extends Component {

    state = {
        gameGeneroList: [],
        fieldName: '',
        fieldAuthor: '',
        fieldDescription: '',
        file: '',
        getFile: { file: '', path: '' },
        progress: '',
        file2: '',
        getFile2: { file: '', path: '' },
        progress2: '',
        fieldPathFile: '',
        fieldNameFile: '',
        fieldImage: '',
        showModal: false

    }

    constructor() {
        super();
        this.el = React.createRef();
        this.el2 = React.createRef();
    }


    static contextType = getApolloContext();

    //handleGameGenero = (e, { value }) => this.setState({ fieldGameGenero: value });

    handleName = e => this.setState({ fieldName: e.target.value });
    handleAuthor = e => this.setState({ fieldAuthor: e.target.value });
    handleDescription = e => this.setState({ fieldDescription: e.target.value });

    sendToPrincipal = () => this.props.history.push({ pathname: '/' });

    saveGame = ()=>{
        const {fieldName, fieldAuthor, fieldImage, fieldDescription, fieldPathFile } = this.state;
        const {client} = this.context;
        
        client.mutate({
            mutation: ADD_GAME,
            variables: {
                name: fieldName,
                author: fieldAuthor,
                image: fieldImage,
                filePath: fieldPathFile,
                description:fieldDescription
            }
        }).then(res => console.log(res))
        .catch(error => console.log(error));
        this.props.history.push('/');
        console.log({name: fieldName, author: fieldAuthor, image: fieldImage, description: fieldDescription, filepath: fieldPathFile});
        //window.location.reload();
    }

    handleClose = () => {
        this.setState({showModal: false});
        console.log(this.state.showModal);
    }
    
    handleShow = () => {
        this.setState({showModal: true});
        console.log(this.state.showModal);
    }

    cancel = () => {
        this.props.history.push('/');
    }

    handleShowValidate = () => {
        this.setState({showModalValidate: true});
    }
    handleCloseValidate = () => {
        this.setState({showModalValidate: false});
    }
    
    render() {
        const { value } = this.state

        const { file, progress, file2, progress2 } = this.state;
        const setFile = file => this.setState({ file });
        const setProgess = progress => this.setState({ progress });

        const setFile2 = file2 => this.setState({ file2 });
        const setProgess2 = progress2 => this.setState({ progress2 });


        const saveFile = () => {
            const { fieldNameFile, fieldPathFile } = this.state;
            const { client } = this.context;
            client.mutate({
                mutation: ADD_FILE,
                variables: {
                    name: fieldNameFile,
                    path: fieldPathFile
                }
            }).then(res => console.log(res))
                .catch(error => console.log(error));
            console.log(client);
            console.log(this.state.fieldNameFile);
            console.log(this.state.fieldPathFile);
        }

        const handleChange = (e) => {
            setProgess(0)
            const file = e.target.files[0]
            console.log(file);
            setFile(file)
        }

        const handleChange2 = (e) => {
            setProgess2(0)
            const file2 = e.target.files[0]
            console.log(file2);
            setFile2(file2)
        }

        const uploadFile = () => {
            const formData = new FormData();
            formData.append('file', file)
            axios.post('http://localhost:5000/upload', formData, {
                onUploadProgress: (ProgressEvent) => {
                    let progress = Math.round(ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
                    setProgess(progress)
                }
            }).then(res => {
                console.log(res);
                this.setState({ getFile: { name: res.data.file, path: 'http://localhost:5000' + res.data.path } })
                this.setState({ fieldNameFile: res.data.file });
                this.setState({ fieldPathFile: res.data.path });
            }).catch(err => console.log(err))
        }
        
        const uploadImages = () => {
            const formData2 = new FormData();
            formData2.append('file', file2)
            axios.post('http://localhost:5000/upload', formData2, {
                onUploadProgress: (ProgressEvent) => {
                    let progress2 = Math.round(ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
                    setProgess2(progress2)
                }
            }).then(res => {
                console.log(res);
                this.setState({ getFile2: { name: res.data.file, path: 'http://localhost:5000' + res.data.path } })
                this.setState({ fieldImage: res.data.path });
                //getFile({ name: res.data.name, path: 'http://localhost:5000' + res.data.path })
                // el.current.value = "";
            }).catch(err => console.log(err))
        }
        console.log(this.state.name)
        console.log(this.state.fieldImage)
        console.log(this.state.filePath)
        const { activeItem } = this.state
        return (
            
            <div style={{backgroundColor: '#0C1424'}}>
            <br/>
            <br/>
            <br/>
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
                    <div id="contenido">
                        <div class="fondo">

                            <Segment style={{ backgroundColor: '#1a1a2e' }}>
                                <div>
                                    <Header inverted as='h1' textAlign='center'>Sube un juego</Header>
                                </div>

                                <Form inverted style={{ backgroundColor: '#1a1a2e' }} float="left">
                                    <Form.Group widths='equal'>
                                        <Form.Input textAlign="left" fluid label='Nombre' placeholder='Nombre' onChange={this.handleName} />
                                        <Form.Input fluid label='Autor' placeholder='Autor' onChange={this.handleAuthor} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.TextArea rows={1} width='12' label='Descripción' placeholder='Descripción que la gente verá de tu juego' onChange={this.handleDescription} />
 
                                    </Form.Group>
                                    <Form.Field textAlign="left" fluid label='Imagen del juego (Preferencia 16:9 para mejor visual)' />

                                    <div className="file-upload">
                                        <input type="file" ref={this.el2} onChange={handleChange2} />
                                        <br/>
                                        <br/>
                                        <Form.Button size="medium" inverted onClick={uploadImages}>Subir</Form.Button>
                                    </div>
                                    <div className="progessBar" style={{ width: progress2 }}>{progress2}</div>
                                    <hr />

                                    <Form.Field textAlign="left" fluid label='Archivo(Rar,Zip)' />

                                    <div className="file-upload">
                                        <input type="file" ref={this.el} onChange={handleChange} />
                                        <br/>
                                        <Form.Button size="medium" inverted onClick={uploadFile}>Subir</Form.Button>
                                    </div>
                                    <div className="progessBar" style={{ width: progress }}>{progress}</div>
                                    <hr />

                                    <center>
                                        <Form.Button inverted onClick={() => this.saveGame()}> Publicar</Form.Button>
                                    </center>
                                    
                                </Form>
                            </Segment>
                            
                        </div>
                    </div>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        );
    }
}