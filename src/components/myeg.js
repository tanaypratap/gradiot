import React, { Fragment } from "react";

import TwoColumns from "components/twoColumns";
import SectionHeading from "components/sectionHeading";

//Styleing...
import styled from "styled-components";
import media from "utils/media-queries";

import { color, fontSize } from "styles/theme";


const Big = styled.span`
  font-size: ${fontSize.f6};
  color: ${color.grey900};
  font-weight: 700;
  letter-spacing: -0.4px;
  line-height: 1.35;
  ${media.lg`
    font-size: ${fontSize.f5};
    letter-spacing: -0.3px;
  `}
  ${media.sm`
    font-size: ${fontSize.f5};
  `}
`;

function myEg() {
  return (
    <TwoColumns
      leftColumn={<SectionHeading>My Example</SectionHeading>}
      rightColumn={
        <Fragment>
          <Big>I, Tanay Pratap, myself am a gradiot.</Big>
          <p>
            But I am not proud of it.I did my graduation in the prejio times. If
            given an option today in 2020, I would anyday choose not going to
            college and invest my four years of life in self learning through
            freely available internet resouces. I would go full on in the field
            of open source development and also try my hands at freelance
            assignments. I strongly believe that together we can save the future
            generations from going into this shit hole. I believe that college
            has depricated cirriculm and nothing good can come out of learning
            obselete technologies.
          </p>
          <p>
            According to a research in 2018, sylabus in engineering colleges has
            not been revised since past 50 years. This validates my belief and
            raises a concern in my mind about the future of students who would
            be forced into this senile college system. My views are very clear:
            "Don't go to college as you can learn the same thing online for
            free."
          </p>
        </Fragment>
      }
    />
  );
}

export default myEg;
