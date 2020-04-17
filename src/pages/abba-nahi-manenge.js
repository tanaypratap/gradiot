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
          <h2>Q:"Abba Nahi Manenge. What to do to convince my parents? </h2>
          <p>
            <b>A:</b> My only advice for convincing your parents is to be a self
            starter. Show them that the way you are going to embark is the right
            one. Give them results. Prove it to them that you are jumping from a
            mountain but following a path to success. Work hard and grab an
            internship at a startup. If you become financially independent, it
            would be easier to convince them.
          </p>
          <br />
        </ContentWrapper>
      </Section>
      <Footer />
    </GlobalWrapper>
  );
}

export default PalettteApp;
