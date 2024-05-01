import React from 'react';
import "./about.css";
import profilepic from '../../assets/profilepic.jpeg'
import Info from './Info'

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">About Me</h2>
      <span className="section_subtitle">My introduction</span>

      <div className="about_container container grid">
        <img src={profilepic} alt="" className='about_img'/>
        <div className='about_data'>
          <Info />
          
          <p className='about_description'>
          I'm Brittany, a passionate software engineer fresh out of a rigorous web development bootcamp. With a knack for creating digital solutions and a love for problem-solving, I thrive on transforming ideas into functional, user-friendly applications.
          </p>
          
          <p> add link for resume to be downloaded</p>
          
        </div>
      </div>
    </section>
  )
}

export default About
