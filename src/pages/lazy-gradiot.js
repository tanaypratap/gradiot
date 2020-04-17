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
            Q: I feel if I don't go to college, I would become lazy and sleep
            all day?
          </h2>
          <p>
            <b>A:</b> According to me working hard or sleeping all day is a
            personal choice. If you think that getting forced to attend useless
            lectures for the sake of 75% attendance would motivate you, think
            again. Only you can be the better judge between learning something
            interesting everyday with a community and being shackled for
            attendance with substandard curriculum and uninterested faculties.
          </p>
          <br />
        </ContentWrapper>
      </Section>
      <Footer />
    </GlobalWrapper>
  );
}

export default PalettteApp;
