import React from 'react'
import imgGit from "../assets/github-yellow.png"
import imgLi from "../assets/linkedin.png"

function About() {
  return (
    <div>
    <article>
      <h1>Juan Palazzo</h1>
      <h3>Edad</h3>
      <p>29</p>
      <h3>Ciudad</h3>
      <p>Barcelona</p>
      <div>
        <a href="https://github.com/TanoPalazzo14"><img className='icon' src={imgGit} alt="GH" /></a>
        <a href="https://www.linkedin.com/in/juan-palazzo/"><img className='icon' src={imgLi} alt="LI" /></a>
      </div>
    </article>
    <article>
      <h1>Diego Lazaro</h1>
      <h3>Edad</h3>
      <p>32</p>
      <h3>Ciudad</h3>
      <p>Zaragoza</p>
      <div>
        <a href="https://github.com/diegoldc"><img className='icon' src={imgGit} alt="GH" /></a>
        <a href="https://www.linkedin.com/in/diego-lazaro-decastro"><img className='icon' src={imgLi} alt="LI" /></a>
      </div>

    </article>
    </div>
  )
}

export default About