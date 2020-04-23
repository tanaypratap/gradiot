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
          <h2>Q: Can I ever make money by not going to college?</h2>
          <p>
            <b>A:</b> If you arm yourself with the right skills , build real
            projects ,have a portfolio to display your skills and take guidance
            from mentors , you will become invincible in the terms of getting a
            job .Suppose you pay 1lac per year for your college. By running ads
            on Instagram for 10k you can get clients. Feedback loop will
            establish itself as soon as the clients come in. And you'll be
            making money before you know.
          </p>
          <br />
        </ContentWrapper>
      </Section>
      <Footer />
    </GlobalWrapper>
  );
}

export default PalettteApp;
