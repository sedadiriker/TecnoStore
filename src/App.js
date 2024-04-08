import { BrowserRouter,Route,Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import AddTecnoProduct from "./pages/AddTecnoProduct/AddTecnoProduct";
import Contact from "./pages/Contact/Contact";
import TecnoProductList from "./pages/TecnoProductList/TecnoProductList";
import Menu from "./components/Menu/Menu";
import { useState } from "react";
import axios from "axios";
function App() {

  const [products, setProducts] = useState([])
// console.log(products)
  const getProducts = async () => {
    const URL = "https://66140aa62fc47b4cf27b7326.mockapi.io/Tecno-products"

    try{

      const res = await axios(URL)
      const {data} = res
      // console.log(data)
      setProducts(data)
    }catch(err) {
      console.log(err)
    }
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Menu/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/addTecnoProduct" element={<AddTecnoProduct getProducts={getProducts}/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/tecnoProductList" element={<TecnoProductList products={products} getProducts={getProducts}/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
