import React, { Component } from 'react'
import {  Button, Container, Grid, Header, Icon, Image, Item, Label, Menu, Segment, Step, Table, Divider, Modal} from 'semantic-ui-react'
import Game from './Game'
import GameList from './GameList'
<link rel="stylesheet" type="text/css" href="semantic.min.css"></link>

export default class HomeView extends Component {
  state = { activeItem: 'destacados' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
    <div style={{backgroundColor: '#0C1424'}}>
        <Menu stackable inverted widths= "5" fixed='top' style={{backgroundColor: '#242C3C'}}>
        <Menu.Item>
          <Image size="mini" spaced="right" src="https://i.ibb.co/QY64Rmp/ULSA1-1.png" />
          Games ULSA
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
      <br/><br/> <br/>
    <div class="ui slide masked reveal image">
    <Image src="https://i.ibb.co/1fPPFcK/Hyper-Light-Drifter.png" className="visible content"/>
    <Image src="https://i.ibb.co/HHS0V9C/0-Bf7-Gu4-Gj1-CCD5-Hxj.jpg" className="hidden content"/>
    </div>
    <div>
        <div style={{backgroundColor: '#242C3C'}} class="ui inverted items container segment">

        <div class="ui inverted divider"></div>
    <div class="item">
        <div class="image">
        <img src="https://i.ibb.co/4pmx27p/forager.jpg"/>
        </div>
        <div class="content right floated" >
        <a class="header">{Game.name}</a>
        <div class="meta">
            <span class="cinema">Union Square 14</span>
        </div>
        <div class="description">
            <p></p>
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
        <div class="image">
        <img src="https://i.ibb.co/WgyDvr7/astrologaster-indiehub-1.jpg"/>
        </div>
        <div class="content">
        <a class="header">Astrologaster</a>
        <div class="meta">
            <span class="cinema">IFC Cinema</span>
        </div>
        <div class="description">
            <p></p>
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
        <div class="image">
        <img src="https://i.ibb.co/p1SYqtg/islanders-game-indiehub.jpg"/>
        </div>
        <div class="content">
        <a class="header">Islanders</a>
        <div class="meta">
            <span class="cinema">IFC</span>
        </div>
        <div class="description">
            <p></p>
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
        <div class="image">
        <img src="https://i.ibb.co/Wx2c7bM/fasplash-2018-sec-pr.jpg"/>
        </div>
        <div class="content">
        <a class="header">Lel</a>
        <div class="meta">
            <span class="cinema">IFC</span>
        </div>
        <div class="description">
            <p>
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
