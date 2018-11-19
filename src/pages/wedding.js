import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layouts/layout'
import Image from '../components/image'

import Theme from '../config/theme'
import { ThemeProvider } from 'styled-components'

// import Icon from 'svg-react-loader?name=Icon!../images/rings.svg';
import WeddingRingsIcon from '-!svg-react-loader?name=Icon!../images/rings.svg';

import TimelineItem from '../components/timeline-item'


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
  background: rgba(0,0,0,0.5);
  position:absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
`

const Timeline = styled.div`
  ul {
    list-style-type: none;
    -webkit-padding-start: 0;
    li {
      display: flex;
      justify-content: center;
      margin: 0;
      div.info {
        width: 400px;
        flex-grow: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        order: 0;
        margin: 16px 32px;
        text-align: right;
        h3 {
          margin-bottom: 8px;
        }
      }
      div.details {
        width: 400px;
        order: 2;
        margin: 16px 32px;
        
        > div {
          background-color: ${props => props.theme.primary};
          transition: all .2s ease;
          transform: scale(1,1);
          border-radius: 75px;
          width: 150px;
          height: 150px;
          display: flex;
          flex-direction: column;
          align-content: center;
          text-align: center;
          transform-origin: left center;
          h3 {
            margin: 16px 0 0 0;
            color: #fff;
            transform: scale(1,1);
          }
          .image {
            svg {
              width: 50px;
              transform: scale(0,0);
              transition: all .2s ease;
              transition-delay: .1s;
            }
          }
          .description {
            
            p {
              width: 100%;
              transform: scale(0, 0);
            display:inline-block;
            transition: all .2s ease;
            transform-origin: 50% 50%;
            }
            
          }
        }
        

        
      }
      .divider {
        width: 2px;
        background-color:#666;
        order: 1;
        position: relative;
        &:after {
          content: '';
          width: 20px;
          height: 2px;
          position:absolute;
          top: 50%;
          margin-top: -50%;
          background: #666;
        }
      }

      &:nth-child(even) {
        div.info {
          order: 2;
          text-align: left;
        }
        div.details {
          order: 0;
          text-align: right;
          
          > div {
            transform-origin: right center;
            float: right;
          }
        }
      }
      &:hover {
        .details {
          > div {
            transform: scale(2, 2);
            h3 {
              transform: scale(1,1);
            }
            .image {
              svg {
                transform: scale(1,1);
              }
            }
            .description {
              p {
                transform: scale(.5,.5);
              }
              
            }
            
          }
          
        }
      }
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

    <h3>Schedule of Events</h3>
    <Timeline>
      <ul>
        <li>
          <div className="info">
            <h3>Tuesday</h3>
          </div>
          <div className="divider"></div>
          <TimelineItem title="Arrive" message="On-site checkin: 4pm" icon={WeddingRingsIcon}></TimelineItem>
        </li>
        <li>
        <div className="info">
            <h3>Tuesday PM</h3>
            
          </div>
          <div className="divider"></div>
          <TimelineItem title="Barbecue" message="Starts at 6ish" icon={WeddingRingsIcon}></TimelineItem>
        </li>
        <li>
        <div className="info">
            <h3>Wednesday AM</h3>
          </div>
          <div className="divider"></div>
          <TimelineItem title="Free time" message="Optional pre-drinks" icon={WeddingRingsIcon}></TimelineItem>
        </li>
        <li>
        <div className="info">
          <h3>Wednesday PM</h3>
          </div>
          <div className="divider"></div>
          <TimelineItem title="Wedding" message="Starts @ 4:30" icon={WeddingRingsIcon}></TimelineItem>
        </li>
        <li>
        <div className="info">
            <h3>Wednesday Evening:</h3>

          </div>
          <div className="divider"></div>
          <TimelineItem title="Dinner/Party" message="" icon={WeddingRingsIcon}></TimelineItem>
        </li>
        <li>
        <div className="info">
            <h3>Thursday AM: Breakfast</h3>
          </div>
          <div className="divider"></div>
          <TimelineItem title="Breakfast" message="Piece together recollections" icon={WeddingRingsIcon}></TimelineItem>
        </li>
        <li>
          <div className="info">
            <h3>Thursday</h3>
          </div>
          <div className="divider"></div>
          <TimelineItem title="Depart" message="Must checkout by 12pm" icon={WeddingRingsIcon}></TimelineItem>
        </li>
      </ul>
    </Timeline>

    <h3>Music</h3>
    <p>Something about song requests</p>

    </Container>
  </Layout>
  </ThemeProvider>
)

export default Wedding
