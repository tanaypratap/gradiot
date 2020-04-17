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
            Q:In current scenario , what is the problem with colleges and why
            they are inefficient?
          </h2>
          <p>
            <b>A:</b> Colleges have turned into real estate companies with a
            bunch of teachers charging rent.These colleges are just making
            money. Fees are high and teachers are uninterested.The fact that
            they focus on attendance more than building skills proves the point
            .Also ,redundant syllabus , deprecated curriculum and untrained
            faculty act as the last nail in the coffin.
          </p>
          <br />
        </ContentWrapper>
      </Section>
      <Footer />
    </GlobalWrapper>
  );
}

export default PalettteApp;
