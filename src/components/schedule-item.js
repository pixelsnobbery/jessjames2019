import React from 'react'
import styled from 'styled-components'

const ScheduleItemLi = styled.li`
    display: flex;
    justify-content: space-between;
    .icon {
        width: 100px;
        height: 100px;
        display: block;
        background: ${props => props.theme.primary};
        border-radius: 50px;
    }
`

const ScheduleItem = ({children}) => (
    <ScheduleItemLi>
            {children}
    </ScheduleItemLi>
)

export default ScheduleItem
