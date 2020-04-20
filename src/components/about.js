import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import media from 'utils/media-queries'

import { color, fontSize } from 'styles/theme'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'

const more = (<Link to="/alternative"><b>Read More</b></Link>);

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
          <p textAlign="justify">
          The alternative is simple , don't be a gradiot i.e. don't attend college.
          Rather ,Learn skills , put yourself out and bag an internship by showcasing 
          your portfolio.When you choose not going to college , the world becomes your 
          stage and the internet transforms into your holy grail for learning and guidance .<br/>
          Let's think smartly and analyse the purpose of "good" college .It assembles several 
          talented individuals under one roof and creates an atmosphere of learning ,building 
          a portfolio of projects and networking .<br/>
          And we can achieve this atmosphere even without opting for college in a three step process :<br/>

          1. learning<br/>
          2. building<br/>
          3. networking<br/>
          {more}
          </p>
        </Fragment>
      }
    />
  )
}

export default About
