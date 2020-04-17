import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import media from 'utils/media-queries'

import { color, fontSize } from 'styles/theme'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'

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

function About() {
  return (
    <TwoColumns
      leftColumn={<SectionHeading>About</SectionHeading>}
      rightColumn={
        <Fragment>
          <Big>
          WHAT DOES #gradiot MEAN ?
          </Big>
          <p>
          A gradiot is a person who has wasted money and 
          time getting zero skills from college while there's an 
          actual opportunity to learn everything for free .
          </p>
          <Big>
          WHAT IS THE ALTERNATIVE ?
          </Big>
          <p>
          The alternative is simple , don't be an gradiot ie not going to college .
          It rather entails four years of self learning and discipline visible by 
          open source projects , freelance assignments .Also working on the overall 
          personality and social skills by regularly attending meetups in your location .
          </p>
        </Fragment>
      }
    />
  )
}

export default About
