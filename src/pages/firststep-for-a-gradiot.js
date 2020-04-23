import React from "react";
import styled from "styled-components";
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
          <h2>Q: What is the first step after deciding to not be a gradiot?</h2>
          <p>
            <b>A:</b> You can search for open MOOCs on your domain of interest.
            If you are interested in technology and want to build a career in
            this domain, make sure to join #teamtanay on telegram and other
            social media platforms. A beautiful journey awaits you in the realm
            of development with mentors to guide and a whole community to
            support you.
          </p>
          <br />
        </ContentWrapper>
      </Section>
      <Footer />
    </GlobalWrapper>
  );
}

export default PalettteApp;
