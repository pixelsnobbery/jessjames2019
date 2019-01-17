import React from 'react'
import styled from 'styled-components'

const ScheduleItemLi = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media only screen and (min-width: ${props => props.theme.aboveMobile}) { 
        flex-direction: row;
        justify-content: flex-start;
    }
    
    .icon {
        width: 80px;
        height: 80px;
        margin-bottom: 16px;
        @media only screen and (min-width: ${props => props.theme.aboveMobile}) { 
            width: 150px;
            height: 150px;
            margin-bottom: 0;
        }
        display: flex;
        background: ${props => props.theme.white};
        border-radius: 75px;
        justify-content: center;
        align-items: center;
       svg {
           width: 50%;
       }
    }
    div {
        order: 1;
    }
    .description {
        flex-grow: 1;
        background-color: #fff;
        box-shadow: 0 3px 6px rgba(0,0,0,0.05);
        padding: 16px;
        margin-bottom: 32px;
        @media only screen and (min-width: ${props => props.theme.aboveMobile}) { 
            margin-bottom: 0;
        }

        h4 {
            margin-top: 0;
            text-align: center;
            @media only screen and (min-width: ${props => props.theme.aboveMobile}) { 
                text-align: left;
            }
        }
        p {
            &:last-child {
                margin-bottom: 0!important;
            }
        }
    }
    div.meta {
        order: 0;
        @media only screen and (min-width: ${props => props.theme.aboveMobile}) { 
        margin-right: 16px;
        }
    }

    h3 {
        display: block;
        text-align: center;
        width: 100%;
    }
`

const ScheduleItem = ({children}) => (
    <ScheduleItemLi>
            {children}
    </ScheduleItemLi>
)

export default ScheduleItem
