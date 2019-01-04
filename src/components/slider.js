import React from 'react'
import styled from 'styled-components'

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const SliderDiv = styled.div`
    :root {
        --organic-arrow-color: #ffffff!important;
    }
    .aws-sld {
        .aws-sld__bullets {
            position: relative;
            bottom: 0;
            margin-top: 16px;
        }
        .aws-sld__wrapper {
            .aws-sld__controls {
                span {
                    ::before, ::after {
                        background-color: #ffffff;
                        opacity: 1!important;
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
