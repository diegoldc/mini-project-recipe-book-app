function SearchBar({
  searchCalorias,
  setSearchCalorias,
  caloriasMayor,
  setCaloriasMayor,
  searchPorciones,
  setSearchPorciones,
  porcionesMayor,
  setPorcionesMayor,
  setSortCards,
  porNombre,
  setPorNombre
}) {
  const handleCaloriesMaourBtn = () => {
    caloriasMayor ? setCaloriasMayor(false) : setCaloriasMayor(true);
  };

  const handlePorcionesMaourBtn = () => {
    porcionesMayor ? setPorcionesMayor(false) : setPorcionesMayor(true);
  };
  return (
    <div className="searchBar">
      <div>
        <h2>Filtros de Búsqueda:</h2>
      </div>
      
      <div>
        <label htmlFor="calorias">Calorias: </label>
        <button onClick={handleCaloriesMaourBtn}>
          {caloriasMayor ? ">=" : "<"}
        </button>
        <input
          type="text"
          value={searchCalorias}
          onChange={() => setSearchCalorias(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="porciones">Porciones: </label>
        <button onClick={handlePorcionesMaourBtn}>
          {porcionesMayor ? ">=" : "<"}
        </button>
        <input
          type="text"
          value={searchPorciones}
          onChange={() => setSearchPorciones(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="filtro">Ordenar por: </label>
        <select name="filtro" id="filtro" onClick={() => setSortCards(event.target.value)} style={{backgroundColor:"rgb(255, 217, 0, 0.4)",borderRadius:"5px"}} >
          <option value="">Choose One</option>
          <option value="calories">Calorías</option>
          <option value="servings">Porciones</option>
        </select>
      </div>
      <div>
        <label htmlFor="nombre">Buscar por nombre: </label>
        <input type="text" name="nombre" id="nombre" value={porNombre} onChange={() => setPorNombre(event.target.value)} />
      </div>
    </div>
  );
}

export default SearchBar;
