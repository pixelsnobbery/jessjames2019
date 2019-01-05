import React from 'react'
import styled from 'styled-components'

import Slider from '../components/slider'

import Layout from '../components/layouts/layout'
import Theme from '../config/theme'
import { ThemeProvider } from 'styled-components'

import Logo from '-!svg-react-loader?name=Logo!../images/logo.svg'
import Marker from '-!svg-react-loader?name=Marker!../images/marker.svg'
import Accommodation from '-!svg-react-loader?name=Accommodation!../images/accommodation.svg'
import Boat from  '-!svg-react-loader?name=Boat!../images/boat-icon.svg'
import Calendar from  '-!svg-react-loader?name=Calendar!../images/calendar-icon.svg'
import Gift from  '-!svg-react-loader?name=Gift!../images/gift-icon.svg'

import Button from '../components/button'
import Section from '../components/layouts/section'
import SectionTitle from '../components/layouts/section-title'
import HomeHero from '../components/hero-images/home'
import Timeline from '../components/timeline'
import Countdown from '../components/countdown'

import Tabs from '../components/tabs'

import BodegaRidge1 from '../images/bodega_cabin_1.jpg'
import BodegaRidge2 from '../images/bodega_cabin_2.jpg'
import BodegaRidge3 from '../images/bodega_cabin_3.jpg'
import BodegaRidge4 from '../images/bodega_cabin_4.jpg'

import GalianoImage from '../components/hero-images/galiano'


import Overlay from '../components/overlay';



const Hero = styled.div`
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
    @media only screen and (min-width: ${props => props.theme.aboveMobile}) {
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
  }
`

const ContentBox = styled.div`
background-color: #fff;
padding: 32px;
width: 100%;
@media only screen and (min-width: ${props => props.theme.aboveMobile}) {
width: 600px;
}
box-shadow: 0 6px 15px rgba(0,0,0,0.2);

h3 {
  margin-top: 0;
}
`
const TabsStyle = styled.div`
.tabs {


  display: flex;

  ul {
    list-style-type: none;
    -webkit-padding-start: 0;
    flex-grow: 1;
    li {
      -webkit-padding-start: 0;
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;
        padding: 8px 8px 8px 40px;
        display: block;
        border-radius: 6px;
        


      &.tab-list-active {
          background-color: ${Theme.neonBlue};
          box-shadow: 0 3px 10px rgba(0,0,0,0.2);
      }
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
          <SectionTitle 
            text="When & Where" 
            subtitle="The wedding will take place atop the bluffs at Bodega Ridge, on beautiful Galiano Island."
            icon={<Marker></Marker>}>
          </SectionTitle>
          <p>You didn't think a simple flight to Canada would suffice did you?! Bodege Ridge is located on the north of the island, and is about 25 minutes drive away from Sturdies Bay harbour.</p>
          
          <address>
            Bodega Ridge,<br />
            120 Manastee Road,<br />
            Galiano Island,<br />
            British Columbia,<br />
            Canada
          </address>

          <h4>Wednesday, July 3rd 2019</h4>
          <Countdown date={`2019-07-03T16:00:00`}></Countdown>
        </Section>

        <Section>
          <GalianoImage></GalianoImage>
          <SectionTitle
            text="Getting to Galiano Island"
            color="#ffffff"
            bgColor={Theme.secondary}
            icon={<Boat></Boat>}>
          </SectionTitle>
          <ContentBox>
            <p>Galiano Island is a quick 45 minute ferry away from Vancouver. Ferries depart from Tsawwassen Ferry Port, which is a 30 minute drive from the centre of Vancouver.</p>

            <p>Travelling by car is strongly recommended. Galiano island is a rural paradise with just 1,300 permanent residents. Public transport is practically non-existent.</p>
          
            <Button text="View schedule & reserve ferry" href="https://www.bcferries.com/schedules/southern/vade-current.php?scheduleSelect=sch062619007.html" bgColor={Theme.secondary}></Button>
          </ContentBox>
          <Overlay></Overlay>
        </Section>

        <Section bgColor="#F6F9FC">
          <SectionTitle 
            text="Schedule of Events" 
            subtitle="The wedding will span 3 days, from July 2nd - 4th"
            icon={<Calendar></Calendar>}>
          </SectionTitle>
        
          <Timeline></Timeline>
          
        </Section>

        <Section bgColor="#7795F8">
          <SectionTitle 
            text="Accommodation" 
            subtitle="Bodega Ridge has 6 3-bedroom cabins available on-site. there’s also several cabins at Bodega Cove which sleeps a further 12."
            icon={<Accommodation></Accommodation>}
            bgColor={Theme.neonBlue}
            color="#ffffff">
          </SectionTitle>
          
          <TabsStyle>
          <Tabs>
          <div label="Bodega Ridge">
            <ContentBox>
            <h3>Bodega Ridge</h3>
              <p>There are seven charming, self-contained log cabins, all with three bedrooms, living room, full kitchen and bath. Each cabin sleeps six comfortably, and all bedrooms have a queen-size bed with dreamy pillow-top mattress.</p>

              <p>Take in the view from your cedar deck, have a long soak in the tub, or curl up in front of the wood stove.</p>

              <Slider>
                <div data-src={BodegaRidge1} alt="Bodega Ridge"></div>
                <div data-src={BodegaRidge2} alt="Bodega Ridge"></div>
                <div data-src={BodegaRidge3} alt="Bodega Ridge"></div>
                <div data-src={BodegaRidge4} alt="Bodega Ridge"></div>
              </Slider>
  
            </ContentBox>
          </div>
          <div label="Bodega Cove">
            <ContentBox>
              <h3>Bodega Cove</h3>

              <p>A 5-minute walk from Bodega Ridge, and the ceremony site, Bodega Cove consists of 5 cedar cabins. There are two designs: romantic one bedroom units and more spacious two bedroom cabins ideal for two couples or a small family.</p>
            </ContentBox>
          </div>
          <div label="Other Options">
            <ContentBox>
              <h3>Other Options</h3>
            </ContentBox>
          </div>
          </Tabs>
          </TabsStyle>
        </Section>

        <Section>
          <SectionTitle
            text="Gifts"
            subtitle=""
            icon={<Gift></Gift>}>
          </SectionTitle>

          <p>We are delighted to have you as our guest and we appreciate that you are making the effort to travel to our wedding. Buying us a gift is not necessary, however if you are looking to give us something, a contribution towards our honeymoon would really make our day.</p>
        </Section>
    </Layout>
  </ThemeProvider>
)

export default class IndexPage extends React.Component {
  componentDidMount() {
    const WOW = require("wowjs");
    const wow = new WOW.WOW();
    wow.init();
  }
  render () {
    return (
      <Index></Index>
    )
  };
};