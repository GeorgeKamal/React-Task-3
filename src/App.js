import { Suspense, lazy } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";

import ProductProvider from "./store/ProductProvider";
import Navbar from "./components/Section/Navbar";
import Loader from "./components/UI/Loader";

import "./App.css";

const Furino = lazy(() => import("./components/Pages/Main/Furino"));
const Dashboard = lazy(() => import("./components/Pages/Dashboard/Dashboard"));

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <ProductProvider>
          <Routes>
            <Route index element={<Furino />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </ProductProvider>
      </Suspense>
    </HashRouter>
  );
}

export default App;
