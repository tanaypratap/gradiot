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
            Q: Mark Zuckerberg and Bill Gates are not gradiots, being a gradiot
            would I automatically become successful?
          </h2>
          <p>
            <b>A:</b> Making a decision of your life based upon a handful of
            successful people who got success is utter foolishness. The concept
            of gradiot does not automatically qualify you for success. Rather
            it simply saves you a lot of money and time and gives you a better
            path to achieve your goal of bagging a well paying job. It gives you
            a platform of self learning and improving rather than fining you
            over less attendance .And most importantly, nothing work until you
            work.
          </p>
          <br />
        </ContentWrapper>
      </Section>
      <Footer />
    </GlobalWrapper>
  );
}

export default PalettteApp;
