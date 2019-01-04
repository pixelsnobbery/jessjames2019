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
    font-size: 3rem;
  }
`
const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  .card {
    position: relative;
    flex-basis: 200px;
    height: 300px;
    overflow: hidden;
    margin: 0 8px;
    border-radius: 8px;
    transition: .8s transform ease;
    > img {
      display: block;
      width: 200px;
      height: 300px;
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
    &:hover {
      transform: translateY(-10px);

      h3 {
        font-size: 1.5rem;
      }
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
      padding: 16px;
      order: 0;
      flex-basis: 40%;

      h3 {
        margin-top: 0;
        
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
        <Overlay />
      </Hero>


      
      {/* <Section bgColor="#f6f9fc">
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
      </Section> */}
      
      <Section>
        <SectionTitle text="BC Highlights"></SectionTitle>

      <CardWrapper>
        <div className="card wow">
          <img src={Whistler} alt="Whistler" />
          <h3>Whistler</h3>
        </div>

        <div className="card wow" data-wow-delay=".1s">
          <img src={Vancouver} alt="Vancouver" />
          <h3>Vancouver</h3>
        </div>

        <div className="card wow" data-wow-delay=".2s">
          <img src={Tofino} alt="Tofino" />
          <h3>Tofino</h3>
        </div>

        <div className="card wow" data-wow-delay=".3s">
          <img src={Okanagan} alt="Okanagan" />
          <h3>Okanagan Valley</h3>
        </div>
      </CardWrapper>
      </Section>

      <Section bgColor="#F6F9FC">
        <SectionTitle text="Example Itinerary"></SectionTitle>

        <Itinerary>
          <li>
            <div className="content-box wow">
              <h3>Arrive</h3>
            </div>
            <h4 className="wow">Day 1</h4>
            <div className="content-spacer"></div>
          </li>
          <li>
            <div className="content-box wow">
              <h3>Vancouver Stuff</h3>
              <p>Spend a day exploring what makes Vancouver one of the world’s most livable cities. There are so many free attractions to enjoy, such as Stanley and Queen Elizabeth Parks, Granville Island, and Kitsilano Beach. For museum buffs, check out the Museum of Vancouver, Science World, and the Museum of Anthropology.</p>
            </div>
            <h4 className="wow">Day 2</h4>
            <div className="content-spacer"></div>
          </li>
          <li>
            <div className="content-box wow">
              <h3>Sea to Sky Highway</h3>
              <p>The drive along the Sea to Sky Highway is one of the most beautiful in Canada. Definitely stop at the Sea to Sky Gondola along the way, which has amazing views of Howe Sound, plus a suspension bridge and trails. Another great place to visit is Shannon Falls, BC’s third largest waterfall. Once in Whistler, head to Whistler Village for dinner.</p>
            </div>
            <h4 className="wow">Day 3</h4>
            <div className="content-spacer"></div>
          </li>
          <li>
            <div className="content-box wow">
              <h3>Whistler</h3>
            </div>
            <h4 className="wow">Day 4</h4>
            <div className="content-spacer"></div>
          </li>
          <li>
            <div className="content-box wow">
              <h3>Lakes</h3>
            </div>
            <h4 className="wow">Day 5</h4>
            <div className="content-spacer"></div>
          </li>
          <li>
            <div className="content-box wow">
              <h3>Ferry to Galiano Island</h3>
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
            </div>
            <h4 className="wow">Day 10</h4>
            <div className="content-spacer"></div>
          </li>
          <li>
            <div className="content-box wow">
              <h3>Bear Tour?</h3>
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
