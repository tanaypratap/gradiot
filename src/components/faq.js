import React, { Fragment } from "react";
import Link from "gatsby-link";

import TwoColumns from "components/twoColumns";
import SectionHeading from "components/sectionHeading";
import FaqComp from "components/faqComp";

const ques1 = <Link to="/job-without-degree">Read More</Link>;
const ques2 = <Link to="/abba-nahi-manenge">Read More</Link>;
const ques3 = <Link to="/lazy-gradiot">Read More</Link>;
const ques4 = <Link to="/being-successful-gradiot">Read More</Link>;
const morefaqs = (
  <Link to="/faqs">
    <b>View More FAQs</b>
  </Link>
);

function Faq() {
  return (
    <TwoColumns
      leftColumn={<SectionHeading>FAQs</SectionHeading>}
      rightColumn={
        <Fragment>
          <FaqComp
            ques="Q: If I dont go to college, how would I get a well paying job without a degree?"
            ans="A: Times have changed, my friend. College degrees no longer promise jobs...."
            link={ques1}
          />
          <FaqComp
            ques="Q: 'Abba Nahi Manenge' What to do to convince my parents?"
            ans="A: My only advice for convincing your parents is to be a self starter...."
            link={ques2}
          />
          <FaqComp
            ques="Q: I feel if I don't go to college, I would become lazy and sleep all day?"
            ans="A: According to me working hard or sleeping all day is a personal choice.If you...."
            link={ques3}
          />
          <FaqComp
            ques="Q: Mark Zuckerberg and Bill Gates are not gradiots, being a gradiot would I automatically become successful?"
            ans="A: Making a decision of your life based upon a handful of successful people who got success is utter foolishness."
            link={ques4}
          />
          <b>{morefaqs}</b>
        </Fragment>
      }
    />
  );
}

export default Faq;
