import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layouts/layout'
import VancouverHero from '../components/hero-images/vancouver'

import Theme from '../config/theme'
import { ThemeProvider } from 'styled-components'

const Hero = styled.div`
  display: block;
  height: 85vh;
  display:flex;
  flex-direction:column;
  justify-content: flex-start;
  padding-top: 120px;
  align-content: center;
  position: relative;

  h1, h2 {
    text-align:center;
    z-index:3;
    color:#fff;
  }
`

const Travel = () => (
  <ThemeProvider theme={Theme}>
    <Layout>

      <Hero>
        <VancouverHero />
        <h1>Vancouver</h1>
        <div className="overlay"></div>
      </Hero>

    </Layout>
  </ThemeProvider>
)

export default Travel
