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
          <h2>Q:Does everyone who goes to college is a gradiot ?</h2>
          <p>
            <b>A:</b> No , It doesn't apply to medicine and research, but to
            most other fields.If you feel that what you are learning at your
            college can be learned online in a more efficient way and less cost
            in terms of time and money , then you probably are a gradiot.
          </p>
          <br />
        </ContentWrapper>
      </Section>
      <Footer />
    </GlobalWrapper>
  );
}

export default PalettteApp;
