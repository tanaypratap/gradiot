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
          <h2>
            Q: I feel not going to college will make me insecure in the future ,
            what should I do?
          </h2>
          <p>
            <b>A:</b> First of all ,it's normal to have insecurities. Think
            about your parent's taking a loan for you to attend college in this
            economic condition and you getting zero value from college .Won't
            you feel cheated and insecure then.Paying lakhs/crores to hide a
            self lack is not worth it.
          </p>
          <br />
        </ContentWrapper>
      </Section>
      <Footer />
    </GlobalWrapper>
  );
}

export default PalettteApp;
