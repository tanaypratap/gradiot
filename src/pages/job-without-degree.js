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
            Q: If I dont go to college, how would I get a well paying job
            without a degree?
          </h2>
          <p>
            <b>A:</b> Times have changed, my friend. College degrees no longer
            promise jobs. Building real skills and having projects to prove them
            is the only way a recruiter is going to hire you. If some company
            does not give you an interview without a degree, it automatically
            translates to that you would not have had freedom to learn and work
            there anyway with their orthodox mentality.
          </p>
          <br />
        </ContentWrapper>
      </Section>
      <Footer />
    </GlobalWrapper>
  );
}

export default PalettteApp;
