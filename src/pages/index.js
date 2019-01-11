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

import Tabs from '../components/tabs'

import BodegaRidge1 from '../images/bodega_cabin_1.jpg'
import BodegaRidge2 from '../images/bodega_cabin_2.jpg'
import BodegaRidge3 from '../images/bodega_cabin_3.jpg'
import BodegaRidge4 from '../images/bodega_cabin_4.jpg'

import Galiano1 from '../images/galiano-1.jpg'
import Galiano2 from '../images/galiano-2.jpg'
import Galiano3 from '../images/galiano-3.jpg'
import Galiano4 from '../images/galiano-4.jpg'

import RingsImage from '-!svg-react-loader?name=Icon!../images/rings.svg';
import BarbecueImage from '-!svg-react-loader?name=Icon!../images/barbecue.svg';
import FreeTimeImage from '-!svg-react-loader?name=Icon!../images/free-time.svg';
import PartyImage from '-!svg-react-loader?name=Icon!../images/party-icon.svg';

import GalianoImage from '../components/hero-images/galiano'


import Overlay from '../components/overlay';



const Hero = styled.div`
  height: 85vh;
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
    @media only screen and (min-width: ${props => props.theme.aboveMobile}) {
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 64px;
    z-index: 2;
    padding: 16px;
    width: 330px;
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
    
    .gatsby-image-wrapper  {
      picture img, img {
        object-position: bottom center!important;
      }
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
ul {
  li {
    color: #000!important;
  }
}

h4 {
  a:link, a:visited {
    color: ${Theme.primary};
  }
  a:visited {
    color: #333;
  }
}
`
const TabsStyle = styled.div`
.tabs {

  min-height: 500px;
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
          <p>Galiano Island, Canada</p>

          <p className="date">July 2nd  - 4th 2019</p>

          <Button text="RSVP" href="#rsvp" className="ghost"></Button>
        </div>
        <Overlay></Overlay>
      </Hero>
        <Section bgColor={Theme.paleBlue}>

        </Section>
        <Section>
          <SectionTitle 
            text="When & Where" 
            subtitle="The wedding will take place atop the bluffs at Bodega Ridge, on beautiful Galiano Island."
            icon={<Marker></Marker>}>
          </SectionTitle>
          <p>You didn't think a simple flight to Canada would suffice did you?! Bodege Ridge is located on the north of the island, and is about 25 minutes drive away from Sturdies Bay harbour.</p>
          
          <CountdownWrapper>
            <address>
              Bodega Ridge,<br />
              120 Manastee Road,<br />
              Galiano Island,<br />
              British Columbia,<br />
              Canada<br />
              <a href="https://www.bodegaridge.com" target="_blank" rel="nofollow noreferrer">www.bodegaridge.com</a>
            </address>

            <h4>Wednesday, July 3rd 2019</h4>
            <Countdown date={`2019-07-03T16:00:00`}></Countdown>
          </CountdownWrapper>
          
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
            <p>Galiano Island is a 45 minute ferry away from Vancouver. Ferries depart from Tsawwassen Ferry Port, which is a 30 minute drive from the centre of Vancouver.</p>

            <p>Renting a car is strongly recommended. Galiano island is a rural paradise with just 1,300 permanent residents. Public transport is practically non-existent.</p>

            <p>There are just 3 ferries per day to Galiano Island. Reserving a space on the ferry is HIGHLY recommended. Ferries depart Tsawwassen on Tuesday, July 2nd at the following times:</p>

            <ul>
              <li>
                10:10AM
              </li>
              <li>
                1:40PM
              </li>
              <li>
                7:50PM (High chance you'll have missed the BBQ if you get this ferry. We'll save you a burger!)
              </li>
            </ul>

            <p>Please note: The welcome BBQ starts at 6pm on Tuesday 2nd July. Guests should aim to be on one of the 2 earlier ferries. Those departing on the 7:50PM ferry might not have much food left to choose from! </p>

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
        
          {/* <Timeline></Timeline> */}
          <Schedule>
            <ScheduleItem>
              <h3>Tuesday, 3rd July</h3>
            </ScheduleItem>
            <ScheduleItem>
              <div>
                <h4>Arrive</h4>
                <p>Your ferry will land at Sturdies Bay. </p>
              </div>
              <div className="meta">
                <span className="icon">
                  <Ferry></Ferry>
                </span>
              </div>
            </ScheduleItem>
            <ScheduleItem>
              <div>
                <h4>Welcome BBQ</h4>
                <p>Starts @ 6pm</p>
              </div>
              <div className="meta">
                <span className="icon">
                  <BarbecueImage></BarbecueImage>
                </span>
              </div>
            </ScheduleItem>
            <ScheduleItem>
              <h3>Wednesday, 2nd July</h3>
            </ScheduleItem>
            <ScheduleItem>
              <div>
                <h4>Free Time</h4>
                <p>Perhaps go for a morning hike up Mount Galiano? Hire a kayak from Montague Harbour? Take a whale-watching tour?</p>
              </div>
              <div className="meta">
                <span className="icon">
                  <FreeTimeImage></FreeTimeImage>
                </span>
              </div>
            </ScheduleItem>
            <ScheduleItem>
              <div>
                <h4>Wedding</h4>
                <p>Starts at 4:30pm. The wedding site is a 5 minute walk up the hill, and features a beautiful panoramic view of the Gulf Islands.</p>
              </div>
              <div className="meta">
                <span className="icon">
                  <RingsImage></RingsImage>
                </span>
              </div>
            </ScheduleItem>
            <ScheduleItem>
              <div>
                <h4>Drinks & Canapes</h4>
                <p></p>
              </div>
              <div className="meta">
                <span className="icon">
                  <Canapes></Canapes>
                </span>
              </div>
            </ScheduleItem>
            <ScheduleItem>
              <div>
                <h4>Dinner</h4>
                <p></p>
              </div>
              <div className="meta">
                <span className="icon">
                <Dinner></Dinner>
                </span>
              </div>
            </ScheduleItem>
            <ScheduleItem>
              <div>
                <h4>Partay</h4>
                <p></p>
              </div>
              <div className="meta">
                <span className="icon">
                  <PartyImage></PartyImage>
                </span>
              </div>
            </ScheduleItem>
            <ScheduleItem>
              <h3>Thursday, 4th July</h3>
            </ScheduleItem>
            <ScheduleItem>
              <div>
                <h4>Depart</h4>
                <p></p>
              </div>
              <div className="meta">
                <span className="icon">
                  <Boat></Boat>
                </span>
              </div>
            </ScheduleItem>
          </Schedule>
          
        </Section>

        <Section bgColor="#7795F8" textColor="#ffffff">
          <SectionTitle 
            text="Accommodation" 
            subtitle="Somewhere to rest your weary heads"
            icon={<Accommodation></Accommodation>}
            bgColor={Theme.neonBlue}
            color="#ffffff">
          </SectionTitle>
          <p>There's plenty of top-notch accommodation on the Bodega Ridge property itself, a stones-throw away at Bodega Cove, or in one of several B&B's within a 10 minute walk away.</p>
          <p>Bodega Ridge has 6 3-bedroom cabins available on-site. there’s also several cabins at Bodega Cove which sleeps a further 12.</p>
          <TabsStyle>
          <Tabs>
          <div label="Bodega Ridge">
            <ContentBox>
            <h3>Bodega Ridge</h3>
              <p>There are seven charming, self-contained log cabins, all with three bedrooms, living room, full kitchen and bath. Each cabin sleeps six comfortably, and all bedrooms have a queen-size bed with dreamy pillow-top mattress.</p>

              <p>Take in the view from your cedar deck, have a long soak in the tub, or curl up in front of the wood stove.</p>
              <h4>Price per double room: $140/night</h4>
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
            
              <ul>
        <li>
          1 bedroom cabin: $350/night
        </li>
        <li>
          2 bedroom cabin (price per room): $200/night
        </li>
      </ul>
            </ContentBox>
          </div>
          <div label="Other Options">
            <ContentBox>
              <h3>Other Options</h3>
              <h4><a href="https://abnb.me/9soohDPSNL">Private Oceanfront Studio</a></h4> 
              <p>Just 2 doors down from Bodega Cove. Modern waterfront studio suite with private entrance. Large deck with views of Trincomali Channel, surrounded by fir and arbutus trees. Go for a swim in the ocean. Take an outdoor shower. Watch whales, eagles, hummingbirds, sea lions and otters.</p>

              <h4><a href="http://pinkgeraniumcottage.com/Welcome.html">Pink Geranium</a></h4>           
              <p>A 10-minute walk from Bodega Ridge. Beautiful little cottage with one bedroom and pull out across the street from the water</p>
            
              <h4><a href="http://www.galianoreddoor.com">Behind the Red Door</a></h4>
              <p>About a 5-7-minute drive from Bodega Ridge. A cozy 1-bedroom B&B.</p>

              <h4><a href="http://www.galianocabins.com">Galiano Oceanfront Cabins</a></h4>
              <p>A 10-minute walk from Bodega Ridge, 2 lovely cabins just down the hill. 1 oceanfront cottage w/ 1 bedroom and a 3-bedroom cabin with a beautiful view of the water.</p>

              <h4><a href="https://www.vrbo.com/2144">Galiano Getaways</a></h4>
              <p>A 3-bedroom beautiful cabin located just north of Bodega Ridge, a 30 second drive, up Clementine Lane. 5-10 walking distance. </p>
            
              <h4><a href="https://www.airbnb.ca/rooms/13999967">The Sweet Suite</a></h4>
              <p>2-bedroom accommodation on the South End of Galiano Island, about a 20- 25-minute drive to Bodega Ridge.</p> 

              <h4><a href="http://hiddenridgegaliano.com">The Hidden Ridge</a></h4>
              <p>A Cottage and a Bed & Breakfast about a 5-7-minute drive from Bodega Ridge.</p> 

              <h4><a href="https://www.vrbo.com/596088">Heritage House</a></h4>
              <p>A cozy 4-bedroom Heritage House on 5 acres of tranquility. On the South End of Galiano Island about a 20-25-minute drive to Bodega Ridge.</p>

              <h4><a href="https://www.vrbo.com/810824">Guest Cottage on 3-Acres</a></h4> 
              <p>Sleeps up to 6 people, waterfront cottage. On the South End of Galiano Island about a 20-25-minute drive to Bodega Ridge.</p> 

              <h4><a href="https://www.airbnb.ca/rooms/12156952">Captain's Quarters</a></h4>
              <p>5-minute drive from Bodega Ridge, very nice historic log cabin.</p>

              <h4>
                <a href="https://www.airbnb.ca/rooms/12156952">
                  Captain's Quarters
                </a>
              </h4>
              <p>5-minute drive from Bodega Ridge, very nice historic log cabin.</p>
            </ContentBox>
          </div>
          </Tabs>
          </TabsStyle>
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
              <h3>Hike up Mount Galiano</h3>
              <p>With a 301 metre elevation at it's peak, Mount Galiano offers incredible views of the southern gulf islands. Allow 45 minutes to an hour for the ascent.</p>
            </div>
            <div data-src={Galiano3} alt="Coastline">
              <h3>Explore the stunning coastline</h3>
            </div>
            <div data-src={Galiano4} alt="Bodega Ridge">
              <h3>Get to know the local wildlife</h3>
              <p>Eagles, deer, seals, otters and orcas are seen regularly from all over the island.</p>
            </div>
          </Slider>
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