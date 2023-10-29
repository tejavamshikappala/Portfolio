import { useState } from "react"
import {motion} from "framer-motion"
import {v4 as uuidv4} from "uuid"
import { Link } from "react-router-dom"
import "./header.css"
const Header = () => {
  
 
  const [open,setValue]=useState(false)
  


  const onClicking=()=>{
   
    setValue(prev=>!prev)
     
  }

 
  

  const links=[{id:uuidv4(),
  section:"Home"
  },
  {
    id:uuidv4(),
    section:"About"
  },{
    id:uuidv4(),
    section:"Projects"
  },{
    id:uuidv4(),
    section:"Contact"
  }]

  const allLarge={id:uuidv4(),
  section:"All"}
  const allSmall={
    id:uuidv4(),
    section:"All"
  }

  const linksSmall=[{id:uuidv4(),
  section:"Home"
  },
  {
    id:uuidv4(),
    section:"About"
  },{
    id:uuidv4(),
    section:"Projects"
  },{
    id:uuidv4(),
    section:"Contact"
  }]


  return (

    <>
  <div className="header">
    <div className="navbar"> 
    <motion.h3 initial={{opacity:0,scale:0.5}}animate={{opacity:1,scale:1}} transition={{duration:0.5}} className="portfolio">Portfolio</motion.h3>
      <div className="links">{/*here*/}
      <Link to="/"  className="text-decoration"><motion.h3 key={allLarge.id}
  className="large-devices-links"  initial={{opacity:0,scale:0.5}}
    animate={{opacity:1,scale:1}} transition={{duration:0.5}}>{allLarge.section}</motion.h3></Link>
        {links.map((each)=>(
        <Link to={`/${each.section.toLowerCase()}`} className="text-decoration" key={each.id} ><motion.h3 
  className="large-devices-links"  initial={{opacity:0,scale:0.5}}
    animate={{opacity:1,scale:1}} transition={{duration:0.5}}>{each.section}</motion.h3></Link>
    
))}

</div>

<div className='button-container'>
    <button className="navbar-button" onClick={onClicking} type='button'>
    
    <motion.img src={open?"/x.png":"/list.png"} alt={open?"close":"menu"} className={open?"close-icon":"menu-icon"} initial={{opacity:0,scale:0.5}}
    animate={{opacity:1,scale:1}} transition={{duration:0.5}}/></button>
    </div>
    </div>
    

</div>

{open?(<div className="background-nav"> {/*herer*/}
  <Link to="/" className="text-decoration"><motion.h3 className="small-devices-links" key={allSmall.id}
  onClick={onClicking}
    initial={{opacity:0,scale:0.5}}
    animate={{opacity:1,scale:1}} transition={{duration:0.5}}>{allSmall.section}</motion.h3></Link>

    {linksSmall.map((eachOne)=>(<Link to={`/${eachOne.section.toLowerCase()}`} className="text-decoration"  key={eachOne.id} ><motion.h3 className="small-devices-links"
  onClick={onClicking}
    initial={{opacity:0,scale:0.5}}
    animate={{opacity:1,scale:1}} transition={{duration:0.5}}>{eachOne.section}</motion.h3></Link>))}
    </div>):""}
  </>

  )
}

export default Header