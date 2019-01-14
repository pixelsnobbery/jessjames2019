import React from 'react'
import styled from 'styled-components'
import Slider from '../components/slider'
import Layout from '../components/layouts/layout'
import Theme from '../config/theme'
import { ThemeProvider } from 'styled-components'

import Section from '../components/layouts/section'
import Overlay from '../components/overlay'
import SectionTitle from '../components/layouts/section-title';
import Button from '../components/button'

import Galiano1 from '../images/kayak.jpg'
import Galiano2 from '../images/galiano-2.jpg'
import Galiano3 from '../images/galiano-3.jpg'
import Galiano4 from '../images/galiano-4.jpg'

import Boat from  '-!svg-react-loader?name=Boat!../images/boat-icon.svg'
import GalianoImage from '../components/hero-images/galiano'

const Hero = styled.div`
  display: block;
  height: 85vh;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-content: center;
  align-items: center;
  position: relative;

  h1, h2 {
    text-align:center;
    z-index:3;
    color:#fff;
  }
  h1 {
    font-size: 4rem;
  }
  span {
    color: #fff;
    position: relative;
    z-index: 3;
    font-size: 1.8rem;
    text-align: center;
    max-width: 500px;
    font-weight: 200;
  }
`


const Accommodation = () => (
  <ThemeProvider theme={Theme}>
    <Layout>
      <Hero>
      <GalianoImage></GalianoImage>
        <h1>Galiano</h1>
        <span>How to get there, and things to do.</span>
        <Overlay></Overlay>
      </Hero>

      <Section>
          
          <SectionTitle
            text="Getting to Galiano Island"
            bgColor={Theme.secondary}
            icon={<Boat></Boat>}>
          </SectionTitle>
            <p>Galiano Island is a 45 minute ferry away from Vancouver. Ferries depart from Tsawwassen Ferry Port, which is a 30 minute drive from the centre of the city (60 minutes by public transit). </p>

            <p>Renting a car is recommended; Galiano is a rural paradise with just 1,300 permanent residents and not even a taxi service. However if it's not possible for you to rent a car, please get in touch with us and we'll be able to coordinate lifts.</p>

            <p>There are 3 ferries per day to the island. If travelling by car, you should make a ferry reservation. You must arrive at Tsawwassen Ferry Terminal no later than 40 minutes before your departure for your reservation to be valid.</p>

            <p>If you are travelling by foot, reservations are not needed, however you should arrive well in time for your departure.</p>
            
            <p>Ferries depart Tsawwassen on Tuesday, July 2nd at the following times:</p>

            <ul>
              <li>
                10:10AM
              </li>
              <li>
                1:40PM
              </li>
              <li>
                7:50PM
              </li>
            </ul>

            <p>Please note: The welcome BBQ starts at 6pm on Tuesday July 2nd. Guests should aim to be on one of the 2 earlier ferries. Those departing on the 7:50PM ferry might not have much food left to choose from! </p>

            <Button text="View schedule & reserve ferry" href="https://www.bcferries.com/schedules/southern/vade-current.php?scheduleSelect=sch062619007.html" bgColor={Theme.secondary}></Button>
        </Section>

      <Section bgColor="#F6F9FC">
          <SectionTitle
            text="Things to do on Galiano"
            subtitle="How about doing one of these activities on before the wedding ceremony?"
          ></SectionTitle>

          <Slider>
            <div data-src={Galiano1} alt="Kayak">
              <h3>Kayak around Montague Harbour</h3>
              <p>Explore the calm waters of Montague Harbour, taking in the beautiful bscenery, and scouting out private beaches to moore at.</p>
            </div>
            <div data-src={Galiano2} alt="Mount Galiano">
              <h3>Go on a hike</h3>
              <p>With a 301 metre elevation at it's peak, Mount Galiano offers incredible views of the southern gulf islands. Allow 45 minutes to an hour for the ascent. Or, right on the doorstep of the venue is the stunning Bodega Ridge Provincial Park.</p>
            </div>
            <div data-src={Galiano3} alt="Coastline">
              <h3>Explore the stunning coastline</h3>
              <p>Must-sees: Morning Beach, Retreat Cove, and if you fancy a hike, Pebble Beach.</p>
            </div>
            <div data-src={Galiano4} alt="Bodega Ridge">
              <h3>Get to know the local wildlife</h3>
              <p>Eagles, deer, seals, otters and orcas are seen regularly from all over the island.</p>
            </div>
          </Slider>
        </Section>

        

    </Layout>
  </ThemeProvider>
)

export default Accommodation



