import React from 'react'
import styled from 'styled-components'

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const SliderDiv = styled.div`
    :root {
        --organic-arrow-color: #ffffff!important;
        --control-bullet-active-color: ${props => props.theme.primary}!important;
    }
    .aws-sld {
        .aws-sld__bullets {
            position: relative;
            bottom: 0;
            margin-top: 16px;
        }
        .aws-sld__wrapper {
            box-shadow: 0 3px 6px rgba(0,0,0,0.15);
            height: 500px;
            @media only screen and (min-width: ${props => props.theme.aboveMobile}) {
                height: initial;
            }
            .aws-sld__controls {
                span {
                    ::before, ::after {
                        background-color: #ffffff;
                        opacity: 1!important;
                    }
                }
                .aws-sld__bullets--active {
                    background:  ${props => props.theme.primary}!important;
                }
            }
            .aws-sld__content {
                
                > div {
                    padding: 16px;
                    background-color: rgba(255,255,255,1);
                    position: absolute;
                    z-index: 3;
                    bottom: 0;
                    left: 0;
                    right: 0;

                    h3 {
                        margin: 0 0 16px 0;
                    }
                    p {

                        &:last-child {
                            margin-bottom: 0;
                        } 
                    }

                }
            }
        }
    }
`

const Slider = ({children}) => (
    <SliderDiv>
        <AwesomeSlider>      
            {children}
        </AwesomeSlider>
    </SliderDiv>
)

export default Slider
