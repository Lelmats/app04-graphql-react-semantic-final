import { left, right } from '@popperjs/core'
import React, { Component } from 'react'
import {  Button, Container, Grid, Header, Icon, Image, Item, Label, Menu, Segment, Step, Table, Divider, Modal} from 'semantic-ui-react'
import Game from './Game'
import GameList from './GameList'
<link rel="stylesheet" type="text/css" href="semantic.min.css"></link>

export default class HomeView extends Component {
  state = { activeItem: 'destacados' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  gameList = ()=> this.props.history.push('/games'); 
  addGame = ()=> this.props.history.push('/addgame'); 
  gameGroupList = ()=> this.props.history.push('/groups'); 

  render() {
    const { activeItem } = this.state
    return (
    <div style={{backgroundColor: '#0C1424'}}>
        <Menu stackable inverted widths= "5" fixed='top' style={{backgroundColor: '#242C3C'}}>
        <Menu.Item>
        <div>
          <Image size="mini" spaced="right" src="https://i.ibb.co/QY64Rmp/ULSA1-1.png" />
          Games ULSA
        </div>
        </Menu.Item>
        <Menu.Item
          name="Destacados"
          active={activeItem === "Destacados"}
          onClick={this.handleItemClick}
        >
          Destacados
        </Menu.Item>
        <Menu.Item
          name="Juegos"
          active={activeItem === "Juegos"}
          onClick={this.handleItemClick}
        >
          Juegos
        </Menu.Item>
        <Menu.Item
          name="Solicitud"
          active={activeItem === "Solicitud"}
          onClick={this.handleItemClick}
        >
          Solicitudes!
        </Menu.Item>
      </Menu>
    <div class="ui slide masked reveal image centered" style={{width: '100%', height: '80%'}}>
    <Image src="https://i.ibb.co/1fPPFcK/Hyper-Light-Drifter.png" className="visible content"/>
    <Image src="https://i.ibb.co/HHS0V9C/0-Bf7-Gu4-Gj1-CCD5-Hxj.jpg" className="hidden content"/>
    </div>
    <div>
        <div style={{backgroundColor: '#1C2434', color: 'gray'}} class="ui inverted items left aligned segment">
        <div class="ui inverted divider"></div>
    <div  class="item">
        <div class="ui medium size image">
        <img src="https://i.ibb.co/4pmx27p/forager.jpg"/>
        </div>
        <div  class="content" >
        <a style={{color: 'lightgrey'}} class="header">{Game.name}</a>
        <div style={{color: 'lightgrey'}}class="meta">
            <span class="cinema">Plataforma:</span>
            <i class="apple icon"></i>
            <i class="linux icon"></i>
            <i class="windows icon"></i>
        </div>
        <div style={{color: 'lightgrey'}} class="description">
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                but also the leap into electronic typesetting, remaining essentially unchanged. It was popularise
                d in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recen
                tly with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
        <div class="extra">
            <div class="ui right floated inverted green button">
            Descargar
            <i class="right download icon"></i>
            </div>
        </div>
        </div>
    </div>
    <div class="ui inverted divider"></div>
    <div class="item">
    <div class="ui medium size image">
        <img src="https://i.ibb.co/WgyDvr7/astrologaster-indiehub-1.jpg"/>
        </div>
        <div class="content">
        <a style={{color: 'lightgrey'}} class="header">{Game.name}</a>
        <div style={{color: 'lightgrey'}}class="meta">
            <span class="cinema">Plataforma:</span>
            <i class="apple icon"></i>
            <i class="linux icon"></i>
            <i class="windows icon"></i>
        </div>
        <div style={{color: 'lightgrey'}} class="description">
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                but also the leap into electronic typesetting, remaining essentially unchanged. It was popularise
                d in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recen
                tly with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
        <div class="extra">
            <div class="ui right floated inverted green button">
            Descargar
            <i class="right download icon"></i>
            </div>
            onClick={this.handleItemClick}
        </div>
        </div>
    </div>
    <div class="ui inverted divider"></div>
    <div class="item">
    <div class="ui medium size image">
        <img src="https://i.ibb.co/p1SYqtg/islanders-game-indiehub.jpg"/>
        </div>
        <div class="content">
        <a style={{color: 'lightgrey'}} class="header">{Game.name}</a>
        <div style={{color: 'lightgrey'}}class="meta">
            <span class="cinema">Plataforma:</span>
            <i class="apple icon"></i>
            <i class="linux icon"></i>
            <i class="windows icon"></i>
        </div>
        <div style={{color: 'lightgrey'}} class="description">
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                but also the leap into electronic typesetting, remaining essentially unchanged. It was popularise
                d in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recen
                tly with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
        <div class="extra">
            <div class="ui right floated inverted green button">
            Descargar
            <i class="right download icon"></i>
            </div>
        </div>
        </div>
    </div>
    <div class="ui inverted divider"></div>
    <div class="item">
    <div class="ui medium size image">
        <img src="https://i.ibb.co/Wx2c7bM/fasplash-2018-sec-pr.jpg"/>
        </div>
        <div class="content">
        <a style={{color: 'lightgrey'}} class="header">{Game.name}</a>
        <div style={{color: 'lightgrey'}}class="meta">
            <span class="cinema">Plataforma:</span>
            <i class="apple icon"></i>
            <i class="linux icon"></i>
            <i class="windows icon"></i>
        </div>
        <div style={{color: 'lightgrey'}} class="description">
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                but also the leap into electronic typesetting, remaining essentially unchanged. It was popularise
                d in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recen
                tly with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
        <div class="extra">
            <div class="ui right floated inverted green button">
            Descargar
            <i class="right download icon"></i>
            </div>
        </div>
        </div>
    </div>
    <div class="ui inverted divider"></div>
    <div class="item">
    <div class="ui medium size image">
        <img src="https://i.ibb.co/X73G1qG/ooblets.jpg"/>
        </div>
        <div class="content">
        <a style={{color: 'lightgrey'}} class="header">{Game.name}</a>
        <div style={{color: 'lightgrey'}}class="meta">
            <span class="cinema">Plataforma:</span>
            <i class="apple icon"></i>
            <i class="linux icon"></i>
            <i class="windows icon"></i>
        </div>
        <div style={{color: 'lightgrey'}} class="description">
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                but also the leap into electronic typesetting, remaining essentially unchanged. It was popularise
                d in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recen
                tly with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
        <div class="extra">
            <div class="ui right floated inverted green button">
            Descargar
            <i class="right download icon"></i>
            </div>
        </div>
        </div>
    </div>
    </div>
    </div>
    </div>
    )
  }
}

{
/*<Segment inverted attached>
<Menu inverted secondary pointing size={"mini"} widths= "4">
<Image spaced= "right"  size= "mini" src="https://i.ibb.co/QY64Rmp/ULSA1-1.png"  ></Image>   

<Menu.Item
    
    name='destacados'
    active={activeItem === 'destacados'}
    onClick={this.handleItemClick}
  />

  <Menu.Item
    name='juegos'
    active={activeItem === 'juegos'}
    onClick={this.handleItemClick}
  />
  <Menu.Item
    name='solicitud'
    active={activeItem === 'solicitud'}
    onClick={this.handleItemClick}
  />
</Menu >

</Segment> */
}
