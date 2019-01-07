import React from 'react'
import styled from 'styled-components'

const ScheduleDiv = styled.div`
    
`

const Schedule = ({children}) => (
    <ScheduleDiv>
        <ul>
            {children}
        </ul>
    </ScheduleDiv>
)

export default Schedule
