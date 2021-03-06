import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Theme from '../../config/theme'
import Header from '../header'
import Footer from '../footer'
import MobileNav from '../mobile-nav'

import './layout.css'

import styled from 'styled-components'

const Wrapper = styled.div`
margin: 0 auto;
max-width: 100%;
padding-top: 0;
 a:link, a:visited {
   color: ${Theme.primary};
 }
 a:hover, a:active {
   color: #333;
 }
 h2 {
    font-size: 1.3rem;
  @media only screen and (min-width: ${props => props.theme.aboveMobile}) {
      font-size: 1.8rem;
  }
 }
`


const Layout = ({ children, location, noLogo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
        >
          <html lang="en" class={location} />
          <meta name="description" content="Jess & James are getting married, and we're having a party!" />
        </Helmet>
<MobileNav></MobileNav>
        <Header siteTitle={data.site.siteMetadata} location={location} noLogo={noLogo} />
        
        <Wrapper>
          {children}
        </Wrapper>
        <a name="rsvp"></a>
        <Footer></Footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
