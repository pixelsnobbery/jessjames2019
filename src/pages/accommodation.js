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

      <Section>

        <p class="lead">Accommodation on Galiano books up fast, and July is peak season. We recommend finalizing your accommodation ASAP. There are a limited number of rooms available at Bodega Ridge, and self-contained cabins at nearby Bodega Cove. Please let us know if you'd like to stay in one of these.</p><p class="lead"> If you are going to be staying elsewhere on the island we can arrange for the Galiano Island bus to take you back to your accommodation at the end of the night.</p>

      </Section>

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

          <Section skewY="0deg" bgColor={Theme.paleBlue}>

          <SectionTitle text="Bodega Cove" icon={<AccommodationIcon></AccommodationIcon>}></SectionTitle>
            


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

</Section>

<Section>

<SectionTitle text="Rest of Galiano" icon={<AccommodationIcon></AccommodationIcon>}></SectionTitle>
            
            <p>Here are a selection of other options. Please check <a href="https://www.airbnb.com">AirBnb</a>, or <a href="https://www.vrbo.com">VRBO</a> for more.</p>
            <p>Just a reminder - if you're coming for the whole celebration, you'll need accommodation for the 2nd & 3rd July.</p>
            <CardWrapper>

              <Card>
                <h4><a href="https://www.airbnb.ca/rooms/26395051?guests=1&adults=1">Magic Creek Cabin</a></h4>
                <p>Magic Creek cabin feels like being in a loft /tree house and is nestled among tall cedars and fir trees at the end of a quiet lane on the Trincomali side of Galiano Island. 5-10 minute drive from Bodega Ridge.</p>
              </Card>
              <Card>
                <h4><a href="https://abnb.me/9soohDPSNL">Private Oceanfront Studio</a></h4> 
                <p>Close to Bodega Cove. Modern waterfront studio suite with private entrance. Large deck with views of Trincomali Channel, surrounded by fir and arbutus trees. Go for a swim in the ocean. Take an outdoor shower. Watch whales, eagles, hummingbirds, sea lions and otters.</p>
              </Card>
              <Card>
              <h4><a href="https://www.airbnb.ca/rooms/10369755">Pink Geranium</a></h4>           
              <p>A 10-minute walk from Bodega Ridge. Beautiful little cottage with one bedroom and pull out across the street from the water.</p>
              </Card>
              <Card>
              <h4><a href="http://www.galianoreddoor.com">Behind the Red Door</a></h4>
              <p>About a 5-7-minute drive from Bodega Ridge. A cozy 1-bedroom B&B.</p>
              </Card>
              <Card>
              <h4><a href="https://www.airbnb.ca/rooms/6956821?location=Galiano%20Island%2C%20Southern%20Gulf%20Islands%2C%20BC&adults=2&check_in=2019-07-02&check_out=2019-07-04&guests=1&s=fPw0f3iC">Azami</a></h4>
              <p>Rustic cottage, 5-10 minute drive from Bodega Ridge.</p>
              </Card>
              <Card>
              <h4><a href="https://www.airbnb.ca/rooms/28936019?location=Galiano%20Island%2C%20Southern%20Gulf%20Islands%2C%20BC&adults=2&check_in=2019-07-02&check_out=2019-07-04&guests=1&s=fPw0f3iC">Shangri La Retreat</a></h4>
              <p>Cosy forest cabin, close to Montague Harbour. Approx. 10 minute drive to Bodega Ridge</p>
              </Card>
              <Card>
              <h4><a href="http://hiddenridgegaliano.com">The Hidden Ridge</a></h4>
              <p>A cottage and a Bed & Breakfast about a 5-7-minute drive from Bodega Ridge.</p> 
              </Card>
              <Card>
                <h4><a href="https://www.airbnb.ca/rooms/12156952">Captain's Quarters</a></h4>
                <p>5-minute drive from Bodega Ridge, very nice historic log cabin.</p>
                <p><em>* Minimum 3 night stay</em></p>
              </Card>
              <Card>
                <h4><a href="https://www.galianoinn.com/">Galiano Inn & Spa</a></h4>
                <p>Luxury oceanfront retreat in natural surroundings enhanced with beautiful gardens. 20 minute drive to Bodega Ridge.</p>
              </Card>
              <Card>
                <h4><a href="http://www.env.gov.bc.ca/bcparks/explore/parkpgs/montague/">Camping</a></h4>
                <p>Go rustic, and camp next to beautiful Montague Harbour. Booking opens 3 months in advance and fills up extremely quickly, so if you're looking to do this, you should book on April 2nd.</p>
              </Card>
              </CardWrapper>
        </Section>

    </Layout>
  </ThemeProvider>
)

export default Accommodation



