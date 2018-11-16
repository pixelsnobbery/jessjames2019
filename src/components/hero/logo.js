import React from 'react'
import styled from 'styled-components'

const LogoContainer = styled.div`
  width: 300px;
  transform-origin: 0% 0%;
  position: relative;
  height: 300px;
  .b,.c,.e{fill:#fa6640;}.b{stroke:rgba(0,0,0,0);}
          .c{font-size:30px;font-family:Noteworthy-Bold, Noteworthy;font-weight:700;}
          .d{fill:none;stroke:#fa6640;stroke-width:2px;}.e{stroke:rgba(112,112,112,0);}
  .jess {
    .b{fill:#fa6640;stroke:rgba(0,0,0,0);}
    position:absolute;
    animation: scaleUp .5s ease;
    width: 200px;
    height: 176px;
    left: 0px;
    top: 0;
  }

  .james {
    position: absolute;
    top: 120px;
    left: 30px;
    width: 306px;
    height: 176px;
    animation: scaleUpJames 1s ease;
  }

  svg {
    path {
      fill: #fa6640;
    }
  }

  .and {
    width: 109px;
    position: absolute;
    top: 145px;
    left: 0;
    b,.d{fill:#fa6640;}.b{font-size:30px;font-family:Noteworthy-Bold, Noteworthy;font-weight:700;}.c{fill:none;stroke:#fa6640;stroke-width:2px;}.d{stroke:rgba(112,112,112,0);}
  }

  @keyframes scaleUp {
        0% {
            transform: scale(0);
        }
        50% {
          transform: scale(0);
        }
        100% {
          transform: scale(1);
        }
    }

    @keyframes scaleUpJames {
      0% {
        transform: scale(0);
      }
      75% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }
`

