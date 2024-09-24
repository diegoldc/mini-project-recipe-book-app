import {useEffect} from "react";

function NotFoundPage() {

  useEffect(() => {
    const titulo = document.querySelector("#tituloPestaña")
    titulo.innerText = "404 - page not found"
  },[])

  return (
    <div>
      <h1>Error 404 Page not Found</h1>
    </div>
  )
}

export default NotFoundPage