import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layouts/layout'
import VancouverHero from '../components/hero-images/vancouver'
import Overlay from '../components/overlay'

import Section from '../components/layouts/section'
import SectionTitle from '../components/layouts/section-title'

import GranvilleIsland from '../images/granville-island.jpg'
import StanleyPark from '../images/stanley-park.jpg'
import Gastown from '../images/gastown.jpg'
import Capilano from '../images/capilano.jpg'

import Card from '../components/card'

import Theme from '../config/theme'
import { ThemeProvider } from 'styled-components'

import AccommodationIcon from  '-!svg-react-loader?name=Accommodation!../images/accommodation.svg'

const Hero = styled.div`
  display: block;
  height: 85vh;
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
    font-size: 4rem;
  }
`

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Travel = () => (
  <ThemeProvider theme={Theme}>
    <Layout>

      <Hero>
        <VancouverHero />
        <h1>Vancouver</h1>
        <Overlay></Overlay>
      </Hero>

      <Section>
        <SectionTitle text="Where to Stay" icon={<AccommodationIcon></AccommodationIcon>}></SectionTitle>

        <h3>Downtown</h3>

        <p>The main feature of downtown Vancouver is Stanley Park, which is located at the tip of the peninsula. The park is 1,000 acres in size, featuring numerous hiking and biking trails, and is home to the nearly 14-mile-long Seawall and the Vancouver Aquarium. Downtown is also the city's largest shopping district. Robson Street in particular brims with shops and cafes while its neighbor, Granville Street, features numerous independent boutiques. Granville Street is also known as "Theater Row" because of the dozens of concert, theater and movie venues that are located there.</p>
      
        <h3>Kitsilano</h3>
        <p>Aaaah Kitsilano. Where the beautiful people live. (Your Bride and Groom included!). Known for its numerous outdoor activities, fantastic beaches and mountain views, Kitsilano sits just south of downtown across English Bay. Here you'll find some of Vancouver's most popular outdoor spaces, including Kitsilano Beach and Vanier Park. Kitsilano is also a foodie's paradise, boasting dozens of one-of-a-kind eateries.</p>
      
        <h3>Mount Pleasant / East Vancouver</h3>
        <p>Vancouver's east side is made up of a conglomeration of ethnic neighborhoods which feature unconventional shopping, top-notch dining options and plenty of entertainment venues. Commercial Drive – also known as Little Italy – is famous for being Vancouver's artistic hub and is packed with art galleries, second-hand shops and plenty of Italian restaurants and cafes. Oh, and there’s also tonnes of craft breweries.</p>
      
        <h3>North Vancouver</h3>
        <p>Located across the Burrard Inlet from downtown Vancouver is North Vancouver, which acts as a gateway to some of the city’s nearby natural attractions, including Lynn Canyon Park, Grouse Mountain and the Capilano Suspension Bridge. Even if you are not interested in these outdoor activities, recent visitors say that North Vancouver is worth a visit. The area is filled with antiques shops, and the Lonsdale Quay Market – which consists of three different levels – is home to dozens of specialty shops, restaurants and fresh food vendors.</p>
      </Section>

      <Section bgColor={Theme.paleBlue}>
        <SectionTitle
          text="Things to Do"
          subtitle="Shamelessly lifted from TripAdvisor">
        </SectionTitle>

        <CardWrapper>
          <Card>
            <img src={GranvilleIsland} alt="Granville Island"></img>
            <div>
              <h4>Granville Island</h4>
              <p>Granville Island is home to a public market, food shops, restaurants, artist studios and galleries, shopping and green space.</p>
            </div>
          </Card>
          <Card>
          <img src={StanleyPark} alt="Stanley Park"></img>
            <div>
              <h4>Bike Around the Seawall</h4>
              <p>The Seawall starts downtown at the cruise ship terminal, heads west around Stanley Park and then encircles False Creek past Kitsilano beach.</p>
            </div>
          </Card>
          <Card>
          <img src={Gastown} alt="Gastown"></img>
            <div>
             <h4>Visit Gastown</h4>
              <p>The neighborhood where the city began, Gastown is Vancouver's cobbled old-town district. Home to some of the city’s best independent shops, bars and restaurants. </p>
            </div>
          </Card>
          <Card>
          <img src={Capilano} alt="Capilano Suspension Bridge"></img>
            <div>
              <h4>Capilano Suspension Bridge</h4>
              <p>One of the world's longest (140m) and highest (70m) suspension bridges, sways gently over the roiling Capilano Canyon. Arrive early as it gets busy!</p>
            </div>
          </Card>
          <Card>
            <img src={GranvilleIsland} alt="Granville Island"></img>
            <div>
              <h4>Granville Island</h4>
              <p>Granville Island is home to a public market, food shops, restaurants, artist studios and galleries, shopping and green space.</p>
            </div>
          </Card>
          <Card>
          <img src={StanleyPark} alt="Stanley Park"></img>
            <div>
              <h4>Bike Around the Seawall</h4>
              <p>The Seawall starts downtown at the cruise ship terminal, heads west around Stanley Park and then encircles False Creek past Kitsilano beach.</p>
            </div>
          </Card>
        </CardWrapper>
        
      </Section>

    </Layout>
  </ThemeProvider>
)

export default Travel
