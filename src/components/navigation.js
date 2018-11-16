import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Button from './button'


const Nav = styled.nav`
    ul {
        display: flex;
        list-style-type: none;
        li {
            margin-right: 32px;
            a:link, a:visited {
                color: ${props => props.theme.white};
                text-decoration: none;
            }
            a:hover, a:active {
                color: #333;
            }
        }
    }
`

const Navigation = () => (
    <Nav>
        <ul
            style={{
            display: 'flex'
            }}
        >
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
    </Nav>
//   <div
//     style={{
//       background: 'rebeccapurple',
//       marginBottom: '1.45rem',
//     }}
//   >
//     <div
//       style={{
//         margin: '0 auto',
//         maxWidth: 960,
//         padding: '1.45rem 1.0875rem',
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: 'white',
//             textDecoration: 'none',
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </div>
)

export default Navigation
