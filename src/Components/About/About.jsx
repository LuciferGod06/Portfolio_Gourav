import React from 'react'
import image4 from '../Home/image4.jpg'
import '../About/about.css'

export const About = () => {
  return (
    <div id='about' style={{ padding: "50px 10% 0 10%" }}>
      <h1 style={{ textAlign: "left",marginBottom:"0px"}} >About Me</h1>
      <p style={{textAlign:"left",marginTop:"0px",paddingBottom:"10px" }} >My Introduction</p>
      <div className='about_Top' >
        <div >
          <img src={image4} alt="photo" />
        </div>

        <div >
          <h1 >Gourav Prasad</h1>
          <p>MERN Stack Developer</p>
          <p> I am Dedicated Full Stack Developer from Gandhidham, Gujarat .Passionate about crafting innovative web solutions. I thrive in building scalable and intuitive applications. My tech stack includes HTML, CSS, JavaScript, ReactJS, Node.js, and various databases. Let's collaborate and create exceptional user experiences together!</p>
          <a href='https://drive.google.com/file/d/1S5dX1O2SYdDBfpXgtOooaGxMmq5q4pWb/view?usp=sharing'>
          <button >Download Resume</button>
        </a>
        </div>
      </div>



    </div>
  )
}
