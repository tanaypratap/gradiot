import React from "react";
import styled from "styled-components";

import media from "utils/media-queries";

import GlobalWrapper from "../components/global-wrapper";
import Header from "../components/article/headerAlt";
import ContentWrapper from "../components/article/contentwrapper";
import Footer from "../components/footer";

const Section = styled.section`
margin: 64px 0;
${media.sm`
    margin: 0;
`}
`;

function Alternative() {
    return (
    <GlobalWrapper>
    <Header title="Gradiot" />
    <Section>
        <ContentWrapper>
        <h2>What is the Alternative?</h2>
        <p>
        The alternative is simple, don't be a gradiot i.e. don't attend college. 
        Rather, Learn skills, put yourself out and bag an internship by showcasing 
        your portfolio. When you choose not going to college, the world becomes your 
        stage and the internet transforms into your holy grail for learning and guidance. <br/>
        Let's think smartly and analyse the purpose of "good" college. It assembles several 
        talented individuals under one roof and creates an atmosphere of learning, building 
        a portfolio of projects and networking. <br/>
        And we can achieve this atmosphere even without opting for college in a three step process: <br/>

        1. learning<br/>
        2. building<br/>
        3. networking<br/>
        Let us now explore each of these three points in depth: <br/>

        1. learning<br/>

	    "Where there is a will, there is a way."<br/>

        Opting for self learning is a powerful choice that makes one accountable for 
        his own life's success or failure. Remember, it is necessary to get skills 
        from the right sources, choosing quality over quantity and following a goal 
        oriented approach towards learning. The process of self learning entails 
        following a comprehensive route map towards upskilling yourself and transforming 
        into an adaptable individual. A powerful step one can take is approach champions 
        of his/her field who have real experience. This could be done through various 
        social media platforms. The mentor can guide you with the "actual" syllabus 
        according to industry demands. This will be a real unfair advantage and 
        skyrocket your chances of success.<br/>
        2. building<br/>

	    "Certificates are not your true skills,<br/>
	    But your skills are your true certificates!"<br/>
	    ~Dhruvam Thaker<br/>

        The second step is building a bunch of versatile projects which can be added to your 
        portfolio. You can host all the source code online,  get it validated from a few domain 
        experts and also write a blog about the whole building experience from scratch. The 
        purpose of a portfolio is that it gives you credibility and allows recruiters to 
        judge if you can add value in their company. Your portfolio can easily surpass the 
        validation of a degree. Working on open source projects and freelance assignments 
        also stands as a great way to prove your skills. <br/>
        3. networking<br/>

	    "Learn skills, put yourself out and go for an internship by showcasing your 
        portfolio. A simple analogy will be learning the foundation rules of football, 
        practising kicks and then going out to play with other footballers. It makes more 
        sense to actually go and practice to sharpen your skills rather than reading about 
        football and watching football tutorials for four years. "<br/>
        ~Varun Maya <br/>
        
        Networking helps you to meet like minded people and leverage each other's knowledge 
        and help each other grow mutually. You can join both, offline as well online network 
        groups. An offline learning group allows stronger peer to peer connection than even a 
        traditional college. Regularly attending meetups in your location can really help you 
        to work on your overall personality and social skills. Hackathons is another great way 
        which brings techies, entrepreneurs, marketers and designers under one roof. 
        It will help you to cull your complexes of not attending a college and also help 
        you to inculcate sales, marketing, management and design skills. Thankfully, 
        internet is fast now and communities are online. Find good placement networks like 
        hirist, IIM jobs, naukri etc and start applying to jobs. Even if you don't get 
        selected in the first try, it will be a great source of feedback. The next step will 
        be to work on your shortcomings apply again. Your network group can also act as 
        saviour for getting a referral in their workplaces. Referrals have a higher chance 
        of getting an opportunity for an interview. 

        </p>
        <br />
        </ContentWrapper>
    </Section>
<Footer />
    </GlobalWrapper>
);
}

export default Alternative;
