import List from "../componentes/List"
  function HomePage({props}) {
  return (
    <div>
      <List 
      todasLasRecetas={props.listaDeRecetas}
      // eliminarTarjeta={props.eliminarTarjeta}
      />
    </div>
  )
}

export default HomePage