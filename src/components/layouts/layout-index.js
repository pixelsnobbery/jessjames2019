import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../header'
import Footer from '../footer'
import Hero from '../hero'
import './layout.css'
import BottomNav from '../bottom-nav'


const LayoutIndex = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteQuery {
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
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Hero></Hero>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
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

LayoutIndex.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutIndex
