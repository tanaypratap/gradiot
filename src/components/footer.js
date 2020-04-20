import React from "react";
import styled from "styled-components";
import media from "utils/media-queries";

import { fontSize } from "styles/theme";

import Section from "components/section";

const FooterText = styled.div`
  text-align: center;
  font-size: ${fontSize.f2};
  ${media.lg`
    font-size: ${fontSize.f1};
  `}
  ${media.sm`
    text-align: left;
    font-size: ${fontSize.f1};
  `}
`;

function Footer() {
  return (
    <Section>
      <FooterText>
        <br />© 2020 Gradiot&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <a href="https://www.instagram.com/tanaypratap/">#TeamTanay</a>
        <br />
        Static website made by{" "}
        <a href="https://www.instagram.com/sushil.buragute/">
          Sushil Buragute
        </a>{" "}
        and <a href="https://www.instagram.com/gkanishk_/">Kanishk Gupta</a>. Content crafted by 
        {" "} <a href="https://www.instagram.com/reactninja">Aadhar</a>
      </FooterText>
    </Section>
  );
}

export default Footer;
