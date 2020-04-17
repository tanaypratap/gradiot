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
            Q: I love my college and my teachers are guiding lights of my life
            .What should I do if I rather disagree with the thought of not going
            to a college?
          </h2>
          <p>
            <b>A:</b> Attending or not attending college is a personal choice
            .We respect your choice and also would like to congratulate you for
            getting such good platform .We would advise you to attend a couple
            of new age online boot camps for experiencing online education and
            the amazing team work.We wish you the best of luck for future.
          </p>
          <br />
        </ContentWrapper>
      </Section>
      <Footer />
    </GlobalWrapper>
  );
}

export default PalettteApp;
