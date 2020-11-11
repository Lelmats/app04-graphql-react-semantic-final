import React, { Component } from 'react'
import {  Button, Container, Grid, Header, Icon, Image, Item, Label, Menu, Segment, Step, Table,} from 'semantic-ui-react'
<link rel="stylesheet" type="text/css" href="semantic.min.css"></link>

export default class HomeView extends Component {
  state = { activeItem: 'destacados' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
    <div>
        <Menu stackable inverted widths= "5" fixed='top'>
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
