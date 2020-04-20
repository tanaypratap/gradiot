import React,{Fragment} from "react";

//Style media queries
import styled from "styled-components";
import media from "utils/media-queries";
import SectionHeading from "../components/sectionHeading";

//MUI
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

//Image import
import Tanay from "../img/influencer/tanay.jpg"
import Varun from "../img/influencer/varun.jpg"
import Prateek from "../img/influencer/prateek.jpg"
import Yatharth from "../img/influencer/yatharth.jpg"
import Anomit from "../img/influencer/anomit.jpg"
import Lakshya from "../img/influencer/lakshya.jpg"

const Div = styled.div`
    display: grid;
    grid-template-columns: auto;
    
    justify-content: space-between;
    grid-gap: 1em;
    width: 100%;
    height:100%;
    ${media.md`
    grid-template-columns: auto;
    grid-row-gap: 1em;
    justify-content: center;
`}
`

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Div
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && <p>{children}</p>}
      </Div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
      height: '100%',
      textAlign: 'center',
      
      backgroundColor: theme.palette.background.paper,
    },
    exImage:{
      borderRadius:'50%',
      height:'150px',
      width:'150px',
      boxShadow:'rgb(0,0,0) 2px 5px 5px',
      alignSelf:'center'
    },
    imgSec:{
      display:'flex',
      justifyContent:'flex-end'
    },
  }));
  

