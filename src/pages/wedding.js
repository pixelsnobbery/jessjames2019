import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layouts/layout'
import Image from '../components/image'

import Theme from '../config/theme'
import { ThemeProvider } from 'styled-components'

// import Icon from 'svg-react-loader?name=Icon!../images/rings.svg';
import Icon from '-!svg-react-loader?name=Icon!../images/rings.svg';


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
        background-color: #ccc;
        transition: all .2s ease;
        transform: scale(1,1);
        border-radius: 25;
        width: 100px;
        height: 100px;
        order: 2;
        margin: 16px 32px;

        .image {
            svg {
              width: 50px;
            }
        }
        .description {
          transform: scale(0, 0);
          transition: all .2s ease;
          transform-origin: 50% 50%;
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
        }
      }
      &:hover {
        .details {
          transform: scale(2, 2);
        }
      

  }
    }
    
  }
`

const Wedding = () => (
  <ThemeProvider theme={Theme}>
  <Layout>
    <Hero>
      <Image />
      <h1>We're Getting Hitched</h1>
      <h2>and then having a party</h2>
      <div className="overlay"></div>
    </Hero>
    

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
          <div className="details">
            <h3>Arrive</h3>
            <div class="image ring">
              <Icon />
            </div>
            <div class="description">
              On-site checkin: 4pm
            </div>
          </div>
        </li>
        <li>
        <div className="info">
            <h3>Tuesday PM</h3>
            
          </div>
          <div className="divider"></div>
          <div className="details">
            <div class="image">

            </div>
            <div class="description">
              <p>Barbecue 6pm ish</p>
            </div>
            
          </div>
        </li>
        <li>
        <div className="info">
            <h3>Wednesday: Free time optional activities</h3>
            <p>Mount Galiano Hike</p>
          </div>
          <div className="divider"></div>
          <div className="details"></div>
        </li>
        <li>
        <div className="info">
          <h3>Wednesday PM: Wedding Ceremony</h3>
          <p>Starts @ 4:30</p>
          </div>
          <div className="divider"></div>
          <div className="details"></div>
        </li>
        <li>
        <div className="info">
            <h3>Wednesday Evening: Dinner & Partay</h3>

          </div>
          <div className="divider"></div>
          <div className="details"></div>
        </li>
        <li>
        <div className="info">
            <h3>Thursday AM: Breakfast</h3>
          </div>
          <div className="divider"></div>
          <div className="details"></div>
        </li>
        <li>
          <div className="info">
            <h3>Thursday 12pm: Depart</h3>
          </div>
          <div className="divider"></div>
          <div className="details"></div>
        </li>
      </ul>
    </Timeline>

    <h3>Music</h3>
    <p>Something about song requests</p>
  </Layout>
  </ThemeProvider>
)

export default Wedding
