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
        <label htmlFor="filtro">Filtrar por: </label>
        <select name="filtro" id="filtro" onClick={() => setSortCards(event.target.value)}>
          <option value="">Choose One</option>
          <option value="calories">calorias</option>
          <option value="servings">Porciones</option>
        </select>
      </div>
    </div>
  );
}

export default SearchBar;
