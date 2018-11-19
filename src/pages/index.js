import React from 'react'


import LayoutIndex from '../components/layouts/layout-index'
//import Image from '../components/image'

import Theme from '../config/theme'
import { ThemeProvider } from 'styled-components'

const IndexPage = () => (
  <ThemeProvider theme={Theme}>
    <LayoutIndex>
      <h1>Welcome!</h1>

    </LayoutIndex>
  </ThemeProvider>
)

export default IndexPage
