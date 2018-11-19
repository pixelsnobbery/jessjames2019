import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layouts/layout'
import Image from '../components/image'

import Theme from '../config/theme'
import { ThemeProvider } from 'styled-components'

const Hero = styled.div`
display: block;
height: 100vh;
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

.overlay {
  background: rgba(0,0,0,0.5);
  position:absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
`

const Accommodation = () => (
  <ThemeProvider theme={Theme}>
    <Layout>
      <Hero>
        <Image />
        <h1>Accommodation</h1>
        <h2>and then having a party</h2>
        <div className="overlay"></div>
      </Hero>
      <p>Bodega Ridge has 6 3-bedroom cabins available on-site. There's also several cabins at Bodega Cove which sleeps a further 12.</p>
    
      <h2>Other Accommodation Options</h2>

      <p>Galiano Island has plenty of other accommodation options available. Check out some of our favourites:</p>

      <div className="card-wrapper">
        <div>
          <h3>Serenity By The Sea</h3>
        </div>
        <div>
          <h3>Arrow's Run</h3>
        </div>
        <div>
          <h3>Galiano Inn & Spa</h3>
        </div>
      </div>
    </Layout>
  </ThemeProvider>
)

export default Accommodation
