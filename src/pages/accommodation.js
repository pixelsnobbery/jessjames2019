import React from 'react'
import styled from 'styled-components'
import Slider from '../components/slider'
import Layout from '../components/layouts/layout'
import AccommodationHero from '../components/accommodation-hero'
import Card from '../components/card'

import Theme from '../config/theme'
import { ThemeProvider } from 'styled-components'

import Section from '../components/layouts/section'
import Overlay from '../components/overlay'
import SectionTitle from '../components/layouts/section-title';
import Button from '../components/button'
import AccommodationIcon from '-!svg-react-loader?name=Accommodation!../images/accommodation.svg'
import BodegaRidge1 from '../images/bodega_cabin_1.jpg'
import BodegaRidge2 from '../images/bodega_cabin_2.jpg'
import BodegaRidge3 from '../images/bodega_cabin_3.jpg'
import BodegaRidge4 from '../images/bodega_cabin_4.jpg'
import BodegaCove from '../images/bodega-cove.jpg'

const Hero = styled.div`
  display: block;
  height: 65vh;
  @media only screen and (min-width: ${props => props.theme.aboveMobile}) { 
    height: 85vh;
  }
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-content: center;
  position: relative;

  h1, h2 {
    text-align:center;
    z-index:3;
    color:#fff;
  }
  h1 {
    @media only screen and (min-width: ${props => props.theme.aboveMobile}) { 
    font-size: 4rem;
    }
  }
`
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Accommodation = () => (
  <ThemeProvider theme={Theme}>
    <Layout>
      <Hero>
        <AccommodationHero />
        <h1>Accommodation</h1>
        <Overlay></Overlay>
      </Hero>

      <Section bgColor="#7795F8" skewY="0deg" textColor="#ffffff">
          <SectionTitle 
            text="Bodega Ridge" 
            icon={<AccommodationIcon></AccommodationIcon>}
            bgColor={Theme.neonBlue}
            color="#ffffff">
          </SectionTitle>

              <p>There are seven charming log cabins right on-site at Bodega Ridge. Each has three spacious bedrooms, living room, full kitchen and bathroom. We have reserved these rooms for our guests, and they will be available on a first-come, first-serve basis. We are hoping as many guests as possible will be able to stay right on-site with us. Please indicate if you'd like to stay in a cabin room in your RSVP and we'll do our best to accommodate you.</p>

              <h4>Price per double room: $140/night</h4>

              <Button text="Find out more about Bodega Ridge" href="https://www.bodegaridge.com/cabins/" bgColor={Theme.neonBlue}></Button>
              <Slider>
                <div>
                  <img src={BodegaRidge1} alt="Bodega Ridge" />
                </div>
                <div>
                  <img src={BodegaRidge2} alt="Bodega Ridge" />
                </div>
                <div>
                  <img src={BodegaRidge3} alt="Bodega Ridge" />
                </div>
                <div>
                  <img src={BodegaRidge4} alt="Bodega Ridge" />
                </div>
              </Slider>
  
          </Section>

          <Section skewY="0deg">

          <SectionTitle text="Other Options" icon={<AccommodationIcon></AccommodationIcon>}gat></SectionTitle>
            
            <h3>Bodega Cove</h3>


              <p>A 5-minute walk from Bodega Ridge, Bodega Cove consists of 5 cedar cabins. There are two designs: romantic one bedroom units and more spacious two bedroom cabins ideal for two couples or a small family. If you're interested in one of these cabins please contact us.</p>
            
              <ul>
        <li>
          1 bedroom cabin: $350/night
        </li>
        <li>
          2 bedroom cabin: $400/night
        </li>
      </ul>

      <Button text="Find out more about Bodega Cove" href="https://www.bodegaridge.com/bodega-cove/"></Button>

      <img src={BodegaCove} alt="Bodega Cove" />

      <h3>Rest of Galiano</h3>
            
 
            <CardWrapper>

              <Card>
                <h4><a href="https://serenitybythesea.com/">Serenity by the Sea</a></h4>
                <p>Several suites nestled among trees on a knoll overlooking the ocean. About 15 minutes drive from Bodega Ridge.</p>
              </Card>
              <Card>
                <h4><a href="https://abnb.me/9soohDPSNL">Private Oceanfront Studio</a></h4> 
                <p>Close to Bodega Cove. Modern waterfront studio suite with private entrance. Large deck with views of Trincomali Channel, surrounded by fir and arbutus trees. Go for a swim in the ocean. Take an outdoor shower. Watch whales, eagles, hummingbirds, sea lions and otters.</p>
              </Card>
              <Card>
              <h4><a href="http://pinkgeraniumcottage.com/Welcome.html">Pink Geranium</a></h4>           
              <p>A 10-minute walk from Bodega Ridge. Beautiful little cottage with one bedroom and pull out across the street from the water.</p>
              </Card>
              <Card>
              <h4><a href="http://www.galianoreddoor.com">Behind the Red Door</a></h4>
              <p>About a 5-7-minute drive from Bodega Ridge. A cozy 1-bedroom B&B.</p>
              </Card>
              <Card>
              <h4><a href="http://www.galianocabins.com">Galiano Oceanfront Cabins</a></h4>
              <p>A 10-minute walk from Bodega Ridge, 2 lovely cabins just down the hill. 1 oceanfront cottage w/ 1 bedroom and a 3-bedroom cabin with a beautiful view of the water.</p>
              </Card>
              <Card>
              <h4><a href="https://www.vrbo.com/2144">Galiano Getaways</a></h4>
              <p>A 3-bedroom beautiful cabin located just north of Bodega Ridge, a 30 second drive, up Clementine Lane. 5-10 walking distance. </p>
              </Card>
              <Card>
              <h4><a href="https://www.airbnb.ca/rooms/13999967">The Sweet Suite</a></h4>
              <p>2-bedroom accommodation on the South End of Galiano Island, about a 20- 25-minute drive to Bodega Ridge.</p> 
              </Card>
              <Card>
              <h4><a href="http://hiddenridgegaliano.com">The Hidden Ridge</a></h4>
              <p>A cottage and a Bed & Breakfast about a 5-7-minute drive from Bodega Ridge.</p> 
              </Card>
              <Card>
              <h4><a href="https://www.vrbo.com/596088">Heritage House</a></h4>
              <p>A cozy 4-bedroom Heritage House on 5 acres of tranquility. On the South End of Galiano Island about a 20-25-minute drive to Bodega Ridge.</p>
              </Card>
              <Card>
                <h4><a href="https://www.vrbo.com/810824">Guest Cottage on 3-Acres</a></h4> 
                <p>Sleeps up to 6 people, waterfront cottage. On the South End of Galiano Island about a 20-25-minute drive to Bodega Ridge.</p> 
              </Card>
              <Card>
                <h4><a href="https://www.airbnb.ca/rooms/12156952">Captain's Quarters</a></h4>
                <p>5-minute drive from Bodega Ridge, very nice historic log cabin.</p>
              </Card>
              </CardWrapper>
        </Section>

    </Layout>
  </ThemeProvider>
)

export default Accommodation



