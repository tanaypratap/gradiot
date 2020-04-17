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
            Q: I have no lack of time or money .I just want to attend college
            for a memorable experience?
          </h2>
          <p>
            <b>A:</b> If you are opting to attend college for a mere experience
            factor , we are sad to inform you it is not a pleasant one .You can
            do a fun bootcamp or join a large company for the campus feeling.
            People in large companies with boot camps also feel very similar to
            a college experience.
          </p>
          <br />
        </ContentWrapper>
      </Section>
      <Footer />
    </GlobalWrapper>
  );
}

export default PalettteApp;
