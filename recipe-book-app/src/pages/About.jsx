import {useEffect} from 'react'
import imgGit from "../assets/github-yellow.png"
import imgLi from "../assets/linkedin.png"
import imgDiego from "../assets/diego.png"
import imgJuan from "../assets/juan.jpg"

function About() {

  useEffect(() => {
    const titulo = document.querySelector("#tituloPestaña")
    titulo.innerText = "About - Hecho en Casa"
  },[])

  return (
    <div style={{display:"flex",justifyContent:"space-around", gap:"20px"}}>
    <article className='aboutCard'>
      <img className='profilePic' src={imgJuan} alt="foto de perfil" />
      <div>

      <h1>Juan Palazzo</h1>
      <h3>Edad</h3>
      <p>29</p>
      <h3>Ciudad</h3>
      <p>Barcelona</p>
      <div>
        <a href="https://github.com/TanoPalazzo14"><img className='icon' src={imgGit} alt="GH" /></a>
        <a href="https://www.linkedin.com/in/juan-palazzo/"><img className='icon' src={imgLi} alt="LI" /></a>
      </div>
      </div>
    </article>
    <article className='aboutCard'>
      <img className='profilePic' src={imgDiego} alt="foto de perfil" />
      <div>

      <h1>Diego Lazaro</h1>
      <h3>Edad</h3>
      <p>32</p>
      <h3>Ciudad</h3>
      <p>Zaragoza</p>
      <div>
        <a href="https://github.com/diegoldc"><img className='icon' src={imgGit} alt="GH" /></a>
        <a href="https://www.linkedin.com/in/diego-lazaro-decastro"><img className='icon' src={imgLi} alt="LI" /></a>
      </div>
      </div>

    </article>
    </div>
  )
}

export default About