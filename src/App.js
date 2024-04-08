import { BrowserRouter,Route,Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import AddTecnoProduct from "./pages/AddTecnoProduct/AddTecnoProduct";
import Contact from "./pages/Contact/Contact";
import TecnoProductList from "./pages/TecnoProductList/TecnoProductList";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/addTecnoProduct" element={<AddTecnoProduct/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/tecnoProductList" element={<TecnoProductList/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
