import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import media from "utils/media-queries";

import GlobalWrapper from "components/global-wrapper";
import Header from "components/article/header";
import ContentWrapper from "components/article/contentwrapper";
import Footer from "components/footer";
import CoverImage from "components/article/coverimage";
import LargeImage from "components/article/largeimage";

import PalettteCoverImage from "img/articles/palettteapp/palettteapp.jpg";
import PalettteImage1 from "img/articles/palettteapp/palettte1.jpg";
import PalettteImage2 from "img/articles/palettteapp/palettte2.jpg";
import PalettteImage3 from "img/articles/palettteapp/palettte3.jpg";
import PalettteImage4 from "img/articles/palettteapp/palettte4.jpg";

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
          <h2>Q: What can I do now if I am already a gradiot? </h2>
          <p>
            <b>A:</b> You should help by guiding the future generations from
            going into this shit hole. We should try our best to make people
            understand that having a college degree does not mean that you would
            get placed in a great company. Companies need skilled people not
            unskilled degree holders.
          </p>
          <br />
        </ContentWrapper>
      </Section>
      <Footer />
    </GlobalWrapper>
  );
}

export default PalettteApp;
