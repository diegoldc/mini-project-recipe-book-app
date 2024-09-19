import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <aside className="sideBar">
      <Link to="/">Home</Link>
      
      <Link to="/about">About Us</Link>
    </aside>
  )
}

export default Sidebar