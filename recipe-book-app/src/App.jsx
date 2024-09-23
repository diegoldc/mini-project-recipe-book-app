import "./App.css";
import Navbar from "./componentes/Navbar";
import Sidebar from "./componentes/Sidebar";
import Footer from "./componentes/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RecipeDetails from "./pages/RecipeDetails";
import About from "./pages/About";
import NotFoundPage from "./pages/NotFoundPage";
import recipes from "./data/recipes.json";
import List from "./componentes/List";
import { useState } from "react";
import Favoritos from "./pages/Favoritos";

function App() {
  const [todasLasRecetas, setTodasLasRecetas] = useState(recipes);
  const [recetasFavoritas, setRecetasFavoritas] = useState([]);

  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route
          path="/"
          element={
            <List
              listaDeRecetas={todasLasRecetas}
              setTodasLasRecetas={setTodasLasRecetas}
              recetasFavoritas={recetasFavoritas}
              setRecetasFavoritas={setRecetasFavoritas}

            />
          }
        />
        <Route
          path="/recipes/:recipeId"
          element={
            <RecipeDetails
              listaDeRecetas={todasLasRecetas} />}
        />
        <Route
          path="/favorites"
          element={
            <Favoritos
              recetasFavoritas={recetasFavoritas}
              setRecetasFavoritas={setRecetasFavoritas}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
