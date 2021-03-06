import React from 'react'
import styled from 'styled-components'

const CountdownDiv = styled.div`
    display: flex;
    justify-content: center;
    font-family: 'Lora';
    font-size: 2rem;
    @media only screen and (min-width: ${props => props.theme.aboveMobile}) {
      font-size: 3rem;
    }
    .Countdown-col {
        margin-right: 16px;
        background-color: ${props => props.theme.primary};
        padding: 8px;
        width: 120px;
        color: #fff;
        border-radius: 6px;
        .Countdown-col-element {
            text-align: center;

            span, strong {
                display: block;
            }

            span {
                font-size: 1rem;
            }
        }
    }
`

class Countdown extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          days: 0,
          hours: 0,
          min: 0,
          sec: 0,
        }
      }

    componentDidMount() {
        // update every second
        this.interval = setInterval(() => {
            const date = this.calculateCountdown(this.props.date);
            date ? this.setState(date) : this.stop();
        }, 1000);
    }
  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    };

    // calculate time difference between now and expected date
    if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) { // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) { // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }
  render () {
    const countDown = this.state;

    return (
      <CountdownDiv>
        <span className="Countdown-col">
          <span className="Countdown-col-element">
              <strong>{this.addLeadingZeros(countDown.days)}</strong>
              <span>{countDown.days === 1 ? 'Day' : 'Days'}</span>
          </span>
        </span>

        <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{this.addLeadingZeros(countDown.hours)}</strong>
            <span>Hours</span>
          </span>
        </span>


        <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{this.addLeadingZeros(countDown.min)}</strong>
            <span>Min</span>
          </span>
        </span>

        <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{this.addLeadingZeros(countDown.sec)}</strong>
            <span>Sec</span>
          </span>
        </span>
      </CountdownDiv>
    );
  }
}


Countdown.defaultProps = {
date: new Date()
};

export default Countdown;