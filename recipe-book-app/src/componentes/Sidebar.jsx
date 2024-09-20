import { Link } from "react-router-dom"
import imgHome from "../assets/home.png"
import imgAbout from "../assets/about.png"

function Sidebar() {
  return (
    <aside className="sideBar">
      <Link to="/"><img src={imgHome} alt="img-home" /></Link>
      
      <Link to="/about"><img src={imgAbout} alt="img-about" /></Link>
    </aside>
  )
}

export default Sidebar