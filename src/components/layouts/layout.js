import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Theme from '../../config/theme'
import Header from '../header'
import Footer from '../footer'
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
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" class={location} />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata} location={location} noLogo={noLogo} />
        <Wrapper>
          {children}
        </Wrapper>
        <Footer></Footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
