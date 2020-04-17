import React, { Fragment } from 'react'

import TwoColumns from 'components/twoColumns'
import Project from 'components/project'
import SectionHeading from 'components/sectionHeading'

import ScenographicsLogo from 'img/bamlogo.svg'

const ScenographicsLink = (
  <a href="http://medium.com/scenographics">Read More on Medium ↗</a>
)

function Companies() {
  return (
    <Fragment>
      <TwoColumns
      
      leftColumn={<SectionHeading>Companies</SectionHeading>}
      // rightColumn={<h4>That simply don't require any degree!</h4>}
    /><br/>
    <h4>That simply don't require any degree!</h4>
    <img 
    src="https://user-images.githubusercontent.com/33570551/79407969-d9521780-7fb7-11ea-9d8e-1916f22d8208.jpg" 
    alt="Gogle"
    width="100%"
    height="auto"
    />
    <h3 align="center">You are hired!</h3>
    </Fragment>
    
  )
}

export default Companies
