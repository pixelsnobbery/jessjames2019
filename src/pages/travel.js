import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layouts/layout'
import TravelHero from '../components/travel-hero'

import Theme from '../config/theme'
import { ThemeProvider } from 'styled-components'

import Overlay from '../components/overlay'
import Section from '../components/layouts/section'
import SectionTitle from '../components/layouts/section-title'

import Tofino from '../images/tofino.jpg'
import Vancouver from '../images/vancouver.jpg'
import Whistler from '../images/whistler.jpg'
import Okanagan from '../images/okanagan.jpg'

import Heart from  '-!svg-react-loader?name=Heart!../images/heart.svg'
import ItineraryIcon from  '-!svg-react-loader?name=Itinerary!../images/itinerary-icon.svg'

import TofinoTravel from '../images/tofino-travel.jpg'
import SeaToSky from '../images/sea-to-sky.jpg'
import MountGaliano from '../images/mount-galiano.jpg'
import WhistlerLakes from '../images/whistler-lakes.jpg'
import BearTour from '../images/bear-tour.jpg'
import VancouverSeawall from '../images/vancouver-seawall.jpg'
import WhistlerItinerary from '../images/whistler-itinerary.jpg'

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
const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .card {
    position: relative;
    flex: 1 0 0;
    min-width: 300px;
    height: 300px;
    overflow: hidden;
    margin: 8px 8px;
    border-radius: 8px;
    transition: .8s all ease;
    box-shadow: 0 0 0 rgba(0,0,0,0);
    a {
      > img {
        display: block;
        width: 100%;
        height: 100%;
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
        font-size: 1.4rem;
        transition: .8s font-size ease;
      }

      p {
        color: #999!important;
      }
    
      &:hover {
        
        h3 {
          font-size: 1.5rem;
        }
      }
  }
  &:hover, &:active {
    transform: translateY(-10px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.4);
  }
  &.animated {
        animation: scaleUp .5s ease;
        animation-fill-mode: backwards;
      }
      @keyframes scaleUp {
        0%   { transform: translateY(50px); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
      }
    }
`

const Itinerary = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;

  li {
    display: flex;
    align-items: center;

    h4 {
      width: 80px;
      height: 80px;
      border-radius: 40px;
      background-color: ${props => props.theme.primary};
      text-align: center;
      line-height: 80px;
      text-transform: uppercase;
      font-family: 'Lato';
      color: #fff;
      font-weight: normal;
      margin: 0 16px;
      align-content: center;
      justify-content: center;
      display: flex;
      order: 1;

      &.animated {
        animation: scaleIn .5s ease;
        animation-fill-mode: backwards;
      }
      @keyframes scaleIn {
        0%   { transform: scale(0,0); opacity: 0; }
        100% { transform: scale(1,1); opacity: 1; }
      }
    }

    .content-box {
      background-color: #fff;
      padding: 32px;
      order: 0;
      flex-basis: 40%;
      box-shadow: 0 3px 6px rgba(0,0,0,0.1);

      h3 {
        margin-top: 0;
        
      }

      p {
        color: #999;
        line-height: 1.4rem;
        font-size:.9rem;
      }

      &.animated {
        animation: scaleInLeft .5s ease;
        animation-fill-mode: backwards;
      }
      @keyframes scaleInLeft {
        0%   { transform: translateX(-40px); opacity: 0; }
        100% { transform: translateX(0); opacity: 1; }
      }

      
    }

    .content-spacer {
        flex-basis: 40%;
        width: 40%;
        display: block;
        order: 2;
      }

    &:nth-child(even) {
      .content-box {
        order: 2;

        &.animated {
          animation: scaleInRight .5s ease;
        }

        @keyframes scaleInRight {
        0%   { transform: translateX(40px); opacity: 0; }
        100% { transform: translateX(0); opacity: 1; }
      }
      }
      .content-spacer {
        order: 0;
      }
    }
  }
  
`

const TravelPage = () => (
  <ThemeProvider theme={Theme}>
    <Layout>

      <Hero>
        <TravelHero />
        <h1>Travel</h1>
        <span>Read on for some of our favourite places to see in British Columbia</span>
        <Overlay />
      </Hero>
      
      <Section>
        <SectionTitle text="BC Highlights" icon={<Heart></Heart>}></SectionTitle>

      <CardWrapper>
        <div className="card wow">
        <a href="https://www.lonelyplanet.com/canada/vancouver" target="_blank" rel="noopener noreferrer">
          <img src={Whistler} alt="Whistler" />
          <h3>Whistler</h3>
          </a>
        </div>

        <div className="card wow" data-wow-delay=".1s">
          <a href="https://www.lonelyplanet.com/canada/vancouver" target="_blank" rel="noopener noreferrer">
          <img src={Vancouver} alt="Vancouver" />
          <h3>Vancouver</h3>
          </a>
        </div>

        <div className="card wow" data-wow-delay=".2s">
        <a href="https://www.lonelyplanet.com/canada/vancouver" target="_blank" rel="noopener noreferrer">
          <img src={Tofino} alt="Tofino" />
          <h3>Tofino</h3>
          </a>
        </div>

        <div className="card wow" data-wow-delay=".3s">
        <a href="https://www.lonelyplanet.com/canada/vancouver" target="_blank" rel="noopener noreferrer">
          <img src={Okanagan} alt="Okanagan" />
          <h3>Okanagan Valley</h3>
        </a>
        </div>
      </CardWrapper>
      </Section>

      <Section bgColor="#F6F9FC">
        <SectionTitle text="Example Itinerary" icon={<ItineraryIcon></ItineraryIcon>}></SectionTitle>

        <Itinerary>
          <li>
            <div className="content-box wow">
              <h3>Arrive</h3>
              <p>Once you get through immigration (Don't forget to apply for your eTA!), drop your bags off at the hotel and then head out to one of Vancouver's foodie areas for a bite to eat.</p>
            </div>
            <h4 className="wow">Day 1</h4>
            <div className="content-spacer"></div>
          </li>
          <li>
            <div className="content-box wow">
              <h3>Vancouver Stuff</h3>
              <p>Spend a day exploring what makes Vancouver one of the world’s most livable cities. There are so many free attractions to enjoy, such as Stanley and Queen Elizabeth Parks, Granville Island, and Kitsilano Beach. For museum buffs, check out the Museum of Vancouver, Science World, and the Museum of Anthropology.</p>
              <img src={VancouverSeawall} alt="Vancouver" />
            </div>
            <h4 className="wow">Day 2</h4>
            <div className="content-spacer"></div>
          </li>
          <li>
            <div className="content-box wow">
              <h3>Sea to Sky Highway</h3>
              <p>The drive along the Sea to Sky Highway is one of the most beautiful in Canada. Definitely stop at the Sea to Sky Gondola along the way, which has amazing views of Howe Sound, plus a suspension bridge and trails. Another great place to visit is Shannon Falls, BC’s third largest waterfall. Once in Whistler, head to Whistler Village for dinner.</p>
              <img src={SeaToSky} alt="Sea to Sky Highway"></img>
            </div>
            <h4 className="wow">Day 3</h4>
            <div className="content-spacer"></div>
          </li>
          <li>
            <div className="content-box wow">
              <h3>Whistler</h3>
              <p>Finally, you can see for yourselves why Jess fell in love with this place. Perhaps named for the furry marmots that populate the area and whistle like deflating balloons, this gabled alpine village and 2010 Olympics venue is one of the world's most popular ski resorts. Summer visitors now outnumber their ski-season equivalents, with many lured by the area's scenic hiking, biking and thrill-popping outdoor adventures.</p>
              <img src={WhistlerItinerary} alt="Whistler"></img>
            </div>
            <h4 className="wow">Day 4</h4>
            <div className="content-spacer"></div>
          </li>
          <li>
            <div className="content-box wow">
              <h3>Whistler Lakes</h3>
              <p>Take a day and explore Whistler's lakes and beaches by bike or on foot via the Valley Trail.</p>
              <img src={WhistlerLakes} alt="Whistler Lakes"></img>
            </div>
            <h4 className="wow">Day 5</h4>
            <div className="content-spacer"></div>
          </li>
          <li>
            <div className="content-box wow">
              <h3>Ferry to Galiano Island</h3>
              <p>Drive back down the Sea-to-Sky highway (stop off at Brandywine Falls on the way - it's a picture-perfect waterfall!) to Tsawwassen ferry terminal, and board your ferry to Galiano. (Don't forget to reserve a space - they book up quickly!)</p>
              <img src={MountGaliano} alt="Mount Galiano"></img>
            </div>
            <h4 className="wow">Day 6</h4>
            <div className="content-spacer"></div>
          </li>
          <li>
            <div className="content-box wow">
              <h3>Watch Jess get Wifed</h3>
            </div>
            <h4 className="wow">Day 7</h4>
            <div className="content-spacer"></div>
          </li>
          <li>
            <div className="content-box wow">
              <h3>Salt Spring Island</h3>
            </div>
            <h4 className="wow">Day 8</h4>
            <div className="content-spacer"></div>
          </li>
          <li>
            <div className="content-box wow">
              <h3>Victoria</h3>
            </div>
            <h4 className="wow">Day 9</h4>
            <div className="content-spacer"></div>
          </li>
          <li>
            <div className="content-box wow">
              <h3>Drive to Tofino</h3>
              <p>Tofino is Vancouver Island's favorite outdoorsy retreat. It's not surprising that surf fans, families and city-escaping Vancouverites keep coming: packed with activities and blessed with spectacular local beaches, it sits on Clayoquot Sound, where forested mounds rise from roiling, ever-dramatic waves.</p>
              <img src={TofinoTravel} alt="=Tofino"></img>
            </div>
            <h4 className="wow">Day 10</h4>
            <div className="content-spacer"></div>
          </li>
          <li>
            <div className="content-box wow">
              <h3>Bear Tour?</h3>
              <p>Take a cruise along the coast and watch bears come to the shore in search of crabs.</p>
              <img src={BearTour} alt="Bear Tour"></img>
            </div>
            <h4 className="wow">Day 11</h4>
            <div className="content-spacer"></div>
          </li>
          <li>
            <div className="content-box wow">
              <h3>Back to Vancouver</h3>
            </div>
            <h4 className="wow">Day 12</h4>
            <div className="content-spacer"></div>
          </li>
        </Itinerary>
      </Section>

      <Section>

        <SectionTitle text="Heading on a US road trip?"></SectionTitle>
      </Section>

    </Layout>
  </ThemeProvider>
)

export default class Travel extends React.Component {
  componentDidMount() {
    const WOW = require("wowjs");
    const wow = new WOW.WOW();
    wow.init();
  }
  render () {
    return (
      <TravelPage></TravelPage>
    )
  };
};
