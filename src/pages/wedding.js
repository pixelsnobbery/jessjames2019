import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layouts/layout'
import Image from '../components/image'

import Theme from '../config/theme'
import { ThemeProvider } from 'styled-components'

import RingsImage from '-!svg-react-loader?name=Icon!../images/rings.svg';

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
  background: rgba(0,0,0,0.4);
  position:absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
`

const Section = styled.section`
  padding: 32px 0;
  width: 100%;
  background-color: #f6f9fc;
`

const Timeline = styled.div`
  ul {
    list-style-type: none;
    -webkit-padding-start: 0;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 1;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      text-align: center;
      flex: 1 0 0px;
      font-size: .8rem;
      z-index: 2;
      
      span.date {
        font-size: .7rem;
        margin: 16px 0;
        background-color: ${props => props.theme.primary};
        text-align: center;
        width: auto;
        padding: 4px 8px;
        color: #fff;
        justify-self: flex-end;

        border-radius: 4px;
      }
      .img {
        width: 100px;
        height: 100px;
        background-color: #fff;
        border-radius: 50px;
        margin-bottom: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        transform-origin: bottom center;

        svg {
          width: 60%;
          height: 60%;
        }
      }
      p {
        color: #444;
      }
      h3 {
        font-size:1rem;
      }

      &.wedding {
        .img {
          transform: scale(1.2,1.2);
        }
      }
    }

    &:after {
      content: '';
      position: absolute;
      top: 50px;
      height: 2px;
      left: 20px;
      right: 20px;
      background-color: #e6ebf1;
      z-index: 1;
    }

  }
`

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 32px 0;

  @media only screen and (min-width: ${props => props.theme.aboveMobile}) {
    max-width: 1000px;
  }

`

const Wedding = () => (
  <ThemeProvider theme={Theme}>
  <Layout>
    <Hero>
      <Image imageUrl="../images/wedding-hero.jpg" />
      <h1>We're Getting Hitched</h1>
      <h2>and then having a party</h2>
      <div className="overlay"></div>
    </Hero>

    <Container>

    <h3>When and Where</h3>
    <p>Bodega Ridge, Galiano Island</p>

    </Container>

    <Section>

      <Container>

        <h3>Schedule of Events</h3>
        <Timeline>
          <ul>
            <li>
              <div className="img"></div>
              <h3>Arrive</h3>
              <p>On-site checkin from 4pm</p>
              
              <span className="date">2nd July</span>
            </li>
            <li>
              <div className="img"></div>
            
              <h3>Barbecue</h3>
              <p>Starts at 6ish</p>

              <span className="date">2nd July PM</span>
            </li>
            <li>
              <div className="img"></div>
              <h3>Free time</h3>
              <p>Hike? Beach? Yoga?</p>
              <span className="date">3rd July AM</span>
            </li>
            <li className="wedding">
            <div className="img"><RingsImage></RingsImage></div>
              <h3>Wedding</h3>
              <p>Starts @ 4:30</p>
              <span className="date">3rd July PM</span>
            </li>
            <li>
            <div className="img"></div>
              <h3>Dinner</h3>
              <p>Followed by </p>
              <span className="date">3rd July PM</span>
            </li>
            <li>
            <div className="img"></div>
              <h3>Breakfast</h3>
              <span className="date">4th July AM</span>
            </li>
            <li>
              <div className="img"></div>
              <h3>Depart</h3>
              <span className="date">4th July PM</span>
            </li>
          </ul>
        </Timeline>

      </Container>
    </Section>

    <Container>
      <h3>Music</h3>
      <p>Something about song requests</p>
    </Container>
  </Layout>
  </ThemeProvider>
)

export default Wedding
