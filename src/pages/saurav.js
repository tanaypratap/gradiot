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

function Saurav() {
    return (
    <GlobalWrapper>
    <Header title="Success Stories" />
    <Section>
        <ContentWrapper>
        <h2>From a college drop out to 4000$ Per Month</h2>
        <p>
        I am Saurav Sen a 20-year-old, building businesses, a proud dropout and a Serial Entrepreneur trying out different things every day.

I am from a very small town in Assam. I went to Kolkata after 12 with big dreams to become successful in life and to fulfil my dreams.
I got admission on a well-reputed Private College and was pursuing BCA.
<br/>
While I was in my 1st year and when I attended my 1st class and I felt like it was the worst experience I ever had in my life.
And on that day itself, I thought this is not made for me I was afraid of telling my parents about this because they have invested 1.5 lakh for me in my admission process including my new laptop.
So I started to research on the Internet about how can I get clients for graphic designing and video editing as I was doing these while I was in class 11 and 12.
<br/>
I tried reaching out to people with the traditional pitching method with ZERO sales skills, I created a list of 100 people from the industry and I use to message them daily and I did this for 20 days.
And I got 2 video project for creating promo videos and I took 7 days to complete that video and I generated Rs 12000.
At the same time, I got to know about AWIGN app for internships. I did apply there and I did internships with Oyo, Zomato and Swiggy did the internships for 3 months and generated Rs 18000.
And I invested than money in online courses learning Facebook ads, Blogging, email marketing, video editing, etc.
At this time I was also doing an internship with a company as a sales executive where I was handling telephonic calls.
And I got to know that I and good at convincing people and I love talking to people. So I worked for 3 months at that company and I got to learn many things regarding how to deal with clients, how to close a deal on a phone call, human psychology, etc.
<br/>
Then after some days, I reached out to someone who is one of the top digital marketers of India and I showed them my work and they selected me to work with them for video editing and sales calls.
I left my college I shifted to Goa, I was enjoying my work, did experience hosting an event, got awarded on the stage and many more...
while working I was generating a good amount of money because of the sales incentives which I was getting.
I started growing my network because as it said that "Your Network Is Your Net Worth!".
I was attending events, online seminars, webinars, etc.
I used to reach out to the people who have attended those sessions/events and was making new friends.
<br/>
While working with them after 3 months I started doing freelancing and got some projects from my network and was outsourcing the work.
And after some time I got someone in my network who was running his offline business. I created his website.
He got impressed by the work he recommended me to 30 more client's in the next 8 month.
In the meantime, I have enhanced my selling skills, video editing skills, graphics designing skills, etc
I got to know the perfect blueprint to pitch clients. And by doing that I got 2 retaining clients who are paying me more than Rs 1 lakh per month for my services.
I left my job on the 10th of March
From 10th March to till now I have got more 50 projects for web development, SEO, Content Writing, Video Editing.
I have tied up with someone from the Avalon Army group to help me out in the project.
So if you guys want to connect with me then you can DM me on Instagram @thesauravsen
So my message for you who is reading this story is<br/>

DO YOUR BEST WITH WHAT YOU HAVE<br/>
WINNERS DON'T GIVE EXCUSES!

        </p>
        <br />
        </ContentWrapper>
    </Section>
<Footer />
    </GlobalWrapper>
);
}

export default Saurav;