const Logo = () => (
    <LogoContainer>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 176" className="jess">
        <g id="a" className="a">
          <path className="b" d="M.2,338.2c0-8.6,3.6-16.4,12.6-26,11.4-11.8,27.6-22.6,53.8-32.6l1.2-3.2c9.4-27,16-42.6,24.4-59,9.4-18.2,19.4-29.4,24-29.4,3.6-.2,9,5.2,9,7.6,0,1.4-1,2.4-3.6,5.8C107,221,95.4,245.6,84.2,273.8a84.433,84.433,0,0,1,15.208-2.569c5-11.571,18.513-22.341,27.681-22.341,6.24,0,8.45,2.6,8.45,6.241,0,6.37-11.83,15.73-27.17,19.11a23.522,23.522,0,0,0-1.82,8.32c0,3.9,1.95,5.72,6.37,5.72,11.18,0,24.05-12.35,28.6-17.68.911-1.17,1.3-1.17,1.69-1.17s.52.26.52.65c0,.52-.13.91-.91,1.95-5.33,7.41-19.76,20.54-32.5,20.54-8.06,0-12.87-4.16-12.87-12.74a18.243,18.243,0,0,1,.286-3.166A96.96,96.96,0,0,0,81.6,280.8c-2.4,5.8-4.6,12-6.8,18.2C62.4,332.8,43.4,363,21,363,8.2,363,.2,351.4.2,338.2Zm19.6-18.6C12.2,328.2,9.6,336,9.6,342.2c0,7.6,3.6,11.4,9.4,11.4,16,0,33.2-34.2,44.8-66.2C44.4,296.4,30,307.8,19.8,319.6Zm89.74-47.96c11.83-3.25,21.191-14.04,21.191-17.94,0-1.3-.651-1.82-1.69-1.82C123.19,252.01,114.22,261.89,109.54,271.64ZM137.36,284.9c0-1.04.391-1.3.78-1.3s.65.39.91.91a11.724,11.724,0,0,0,9.62,6.11c3.64,0,5.2-2.47,5.2-5.33,0-8.19-10.921-12.74-10.921-22.88,0-11.7,12.87-18.72,21.19-18.72,7.67,0,10.4,4.81,10.4,7.15,0,.91-.39,1.3-.91,1.3-.779,0-1.949-.78-5.59-.78-7.67,0-17.94,5.72-17.94,15.73,0,8.969,10.01,12.74,10.01,21.06,0,5.07-3.64,8.84-9.49,8.84C142.3,296.99,137.36,288.8,137.36,284.9Zm27.43-.52c0-1.04.39-1.3.78-1.3s.65.391.91.91a9.634,9.634,0,0,0,7.93,4.421c3.51,0,5.07-2.21,5.07-4.81,0-6.76-8.32-10.66-8.32-18.85,0-9.751,11.309-15.73,18.59-15.73,7.411,0,10.14,4.81,10.14,7.15,0,.91-.39,1.3-.91,1.3a21.1,21.1,0,0,0-5.33-.78c-6.63,0-15.73,3.641-15.73,12.22,0,7.67,7.28,10.4,7.28,17.42,0,4.94-3.38,8.45-8.84,8.45C169.08,294.78,164.79,287.76,164.79,284.38Z" transform="translate(-0.2 -187.995)"/>
        </g>
      </svg>


      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 306.64 176.006" className="james">
        <path className="a" d="M.2,338.2c0-8.6,3.6-16.4,12.6-26,11.4-11.8,27.6-22.6,53.8-32.6l1.2-3.2c9.4-27,16-42.6,24.4-59,9.4-18.2,19.4-29.4,24-29.4,3.6-.2,9,5.2,9,7.6,0,1.4-1,2.4-3.6,5.8C107,221,95.4,245.6,84.2,273.8a84.773,84.773,0,0,1,15.6-2.6c.351-.015.68-.015.992,0,7.63-12.01,23.216-23.219,35.658-23.219,3.9,0,6.11,1.3,7.41,3.12.78,1.04.13,1.95-1.04,1.43a7.067,7.067,0,0,0-2.6-.52c-15.73,0-34.58,22.62-34.58,32.5,0,2.6,1.039,3.51,2.209,3.51,3.51,0,12.22-7.93,20.8-18.85,4.161-5.33,4.68-6.76,5.46-6.76,1.56,0,4.16,3.119,4.16,5.07,0,2.73-6.369,8.71-6.369,14.3,0,3.25,1.56,4.29,3.51,4.29,7.284,0,15.784-10.438,19.282-15.012,2.369-5.155,4.473-10.441,4.638-14.628,0-1.04.26-1.43,1.17-1.43,1.95,0,5.98,2.731,5.98,6.37,0,2.6-1.95,7.8-3.51,11.44,14.17-17.81,24.05-28.99,30.94-28.99a6.463,6.463,0,0,1,6.5,6.24c0,7.02-12.48,21.971-12.74,30.161,4.29-6.37,20.281-25.35,27.95-25.35a4.242,4.242,0,0,1,4.289,4.29c0,5.07-6.24,10.27-6.24,18.979,0,3.77,1.82,5.2,4.42,5.2,4.342,0,9.209-4.332,12.548-8.1,3.209-12.96,18.829-26.351,29.051-26.351,6.241,0,8.45,2.6,8.45,6.241,0,6.37-11.83,15.73-27.17,19.11a23.521,23.521,0,0,0-1.82,8.32c0,3.9,1.95,5.72,6.37,5.72,11.18,0,24.05-12.35,28.6-17.68.91-1.17,1.3-1.17,1.69-1.17a.671.671,0,0,1,.167.019,12.066,12.066,0,0,1-1.207-5.219c0-10.01,12.48-16.12,20.41-16.12,7.8,0,10.66,5.07,10.66,7.54,0,.91-.39,1.3-.91,1.3-.78,0-2.08-1.17-5.85-1.17-7.41,0-17.29,3.9-17.29,13,0,8.06,8.97,11.05,8.97,18.461,0,4.81-3.51,8.32-8.97,8.32-8.19,0-13.13-8.06-13.13-11.96,0-1.04.39-1.3.78-1.3s.65.39.91.91c1.82,3.38,5.85,5.98,9.49,5.98,3.25,0,4.68-2.21,4.68-4.81,0-5.437-5.437-9.061-8.191-14.229-.012.487-.164.887-.909,1.88-5.33,7.41-19.759,20.54-32.5,20.54-8.059,0-12.87-4.16-12.87-12.74q0-.406.02-.815c-4.2,4.35-9.816,8.484-15.1,8.484-5.2,0-9.23-3.51-9.23-8.58,0-9.1,5.59-15.47,5.59-17.81,0-.52-.26-.779-.52-.779-2.21,0-16.51,15.079-21.06,23.009-1.56,2.47-2.21,4.94-3.9,4.94-1.43,0-5.46-1.82-5.46-7.28,0-8.71,11.05-26.13,11.05-30.94,0-.91-.39-1.3-.91-1.3-3.51,0-18.07,16.51-26.39,28.86-5.98,8.709-8.84,16.51-11.96,16.51-2.08,0-4.42-2.86-4.42-5.85,0-2.036,1.3-5.233,3.021-8.954-4.811,5.335-11.277,10.513-17.452,10.513a7.817,7.817,0,0,1-8.19-8.059,12.971,12.971,0,0,1,1.04-5.33c-6.89,8.19-15.86,16.64-22.75,16.64-3.38,0-7.28-2.34-7.28-8.45a21.119,21.119,0,0,1,1.778-8.006A96.538,96.538,0,0,0,81.6,280.8c-2.4,5.8-4.6,12-6.8,18.2C62.4,332.8,43.4,363,21,363,8.2,363,.2,351.4.2,338.2Zm19.6-18.6C12.2,328.2,9.6,336,9.6,342.2c0,7.6,3.6,11.4,9.4,11.4,16,0,33.2-34.2,44.8-66.2C44.4,296.4,30,307.8,19.8,319.6Zm222.34-47.96c11.831-3.25,21.191-14.04,21.191-17.94,0-1.3-.65-1.82-1.69-1.82C255.79,252.01,246.82,261.89,242.14,271.64Z" transform="translate(0.3 -187.494)"/>
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 109 101" className="and">
          <g id="a" className="a">
            <text className="b" transform="translate(34.7 76.263) rotate(-30)"><tspan x="0" y="0">AND</tspan></text>
            <line className="c" y1="35" x2="54" transform="translate(39.5 50.5)"/>
            <line className="c" y1="35" x2="54" transform="translate(42.5 53.5)"/>
            <line className="c" y1="35" x2="54" transform="translate(21.5 12.5)"/>
            <line className="c" y1="35" x2="54" transform="translate(19.5 8.5)"/>
            </g>
      </svg>

      </LogoContainer>
)

export default Logo
