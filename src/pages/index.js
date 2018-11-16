import React from 'react'


import LayoutIndex from '../components/layouts/layout-index'
//import Image from '../components/image'

import Theme from '../config/theme'
import { ThemeProvider } from 'styled-components'

const IndexPage = () => (
  <ThemeProvider theme={Theme}>
    <LayoutIndex>
      {/* <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div> */}

    </LayoutIndex>
  </ThemeProvider>
)

export default IndexPage
