import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Nav = styled.div`
    height: 50px;
    background-color: #000;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;

    @media only screen and (min-width: ${props => props.theme.aboveMobile}) { 
        display: none;
    }

    ul {
        width: auto;
        margin: 0 auto;
        display: flex;
        list-style-type: none;
        height: 100%;
        justify-content: space-between;
        li {
            font-size: .6rem;
            text-align: center;
            margin-bottom: 0;
            line-height: 1rem;
            display: flex;
            height: 100%;
            align-items: center;
            align-content: center;
            justify-content: center;

            a {
                height: 100%;
                flex-grow: 1;
                flex-direction: column;
                display: block;
                padding: 16px 10px;
                
                &:link, &:visited {
                    color: #fff;
                    text-decoration: none;
                }
                &.active {
                    background-color: ${props => props.theme.primary};
                }
            }
        }
    }
`

const MobileNav = () => (
    <Nav>
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
        </ul>
        
        
        
        
        
    </Nav>
)

export default MobileNav
