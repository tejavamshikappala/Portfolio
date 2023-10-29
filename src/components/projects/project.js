import ProjectDetails from '../projectDetails/projectDetails'
import './project.css'
import {v4 as uuidv4} from "uuid"
import {motion} from "framer-motion"

 //background1: "#222A35",
  //    button: "#854CE6",
  //    background2: "#19212C",
  // nxt Trendz= https://auth1.ccbp.tech/

  //event Scheduler=https://tejavamshikappala.github.io/Event-scheduler/

  //simple calculator=https://tejavamshikappala.github.io/Calculator-Project/

const Project = () => {
  const projects=[
    {
    id:uuidv4(),
    
    projectImg:'/nxtTrendz.png',
    alt:"nxtImg",
    skills:["React JS", "JavaScript","CSS3", "Bootstrap", "REST API Calls", "Client Storage"],
    title:"Nxt Trendz",
    description:"Nxt Trendz application is a clone for ECommerce applications like Amazon, Flipkart where users can login and can see list of products with search, filters, sort by, etc.. and user can add items to cart...",
    projectLink:"https://auth1.ccbp.tech/",
    credentials:["rahul","rahul@2021"]
  },
    
    {id:uuidv4(),
  projectImg:'/instapng.png',
  alt:"InstaImg",
  skills:["React Js","JavaScript","REST API Calls","Client Storage","CSS3","Bootstrap","Figma"],
  title:"InstaShare",
  description:"InstaShare is a responsive Streaming Application like Instagram Clone where users can log in and see a list of stories and posts, user can also search posts with post caption, user can be able to like and dislike the post and also view the user specific posts.",
  projectLink:"https://miniinsta.ccbp.tech/",
  credentials:["rahul","rahul@2021"]
  },
  {
    id:uuidv4(),
  projectImg:'/schedulerPng.png',
  alt:"schedulerImg",
   skills:["HTML5","CSS3","Bootstrap","JavaScript"],
   title:"Event Scheduler",
   description:"Event Scheduler is a responsive scheduler application. In which a user can schedule events on particular dates and time. And this application has a feature where a user can edit the scheduled event when necessary.",
   projectLink:"https://tejavamshikappala.github.io/Event-scheduler/",
   credentials:[]


  },
  {
    id:uuidv4(),
     projectImg:'/todopng.png',
     alt:"TodosImg",
   skills:["HTML5","CSS3","Bootstrap","JavaScript"],
   title:"Todos Application",
   description:"Todos Application is a responsive web application with a robust task tracking system with CRUD capabilities, crafted to simplify task management.",
   projectLink:'https://tejavamshitodo.ccbp.tech/',
   credentials:[]

  },
  {
    id:uuidv4(),
     projectImg:'/simpleCalculatorPng.png',
     alt:"calculatorImg",
   skills:["HTML5","CSS3"],
   title:"Simple Calculator",
   description:"This Simple Calculator application allows users to do simple calculations for daily usage which involves the calculations like Additions, Subtractions, Multiplications, Divisions etc...",
   projectLink:"https://tejavamshikappala.github.io/Calculator-Project/",
   credentials:[]

  },
  {
    id:uuidv4(),
    projectImg:'/RoyalEnfieldPng.png',
    alt:"RoyalImg",
   skills:["HTML5","CSS3","Bootstrap","Gsap"],
   title:"Royal Enfield",
   description:"This application is a responsive web application which mostly contains frontend part.This application will give a great user-experience as it includes various animations created using GSAP (the JavaScript library).  This will contain various sections like 1. About section. 2. Services section. 3. Store section.",
   projectLink:"https://tejavamshikappala.github.io/royal-Enfield/",
   credentials:[]
  }
  ]
  return (
    <div className='project'>
    <div className="project-inside">
      <h2 className='project-header'>
    Projects
    </h2>

    <div className="project-container" >
   <motion.ul className='ul-class-projects' initial={{opacity:0,}} animate={{opacity:1}} >
   {projects.map((each)=><ProjectDetails key={each.id} details={each}/>)}
   
   </motion.ul>


    </div>
    
    </div>
    
    </div>
  )
}

export default Project