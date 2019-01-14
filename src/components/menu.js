import React from 'react'
import { Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'
import Button from './button'


class Hamburger extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }
  

  render () {
    var styles = {
        bmBurgerButton: {
          position: 'fixed',
          width: '36px',
          height: '30px',
          right: '16px',
          top: '16px'
        },
        bmBurgerBars: {
          background: '#ffffff'
        },
        bmBurgerBarsHover: {
          background: '#a90000'
        },
        bmCrossButton: {
          height: '30px',
          width: '36px',
          right: '16px',
          top: '16px'
        },
        bmCross: {
          background: '#bdc3c7'
        },
        bmMenuWrap: {
          position: 'fixed',
          height: '100%',
          transition: 'elastic',
          top: '0'
        },
        bmMenu: {
          background: '#373a47',
          padding: '2.5em 1.5em 0',
          fontSize: '1.15em'
        },
        bmMorphShape: {
          fill: '#373a47'
        },
        bmItemList: {
          color: '#b8b7ad',
          padding: '0.8em'
        },
        bmItem: {
          display: 'inline-block'
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)'
        }
      }
    return (
      <Menu styles={ styles} right pageWrapId={ "___gatsby" }>
              <Link to="/" activeClassName="active">Wedding</Link>
            <Link to="/accommodation" activeClassName="active">Accommodation</Link>
              <Link to="/galiano" activeClassName="active">Galiano</Link>
              <Link to="/getting-here" activeClassName="active">Getting to Canada</Link>
              <Link to="/travel" activeClassName="active">Travel</Link>
              <Button href="#rsvp" text="RSVP"></Button>
      </Menu>
    );
  }
}

export default Hamburger