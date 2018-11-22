import React from 'react'
//import styled from 'styled-components'

// import { Link } from 'gatsby'
// import Navigation from './navigation'

const TimelineItem = ({title, message, Icon}) => (
    <div className="details">
            <div>
              <h3>{title}</h3>
              <div className="image ring">
                {Icon}
              </div>
              <div className="description">
                <p>{message}</p>
              </div>
            </div>
          </div>
)

export default TimelineItem
