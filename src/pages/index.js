import React from 'react'
import styled from 'styled-components'

import AwesomeSlider from 'react-awesome-slider';

import Layout from '../components/layouts/layout'
import Theme from '../config/theme'
import { ThemeProvider } from 'styled-components'

import Logo from '-!svg-react-loader?name=Logo!../images/logo.svg'
import Button from '../components/button'
import Section from '../components/layouts/section'
import SectionTitle from '../components/layouts/section-title'
import HomeHero from '../components/hero-images/home'
import Timeline from '../components/timeline'
import Countdown from '../components/countdown'

import BodegaRidge1 from '../images/bodega_cabin_1.jpg'
import BodegaRidge2 from '../images/bodega_cabin_2.jpg'
import BodegaRidge3 from '../images/bodega_cabin_3.jpg'
import BodegaRidge4 from '../images/bodega_cabin_4.jpg'

import GalianoImage from '../components/hero-images/galiano'

import WOW from "wowjs"
import Overlay from '../components/overlay';

const Hero = styled.div`
  display: block;
  height: 85vh;
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
  .site-title {
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 64px;
    z-index: 2;
    padding: 16px;
    width: 360px;
    text-align: center;
    padding-top: 64px;
    font-family: 'Aisha Latin';
    font-size: 2rem;

    .ghost {
      padding-bottom: 0;
    }
  }
`

const ContentBox = styled.div`
background-color: #fff;
padding: 32px;
max-width: 550px;

h3 {
  margin-top: 0;
}
`
const Tabs = styled.div`
  display: flex;

  ul {
    list-style-type: none;
    -webkit-padding-start: 0;
    li {
      -webkit-padding-start: 0;

      a:link, a:visited {
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;
        padding: 8px;
        display: block;
      }
    }
  }
`

const Index = () => (
  <ThemeProvider theme={Theme}>
    <Layout>
      <Hero>
        <HomeHero></HomeHero>
        <div className="site-title">
          <Logo className="logo"></Logo>
          <p>Galiano Island, Canada</p>

          <Button text="RSVP" href="#rsvp" className="ghost"></Button>
        </div>
        <Overlay></Overlay>
      </Hero>
      
        <Section>
          <SectionTitle text="When & Where" subtitle="The wedding will take place atop the bluffs at Bodega Ridge, on beautiful Galiano Island."></SectionTitle>
          <p>You didn't think a simple flight to Canada would suffice did you?! Bodege Ridge is located on the north of the island, and is about 25 minutes drive away from Sturdies Bay harbour.</p>
       <Countdown  date={`2019-07-03T16:00:00`}></Countdown>
        </Section>

        <Section>
          <GalianoImage></GalianoImage>
          <SectionTitle text="Getting to Galiano Island" color="#ffffff"></SectionTitle>
          <ContentBox>
            <p>Galiano Island is a quick 45 minute ferry away from Vancouver. Ferries depart from Tsawwassen Ferry Port, which is a 30 minute drive from the centre of Vancouver.</p>

            <p>Travelling by car is strongly recommended. Galiano island is a rural paradise with just 1,300 permanent residents. Public transport is practically non-existent.</p>
          
            <Button text="View schedule & reserve ferry" href="https://www.bcferries.com/schedules/southern/vade-current.php?scheduleSelect=sch062619007.html"></Button>
          </ContentBox>
          <Overlay></Overlay>
        </Section>

        <Section bgColor="#F6F9FC">
          <SectionTitle text="Schedule of Events" subtitle="The wedding will span 3 days, from July 2nd - 4th"></SectionTitle>
        
          <Timeline></Timeline>
          
        </Section>

        <Section bgColor="#7795F8">
          <SectionTitle 
            text="Accommodation" 
            subtitle="BODEGA RIDGE HAS 6 3-BEDROOM CABINS AVAILABLE ON-SITE. THERE’S ALSO SEVERAL CABINS AT BODEGA COVE WHICH SLEEPS A FURTHER 12.">
          </SectionTitle>

          <Tabs>
            <ContentBox>
              <h3>Bodega Ridge</h3>
              <p>There are seven charming, self-contained log cabins, all with three bedrooms, living room, full kitchen and bath. Each cabin sleeps six comfortably, and all bedrooms have a queen-size bed with dreamy pillow-top mattress.</p>

              <p>Take in the view from your cedar deck, have a long soak in the tub, or curl up in front of the wood stove.</p>

              <AwesomeSlider>
                <div data-src={BodegaRidge1} alt="Bodega Ridge"></div>
                <div data-src={BodegaRidge2} alt="Bodega Ridge"></div>
                <div data-src={BodegaRidge3} alt="Bodega Ridge"></div>
                <div data-src={BodegaRidge4} alt="Bodega Ridge"></div>
              </AwesomeSlider>
  
            </ContentBox>

            <ul>
              <li>
                <a href="#">Bodega Ridge</a>
              </li>
              <li>
                <a href="#">Bodega Cove</a>
              </li>
              <li>
                <a href="#">Other Options</a>
              </li>
            </ul>

          </Tabs>
        </Section>

        <Section>
          <SectionTitle
            text="Gifts"
            subtitle="">
          </SectionTitle>

          <p>We are delighted to have you as our guest and we appreciate that you are making the effort to travel to our wedding. Buying us a gift is not necessary, however if you are looking to give us something, a contribution towards our honeymoon would really make our day.</p>
        </Section>
    </Layout>
  </ThemeProvider>
)

export default class IndexPage extends React.Component {
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }
  render () {
    return (
      <Index></Index>
    )
  };
};