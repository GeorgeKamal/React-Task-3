import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  HashRouter,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Section/Navbar";
import Furino from "./components/Pages/Main/Furino";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import ProductProvider from "./store/ProductProvider";

function App() {
  
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route index element={<Furino />} />
        <Route
          path="/dashboard"
          element={
            <ProductProvider>
              <Dashboard />
            </ProductProvider>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
