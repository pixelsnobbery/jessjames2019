import React from 'react'
import styled from 'styled-components'

const ScheduleDiv = styled.div`
    ul {
        margin: 0;
    }
`

const Schedule = ({children}) => (
    <ScheduleDiv>
        <ul>
            {children}
        </ul>
    </ScheduleDiv>
)

export default Schedule
