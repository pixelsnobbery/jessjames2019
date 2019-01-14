import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layouts/layout'
import TravelHero from '../components/travel-hero'

import Theme from '../config/theme'
import { ThemeProvider } from 'styled-components'

import Button from '../components/button'
import Card from '../components/card'

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
      margin: 0 0 32px 0;
    }

    p {
      margin: 0 0 48px 0;
    }

    .float-left {
      width: 50%;
    }

    .grid-display {
      display: flex;
      flex-direction: column;
      .row1 {
        max-width: 50%;

      }

      .row {
        .box {
          background-color: #333;
          margin: 8px;
          width: 20%;
          
          position: relative;
          &:before {
            content: '';
            display: block;
            padding-top: 75%;
          }
          .content {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
          }
        }
      }

      .row2 {
        justify-content: flex-end;
        align-items: flex-end;
        display: flex;
        .box {
          width: 20%;
          &:first-child {
            width: 38%;
            top: 150px;
          }
          &:last-child {
            width: 47%;
          }
          
        }
      }

      .row3 {
        display: flex;
        justify-content: center;

        .box {
          background-color: #555;
          width: 35%;
          &:first-child {
            width: 20%;
            &:before {
              padding-top: 50%;
            }
          }
          &:last-child {
            width: 30%;
          }
        }
      }
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
    background: rgba(0,0,0,0.4);
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
  padding: 64px 0;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    left: 0;
    right: 0;
    /* top: calc(var(--section-padding) / 2);
    bottom: calc(0px - var(--section-padding)); */
    background-color: ${props => props.bgColor || "#fff"};
    top: 0;
    bottom: 0;
    -webkit-transform: skewY(-8deg);
    transform: skewY(-8deg);
  }
`

const OutsideCanada = styled.div`
  display: flex;
`

const Travel = () => (
  <ThemeProvider theme={Theme}>
    <Layout>

      <Hero>
        <TravelHero />
        <h1>Travel</h1>
        <div className="overlay"></div>
      </Hero>


      
      <Section bgColor="#f6f9fc">
      <Container>
          <h2>Coming from outside of Canada?</h2>
          <p className="lead">The nearest airport is Vancouver International Airport (YVR). The following UK airports have summer flights direct to Vancouver:</p>
          <CardWrapper>
            <Card>
              <h3>London Gatewick</h3>
              <span>13 flights per week</span>
            </Card>
            <Card>
              <h3>London Heathrow</h3>
              <span>21 flights per week</span>
            </Card>
            <Card>
              <h3>Manchester</h3>
              <span>3 flights per week</span>
            </Card>
            <Card>
              <h3>Glasgow</h3>
              <span>1 flight per week</span>
            </Card>

          </CardWrapper>
      </Container>
      </Section>
      <Section bgColor="#f6f6f6">
      <Container>
        <div className="float-left">
          <h2>About Galiano Island</h2>
          <p>Galiano Island is a quick 45 minute ferry away from Vancouver. Ferries depart from Tsawwassen Ferry Port, which is a 30 minute drive from the centre of Vancouver.</p>
          <p>Travelling by car is strongly recommended. Galiano island is a rural paradise with just 1,300 permanent residents. Public transport is practically non-existent.</p>
          <Button text="View Schedule & Reserve Ferry" href="https://www.bcferries.com/schedules/southern/vade-current.php?scheduleSelect=sch062619007.html"></Button>
        </div>
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
