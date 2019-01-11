import React from 'react'
import styled from 'styled-components'

const ScheduleItemLi = styled.li`
    display: flex;
    justify-content: flex-start;
    .icon {
        width: 150px;
        height: 150px;
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
