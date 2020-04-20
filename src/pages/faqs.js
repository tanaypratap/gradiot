import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import media from "utils/media-queries";

import GlobalWrapper from "components/global-wrapper";
import Header from "components/article/header";
import ContentWrapper from "components/article/contentwrapper";
import Footer from "components/footer";
import FaqComp from "components/faqComp";

const ques1 = <Link to="/job-without-degree">Read More</Link>;
const ques2 = <Link to="/abba-nahi-manenge">Read More</Link>;
const ques3 = <Link to="/lazy-gradiot">Read More</Link>;
const ques4 = <Link to="/being-successful-gradiot">Read More</Link>;
const ques5 = <Link to="/college-life">Read More</Link>;
const ques6 = <Link to="/firststep-for-a-gradiot">Read More</Link>;
const ques7 = <Link to="/already-a-gradiot">Read More</Link>;
const ques8 = <Link to="/premiere-college-gradiot">Read More</Link>;
const ques9 = <Link to="/current-prob">Read More</Link>;
const ques10 = <Link to="/should-u-dropout">Read More</Link>;
const ques11 = <Link to="/is-everyone-a-gradiot">Read More</Link>;
const ques12 = <Link to="/is-gradiot-bad">Read More</Link>;
const ques13 = <Link to="/the-perf-pathway">Read More</Link>;
const ques14 = <Link to="/making-money-without-college">Read More</Link>;
const ques15 = <Link to="/online-platforms">Read More</Link>;
const ques16 = <Link to="/changing-the-system">Read More</Link>;
const ques17 = <Link to="/disagree-going-to-college">Read More</Link>;
const ques18 = <Link to="/college-for-memorable-exp">Read More</Link>;
const ques19 = <Link to="/insecure-about-future">Read More</Link>;

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
            All your questions about being a gradiot answered in a single place.
          </h2>
          <br />
          <br />
          <FaqComp
            ques="Q: If I dont go to college, how would I get a well paying job without a degree?"
            ans="A: Times have changed, my friend. College degrees no longer promise jobs...."
            link={ques1}
          />
          <br />
          <FaqComp
            ques="Q: 'Abba Nahi Manenge' What to do to convince my parents?"
            ans="A: My only advice for convincing your parents is to be a self starter...."
            link={ques2}
          />
          <br />
          <FaqComp
            ques="Q: I feel if I don't go to college, I would become lazy and sleep all day?"
            ans="A: According to me working hard or sleeping all day is a personal choice.If you...."
            link={ques3}
          />
          <br />
          <FaqComp
            ques="Q: Mark Zuckerberg and Bill Gates are not gradiots, being a gradiot would I automatically become successful?"
            ans="A: Making a decision of your life based upon a handful of successful people who got success is utter foolishness...."
            link={ques4}
          />
          <br />
          <FaqComp
            ques="Q: Does no college mean no friends and social life ?"
            ans="A: No ,one can still make friends, develop social skills and inculcate an overall personality by...."
            link={ques5}
          />
          <br />
          <FaqComp
            ques="Q: What is the first step after deciding to not be a gradiot?"
            ans="A: You can search for open MOOCs on your domain of interest.If you are interested in technology and want to build a career in this domain...."
            link={ques6}
          />
          <br />
          <FaqComp
            ques="Q: What can I do now if I am already a gradiot?"
            ans="A: You should help by guiding the future generations from going into this shit hole.We should try our best to make people understand...."
            link={ques7}
          />
          <br />
          <FaqComp
            ques="Q: I am from a premiere college , am I still a gradiot?"
            ans="A: The concept of gradiot is not about being from tier 1 or tier 3 college .It stems from the fact that when one can self learn and...."
            link={ques8}
          />
          <br />
          <FaqComp
            ques="Q: In current scenario , what is the problem with colleges and why they are inefficient?"
            ans="A: Colleges have turned into real estate companies with a bunch of teachers charging rent.These colleges...."
            link={ques9}
          />
          <br />
          <FaqComp
            ques="Q: I am right now a student in college and have realised that college is not taking me anywhere .Should I drop out?"
            ans="A: It is a very subjective choice .You should consult your parents and explain to...."
            link={ques10}
          />
          <br />
          <FaqComp
            ques="Q: Does everyone who goes to college is a gradiot?"
            ans="A: No , It doesn't apply to medicine and research, but to most other fields.If you feel...."
            link={ques11}
          />
          <br />
          <FaqComp
            ques="Q: Is being a gradiot a bad thing?"
            ans="A: Nothing is this world can be boxed to be good or bad .Being a gradiot simply means taking a bad road...."
            link={ques12}
          />
          <br />
          <FaqComp
            ques="Q: How will I get access to a perfect pathway and mentor after deciding not to go to college?"
            ans="A: Follow the right people online. Read the right books....."
            link={ques13}
          />
          <br />
          <FaqComp
            ques="Q: Can I ever make money by not going to college?"
            ans="A: If you arm yourself with the right skills , build real projects ,have a portfolio to display your skills and take guidance from mentors , you will become invincible in the terms of getting a job...."
            link={ques14}
          />
          <br />
          <FaqComp
            ques="Q: If in future ,what would happen online platforms start charging a fee?"
            ans="A: While this seems like a valid question but even if online education and resources...."
            link={ques15}
          />
          <br />
          <FaqComp
            ques="Q: Can't the education system be changed?"
            ans="A: Change is possible but would be gradual.We can't bet the future of students in a hope for them to change...."
            link={ques16}
          />
          <br />
          <FaqComp
            ques="Q: I love my college and my teachers are guiding lights of my life .What should I do if I rather disagree with the thought of not going to a college?"
            ans="A: Attending or not attending college is a personal choice .We respect your choice and also would like to congratulate you...."
            link={ques17}
          />
          <br />
          <FaqComp
            ques="Q: I have no lack of time or money .I just want to  attend college for a memorable experience?"
            ans="A: If you are opting to attend college for a mere experience factor , we are sad to inform you it is not a pleasant one...."
            link={ques18}
          />
          <br />
          <FaqComp
            ques="Q: I feel not going to college will make me insecure in the future , what should I do?"
            ans="A: First of all ,it's normal to have insecurities. Think about your parent's taking a loan for you to...."
            link={ques19}
          />
          <br />
        </ContentWrapper>
      </Section>
      <Footer />
    </GlobalWrapper>
  );
}

export default PalettteApp;
