import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Nav = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40px;
    background-color: #fff;
    border-top: 1px solid #ccc;
    z-index: 10;

    ul {
        list-style-type: none;
        -webkit-padding-start: 0;
        display: flex;
        justify-content: space-around;
        align-content: center;
        padding: 0;
        margin: 0;
        height: 100%;

        li {
            -webkit-padding-start: 0;
            font-size: .6rem;
            margin: 0;
            display: flex;
            align-content: center;

            a:link, a:visited {
                align-self: center;
                text-decoration: none;
                color: #666;
                text-transform: uppercase;
                padding: 8px;
            }
        }
    }
`

const BottomNav = () => (
  <Nav>
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
      </ul>
  </Nav>
)

export default BottomNav
