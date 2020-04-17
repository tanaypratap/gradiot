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
          <h2>Q: Is being a gradiot a bad thing?</h2>
          <p>
            <b>A:</b> Nothing is this world can be boxed to be good or bad
            .Being a gradiot simply means taking a bad road towards your
            destination which wastes your time and money resources .Its about
            value for your time and money.I mean today most indians agree that
            college is a waste of time. Teachers aren't really teaching properly
            and simply giving assignments that have nothing to do with the real
            world.
          </p>
          <br />
        </ContentWrapper>
      </Section>
      <Footer />
    </GlobalWrapper>
  );
}

export default PalettteApp;
