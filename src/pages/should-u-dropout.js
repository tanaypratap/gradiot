import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import media from "utils/media-queries";

import GlobalWrapper from "components/global-wrapper";
import Header from "components/article/header";
import ContentWrapper from "components/article/contentwrapper";
import Footer from "components/footer";

const Section = styled.section`
  margin: 64px 0;
  ${media.sm`
    margin: 0;
  `}
`;

function PalettteApp() {
  return (
    <GlobalWrapper>
      <Header title="FAQs" />
      <Section>
        <ContentWrapper>
          <h2>
            Q:I am right now a student in college and have realised that college
            is not taking me anywhere. Should I drop out?
          </h2>
          <p>
            <b>A:</b> It is a very subjective choice .You should consult your
            parents and explain to them your point profoundly .Taking a
            collective decision is always better .Dropping out is a
            responsibility, just like graduation is. What you do in life has
            always been dependent on you.
          </p>
          <br />
        </ContentWrapper>
      </Section>
      <Footer />
    </GlobalWrapper>
  );
}

export default PalettteApp;
