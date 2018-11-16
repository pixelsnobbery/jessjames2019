import React from 'react'
import { Link } from 'gatsby'
import Navigation from './navigation'
import styled from 'styled-components'

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

  &.down {
    background-color: #fff;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 8px 8px 8px;
  margin: 0 auto 16px auto;
`

const HeaderElement = ({ siteTitle }) => (
  <StyledHeader className={siteTitle}>
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
      <Navigation></Navigation>
    </Container>
  </StyledHeader>
)

export default class Header extends React.Component {
  state = {
    isTop: true,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    });
  }
  render () {
    return (
      <HeaderElement className={this.state.isTop ? 'down' : 'up'}></HeaderElement>
    )
  };
};
