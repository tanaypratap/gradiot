import React from "react";
import styled from "styled-components";
import media from "utils/media-queries";

import Header from "components/header";
import Spirograph from "components/spirograph";
import Section from "components/section"


const HeroSection = styled.section`
  
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  ${media.sm`
    height: calc(120vh - 76px);
  `}
`;
const Div = styled.div`
display: grid;
grid-template-columns: auto;
grid-auto-columns: min-content;

justify-items:center;
grid-gap: 1em;
width: 100%;
${media.md`
grid-template-columns: auto;
grid-row-gap: 1em;

justify-items:center;
`}
`

function Hero() {
  return (
    <HeroSection>
      {/* <Spirograph speed={0.012} /> */}
      
      <Header />
      <Section>
        <Div>
        <h2><span role="img" aria-label="School don't go" >🏢 🙅‍♂ 🏃‍♂️</span></h2>
        <h2><span role="img" aria-label="Stay home study">🏡 👨‍💻 📖</span></h2>
        <h2><span role="img" aria-label="Save mony and time">🆘💴💰⌚️</span></h2>
        <h4>Can you guess 🤔 What we are trying to say? If not, scroll down ⬇</h4>
        </Div>
        
      </Section>
    </HeroSection>
  );
}
export default Hero;
