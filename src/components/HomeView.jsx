import { left, right } from '@popperjs/core'
import React, { Component, Fragment } from 'react'
import {getApolloContext, gql} from '@apollo/client';
import { Slide, Fade, fadeImages } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Dropdown from 'react-overlays/Dropdown';
import {  Button, Container, Grid, Header, Icon, Image, Item, Label, Menu, Segment, Step, Table, Divider, Modal, Rating, Popup, Card,List} from 'semantic-ui-react'
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Game from './Game'
import GameList from './GameList'
import ModalExample from './Modals'

<link rel="stylesheet" type="text/css" href="semantic.min.css"></link>

const GET_ALL_GAMES = gql`
{ 
games
    {
        id
        name
        author
        image
        filePath
        description
        GameGroup
        {
            name
        }
    }
}`;



export default class HomeView extends Component {
  
  state = {
    id: '',
    name: '',
    author: '',
    image: '',
    description: '',
    filePath:'',
}

  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function () {
    });

    Events.scrollEvent.register('end', function () {
    });

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  state = { activeItem: 'destacados' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  state= {
      games: []
  }
  
  sendToAddGames = () => this.props.history.push({ pathname: '/addgames' });

  static contextType = getApolloContext(); 

    componentDidMount = async ()=>{
      const {client} = this.context;
      const response = await client.query({query: GET_ALL_GAMES});
      this.setState({games: response.data.games});
      console.log(response.data.games);
      const { id, name, author, image, description, filePath } = response.data.games;
      this.setState({ id: id, name: name, author: author, image: image, description: description, filePath: filePath });
      console.log(response.data.game);
    } 

    //showId= id=> console.log(id);

    showGames= ()=>{
      return this.state.games.map(game=>{
          //console.log(game);
              return   <div  className="ui link cards">
                  <div style={{ backgroundColor: 'lightgrey'}} className="card blue color ">
                      <div className="image">
                      <Image size='medium' src={`http://localhost:5000${game.image}`} />
                      </div>
                      <div className="content"> 
                      <div className="header">{game.name}</div>
                          <div style={{color: 'black'}}className="meta">
                              <span className="cinema">Plataforma:</span>
                              <i className="apple icon"></i>
                              <i class="linux icon"></i>
                              <i class="windows icon"></i>
                          </div>
                      <div className="description">
                          {game.description}
                      </div>
                      </div>
                      <div className="extra content">
                          <span style={{color: 'black'}} class='left floated'> Valoración </span>
                          
                      <span className="right floated">
                          <Rating maxRating={5} defaultRating={0} icon='heart' size='large' />
                      </span>
                      </div>
                  </div>
              </div>
      })
    }
    
    showPopGames= ()=>{
      return this.state.games.map(game=>{

              return       <div> 
              <div style={{backgroundColor: '#242C3C', color: 'gray'}} className="ui inverted items left aligned segment ">
              <div class="ui fitted divider"></div>
              <div className="item">
              <div className="ui medium size image verticalAlign ">
              <img src={`http://localhost:5000${game.image}`}/></div>
              <div className="content">
              <a style={{color: 'lightgrey'}} className="header">{game.name}</a>
              <div style={{color: 'lightgrey'}}className="meta">
                  <span className="cinema">Plataforma:</span>
                  <i className="apple icon"></i>
                  <i className="linux icon"></i>
                  <i className="windows icon"></i>
              </div>
              <span style={{color: 'lightgrey'}} className="cinema">Autor: {game.author} </span> <br/>
              <div style={{color: 'lightgrey'}} className="description">
                <div class='left floated'>
                  <Container> 
                  <p> 
                  {game.description}
                  </p>
                  </Container>
                  </div>
              </div>
              
              <div  className="extra">
                  
                  <div className="ui right floated inverted green button" onClick={()=>window.location.href=`http://localhost:5000${game.filePath}`}>
                  Descargar
                  <i className="right download icon"></i>
                  </div>
              </div>
              <div class='bottom floated'>
              <Rating maxRating={5} defaultRating={0} icon='heart' size='large' />
              </div>
              </div>
              </div>
          </div>
          </div>
        })
    }
      

  
  render() {    
    const { activeItem, value } = this.state
    
    const fadeImages = 
    [
      'https://cdn.wccftech.com/wp-content/uploads/2019/01/indie_games_2018.jpg',
      'https://i0.wp.com/onemoregame.ph/wp-content/uploads/2020/06/lithium-city.jpg',
      'https://i.ibb.co/1fPPFcK/Hyper-Light-Drifter.png'
    ];

    const Slideshow = () => {
      return (
        <div className="slide-container">
          <Fade>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[0]} />
              </div>
              <h2>First Slide</h2>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[1]} />
              </div>
              <h2>Second Slide</h2>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[2]} />
              </div>
              <h2>Third Slide</h2>
            </div>
          </Fade>
        </div>
      )
    }

    return (
      
    <div style={{backgroundColor: '#0C1424'}}> 
    <Menu stackable inverted widths= "9" fixed='top' style={{backgroundColor: '#242C3C'}}  >
        <Menu.Item>
        <Image size="" spaced="right" fluid src="https://i.ibb.co/QY64Rmp/ULSA1-1.png"  style={{width:'15%'}} />
        <div><div className='ui left float'><Header as='h2' inverted > IndieZone</Header></div></div>
        </Menu.Item>
        <Menu.Item
          name="Destacados"
          active={activeItem === "Destacados"}
          onClick={() => scroll.scrollTo(-1)}
        >
         <Header class="header" as='h3' inverted >Principal</Header>
        </Menu.Item>
        <Menu.Item
          name="Juegos"
          active={activeItem === "Juegos"}
          onClick={() => scroll.scrollTo(1030)}
        >
        <Header as='h3' inverted >Recientes</Header>
        </Menu.Item>
        <Menu.Item
          name="Solicitud"
          active={activeItem === "Solicitud"}
          onClick={() => scroll.scrollTo(2555)}
        >
        <Header as='h3' inverted >Descargas</Header>
        </Menu.Item>
        <Menu.Item
          name="Subir"
          active={activeItem === "Subir"}
          onClick={this.sendToAddGames}
        >
        <Header as='h3' inverted >Subir Juego</Header>
        </Menu.Item>

      </Menu>
      <div className="slide-container">
        <Fade>
          <div className="each-fade">
            <img src={fadeImages[0]} />
          </div>
          <div className="each-fade">
            <img src={fadeImages[1]} />
          </div>
          <div className="each-fade">
            <img src={fadeImages[2]} />
          </div>
        </Fade>
        </div>
      <div className="ui slide masked reveal image centered" style={{width: '100%', height: '80%'}}>

      </div>


    <div>
    <h1 className="ui header inverted centered segment" style={{backgroundColor: '#1C2434', color: 'lightgrey'}} > Subidas Recientes</h1>
      
    <div style={{backgroundColor: '#0C1424'}} className='ui'>
      <Grid columns='1' divided >
      {this.showGames()}      
      </Grid>
        

    <br/>
    <br/>
    <br/>
    
    <h1 className="ui header centered horizontal inverted divider" style={{ color: 'lightgrey'}} > Descargas</h1>
    {this.showPopGames()}    
      
    </div>
    </div>
    <div >
    <br></br>
    <h3 style={{color: 'lightgrey'}} class="ui inverted header top alinged">¿Quiéres que tu juego se muestre aqui?... ¡contactanos!</h3>

    </div>
    <br></br>
    </div>
    
    )
  }
}