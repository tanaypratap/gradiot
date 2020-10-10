import React from "react";
import styled from "styled-components";
import media from "utils/media-queries";

import Header from "components/header";
import Section from "components/section";

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

  justify-items: center;
  grid-gap: 1em;
  width: 100%;
  ${media.md`
grid-template-columns: auto;
grid-row-gap: 1em;

justify-items:center;
`}
`;
const H2 = styled.h2`
  display: block;
  font-size: 2.5em;
  margin-top: 0.4em;
  margin-bottom: 0.4em;
  transition: transform 2s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  ${media.md`
    display: block;
    font-size: 2.5em;
    margin-top: 0.4em;
    margin-bottom: 0.4em;
    transition: transform 2s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`}
`;

function Hero() {
  return (
    <HeroSection>
      {/* <Spirograph speed={0.012} /> */}

      <Header />
      <Section>
        <Div>
          <H2>
            <span role="img" aria-label="School don't go">
              🏢 🙅‍♂ 🏃‍♂️
            </span>
          </H2>
          <H2>
            <span role="img" aria-label="Stay home study">
              🏡 👨‍💻 📖
            </span>
          </H2>
          <H2>
            <span role="img" aria-label="Save mony and time">
              🆘💴💰⌚️
            </span>
          </H2>
          <h4>
            Can you guess{" "}
            <span role="img" aria-label="Think">
              🤔
            </span>{" "}
            What we are trying to say? If not, scroll down{" "}
            <span role="img" aria-label="Down">
              ⬇
            </span>
          </h4>
        </Div>
      </Section>
    </HeroSection>
  );
}
export default Hero;
