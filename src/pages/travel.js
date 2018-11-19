import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layouts/layout'

import Theme from '../config/theme'
import { ThemeProvider } from 'styled-components'

const Travel = () => (
  <ThemeProvider theme={Theme}>
    <Layout>
      <h1>Travel</h1>
      
      We're so excited that you're coming to join us! 

      <h2>Coming from outside of Canada?</h2>

      <h2>Getting to Galiano Island</h2>
      <p>Blah</p>

      <h2>Places you have to see whilst you're here</h2>
      <p>Blah</p>

      <h2>Our personal, off the beaten track recommendations</h2>
      <p>Blah blah</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  </ThemeProvider>
)

export default Travel
