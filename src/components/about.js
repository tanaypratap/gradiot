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
          Let us now explore each of these three points in depth :<br/>

          1. learning<br/>

	        "Where there is a will , there is a way ."<br/>

          Opting for self learning is a powerful choice that makes one accountable for his own life's success or failure .Remember ,it is necessary to get skills from the right sources ,choosing quality over quantity and following a goal oriented approach towards learning .The process of self learning entails following a comprehensive route map towards upskilling yourself and transforming into an adaptable individual. A powerful step one can take is approach champions of his/her field who have real experience .This could be done through various social media platforms .The mentor can guide you with the "actual" syllabus according to industry demands.This will be a real unfair advantage and skyrocket your chances of success .

          </p>
        </Fragment>
      }
    />
  )
}

export default About