function Example(){
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
    setValue(newValue);
    };
    return(
        <Fragment>
            <SectionHeading>I'm a Gradiot</SectionHeading>
            <Div>
        <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"            
        >
            <Tab label="Tanay Pratap" {...a11yProps(0)} />
            <Tab label="Varun Mayya" {...a11yProps(1)} />
            <Tab label="Prateek Gogia" {...a11yProps(2)} />
            <Tab label="Yatharth K" {...a11yProps(3)} />
            <Tab label="Anomit" {...a11yProps(5)} />
            <Tab label="Lakshay Chauhan" {...a11yProps(4)} />
            <Tab label="Mohit Chordia" {...a11yProps(6)} />
        </Tabs>
        <TabPanel value={value} index={0}>
        <p> I , Tanay Pratap, myself am a gradiot. But I am not proud of it. I
            did my graduation in the prejio times. If given an option today in
            2020, I would anyday choose not going to college and invest my four
            years of life in self learning through freely available internet
            resources. I would go full on in the field of open source
            development and also try my hands at freelance assignments. I
            strongly believe that together we can save the future generations
            from going into this shit hole. I believe that college has
            depricated curriculum and nothing good can come out of learning
            obselete technologies. According to a research in 2018, syllabus in
            engineering colleges has not been revised since past 50 years. This
            validates my belief and raises a concern in my mind about the future
            of students who would be forced into this senile college system.
            <br/>
            <a href="https://twitter.com/tanaypratap/status/1250300565369671680">Link to post ↗</a><br/>
            <div className={classes.imgSec}>
            <div>
            {/* <div className={classes.aligCen}><img src={Tanay} alt="Tanay" className={classes.exImage}/></div> */}
            <br/>
            <div><b>~Tanay Pratap-Engineer at Microsoft India</b></div>
            </div>
            </div>
            </p>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <p>
        “Colleges have turned into real estate companies with a bunch of teachers charging rent.”<br/>
        Being a gradiot myself, I can testify for how colleges are wasting time and
        money of students for a zero return value. This should be not acceptable in
          2020. The colleges are just making money by giving out degrees which proves 
          nothing to the recruiters whether the student actually knows anything. It’s 
          harsh but it’s the truth: A piece of paper for lakhs of money and four years 
          of life. The fact that they focus on attendance more than building skills proves 
          the point. Also, redundant syllabus, deprecated curriculum and untrained faculty 
          act as the last nail in the coffin. Let’s now see what the alternative to a 
          conventional college is. It’s self-learning through online boot camps. 
          If you arm yourself with the right skills, build real projects, have a portfolio 
          to display your skills and take guidance from mentors, you will become invincible 
          in the terms of getting a job, thus achieving what you have achieved with a college 
          degree in a lot fewer resources. Suppose you pay 1lac per year for your college. 
          By running ads on Instagram for 10k you can get clients. The feedback loop will 
          establish itself as soon as the clients come in. And you'll be making money before 
          you know. Learn to survive. If you survive long enough, you will become successful.
          <br/>
          <a href="https://twitter.com/VarunMayya/status/1250484795840184321">Link to post ↗</a><br/>
          <div className={classes.imgSec}>
            <div>
            {/* <div className={classes.aligCen}><img src={Varun} alt="Varun" className={classes.exImage}/></div> */}
            <br/>
            <div><b>~Varun Mayya - Founder and CEO at Avalon Labs</b></div>
            </div>
            </div>
          </p>
        </TabPanel>
        <TabPanel value={value} index={2}>
        <p> Am I a Gradiot , Yes. Proud of it, <b>"No"</b>. I second the fact that college wasted my money and my time. My advice would be until and unless you are from some big shot college, college does not matter. 
        Rather It's better to invest time and money in your skills if you are a techie or you wanna be a techie. Join an online Bootcamp and regularly attend meetups and conferences. Nobody asked my marks in College but some companies did see my college. Those companies were actually not even worth it and would have never allowed me to learn and grow freely. Plus, I believe that if we have a portfolio with some cool projects that we are eligible enough to ask the right amount of money for the work we are supposed to do. 
        <br/>
        <a href="/">Link to post ↗</a><br/>
        <div className={classes.imgSec}>
            <div>
            {/* <div className={classes.aligCen}><img src={Prateek} alt="Prateek" className={classes.exImage}/></div> */}
            <br/>
            <div><b>~Prateek Gogia-Engineer at Nutanix</b></div>
            </div>
            </div>
        </p> 

        </TabPanel>
        <TabPanel value={value} index={3}>
        <p>
        I am an unofficial gradiot. And yes like all of us, I wasted 4 years in college. 
        But dropped out in the final semester. Well, I was studying mechanical engineering 
        which I didn't want to. The Level of frustration rose to unbearable heights and this 
        is the reason for dropout. I couldn't convince my parents. As a consequence, I had to 
        leave home and lived with relatives until found a job. But in the end, to be able to 
        do something I love daily, every setback becomes worth it.
        <br/>
        <a href="https://twitter.com/thebrokenfinger/status/1250668212120780800">Link to post ↗</a><br/>
        <div className={classes.imgSec}>
            <div>
            {/* <div className={classes.aligCen}><img src={Yatharth} alt="Yatharth" className={classes.exImage}/></div> */}
            <br/>
            <div><b>~Yatharth K, Engineer at PushOwl</b></div>
            </div>
            </div>
        </p>
        </TabPanel>

        <TabPanel value={value} index={4}>
        We need to get over this deeply entrenched barrier where companies perceive 4 years in college is equal to the ability to follow processes and be disciplined.
        I seriously believe that rather than stepping in college, one techie aspirant should rather step into open source development and gradually build his portfolio. This portfolio would provide credible proof for his employability rather than a degree earned through copied assignments. 
        I too wish my 20s were more fruitful and not wasted in becoming a gradiot . Not proud of it, mate.
        <br/>
        <a href="https://twitter.com/anomit/status/1250315078273871877">Link to post ↗</a><br/>
        <div className={classes.imgSec}>
            <div>
            {/* <div className={classes.aligCen}><img src={Anomit} alt="Anomit" className={classes.exImage}/></div> */}
            <br/>
            <div><b>~Anomit, Co-founder at BlockVigil</b></div>
            </div>
            </div>
        </TabPanel>
        <TabPanel value={value} index={5}>
        <p>
        This is the reality today. I have learned more in the last 1.5 months of vacation than 
        in 3 years of college. I don't think college is worth anything now. The best advantage of 
        learning online is that you are allowed a personalized learning curve and don't have to 
        memorize and vomit. There are no assignments that you have to copy. Rather you learn 
        something actual by doing and by building.  Degree holds no value if it doesn't have 
        a quality which is the case for most colleges today.
        <br/>
        <a href="https://twitter.com/Lakshaychauhan0/status/1250302771489689604">Link to post ↗</a><br/>
        <div className={classes.imgSec}>
            <div>
            {/* <div className={classes.aligCen}><img src={Lakshya} alt="Lakshya" className={classes.exImage}/></div> */}
            <br/>
            <div><b>~Lakshay Chauhan, A Passionate Software Developer</b></div>
            </div>
            </div>
        </p>

        </TabPanel>

        <TabPanel value={value} index={6}>
        The word Gradiot is something that describes many of us and me alike. In hindsight, I can't fathom what was the purpose of going to college. Completely relenting that I am one, and one of the major reasons is the resources available online as well as other people and communities which can help u grow even more. All my money and years for zero value and 75% attendance of rhetorical lectures and plagiarised presentations. I always wonder how I would have spent my 4 years of college if I had the option to chart my journey. Chose the future , not college.
        <br/>
        <a href="https://twitter.com/mohitchordia28/status/1250457785491283969">Link to post ↗</a><br/>
        <div className={classes.imgSec}>
            <div>
            {/* <div className={classes.aligCen}><img src={Lakshya} alt="Lakshya" className={classes.exImage}/></div> */}
            <br/>
            <div><b>~Mohit Chordia, Tech enthusiast</b></div>
            </div>
            </div>
        </TabPanel>
        </Div>
        </Fragment>
    )
}

export default Example;
