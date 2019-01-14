import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layouts/layout'
import Theme from '../config/theme'
import { ThemeProvider } from 'styled-components'

import Logo from '-!svg-react-loader?name=Logo!../images/logo.svg'
import Marker from '-!svg-react-loader?name=Marker!../images/marker.svg'

import Boat from  '-!svg-react-loader?name=Boat!../images/boat-icon.svg'
import Calendar from  '-!svg-react-loader?name=Calendar!../images/calendar-icon.svg'
import Gift from  '-!svg-react-loader?name=Gift!../images/gift-icon.svg'
import Dinner from '-!svg-react-loader?name=Dinner!../images/dinner-icon.svg'
import Ferry from '-!svg-react-loader?name=Ferry!../images/ferry-icon.svg'
import Canapes from '-!svg-react-loader?name=Canapes!../images/canapes-icon.svg'



import Button from '../components/button'
import Section from '../components/layouts/section'
import SectionTitle from '../components/layouts/section-title'
import HomeHero from '../components/hero-images/home'
import Schedule from '../components/schedule'
import ScheduleItem from '../components/schedule-item'
import Countdown from '../components/countdown'

import RingsImage from '-!svg-react-loader?name=Icon!../images/rings.svg';
import BarbecueImage from '-!svg-react-loader?name=Icon!../images/barbecue.svg';
import FreeTimeImage from '-!svg-react-loader?name=Icon!../images/free-time.svg';
import PartyImage from '-!svg-react-loader?name=Icon!../images/party-icon.svg';

import Map from '../images/map.png'

import Overlay from '../components/overlay';



const Hero = styled.div`
@media only screen and (min-width: ${props => props.theme.aboveMobile}) {
  height: 85vh;
}
  display:flex;
  flex-direction:column;
  justify-content: flex-start;
  align-content: center;
  position: relative;

  h1, h2 {
    text-align:center;
    z-index:3;
    color:#fff;
  }
  .site-title {
    /* @media only screen and (min-width: ${props => props.theme.aboveMobile}) { */
    background-color: #fff;
    position: relative;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;

    svg {
      width: 80%;
    }
    @media only screen and (min-width: ${props => props.theme.aboveMobile}) { 
      top: 0;
      bottom: initial;
      left: 64px;
      right: initial;
      width: 330px;
      position: absolute;
    }
    z-index: 4;
    padding: 32px;
    

    text-align: center;
    padding-top: 64px;
    font-family: 'Aisha Latin';
    font-size: 2rem;


    p {
      color: ${Theme.primary}!important;
      margin-bottom: 16px;
      line-height: 1.5rem;
    }
    p.date {
      color: #333!important;
      font-family: 'Lato';
      font-size: 1rem;
    }
    .ghost {
      padding-bottom: 0;
    }
  /* } */
  
  }

  .heroImg {
    img {
      object-position: center bottom!important;
    }
  }
`




const CountdownWrapper = styled.div`
  address {
    text-align: center;
  }
  h4 {
    color: ${Theme.primary};
    text-align: center;
    font-family: 'Lato';
    font-size: 1.8rem;
    font-weight: 200;
  }
`

