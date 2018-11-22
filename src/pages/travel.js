import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layouts/layout'
import AccommodationHero from '../components/accommodation-hero'

import Theme from '../config/theme'
import { ThemeProvider } from 'styled-components'

import Tofino from '../images/tofino.jpg'
import Vancouver from '../images/vancouver.jpg'
import Whistler from '../images/whistler.jpg'
import Okanagan from '../images/okanagan.jpg'
import Banff from '../images/banff.jpg'

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 32px 0;

    h2 {
    margin-top: 32px!important;
  }

  .cta {
    background-color: ${props => props.theme.primary};
    padding: 8px 16px;
    color: #fff;
    text-decoration: none;
  }


  @media only screen and (min-width: ${props => props.theme.aboveMobile}) {
    max-width: 1000px;
  }
`
const Hero = styled.div`
  display: block;
  height: 65vh;
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
const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  .card {
    position: relative;
    flex-basis: 280px;
    height: 400px;
    overflow: hidden;
    margin: 0 8px;
    border-radius: 8px;
    transition: .8s transform ease;
    > img {
      display: block;
      width: 100vw;
      height: 100vh;
      object-fit: cover;
      object-position: left center;
    }
    h3 {
      z-index: 2;
      position:absolute;
      text-align:center;
      left: 0;
      right: 0;
      top: 50%;
      color: #fff;
      text-transform: uppercase;
      text-shadow: 1px 1px 1px rgba(0,0,0,0.75);
      font-size: 2rem;
      transition: .8s font-size ease;
    }
    &:hover {
      transform: translateY(-10px);

      h3 {
        font-size: 2.2rem;
      }
    }
  }
`

const Section = styled.section` 
  padding: 32px 0;
  background-color: ${props => props.bgColor || "#fff"};
`

const Travel = () => (
  <ThemeProvider theme={Theme}>
    <Layout>

      <Hero>
        <AccommodationHero />
        <h1>Travel</h1>
        <div className="overlay"></div>
      </Hero>


      <Container>
        We're so excited that you're coming to join us! 
      </Container>
      <Section>
      <Container>
        <h2>Coming from outside of Canada?</h2>
        <p>The nearest airport is Vancouver International Airport (YVR). The following UK airports have summer flights direct to Vancouver:</p>

        <CardWrapper>

          <div>
            <h3>London Gatwick</h3>
            <span>13 flights per week</span>
          </div>
          <div>
            <h3>London Heathrow</h3>
            <span>21 flights per week</span>
          </div>
          <div>
            <h3>Manchester</h3>
            <span>3 flights per week</span>
          </div>
          <div>
            <h3>Glasgow</h3>
            <span>1 flight per week</span>
            </div>
         </CardWrapper>
      </Container>
      </Section>
      <Section bgColor="#f6f6f6">
      <Container>
      <h2>Getting to Galiano Island</h2>
      <p>Galiano Island is a quick 45 minute ferry away from Vancouver. Ferries depart from Tsawwassen Ferry Port, which is a 30 minute drive from the centre of Vancouver.</p>

      <a className="cta" href="https://www.bcferries.com/schedules/southern/vade-current.php?scheduleSelect=sch062619007.html">View Schedule & Reserve Ferry</a>
      </Container>
      </Section>
      <Section>
        <Container>
          <h2>Places you have to see whilst you're here</h2>
        </Container>
      
      
      
      <CardWrapper>
        <div className="card">
          <img src={Whistler} />
          <h3>Whistler</h3>
        </div>

        <div className="card">
          <img src={Vancouver} />
          <h3>Vancouver</h3>
        </div>

        <div className="card">
          <img src={Tofino} />
          <h3>Tofino</h3>
        </div>

        <div className="card">
          <img src={Banff} />
          <h3>Banff</h3>
        </div>

        <div className="card">
          <img src={Okanagan} />
          <h3>Okanagan</h3>
        </div>
      </CardWrapper>
      </Section>
      <h2>Our personal, off the beaten track recommendations</h2>
      <p>Blah blah</p>
    </Layout>
  </ThemeProvider>
)

export default Travel
