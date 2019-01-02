import React from 'react'
import styled from 'styled-components'

import RingsImage from '-!svg-react-loader?name=Icon!../images/rings.svg';
import BarbecueImage from '-!svg-react-loader?name=Icon!../images/barbecue.svg';
import FreeTimeImage from '-!svg-react-loader?name=Icon!../images/free-time.svg';

const TimelineContainer = styled.div`
    flex-grow: 1;
    margin: 80px 0;
    h3 {
      margin: 1em;
    }
    &:first-child {
        margin-left: 0;
    }
    &:last-child {
        margin-right: 0;
    }

    ul {
    list-style-type: none;
    -webkit-padding-start: 0;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 1;
    -webkit-backface-visibility: hidden;
    margin: 0;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      text-align: center;
      flex: 1 0 0px;
      font-size: .8rem;
      z-index: 2;
      position: relative;
      padding-bottom: 48px;
      -webkit-backface-visibility: hidden;
      
      span.date {
        font-size: .7rem;
        margin: 16px 0;
        background-color: ${props => props.theme.primary};
        text-align: center;
        width: auto;
        padding: 6px 12px;
        color: #fff;
        justify-self: flex-end;

        border-radius: 12px;
        position: absolute;
        bottom: 0;
      }
      .img {
        width: 100px;
        height: 100px;
        background-color: #fff;
        border-radius: 50px;
        margin-bottom: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        transform-origin: bottom center;

        svg {
          width: 60%;
          height: 60%;
        }
      }
      p {
        color: #666;
      }
      h3 {
        font-size:1rem;
      }

      &.wedding {
        .img {
          transform: scale(1.2,1.2);
        }
      }
      &.animated {
        animation: scaleIn .5s ease;
        animation-fill-mode: backwards;
      }
      @keyframes scaleIn {
        0%   { transform: scale(0,0); }
        100% { transform: scale(1,1); }
      }

    }

    

    &:after {
      content: '';
      position: absolute;
      top: 50px;
      height: 2px;
      left: 40px;
      right: 40px;
      background-color: #ddd;
      z-index: 1;
      
    }
    &.animated:after {
      animation: slideRight 1.8s ease;
      animation-fill-mode: backwards;
    }
    @keyframes slideRight {
      0%  { left: 40px; right: 100% }
      100% { left: 40px; right: 40px; }
    }
  }
`

const Timeline = () => (
    <TimelineContainer>
        <ul className="wow">
            <li className="wow scaleIn">
              <div className="img"></div>
              <h3>Arrive</h3>
              <p>On-site checkin from 4pm</p>
              
              <span className="date">2nd July</span>
            </li>
            <li className="wow scaleIn" data-wow-delay=".2s">
              <div className="img"><BarbecueImage></BarbecueImage></div>
            
              <h3>Barbecue</h3>
              <p>Starts at 6pm</p>

              <span className="date">2nd July</span>
            </li>
            <li className="wow scaleIn" data-wow-delay=".4s">
              <div className="img"><FreeTimeImage></FreeTimeImage></div>
              <h3>Free time</h3>
              <p>Hike? Beach? Yoga?</p>
              <span className="date">3rd July</span>
            </li>
            <li className="wedding wow scaleIn" data-wow-delay=".6s">
            <div className="img"><RingsImage></RingsImage></div>
              <h3>Wedding</h3>
              <p>Starts @ 4:30pm</p>
              <span className="date">3rd July</span>
            </li>
            <li className="wow scaleIn" data-wow-delay=".8s">
            <div className="img"></div>
              <h3>Dinner</h3>
              <p>Followed by party time</p>
              <span className="date">3rd July</span>
            </li>
            <li className="wow scaleIn" data-wow-delay="1s">
            <div className="img"></div>
              <h3>Partay</h3>
              <p>Like it's 1999</p>
              <span className="date">3rd July</span>
            </li>
            <li className="wow scaleIn" data-wow-delay="1.2s">
              <div className="img"></div>
              <h3>Breakfast</h3>
              <p>Try to piece together memories of the night before</p>
              <span className="date">4th July</span>
            </li>
          </ul>
    </TimelineContainer>
)

export default Timeline
