import React from 'react'
import styled from 'styled-components'

import Button from './button'

import FooterDivider from '-!svg-react-loader?name=LogoTop!../images/footer_divider.svg';
// import { Link } from 'gatsby'
// import Navigation from './navigation'

const Foot = styled.footer`
    
    
    z-index: 3;
    position: relative;
    .hidden {
        display:none;
    }
    > div {
        margin-top:-5px;
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
                flex-basis: 30%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                text-align: center;
                margin-bottom: 32px;
                @media only screen and (min-width: ${props => props.theme.aboveMobile}) {
                    margin-bottom: 0;
                }
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
                    font-size: .8rem;
                    color: rgba(255,255,255,0.75)!important;
                }
                h4 {
                    font-size:  1.6rem;
                    font-family: sans-serif!important;
                    text-transform: uppercase;
                    margin: 16px 0!important;
                }
                input, textarea {
                    align-self: flex-end;
                    width: 100%;
                    border: 1px solid #555;

                }
                input {
                    margin-top: 16px;
                    padding: 8px;
                }
            }
            ul.actions {
                display: flex;
                justify-content: center;
                flex-basis: 100%;
                flex-shrink: 0;
                list-style-type: none;
                -webkit-padding-start: 0;
                margin: 32px 0 0 0;

                a {
                    width: 200px;
                    
                }
            }
        }
        }
        
        

        
    }
`

const Footer = () => (
    
  <Foot>
    <a name="rsvp" href="#rsvp" className="hidden">RSVP</a>
    <FooterDivider></FooterDivider>
    <div>
        <div>
        <h3>Will you be joining us?</h3>
        <form method="post" name="rsvp" data-netlify="true">
            <div className="fieldWrapper">
                <span>We're stoked to have you as</span>
                <h4>Our Guest</h4>
                <span className="sub">Please enter your name</span>
                <textarea name="name" id="name" rows="5"></textarea>
            </div>
            <div className="fieldWrapper">
                <span>Please tell us more about</span>
                <h4>Your entourage</h4>
                <span className="sub">So we know how many are coming</span>
                <input name="number_of_adults" id="number_of_adults" rows="5" placeholder="Number of adults" />
                <input name="number_of_kids" id="number_of_kids" rows="5" placeholder="Number of kids" />
            </div>
            <div className="fieldWrapper">
                <span>Would you like to include</span>
                <h4>A Message</h4>
                <span className="sub">Song requests, dietary requirements, praise and gratitude, etc</span>
                <textarea name="message" id="message" rows="5"></textarea>
            </div>
            <ul className="actions">
                <li>
                    <Button text="Send My RSVP" href="#"></Button>
                </li>
            </ul>
        </form>
        </div>
    </div>
  </Foot>
)

export default Footer
