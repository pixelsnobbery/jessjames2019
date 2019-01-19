import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layouts/layout'
import TravelHero from '../components/travel-hero'

import Button from '../components/button'

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
import AccommodationIcon from  '-!svg-react-loader?name=Accommodation!../images/accommodation.svg'

import TofinoTravel from '../images/tofino-travel.jpg'
import SeaToSky from '../images/sea-to-sky.jpg'
import MountGaliano from '../images/mount-galiano.jpg'
import WhistlerLakes from '../images/whistler-lakes.jpg'
import BearTour from '../images/bear-tour.jpg'
import VancouverSeawall from '../images/vancouver-seawall.jpg'
import WhistlerItinerary from '../images/whistler-itinerary.jpg'
import Victoria from '../images/victoria.jpg'

import GranvilleIsland from '../images/granville-island.jpg'
import StanleyPark from '../images/stanley-park.jpg'
import Gastown from '../images/gastown.jpg'
import Capilano from '../images/capilano.jpg'
import Grouse from '../images/grouse.jpg'
import SpanishBanks from '../images/spanish-banks.jpg'

import Card from '../components/card'

const Hero = styled.div`
  display: block;
  height: 65vh;
  @media only screen and (min-width: ${props => props.theme.aboveMobile}) { 
    height: 85vh;
  }

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
    @media only screen and (min-width: ${props => props.theme.aboveMobile}) { 
    font-size: 4rem;
    }
  }

  span {
    color: #fff;
    position: relative;
    z-index: 3;
    font-size: 1.2rem;
    text-align: center;
    width: 80%;
    @media only screen and (min-width: ${props => props.theme.aboveMobile}) { 
      max-width: 500px;
      font-size: 1.8rem;
    }
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
    min-width: 270px;
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
  margin: 0;
  -webkit-padding-start: 0;

  li {
    display: flex;
    align-items: center;
    flex-direction: column;

    @media only screen and (min-width: ${props => props.theme.aboveMobile}) { 
      flex-direction: row;
    }

    h4 {
      width: 80px;
      height: 80px;
      border-radius: 40px;
      flex-shrink: 0;
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
      order: 0;
      @media only screen and (min-width: ${props => props.theme.aboveMobile}) { 
      order: 1;
      }

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
      order: 1;
      @media only screen and (min-width: ${props => props.theme.aboveMobile}) { 
      width: 70%;
      order: 0;
      }
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

        <SectionTitle text="Vancouver" icon={<AccommodationIcon></AccommodationIcon>}></SectionTitle>

        <h3>Where to Stay</h3>
        <h4>Downtown</h4>

        <p>One of the main features of downtown Vancouver is Stanley Park, which is located at the tip of the peninsula. The park is 1,000 acres in size, featuring numerous hiking and biking trails, and is home to the nearly 14-mile-long Seawall and the Vancouver Aquarium. Downtown is also the city's largest shopping district. Robson Street in particular brims with shops and cafes while its neighbour, Granville Street, features numerous independent boutiques.</p>
      
        <h4>Kitsilano</h4>
        <p>Aaaah Kitsilano. Where the beautiful people live (your Bride and Groom included!). Known for its numerous outdoor activities, fantastic beaches and mountain views, Kitsilano sits just south of downtown across English Bay. Here you'll find some of Vancouver's most popular outdoor spaces, including Kitsilano Beach and Vanier Park. Kitsilano is also a foodie's paradise, boasting dozens of one-of-a-kind eateries.</p>
      
        <h4>Mount Pleasant / East Vancouver</h4>
        <p>Vancouver's east side is made up of a conglomeration of ethnic neighborhoods which feature unconventional shopping, top-notch dining options and plenty of entertainment venues. Commercial Drive – also known as Little Italy – is famous for being Vancouver's artistic hub and is packed with art galleries, second-hand shops and plenty of Italian restaurants and cafes. Oh, and there’s also loads of craft breweries.</p>
      
        <h4>North Vancouver</h4>
        <p>Located across the Burrard Inlet from downtown Vancouver is North Vancouver, which acts as a gateway to some of the city’s nearby natural attractions, including Lynn Canyon Park, Grouse Mountain and the Capilano Suspension Bridge. Even if you are not interested in these outdoor activities, recent visitors say that North Vancouver is worth a visit. The area is filled with antiques shops, and the Lonsdale Quay Market – which consists of three different levels – is home to dozens of specialty shops, restaurants and fresh food vendors.</p>

        <h3>Things to do in Vancouver</h3>

        <CardWrapper>
          <Card>
            <img src={GranvilleIsland} alt="Granville Island"></img>
            <div>
              <h4>Granville Island</h4>
              <p>Granville Island is home to a public market, food shops, restaurants, artist studios and galleries, shopping and green space.</p>
            </div>
          </Card>
          <Card>
          <img src={StanleyPark} alt="Stanley Park"></img>
            <div>
              <h4>Bike Around the Seawall</h4>
              <p>The Seawall starts downtown at the cruise ship terminal, heads west around Stanley Park and then encircles False Creek past Kitsilano beach.</p>
            </div>
          </Card>
          <Card>
          <img src={Gastown} alt="Gastown"></img>
            <div>
             <h4>Visit Gastown</h4>
              <p>The neighborhood where the city began, Gastown is Vancouver's cobbled old-town district. Home to some of the city’s best independent shops, bars and restaurants. </p>
            </div>
          </Card>
          <Card>
          <img src={Capilano} alt="Capilano Suspension Bridge"></img>
            <div>
              <h4>Capilano Suspension Bridge</h4>
              <p>One of the world's longest (140m) and highest (70m) suspension bridges, sways gently over the dramatic Capilano Canyon. Arrive early as it gets busy!</p>
            </div>
          </Card>
          <Card>
            <img src={Grouse} alt="Grouse Mountain"></img>
            <div>
              <h4>Grouse Mountain</h4>
              <p>Rising 1,250 metres (4,100 feet) above Vancouver and just 15 minutes from the city’s downtown core, is the vast alpine playground of Grouse Mountain. </p>
            </div>
          </Card>
          <Card>
          <img src={SpanishBanks} alt="Spanish Banks"></img>
            <div>
              <h4>Spanish Banks</h4>
              <p>
                This expansive beach offers fantastic picnicking opportunities, swimming, beach volleyball, and gorgeous panoramic views of Vancouver and the mountains. </p>
            </div>
          </Card>
        </CardWrapper>
      </Section>
      
      <Section>
        <SectionTitle text="BC Highlights" icon={<Heart></Heart>}></SectionTitle>

      <CardWrapper>
        <div className="card wow">
        <a href="https://www.lonelyplanet.com/canada/british-columbia/whistler" target="_blank" rel="noopener noreferrer">
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
        <a href="https://www.lonelyplanet.com/canada/british-columbia/tofino-and-around" target="_blank" rel="noopener noreferrer">
          <img src={Tofino} alt="Tofino" />
          <h3>Tofino</h3>
          </a>
        </div>

        <div className="card wow" data-wow-delay=".3s">
        <a href="https://www.lonelyplanet.com/canada/british-columbia/okanagan-valley" target="_blank" rel="noopener noreferrer">
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
              <p>The main event!</p>
            </div>
            <h4 className="wow">Day 7</h4>
            <div className="content-spacer"></div>
          </li>
          <li>
            <div className="content-box wow">
              <h3>Vancouver Island & Victoria</h3>
              <p>After emotional goodbyes, take the ferry from Galiano to Victoria - capital city of British Columbia. Have afternoon tea at the Empress Hotel, and explore this colonial city.</p>
              <img src={Victoria} alt="=Victora"></img>
            </div>
            <h4 className="wow">Day 8</h4>
            <div className="content-spacer"></div>
          </li>
          <li>
            <div className="content-box wow">
              <h3>Road trip to Tofino</h3>
              <p>Embark on a 4.5 hour drive across Vancouver Island towards Tofino - British Columbia's favourite outdoor retreat.It's not surprising that surf fans, families and city-escaping Vancouverites keep coming: packed with activities and blessed with spectacular local beaches, it sits on Clayoquot Sound, where forested mounds rise from roiling, ever-dramatic waves.</p>
              <img src={TofinoTravel} alt="=Tofino"></img>
            </div>
            <h4 className="wow">Day 9</h4>
            <div className="content-spacer"></div>
          </li>
          <li>
            <div className="content-box wow">
              <h3>Bear Tour</h3>
              <p>In the morning, take a cruise along the coast and watch bears come to the shore in search of crabs. Then head to one of the fantastic Tofino beaches and surf the pacific ocean. </p>
              <img src={BearTour} alt="Bear Tour"></img>
            </div>
            <h4 className="wow">Day 10</h4>
            <div className="content-spacer"></div>
          </li>
          <li>
            <div className="content-box wow">
              <h3>Back to Vancouver</h3>
              <p>Drive back across Vancouver Island to Nanaimo. From there, you can get a ferry to Horseshoe Bay, which is 15 minutes from downtown Vancouver.</p>
              <img src={Vancouver} alt="Vancouver"></img>
            </div>
            <h4 className="wow">Day 11</h4>
            <div className="content-spacer"></div>
          </li>
          <li>
            <div className="content-box wow">
              <h3>Explore the local mountains</h3>
              <p>There are 3 local mountains in Vancouver: Cypress, Grouse, and Seymour. Each has some fantastic hikes. Grouse has plenty of other things going on at the top too, including some resident grizzlies, lumberjack shows, and bird shows. Anyone feeling energetic could attempt the Grouse Grind - a 2.9km assent featuring 2830 stairs! The views from the top are worth it.</p>
              <img src={Grouse} alt="Grouse"></img>
            </div>
            <h4 className="wow">Day 12</h4>
            <div className="content-spacer"></div>
          </li>
          <li>
            <div className="content-box wow">
              <h3>Fly home</h3>
              <p>It's been a blast!</p>
            </div>
            <h4 className="wow">Day 13</h4>
            <div className="content-spacer"></div>
          </li>

        </Itinerary>

        <h3>Other places worth checking out if you have the time:</h3>

            <h4>Canadian Rockies</h4>
            <p>Another popular thing to do is to fly in to Calgary, and drive through the Rockies, stopping off at Banff, Revelstoke, and the Okanagan before arriving at Vancouver. It's advisable to do this over a week or so as it's a long drive.</p>

            <h4>USA</h4>
            <p>Vancouver is very close to the US border. Seattle is just 4 hours drive away. Portland, Oregon is approx 6 hour drive, and San Francisco is approx 16 hours drive.</p>

            <p>Feel free to ask us for any advice!</p>

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