const Index = () => (
  <ThemeProvider theme={Theme}>
    <Layout location="/" noLogo={true}>
      <Hero>
        <HomeHero></HomeHero>
        <div className="site-title">
          <Logo className="logo"></Logo>
          <p>Galiano Island, BC</p>

          <p className="date">July 2nd  - 4th 2019</p>

          <Button text="RSVP" href="#rsvp" className="ghost"></Button>
        </div>
        <Overlay></Overlay>
      </Hero>

        <Section>
          <SectionTitle 
            text="Wedding Deets" 
            subtitle=""
            icon={<Marker></Marker>}>
          </SectionTitle>

          <p className="lead">Our wedding will take place on beautiful Galiano Island, the closest Southern Gulf Island to Vancouver. The wedding ceremony will be around 4pm on Wedneday, July 3rd.</p>
          
          <p>Bodega Ridge is located on the north of the island, and is about 25 minutes drive away from Sturdies Bay harbour.</p>

          <img src={Map} alt="map" />

          <h3>Helpful Details</h3>

          <ul>
            <li>
              The ceremony will be held on a bluff overlooking the the ocean and the mountains of Vancouver Island, followed by a marquee reception.
            </li>
            <li>
              Bring sun screen, sunglasses, and keep an eye out for orcas in the channel!
            </li>
            <li>
              The bar accepts cash & card payments. There are cash points available on the island towards Sturdies Bay.
            </li>
            <li>
              Children are very welcome to the wedding. Please let us know how many you're bringing and their ages in your RSVP. Depending on numbers, we are hoping to arrange a local vetted babysitter to entertain them for part of the evening.
            </li>
          </ul>

          <CountdownWrapper>
            <address>
              Bodega Ridge,<br />
              120 Manastee Road,<br />
              Galiano Island,<br />
              British Columbia,<br />
              Canada<br />
              <a href="https://www.bodegaridge.com" target="_blank" rel="noopener noreferrer">www.bodegaridge.com</a>
            </address>

            <h4>Wednesday, July 3rd 2019</h4>
            <Countdown date={`2019-07-03T16:00:00`}></Countdown>
          </CountdownWrapper>
          
        </Section>

        

        <Section bgColor="#F6F9FC">
          <SectionTitle 
            text="Schedule of Events" 
            subtitle="The wedding will span 3 days, from July 2nd - 4th"
            icon={<Calendar></Calendar>}>
          </SectionTitle>
        
          {/* <Timeline></Timeline> */}
          <Schedule>
            <ScheduleItem>
              <h3>Tuesday, July 2nd</h3>
            </ScheduleItem>
            <ScheduleItem>
              <div className="description">
                <h4>Arrive</h4>
                <p>Grab a coffee from Sturdies Bay. If you have time, drive the kilometre to Bellhouse Park where you might be able to see seals, eagles and orcas. Then, head north to Bodega Ridge and check in to your accommodation.</p>
              </div>
              <div className="meta">
                <span className="icon">
                  <Ferry></Ferry>
                </span>
              </div>
            </ScheduleItem>
            <ScheduleItem>
            <div className="description">
                <h4>Welcome BBQ</h4>
                <p>Settle in to island life at Bodega Ridge, kick back and enjoy a BBQ and a few bevvies.</p>
              </div>
              <div className="meta">
                <span className="icon">
                  <BarbecueImage></BarbecueImage>
                </span>
              </div>
            </ScheduleItem>
            <ScheduleItem>
              <h3>Wednesday, July 3rd</h3>
            </ScheduleItem>
            <ScheduleItem>
            <div className="description">
                <h4>Free Time</h4>
                <p>We're thinking of organising an optional hike around Bodega Ridge Provincial Park - please let us know if you're interested. Otherwise, spend some time exploring the beaches near Bodega Ridge? Or just chill out in the grounds and get ready for the party.</p>
              </div>
              <div className="meta">
                <span className="icon">
                  <FreeTimeImage></FreeTimeImage>
                </span>
              </div>
            </ScheduleItem>
            <ScheduleItem>
              <div className="description">
                <h4>Wedding</h4>
                <p>The ceremony will start around 4pm. The wedding site is a short walk up to the bluff, and features a beautiful panoramic view of the Gulf Islands.</p>
              </div>
              <div className="meta">
                <span className="icon">
                  <RingsImage></RingsImage>
                </span>
              </div>
            </ScheduleItem>
            <ScheduleItem>
              <div className="description">
                <h4>Drinks & Canapes</h4>
                <p>Enjoy celebratory drinks and nibbles whilst listening to some local acoustics.</p>
              </div>
              <div className="meta">
                <span className="icon">
                  <Canapes></Canapes>
                </span>
              </div>
            </ScheduleItem>
            <ScheduleItem>
              <div className="description">
                <h4>Dinner</h4>
                <p>The menu will feature as many Galiano grown ingredients as possible, using the best local farms and designed around seasonal availability. Many herbs and fruit come right off the Bodega Ridge property itself. Please ensure you inform us of any dietary requirements in your RSVP.</p>
              </div>
              <div className="meta">
                <span className="icon">
                <Dinner></Dinner>
                </span>
              </div>
            </ScheduleItem>
            <ScheduleItem>
              <div className="description">
                <h4>Partay</h4>
                <p>Dance the night away to your favourite tunes in the lodge.</p>
              </div>
              <div className="meta">
                <span className="icon">
                  <PartyImage></PartyImage>
                </span>
              </div>
            </ScheduleItem>
            <ScheduleItem>
              <h3>Thursday, July 4th</h3>
            </ScheduleItem>
            <ScheduleItem>
              <div className="description">
                <h4>Depart</h4>
                <p>Depending on numbers, we are planning to organise a goodbye brunch on the morning of Thursday July 4th. We'll be in touch nearer the time to confirm attendees. Otherwise after emotional goodbyes, you can carry on with your Canadian travels</p>
              </div>
              <div className="meta">
                <span className="icon">
                  <Ferry></Ferry>
                </span>
              </div>
            </ScheduleItem>
          </Schedule>
          
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