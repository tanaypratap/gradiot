import React from "react";

import GlobalWrapper from "components/global-wrapper";
// import Header from "components/header";
import Hero from "components/hero";
import Section from "components/section";
import About from "components/about";
import Faq from "components/faq";
import LiveEvent from "components/liveevent";
import Companies from "components/companies";
import Footer from "components/footer";
import Example from "./example";
import Stories from "./stories"


export default class App extends React.Component {
  render() {
    return (
      <GlobalWrapper>
        <Hero />
        {/* <Header /> */}
        <Section id={"about"}>
          <About />
        </Section>
        <Section>
          <Example />
        </Section>
        <Section>
          <Stories/>
        </Section>
        <Section id={"projects"}>
          <Faq />
        </Section>
        <Section>
          <LiveEvent />
        </Section>
        {/* <Section>
          <myEg />
        </Section> */}
        <Section>
          <Companies />
        </Section>
        <Footer />
      </GlobalWrapper>
    );
  }
}
