import { useEffect, useState } from "react";
import Contact from "./components/Contact";
import MenuBar from "./components/MenuBar";
import MenuBodyCards from "./components/MenuBodyCards";
import NavBar from "./components/NavBar";
import data from "./data";

function App() {
  const [products, setProducts] = useState();
  useEffect(() => {
    setProducts(data.products);
  }, []);
  return (
    <div className="app">
      <NavBar />
      <MenuBar />
      <MenuBodyCards products={products} />
      <Contact />
    </div>
  );
}

export default App;
