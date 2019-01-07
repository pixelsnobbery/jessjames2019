import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Button from './button'

import Logo from '-!svg-react-loader?name=LogoTop!../images/small-logo.svg';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  padding: 24px 8px 8px 24px;
  z-index: 10;
  border-bottom: ${props => props.isTop ? "0px solid #eee" : "1px solid #eee"};
  background-color: ${props => props.isTop ? "rgba(255,255,255,0)" : "rgba(255,255,255,1)"};
  box-shadow: ${props => props.isTop ? "0 0 0 rgba(0,0,0,0)" : "0 1px 1px rgba(0,0,0,0.05)"};
  color: ${props => props.isTop ? "black" : "black"};
  h1 {
    line-height: 0;
    padding-bottom: 16px;
  }
  svg {
    width: 50px;
    path {
      fill: ${props => props.isTop ? props.theme.white : '#444'}!important;
    }
    
  }

  nav {
    display:none;
    
    @media only screen and (min-width: ${props => props.theme.aboveMobile}) {
      display: block;
    }
    ul {
        display: flex;
        list-style-type: none;
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
                color: #333;
            }

            a.active {
              border-bottom: 3px solid #fff;
            }
        }
    }
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderElement = ({ siteTitle, isTop }) => (
  <StyledHeader className={siteTitle} isTop={isTop}>
    
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
      <nav>
        <ul>
          <li>
              <Link to="/" activeClassName="active">Wedding</Link>
          </li>
          <li>
              <Link to="/getting-here" activeClassName="active">Getting To Canada</Link>
          </li>
          <li>
              <Link to="/vancouver" activeClassName="active">Vancouver</Link>
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
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 500;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    });
  }
  componentWillUnmount() {
    document.removeEventListener('scroll', () => {

    });
  }
  render () {
    return (
      <HeaderElement isTop={this.state.isTop}></HeaderElement>
    )

  };
};
