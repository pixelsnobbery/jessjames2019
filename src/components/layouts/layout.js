import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../header'
import Footer from '../footer'
import BottomNav from '../bottom-nav'
import './layout.css'




const Layout = ({ children, location }) => (
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
        <Header siteTitle={data.site.siteMetadata} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: '100%',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
        <Footer></Footer>
        <BottomNav></BottomNav>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
