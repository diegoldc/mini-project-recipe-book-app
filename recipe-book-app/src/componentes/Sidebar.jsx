import { Link } from "react-router-dom"
import imgHome from "../assets/home.png"
import imgAbout from "../assets/about.png"
import imgFav from "../assets/favs4.png"

function Sidebar() {
  return (
    <aside className="sideBar">
      <Link to="/"><img src={imgHome} alt="img-home" /></Link>
      
      <Link to="/about"><img src={imgAbout} alt="img-about" /></Link>

      <Link to="/favorites"><img style={{marginTop:"4px"}} src={imgFav} alt="img-fav" /></Link>
    </aside>
  )
}

export default Sidebar