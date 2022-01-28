import React from 'react';
import Repeat from '../Repeat/Repeat';

const ResumeHeading =(props)=>{
    <div className="resume-heading">
        <div className="resume-main-heading">
            <div className="heading-bulet">
                <span>{props.headin ? props.heading :" " }</span>
                {props.fromDate && props.toDate ? (
                        <div className="heading-date">
                        {props.fromDaate + "_" 
                        + props.toDate}</div>
                    ):(
                        <div></div>
                    )}
            </div>
            <div className="resume-sub-heading">
                <span>{props.subHeading ? props.subHeading : ' '}</span>
            </div>
            <div className="resume-heading-description">
                <span>{props.description ? props.description :''}</span>
            </div>
        </div>
    </div>
}

const resumeBullets =[
    {lebel:"Education", logosrc:"education.png"},
    {lebel: 'Work History' , 
    logosrc:"recent.png"},
    {lebel: 'Programming Skills' , logosrc:"monitor.png"},
    {lebel: 'Projects' , 
    logosrc:"project.png"},
    {lebel: 'Interests' , 
    logosrc:"hobbies.png"}
];

const programmingSkillDetails =[
    {skill: "Javascript", ratingParcentage:85},
    {skill: "React.js", ratingParcentage:85},
    {skill: "Node JS", ratingParcentage:80},
    {skill: "React Native", ratingParcentage:70},
    {skill: "Express JS", ratingParcentage:70},
    {skill: "Mongo DB", ratingParcentage:70},
    {skill: "HTML", ratingParcentage:90},
    {skill: "CSS", ratingParcentage:85},
    {skill: "Bootstrap", ratingParcentage:85},
]




const projectsDetails =[
    {
        title:"Personal Portfolio Website",   
        dutarion:{fromDate:"2020", toDate:"2021"},
        description:"A Personal Portfolio website to showcase all my details and projects at one place.", 
        subHeading:"Technologies Used: React JS, Bootsrap"
    },
    {
        title:"Mobile E-shop",
        dutarion:{fromDate:"2020", toDate:"2021"},
        description:"An ecommerce application designed to sell products online wth payment system integration", 
        subHeading:"Technologies Used:  React Native, Mongo DB, Express Js, Node Js, Redux."
    },
    {
        title:"Ecommerce Website",
        dutarion:{fromDate:"2020", toDate:"2021"},
        description:"Online ecommerce website for showcasing and selling products onlne with payment system integration, both Paypal and Stripe", 
        subHeading:"Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap."
    },
]

const resumeDetails =[
    <div className="resume-screen-container" key="education">
        <ResumeHeading
        heading={"Govt BM College ,Barishal"}
        subHeading={"BACHELOP OF SOCIAL SCIENCE"}
        fromDate={"2020"}
        />
        <ResumeHeading
        heading={"Bakergonj Govt College"}
        subHeading={"HUMANITIES"}
        fromDate={"2018"}
        toDate={"2020"}
        />
        <ResumeHeading
        heading={"Bakergonj JSU Model High School"}
        subHeading={"SCIENCE"}
        fromDate={"2013"}
        toDate={"2018"}
        />
    </div>,

<div className="resume-screen-container" key="work-exprience">
<ResumeHeading
        heading={"LFWF Academy"}
        subHeading={"FULL STACK DEVELOPER INTERN"}
        fromDate={"2021"}
        toDate={"Present"}
        />
        <div className="exprience-description">
            <span classname="resume-description-text">
            Currently working as MERN stack web and mobile developer and also an online instructor on udemy.
            </span>
        </div>

        <div className="exprience-description">
            <span classname="resume-description-text">
            - Developed an ecommerce website for client with the dashboard for managing the products, managing reviews, users, payment etc. .
            </span>
            <br />
            <span className="resume-description-text">- Integrated the web app with backend services to create new user onboarding application with dynamic form content.</span>
            <br />
            <span className="resume-description-text">- I stretch my mental capacity to develope UI as per the given designs.</span>
        </div>
        <div className="resume-screen-container programming-skills-container" key="programmin-skills">
{programmingSkillDetails.map((skill,index)=>(
    <div className="skill-parent" key={index}>
        <div className="heading-bullet"></div>
        <span>{skill.skill}</span>
        <div className="skill-parcentage">
            <div style={{width:skill.rattingPercentage +"%"}} className="active-parcentage"></div>
        </div>
    </div>
))}
            </div> 
            <div className="resume-screen-container" key="projects">
                {projectsDetails.map((projectsDetails,index)=>(
                    <ResumeHeading
                    key={index}
                    heading={projectsDetails.title}
                    subHeading={projectsDetails.subHeading}
                    description={projectsDetails.description}
                    fromDate={projectsDetails.duration.fromDate}
                    toDate={projectsDetails.duration.toDate}
                    />
                ))}
            </div>,
            <div className="resume-screen-container" key="interests">
                <ResumeHeading
                heading='Teaching'
                description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."/>
                <ResumeHeading
                heading='Music'
                description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."/>
                <ResumeHeading
                heading='Competitive Gaming'
                description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."/>
            </div>
</div> 
];

// const handleCarousel = (index)=>{
//     let offdetHeight = 360;
//     let newCaroudalOffset={
//         style:{transform:"transleteY(" +index * offsetHeight * -1 + "px)"},
//     };
//     setCaroudalOffSetStyle(newCarousalOffset)
// }

const Resume = () => {
    return (
        <>
            <Repeat title={"Resume"} subHeading={"My formal Bio Details"}></Repeat>
        </>
    );
};

export default Resume;