import React from 'react'
import styled from 'styled-components'

import Button from './button'

import FooterDivider from '-!svg-react-loader?name=LogoTop!../images/footer_divider.svg';

import HeaderBanner from '-!svg-react-loader?name=HeaderBanner!../images/banner.svg';
// import { Link } from 'gatsby'
// import Navigation from './navigation'

const Foot = styled.footer` 
    z-index: 3;
    position: relative;
    .hidden {
        display:none;
    }
    > div {
        margin-top:-10px;
        padding: 0 0 64px 0;
        background-color: ${props => props.theme.secondary};
        > div {
            max-width: ${props => props.theme.maxWidth};
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            padding-top: 32px;

            h3 {
            background-color: ${props => props.theme.primary};
            color: ${props => props.theme.white};
            display: inline-block;
            padding: 8px 16px;
            text-align: center;
            margin: 0 auto 32px auto;
            text-transform: uppercase;
            position: relative;

        }

        form {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            flex-direction: column;
            padding: 16px;
            @media only screen and (min-width: ${props => props.theme.aboveMobile}) {
                flex-direction: row;
                padding: 0;
                
            }
            
            .fieldWrapper {
                flex-basis: 48%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                text-align: center;
                margin-bottom: 32px;
                span {
                    font-weight: 200;
                }
                span, h4 {
                    display: block!important;
                    width: 100%;
                    text-align: center!important;
                    color: #fff;
                }
                span.sub {
                    flex-grow: 1;
                    margin-bottom: 8px;
                    font-size: .85rem;
                    color: rgba(255,255,255,1)!important;
                }
                h4 {
                    color: rgba(255,255,255,0.6);
                    font-size:  1.6rem;
                    font-family: sans-serif!important;
                    text-transform: uppercase;
                    margin: 16px 0!important;
                }
                input, textarea {
                    align-self: flex-end;
                    width: 100%;
                    border: 1px solid #408D60;
                    padding: 8px;

                }
                input {
                    margin-top: 16px;
                    padding: 8px;
                }
            }

            p {
                color: rgba(255,255,255,0.7);
            }
            a:link, a:visited {
                color: rgba(255,255,255,0.7);
            }
            a:hover, a:active {
                color: rgba(255,255,255,1);
            }
            ul.actions {
                display: flex;
                justify-content: center;
                flex-basis: 100%;
                flex-shrink: 0;
                list-style-type: none;
                -webkit-padding-start: 0;
                margin: 32px 0 0 0;

                input {
                    font-weight: bold;
                    background-color: ${props => props.theme.primary};
                    border-width: 0;
                    color: #fff;
                    padding: 16px 32px;
                    text-transform: uppercase;
                    box-shadow: 0 3px 6px rgba(0,0,0,0.2);
                    &:hover, &:active {
                        background-color: #333!important;
                    }
                }
            }
        }
        }
        
        

        
    }
`
const HeaderBannerStyle = styled.span`
display: none;
@media only screen and (min-width: ${props => props.theme.aboveMobile}) {
    display: block;
    position:absolute;
    right: -35px;

    top: 5px;
    height: 48px;
    width: 48px;
}
`
const HeaderBannerStyleLeft = styled.span`
display: none;
@media only screen and (min-width: ${props => props.theme.aboveMobile}) {
    display: block;
    position:absolute;
    left: -35px;
    > * {
        transform: scaleX(-1);
    }
    
    top: 5px;
    height: 48px;
    width: 48px;
}
`
const FooterElement = () => (
    
  <Foot>
    <a name="rsvp" href="#rsvp" className="hidden">RSVP</a>
    <FooterDivider></FooterDivider>
    <div>
        <div>
            <h3>
                <HeaderBannerStyleLeft><HeaderBanner></HeaderBanner></HeaderBannerStyleLeft>    
                Will you be joining us?
                <HeaderBannerStyle><HeaderBanner></HeaderBanner></HeaderBannerStyle>
            </h3>
            <form method="post" name="rsvp" action="/success" data-netlify="true">
                <input type="hidden" name="form-name" value="rsvp" />
                <div className="fieldWrapper">
                    <span>We're stoked to have you as</span>
                    <h4>Our Guests</h4>
                    <span className="sub">Please enter your names, and names/ages of any children attending</span>
                    <textarea name="name" id="name" rows="5" required></textarea>
                </div>
                <div className="fieldWrapper">
                    <span>Let us know any</span>
                    <h4>Dietary requirements</h4>
                    <span className="sub">Dietary requirements and intolerances</span>
                    <textarea name="diet" id="diet" rows="5"></textarea>
                </div>
                <div className="fieldWrapper">
                    <span>What gets you up</span>
                    <h4>On the dancefloor?</h4>
                    <span className="sub">Song requests. We won't judge  you.</span>
                    <textarea name="songs" id="songs" rows="5"></textarea>
                </div>
                <div className="fieldWrapper">
                    <span>Tell us about</span>
                    <h4>Accommodation</h4>
                    <span className="sub">Would you like to stay in a cabin room at Bodega Ridge, or a self-contained cabin at Bodega Cove?</span>
                    <textarea name="accommodation" id="accommodation" rows="5"></textarea>
                </div>

                <p>If you can’t make it, we’re really sorry to hear that, but would be grateful if you could let us know by contacting either Jess or James or emailing <a href="mailto:us@jessjames2019.com">us@jessjames2019.com</a>.</p>
                <ul className="actions">
                    <li>
                        <input type="submit" value="Send my RSVP" />
                    </li>
                </ul>
            </form>
        </div>
    </div>
  </Foot>
)

export default class Footer extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.myRef = React.createRef() 
    // }

    render () {
      return (
        <FooterElement ref="rsvp"></FooterElement>
      )
    };
  };
  