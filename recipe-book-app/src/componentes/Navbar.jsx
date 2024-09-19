import imgLogo from "../assets/logo.png"


function Navbar() {
  return (
    <nav className="NavBar">
      <img className="navBarImg" src={imgLogo} alt="appLogo" />
      <h1 className="ibm-plex-mono-bold-italic">Hecho en Casa</h1>
    </nav>
  )
}
//style pegado arriba y flex
export default Navbar