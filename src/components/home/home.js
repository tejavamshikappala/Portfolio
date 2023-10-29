
import './home.css'
import { motion } from "framer-motion";
import {useTypewriter} from "react-simple-typewriter"


const textVariants={
  initial:{
    x:-500,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1

    },
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity
    }
  }
}

const Home = () => {
  const [typeEffect]=useTypewriter({
    words:["Frontend Developer","Backend Developer","Full Stack Developer"],
   
    loop:{},
    typeSpeed:100,
    deleteSpeed:40,
    
  })
  
 
  return (
    <>
  <div className="home">
<div className="home-inside">
  <div className='smallImageContainer'>
    <motion.img src="/Portfolio/Picture2.png" alt="personImg" className='large-person' initial={{opacity:0 }}
  animate={{ rotateZ: 360, opacity:1}}
  
  transition={{
    
    type: "spring",
    stiffness: 260,
    damping: 20,
   
   
  }}/>
    </div>
     
    <div className="wrapper">
   
    <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
    
    <motion.h2 className='username' variants={textVariants}>Hi, I am <br />Teja Vamshi</motion.h2>
    <h1 className="main-heading" >I am a</h1>
 <h2 className='span-class-text'>
    {typeEffect}</h2> 

 
    

    </motion.div>

    <div className="imageContainer" >
    <motion.img src="/Portfolio/Picture2.png" alt="personImg" className='large-person' initial={{ scale: 0 }}
  animate={{ rotateZ: 360, scale: 1 }}
  
  transition={{
    delay:1,
    type: "spring",
    stiffness: 260,
    damping: 20,
   
  }}/>
    </div>
    </div>
 </div>
    
    
    </div>
  
    </>
    
   

  )
}

export default Home
