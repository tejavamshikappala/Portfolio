import { useState } from 'react'
import './about.css'

const About = () => {
  const [skill,setSkill]=useState(true)
  const [education,setEdu]=useState(false)

 
    const frontEnd= [{ id:1, technology:'JavaScript', image:"/javascript-img.webp", alt:"jsImg"},
    {id:2,technology:'React.js',image:"/logo192.png", alt:"reactImg"},

  {id:3,technology:'HTML5',image:"/html-5.png", alt:"htmlImg"},
  {id:4,technology:'CSS3',image:"/css-3.png", alt:"cssImg"},
  {id:5,technology:'BootStrap',image:"/Bootstrap_logo.svg.png", alt:"bootstrapImg"}]
  

const backend=[
    {
    id:6,
    technology:'Python',
    image:"/python-logo.png",
    alt:'pythonImg'
  },
  {
    id:7,
    technology:'NodeJs',
    image:"/nodejs.png",
    alt:'nodeImg'
  },

  {
    id:8,
    technology:'Express',
    image:"/downloadexpress.png",
    alt:"expressImg"
  }

  
  
  ]

 const Database=[{
    id:9,
    technology:'MongoDB',
    image:"/MongoDB-Emblem.jpg",
    alt:'mongoDBImg'
  },
  {
    id:10,
    technology:'SQLite',
    image:"/SQLite370.svg.png",
    alt:"sqlImg"
  },
  ]
  
  

  const skills=()=>{
    if (skill){
      setSkill(true)
      setEdu(false)
    }
    else{
      setSkill(prev=>!prev)
      setEdu(false)
    }

  }

  const Education=()=>{
 if (education){
setEdu(true)
       setSkill(false)
    }
    else{
      setEdu(previous=>!previous)
      setSkill(false)
     
      
    }
  }

  return (
    <div className='about'>
     <div className='about-inside'>
    <div>
   <h2 className='aboutMe'>
    About Me
    </h2>
    <p className='para-aboutme'>Driven and enthusiastic graduate with a solid foundation in programming and a strong desire to excel in the field of software development. Seeking a challenging developer position where I can utilize my technical skills, contribute to innovative projects, and continuously expand my knowledge. Committed to delivering high-quality code, collaborating effectively with cross-functional teams, and solving complex problems to create impactful software solutions.</p>
    </div>
    <hr />
    
    <div className='tabs-links'>
    
    <button className={skill?"tab-link-active":'tab-link'} onClick={skills} type="button">Skills</button>
    
    <button className={education?"education-link-active":'tab-link'} onClick={Education} type="button">Education</button>
    </div>
    {skill?<>
    <div className='skill-container'>
   <div>
    <h3 className='frontEnd-class'>Frontend Development :</h3>
    <ul className='ul-element'>
    
    {frontEnd.map((each)=><li key={each.id}><img src={each.image} className="logo" alt={each.alt} /><p>{each.technology}</p></li>)}
    </ul></div>
    <hr />
  
     <div>
     <h3 className='frontEnd-class'>Backend Development :</h3>

    <ul className='ul-element'>
    {backend.map((eachOne)=><li key={eachOne.id}><img src={eachOne.image} className="logo" alt={eachOne.alt} /><p>{eachOne.technology}</p></li>)}
    </ul></div> <hr />
    <div>
      <h3 className='frontEnd-class'>Database :</h3>

   <ul className='ul-element'>
    {Database.map((eachData)=><li key={eachData.id}><img src={eachData.image} className="logo" alt={eachData.alt} /><p>{eachData.technology}</p></li>)}
    </ul>
    </div> 
    
    </div>
    </>:""}

    {
      education?<>
       <div className='education-container'>
       <div><h3 className='qualification'> Certification in Full-stack 
Development {`(MERN stack)`}</h3>
<p className='college'>&gt;&gt;  Nxtwave Disruptive Technologies</p>

</div>
<hr />
<div>
<h3 className='qualification'> Bachelor's Degree {`(BSc)`}</h3>
<p className='college'>&gt;&gt;  Sri Venkateshwara College of Arts 
and Science</p>
<p className="college">&gt;&gt;  cgpa:6.92</p>
</div>


       </div>

      </>:""
    }
    

</div>
    </div>
  )
}

export default About