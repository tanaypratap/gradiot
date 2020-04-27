import React, { Fragment } from 'react'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'

//Image import
import Apple from "../img/logos/apple.png"
import boa from "../img/logos/boa.png"
import chipotle from "../img/logos/chipotle.png"
import costco from "../img/logos/costco.png"
import ey from "../img/logos/ey.png"
import Google from "../img/logos/Google.jpg"
import hilton from "../img/logos/Hilton-Logo.png"
import homedept from "../img/logos/homedept.png"
import lowe from "../img/logos/lowe.png"
import nordstrom from "../img/logos/nordstrom.png"
import pen from "../img/logos/pen.png"
import starbucks from "../img/logos/starbucks.png"
import wholefoods from "../img/logos/wholefoods.png"
import netflix from "../img/logos/netflix.png"

import "./Comp.css"

function Companies() {
  
  return (
    <Fragment>
      <TwoColumns
      
      leftColumn={<SectionHeading>Companies</SectionHeading>}
      // rightColumn={<h4>That simply don't require any degree!</h4>}
    /><br/>
    <h4>That simply don't require any degree!</h4>
    {/* <img 
    src="https://user-images.githubusercontent.com/33570551/79407969-d9521780-7fb7-11ea-9d8e-1916f22d8208.jpg" 
    alt="Gogle"
    width="100%"
    height="auto"
    /> */}
  <div className="container">
  <div className="imgage-container"> 
    <a href="https://careers.google.com/jobs/results/96053258167952070/" target="_blank" rel="noopener noreferrer">
      <img src={Google} alt="Google" className="imgage"/>
    </a>
    <a href="https://careers.bankofamerica.com/en-us/job-detail/20020516/ops-sr-analyst-mkts-charlotte-north-carolina-united-states" target="_blank" rel="noopener noreferrer">
      <img src={boa} alt="Boa" className="imgage"/>
    </a>
    <a href="https://jobs.chipotle.com/job/columbus/national-program-manager/282/15925788" target="_blank" rel="noopener noreferrer">
      <img src={chipotle} alt="Chipotle" className="imgage"/>
    </a>
    <a href="https://jobs.apple.com/en-us/details/200141302/full-stack-software-engineer?team=OPMFG" target="_blank" rel="noopener noreferrer">
      <img src={Apple} alt="Apple" className="imgage"/>
    </a>
    <a href="https://cta.cadienttalent.com/index.jsp?POSTING_ID=85044896930&locale=en_US&SEQ=positionDetails&applicationName=CostcoNonReqExt" target="_blank" rel="noopener noreferrer">
      <img src={costco} alt="costco" className="imgage"/>
    </a>
    <a href="https://eygbl.referrals.selectminds.com/experienced-opportunities/jobs/sharepoint-migration-and-development-130795" target="_blank" rel="noopener noreferrer">
      <img src={ey} alt="ey" className="imgage"/>
    </a>
    <a href="https://jobs.hilton.com/us/en/job/HOT06T0M/Assistant-Chief-Enginner" target="_blank" rel="noopener noreferrer">
      <img src={hilton} alt="hilton" className="imgage"/></a>
    <a href="https://careers.homedepot.com/job/10854919/data-scientist-pricing-atlanta-ga/" target="_blank" rel="noopener noreferrer">
      <img src={homedept} alt="homedept" className="imgage"/>
    </a>
    <a href="https://jobs.lowes.com/job/mooresville/senior-it-software-engineer/1627/15989675" target="_blank" rel="noopener noreferrer">
      <img src={lowe} alt="lowe" className="imgage"/>
    </a>
    <a href="https://nordstrom.wd5.myworkdayjobs.com/en-US/nordstrom_careers/job/Columbus-OH/District-Mgr-LP_R-197472" target="_blank" rel="noopener noreferrer">
      <img src={nordstrom} alt="nordstrom" className="imgage"/>
    </a>
    <a href="https://jobsearch.createyourowncareer.com/PRH_US/job/Emeryville-Design-&-Production-Assistant-Ten-Speed-Press-CA-94608/590502801/" target="_blank" rel="noopener noreferrer">
      <img src={pen} alt="Penguin" className="imgage"/>
    </a>
    <a href="https://starbucks.taleo.net/careersection/1000222/jobdetail.ftl?job=200002052&iniurl.src=CWS-11700&tz=GMT%2B05%3A30&tzname=Asia%2FCalcutta" target="_blank" rel="noopener noreferrer">
      <img src={starbucks} alt="starbucks" className="imgage"/>
    </a>
    <a href="https://careers.wholefoodsmarket.com/global/en/job/WHFOGLOBALREQ20200400664/Senior-Endpoint-Systems-Engineer" target="_blank" rel="noopener noreferrer">
      <img src={wholefoods} alt="wholefoods" className="imgage"/>
    </a>
    <a href="https://jobs.netflix.com/jobs/866978" target="_blank" rel="noopener noreferrer">
      <img src={netflix} alt="netflix" className="imgage"/>
    </a>
    <p>Click on the images for more info</p>
  </div>
  </div>
    <h3 align="center">You are hired!</h3>
    </Fragment>
    
  )
}

export default Companies
