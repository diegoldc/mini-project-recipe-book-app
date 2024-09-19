import "./App.css";
import Navbar from "./componentes/Navbar";
import Sidebar from "./componentes/Sidebar";
import Footer from "./componentes/Footer";
import { Route , Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RecipeDetails from "./pages/RecipeDetails";
import About from "./pages/About";
import NotFoundPage from "./pages/NotFoundPage"

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>

        <Route path="/" element={ <HomePage /> } />
        <Route path="/recipes/:recipeId" element={ <RecipeDetails />} />
        <Route path="/about" element={ <About />} />
        <Route path="*" element={ <NotFoundPage /> } />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
