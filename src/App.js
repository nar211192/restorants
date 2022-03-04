import AppRoutes from "./pages";
import "./assets/App.css";
import { BrowserRouter, Link } from "react-router-dom";
import RestorantsContext from "./context/RestorantsContext";
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [mapOption, setMapOption] = useState({ coords: null, title: '' });

  return (
    <RestorantsContext.Provider value={{ list, setList, mapOption, setMapOption }}>
      <BrowserRouter>
        <header>
          <Link to="/">Restorants</Link>
        </header>
        <main>
          <AppRoutes />
        </main>
      </BrowserRouter>
    </RestorantsContext.Provider>
  );
}

export default App;
