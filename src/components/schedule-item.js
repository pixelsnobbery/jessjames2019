import React from 'react'
import styled from 'styled-components'

const ScheduleItemLi = styled.li`
    display: flex;
    justify-content: flex-start;
    
    .icon {
        width: 80px;
        height: 80px;
        @media only screen and (min-width: ${props => props.theme.aboveMobile}) { 
            width: 150px;
            height: 150px;
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
        h4 {
            margin-top: 0;
        }
        p {
            &:last-child {
                margin-bottom: 0!important;
            }
        }
    }
    div.meta {
        order: 0;
        margin-right: 16px;
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
