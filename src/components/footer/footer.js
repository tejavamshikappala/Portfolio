import './footer.css'
import { Link } from 'react-router-dom'
import {motion} from "framer-motion"

const Footer = () => {
     const variants={
    initial:{
     
      opacity:0,
    },
    animate:{
      
      opacity:1,
      transition:{
        duration:0.5,
        staggerChildren:0.2,
      }
    }
  }

  return (
    <div className='footer' >
    <motion.div className='footer-inside' variants={variants} initial="initial"  whileInView="animate">
    <motion.h1 variants={variants}>Teja Vamshi</motion.h1>
    <motion.ul className='ul-footer' variants={variants}>
   <Link to="/home"><li className='footer-list'>Home</li></Link>
  <Link to="/about">  <li className='footer-list'>About</li></Link>
  <Link to="/projects"> <li className='footer-list'>Projects</li></Link> 
  <Link to="/contact">  <li className='footer-list'>Contact</li></Link>
    </motion.ul>
    <motion.p variants={variants}><span>&copy;</span> 2023 Teja Vamshi. All rights reserved.</motion.p>
    </motion.div></div>
  )
}

export default Footer