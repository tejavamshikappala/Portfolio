import './contact.css'
import {motion} from "framer-motion"
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Contact = () => {
  const ref=useRef()

 

   const formRef = useRef();

   const sendEmail = (e) => {
    e.preventDefault();
    
 emailjs.sendForm("service_vz5d8i3", "template_838ouna", formRef.current, "fETz0oJlblVOlwJ_D")
  
   .then((result) => {
        
         // toast("Wow so easy!")
         document.getElementById("textElement").value=""
    document.getElementById("emailElement").value=""
    document.getElementById("messageElement").value=""
          toast.success("Sent Successfully👍", {
        position: toast.POSITION.TOP_CENTER,
       className:'toast-class',
    
      });
         
      }, (error) => {
          document.getElementById("textElement").value=""
    document.getElementById("emailElement").value=""
    document.getElementById("messageElement").value=""
           toast.error("Something went wrong😔", {
        
      
         className:'toast-class',
      });
    
      });
  };

 
  const variants={
    initial:{
      y:400,
      opacity:0,
    },
    animate:{
      y:0,
      opacity:1,
      transition:{
        duration:0.5,
        staggerChildren:0.2,
      }
    }
  }

  


  return (
    <div className='contact' >
    <div className='contact-inside'>
    <h2  className='contact-header'>
    Contact Me
    </h2>
    <motion.div className="contact-container" variants={variants} initial="initial"  whileInView="animate" ref={ref}>
    
    <motion.div className="formContainer"> 
<motion.form initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}}  className='formClass' onSubmit={sendEmail} ref={formRef}>
    <input type="text" required placeholder='Your Name' name="name" id="textElement" className='inputClass'/>
    <input type="email" required placeholder="Your Email" name="email" id="emailElement" className='inputClass'/>
    <textarea name="message" rows={8} placeholder='Message' id="messageElement" className='inputClass'/>
   
    <button type="submit" >Submit</button>
  <ToastContainer autoClose={2000} draggablePercent={60} />
  
    </motion.form>

    </motion.div>
    
    <motion.div variants={variants} className='text-container'> 
    
    <motion.h1  variants={variants} >Let's work together</motion.h1>
    <motion.div    className="item"  variants={variants}>
   <div className='info'> <img className="icons" src="gmail.png" alt="mail" /><h3>Mail</h3></div>
    <a href="mailto:tejavamshikappala@gmail.com">tejavamshikappala@gmail.com</a>
   



    </motion.div>

  <motion.div className="item"  variants={variants}   >
  <div className='info'><img className="icons" src="location (1).png" alt="address" />
    <h3>Address</h3>
    </div>
    <span>Hyderabad</span>
    </motion.div>
    <motion.div className="item"  variants={variants}   >
    <div className='info'><img className="icons" src="/call (1).png" alt="phone" />
    <h3>Phone</h3></div>
    <a href="tel:9391276321" className='a-class'>+91 9391276321</a>
   



    </motion.div>
    </motion.div>

    </motion.div>

    
    </div>
</div>
  )
}

export default Contact