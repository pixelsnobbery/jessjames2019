import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layouts/layout'
import Image from '../components/image'

import Theme from '../config/theme'
import { ThemeProvider } from 'styled-components'

import RingsImage from '-!svg-react-loader?name=Icon!../images/rings.svg';
import BarbecueImage from '-!svg-react-loader?name=Icon!../images/barbecue.svg';
import FreeTimeImage from '-!svg-react-loader?name=Icon!../images/free-time.svg';

import Button from '../components/button'

import WOW from "wowjs"

const Hero = styled.div`
  display: block;
  height: 100vh;
  display:flex;
  flex-direction:column;
  justify-content: flex-start;
  padding-top: 120px;
  align-content: center;
  position: relative;

  h1, p {
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
    background-color: ${props => props.bgColor || "#f6f9fc"};
    top: 0;
    bottom: 0;
    -webkit-transform: skewY(-8deg);
    transform: skewY(-8deg);
  }
`
const Timeline = styled.div`
  ul {
    list-style-type: none;
    -webkit-padding-start: 0;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 1;
    -webkit-backface-visibility: hidden;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      text-align: center;
      flex: 1 0 0px;
      font-size: .8rem;
      z-index: 2;
      position: relative;
      padding-bottom: 48px;
      -webkit-backface-visibility: hidden;
      
      span.date {
        font-size: .7rem;
        margin: 16px 0;
        background-color: ${props => props.theme.primary};
        text-align: center;
        width: auto;
        padding: 6px 12px;
        color: #fff;
        justify-self: flex-end;

        border-radius: 12px;
        position: absolute;
        bottom: 0;
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
        color: #666;
      }
      h3 {
        font-size:1rem;
      }

      &.wedding {
        .img {
          transform: scale(1.2,1.2);
        }
      }
      &.animated {
        animation: scaleIn .5s ease;
        animation-fill-mode: backwards;
      }
      @keyframes scaleIn {
        0%   { transform: scale(0,0); }
        100% { transform: scale(1,1); }
      }

    }

    

    &:after {
      content: '';
      position: absolute;
      top: 50px;
      height: 2px;
      left: 40px;
      right: 40px;
      background-color: #ddd;
      z-index: 1;
      
    }
    &.animated:after {
      animation: slideRight 1.8s ease;
      animation-fill-mode: backwards;
    }
    @keyframes slideRight {
      0%  { left: 40px; right: 100% }
      100% { left: 40px; right: 40px; }
    }
  }
`

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 32px 0;
  text-align: center;

  @media only screen and (min-width: ${props => props.theme.aboveMobile}) {
    max-width: 1000px;
  }

  .overlap {
    background-color: #fff;
    margin-top: -150px;
    z-index:4;
    position: relative;
    box-shadow: 0 3px 20px rgba(0,0,0,0.1);
    padding: 16px;
    margin-bottom: 32px;
  }

`

const WeddingPage = () => (
  <ThemeProvider theme={Theme}>
  <Layout>
    <Hero>
      <Image imageUrl="../images/wedding-hero.jpg" />
      <h1>We're Getting Hitched</h1>
      <p>and then having a party</p>
      <div className="overlay"></div>
    </Hero>

    <Section bgColor="#eee">

    <Container>
      <div className="overlap">
        <h2>When and Where</h2>
      
        <p>The wedding will take place atop the bluffs at Bodega Ridge, on beautiful Galiano Island. (You didn't think a simple flight to Canada would suffice did you?!). Bodege Ridge is located on the north of the island, and is about 25 minutes drive away from Sturdies Bay harbour.</p>

        
      </div>
    

    <h2>Getting to Galiano Island</h2>

    <p>Galiano Island is a quick 45 minute ferry away from Vancouver. Ferries depart from Tsawwassen Ferry Port, which is a 30 minute drive from the centre of Vancouver.</p>
          <p>Travelling by car is strongly recommended. Galiano island is a rural paradise with just 1,300 permanent residents. Public transport is practically non-existent.</p>
          <Button text="View Schedule & Reserve Ferry" href="https://www.bcferries.com/schedules/southern/vade-current.php?scheduleSelect=sch062619007.html"></Button>

    </Container>

    </Section>

    <Section>

      <Container>

        <h2>Schedule of Events</h2>
        <Timeline>
          <ul className="wow">
            <li className="wow scaleIn">
              <div className="img"></div>
              <h3>Arrive</h3>
              <p>On-site checkin from 4pm</p>
              
              <span className="date">2nd July</span>
            </li>
            <li className="wow scaleIn" data-wow-delay=".2s">
              <div className="img"><BarbecueImage></BarbecueImage></div>
            
              <h3>Barbecue</h3>
              <p>Starts at 6pm</p>

              <span className="date">2nd July</span>
            </li>
            <li className="wow scaleIn" data-wow-delay=".4s">
              <div className="img"><FreeTimeImage></FreeTimeImage></div>
              <h3>Free time</h3>
              <p>Hike? Beach? Yoga?</p>
              <span className="date">3rd July</span>
            </li>
            <li className="wedding wow scaleIn" data-wow-delay=".6s">
            <div className="img"><RingsImage></RingsImage></div>
              <h3>Wedding</h3>
              <p>Starts @ 4:30pm</p>
              <span className="date">3rd July</span>
            </li>
            <li className="wow scaleIn" data-wow-delay=".8s">
            <div className="img"></div>
              <h3>Dinner</h3>
              <p>Followed by party time</p>
              <span className="date">3rd July</span>
            </li>
            <li className="wow scaleIn" data-wow-delay="1s">
            <div className="img"></div>
              <h3>Partay</h3>
              <p>Like it's 1999</p>
              <span className="date">3rd July</span>
            </li>
            <li className="wow scaleIn" data-wow-delay="1.2s">
              <div className="img"></div>
              <h3>Breakfast</h3>
              <p>Try to piece together memories of the night before</p>
              <span className="date">4th July</span>
            </li>
          </ul>
        </Timeline>

      </Container>
    </Section>

    <Container>
    <address>
          Bodega Ridge,<br />
          120 Manastee Road,<br />
          Galiano Island,<br />
          British Columbia,<br />
          Canada
        </address>
    </Container>

    <Container>
      <h3>Gifts</h3>
      <p>Your presence is enough</p>
      <p>We are delighted to have you as our guest and we appreciate that you are making the effort to travel to our wedding.  Buying us a gift is not necessary, however if you are looking to give us something, a contribution towards our honeymoon would really make our day.</p>
    </Container>
  </Layout>
  </ThemeProvider>
)

export default class Wedding extends React.Component {
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }
  render () {
    return (
      <WeddingPage></WeddingPage>
    )
  };
};