import React,{Fragment} from "react";
import Link from 'gatsby-link'

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
// import Tanay from "../img/influencer/tanay.jpg"
// import Varun from "../img/influencer/varun.jpg"
// import Prateek from "../img/influencer/prateek.jpg"
// import Yatharth from "../img/influencer/yatharth.jpg"
// import Anomit from "../img/influencer/anomit.jpg"
// import Lakshya from "../img/influencer/lakshya.jpg"

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
const more = (<Link to="/saurav"><b>Read More</b></Link>);

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
  

function Stories(){
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
    setValue(newValue);
    };
    return(
        <Fragment>
            <SectionHeading>Success Stories</SectionHeading>
            <Div>
        <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"            
        >
            <Tab label="Saurav Sen" {...a11yProps(0)} />
            <Tab label="Zoho" {...a11yProps(1)} />

        </Tabs>
        <TabPanel value={value} index={0}>
          <b>From a college drop out to 4000$ Per Month</b>
        <p> I am Saurav Sen a 20-year-old, building businesses, a proud dropout and a Serial Entrepreneur trying out different things every day.
            I am from a very small town in Assam. I went to Kolkata after 12 with big dreams to become successful in life and to fulfil my dreams.
            I got admission on a well-reputed Private College and was pursuing BCA.
            While I was in my 1st year and when I attended my 1st class and I felt like it was the worst experience I ever had in my life.
            And on that day itself, I thought this is not made for me I was afraid of telling my parents about this because they have invested 1.5 lakh for me in my admission process including my new laptop.
            So I started to research on the Internet about how can I get clients for graphic designing and video editing as I was doing these while I was in class 11 and 12.

            <br/>
            {more}
            <div className={classes.imgSec}>
            <div>
            {/* <div className={classes.aligCen}><img src={Tanay} alt="Tanay" className={classes.exImage}/></div> */}
            <br/>
            <div><b>~Saurav Sen, Founder-Service Brust</b></div>
            </div>
            </div>
            </p>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <b>An Indian IT firm is building a million-dollar empire with an army of high school graduates</b>
            <p>
            Zoho was founded in 1996 by Sridhar Vembu, an alumnus of the Indian Institute of Technology Madras. 
            The company makes cloud-based products such as Zoho Mail, Zoho Docs (like the one Google offers), 
            accounting software Zoho Books, and some 30 others which are used by companies such as Amazon, Suzuki, 
            and Air Canada. It earned Rs1,557 crore (around $240 million) in revenue in the 2016 financial year, 
            according to company research platform Tofler.<br/>
            Even as most other firms seek talent from top-ranked tech institutes, this company, through its Zoho 
            University (ZU) initiative, turns software programmers out of high-school graduates and hires them for 
            roles at salaries on par with engineering graduates.

            </p>
            <b><a href="https://qz.com/india/1029316/zoho-corporation-is-building-a-million-dollar-empire-with-an-army-of-high-school-graduates-in-india/">Read More</a></b>
            <div className={classes.imgSec}>
            <div>
              <div><b>~Zoho Corporation</b></div>
            </div>
            </div>
        </TabPanel>
        </Div>
        </Fragment>
    )
}

export default Stories;
