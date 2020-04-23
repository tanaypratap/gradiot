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

function LiveEvent() {
  return (
    <TwoColumns
    leftColumn={<SectionHeading>Live Events</SectionHeading>}
    rightColumn={
      <Fragment>
        <Big>
        Indian Education System!
        </Big>
        <p>
        Session at 12:30 PM, Sunday 19th April,2020
        </p>
        <p>We discussed about Indian education system, what problems are students facing and how to avoid becoming a gradiot followed by an AMA session</p>
        <a href="https://youtu.be/ZNh35KV1hmQ">Part-1 ↗</a>{" "}
        <a href="https://youtu.be/POl3dZxWW_E">Part-2 ↗</a>
      </Fragment>
      }
    />
  )
}

export default LiveEvent
