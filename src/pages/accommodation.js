import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layouts/layout'

import Theme from '../config/theme'
import { ThemeProvider } from 'styled-components'

const Accommodation = () => (
  <ThemeProvider theme={Theme}>
    <Layout>
      <h1>Accommodation</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  </ThemeProvider>
)

export default Accommodation
