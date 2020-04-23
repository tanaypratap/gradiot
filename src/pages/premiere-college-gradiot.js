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
          <h2>Q: I am from a premiere college, am I still a gradiot ?</h2>
          <p>
            <b>A:</b> The concept of gradiot is not about being from tier 1 or
            tier 3 college. It stems from the fact that when one can self learn
            and upskill oneself for getting a well paying job, then why should
            anyone pay lakhs and lakhs of fees, tuition and four years of one
            life. It's about focusing on quality and spending time and money on
            building skills that would really help one to get a job rather than
            false promises of 100% placement guarantee.
          </p>
          <br />
        </ContentWrapper>
      </Section>
      <Footer />
    </GlobalWrapper>
  );
}

export default PalettteApp;
