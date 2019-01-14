import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Button from './button'
import Hamburger from './Menu'

import Logo from '-!svg-react-loader?name=LogoTop!../images/small-logo.svg';
import { timingSafeEqual } from 'crypto';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 24px 8px 8px 24px;
  z-index: 10;
  border-bottom: ${props => props.isTop ? "0px solid #eee" : "1px solid #eee"};
  background-color: ${props => props.isTop ? "rgba(255,255,255,0)" : "rgba(255,255,255,1)"};
  box-shadow: ${props => props.isTop ? "0 0 0 rgba(0,0,0,0)" : "0 1px 1px rgba(0,0,0,0.05)"};
  color: ${props => props.isTop ? "black" : "black"};
  h1 {
    line-height: 0;
    padding-bottom: 0;
  }
  svg {
    display: ${props => props.noLogo ? 'none' : 'block'}!important;
    width: 50px;
    path {
      fill: ${props => props.isTop ? props.theme.white : '#444'}!important;
    }
    
  }

  > div > nav {
    display:none;
    @media only screen and (min-width: ${props => props.theme.aboveMobile}) {
      display: block;
      position: relative;

      ul {
        display: flex;
        
        margin: 0;
        li {
          margin-right: 32px;
          text-transform:  uppercase;
          a:link, a:visited {
              color: ${props => props.isTop ? props.theme.white : '#444'};
              text-decoration: none;
              padding-bottom: 8px;
              font-size: .9rem;
          }
          a:hover, a:active {
              color: ${props => props.theme.primary};
          }

          a.active {
            border-bottom: 3px solid ${props => props.isTop ? props.theme.white : '#444'};
          }
        } 
      }
    }
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    display: ${props => props.noLogo ? 'none' : 'block'};
  }


`


const HeaderElement = ({ siteTitle, isTop, noLogo }) => (
  <StyledHeader className={siteTitle} isTop={isTop} noLogo={noLogo}>
    
    <Container>
    
      <h1 style={{ margin: 0 }}>
      
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          <Logo></Logo>
        </Link>
        
      </h1>
      <Hamburger></Hamburger>
      <nav>
        <ul>
          <li>
              <Link to="/" activeClassName="active">Wedding</Link>
          </li>
          <li>
            <Link to="/accommodation" activeClassName="active">Accommodation</Link>
          </li>
          <li>
              <Link to="/galiano" activeClassName="active">Galiano</Link>
          </li>
          <li>
              <Link to="/getting-here" activeClassName="active">Getting to Canada</Link>
          </li>
          <li>
              <Link to="/travel" activeClassName="active">Travel</Link>
          </li>
          <li>
              <Button href="#rsvp" text="RSVP"></Button>
          </li>
        </ul>
      </nav>
      
    </Container>
    
  </StyledHeader>
)

export default class Header extends React.Component {
  
  state = {
    isTop: true,
    noLogo: this.props.noLogo,
    menuOpen: false
  };

  handleMenuClick() {
    this.setState({menuOpen:!this.state.menuOpen});
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 500;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    });

  }
  componentWillUnmount() {
    document.removeEventListener('scroll', () => {});
  }
  render () {
    return (
      <HeaderElement isTop={this.state.isTop} noLogo={this.state.noLogo} menuOpen={this.state.menuOpen}></HeaderElement>
    )

  };
};
