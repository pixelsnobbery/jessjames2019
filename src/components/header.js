import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Button from './button'

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  padding: 24px 8px 8px 8px;
  z-index: 10;

  background-color: ${props => props.isTop ? "rgba(255,255,255,0)" : "rgba(255,255,255,1)"};
  color: ${props => props.isTop ? "black" : "black"};

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
            a:link, a:visited {
                color: ${props => props.isTop ? props.theme.white : props.theme.primary};
                text-decoration: none;
            }
            a:hover, a:active {
                color: #333;
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
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
              <Link to="/">Home</Link>
          </li>
          <li>
              <Link to="/wedding">Wedding</Link>
          </li>
          <li>
              <Link to="/accommodation">Accommodation</Link>
          </li>
          <li>
              <Link to="/travel">Travel</Link>
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
      const isTop = window.scrollY < 200;
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
