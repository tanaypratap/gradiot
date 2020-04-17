import React,{Fragment} from 'react'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'

//Styleing...
import styled from 'styled-components'
import media from 'utils/media-queries'
import { color, fontSize } from 'styles/theme'

const Big = styled.span`
  font-size: ${fontSize.f6};
  color: ${color.grey900};
  font-weight: 700;
  letter-spacing: -0.4px;
  line-height: 1.35;
  ${media.lg`
    font-size: ${fontSize.f5};
    letter-spacing: -0.3px;
  `}
  ${media.sm`
    font-size: ${fontSize.f5};
  `}
`

const ScenographicsLink = (
  <a href="http://medium.com/scenographics">Read More on Medium ↗</a>
)

function LiveEvent() {
  return (
    <TwoColumns
    leftColumn={<SectionHeading>Live Events</SectionHeading>}
    rightColumn={
      <Fragment>
        <Big>
        Intro to Gradiot ?
        </Big>
        <p>
        Session at 11 AM this Sunday 19th April
        </p>
        <p>We will be discussing about gradiots how to avoid becoming a gradiot and AMA session</p>
        <a href="http://instagram.com/tanaypratap">Link to attend ↗</a>
      </Fragment>
      }
    />
  )
}

export default LiveEvent
