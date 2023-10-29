import "./projectDetails.css"
import { useState } from "react";

import Modal from 'react-modal';
import {motion} from 'framer-motion'

const customStyles = {
  content: {
    backgroundColor:"#19212C",
    top: '52%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    overflowY: "auto",
 border:"none",
 borderRadius:"10px",
 
 boxShadow:"0px 0px 7px 2px rgba(0, 0, 0, 0.6)",
    transform: 'translate(-50%, -50%)',
  },
};
const ProjectDetails = ({details}) => {
    const {title,projectImg,skills,description,alt,projectLink,credentials}=details;
   
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  /*function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
     onAfterOpen={afterOpenModal}
      let subtitle;
      <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
  }*/

  function closeModal() {
    setIsOpen(false);
  }
    //console.log(title)
  return (
    <>
    <motion.li className="list-container" onClick={openModal} initial={{opacity:0,scale:0.4}} whileInView={{opacity:1,scale:1}} transition={{duration:0.2, staggerChildren:0.2,}}>
    
    <div className="inside-div-container">
  <img src={projectImg} alt={alt} className="project-Img"/>
    <div>
   <ul className="card-skills-container">
   {skills.map((each,index)=><li className="skills-list" key={index}>{each}</li>)}</ul>
 
   <h2 className="project-title">{title}</h2>
   <p className="project-description">{description}</p>
   
   </div>

    </div>
    
    </motion.li>

    <Modal
        isOpen={modalIsOpen}
       
        onRequestClose={closeModal}
        style={customStyles}
          overlayClassName="Overlay"
        contentLabel="Example Modal"
      >
      
       
        <div className="modal-div-container">
         <button onClick={closeModal} className="close-button"><img src="/delete.png" alt="deleteImg" className="close-Image"/></button>
        <img src={projectImg} alt={alt} className="modal-project-Img"/>
        <div>
        <h3 className="modal-title">{title}</h3>
        <ul className="card-modal-skills-container ">
   {skills.map((each,index)=><li className="skills-modal-list" key={index}>{each}</li>)}</ul>
   <p className="project-modal-description">{`-- ${description}`}</p>


  <div className="credentials">  <button className="modal-button-link"><a href={projectLink} target="__blank">View Live Application</a></button>
    {credentials.length>0 && <div >
    <span>Username : {credentials[0]} </span>
    <span>Password : {credentials[1]}</span>
    </div>}</div>

         
        </div>

        </div>
        
      </Modal>
    </>
  )
}

export default ProjectDetails