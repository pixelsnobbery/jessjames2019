import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layouts/layout'
import Image from '../components/image'

import Theme from '../config/theme'
import { ThemeProvider } from 'styled-components'



const Hero = styled.div`
display: block;
height: 100vh;
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

.overlay {
  background: rgba(0,0,0,0.6);
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
        order: 0;
        margin: 16px 32px;
        text-align: right;
        h3 {

        }
      }
      div.image {
        width: 400px;
        height: 100px;
        order: 2;
        margin: 16px 32px;
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
          background: #666;
        }
      }

      &:nth-child(even) {
        div.info {
          order: 2;
          text-align: left;
        }
        div.image {
          order: 0;
        }
      }
      &:first-child {
        .divider {
          margin-top: 16px;
        }
      }
      &:last-child {
        .divider {
          margin-bottom: 16px;
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
            <h3>Tuesday: Arrive</h3>
            <p>On-site checkin: 4pm</p>
          </div>
          <div className="divider"></div>
          <div className="image"></div>
        </li>
        <li>
        <div className="info">
            <h3>Tuesday PM: Barbecue</h3>
            <p>Barbecue 6pm ish</p>
          </div>
          <div className="divider"></div>
          <div className="image"></div>
        </li>
        <li>
        <div className="info">
            <h3>Wednesday: Free time optional activities</h3>
            <p>Mount Galiano Hike</p>
          </div>
          <div className="divider"></div>
          <div className="image"></div>
        </li>
        <li>
        <div className="info">
          <h3>Wednesday PM: Wedding Ceremony</h3>
          <p>Starts @ 4:30</p>
          </div>
          <div className="divider"></div>
          <div className="image"></div>
        </li>
        <li>
        <div className="info">
            <h3>Wednesday Evening: Dinner & Partay</h3>

          </div>
          <div className="divider"></div>
          <div className="image"></div>
        </li>
        <li>
        <div className="info">
            <h3>Thursday AM: Breakfast</h3>
          </div>
          <div className="divider"></div>
          <div className="image"></div>
        </li>
        <li>
          <div className="info">
            <h3>Thursday 12pm: Depart</h3>
          </div>
          <div className="divider"></div>
          <div className="image"></div>
        </li>
      </ul>
    </Timeline>

    <h3>Music</h3>
    <p>Something about song requests</p>
  </Layout>
  </ThemeProvider>
)

export default Wedding
