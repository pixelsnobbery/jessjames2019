import React from 'react'
import styled from 'styled-components'

import LayoutIndex from '../components/layouts/layout-index'
import Theme from '../config/theme'
import { ThemeProvider } from 'styled-components'

import LogoImage from '-!svg-react-loader?name=Icon!../images/logo.svg';

const Logo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
svg {
  width: 40%;
  margin-bottom: 32px;
}
`

const IndexPage = () => (
  <ThemeProvider theme={Theme}>
    <LayoutIndex>
      <Logo>
        <LogoImage></LogoImage>
        <h3>Website coming soon...</h3>
      </Logo>
    </LayoutIndex>
  </ThemeProvider>
)

export default IndexPage
