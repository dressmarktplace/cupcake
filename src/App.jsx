import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Products from "./Pages/Products.jsx";
import Contact from "./Pages/Contact.jsx";

const App = () => {
return (
<>

<nav className="flex gap-4 p-4 border-b">
<Link to="/" className="hover:underline">Home</Link>
<Link to="/Products" className="hover:underline">Produtos</Link>
<Link to="/Contact" className="hover:underline">Contato</Link>
</nav>

<Routes>
<Route path="/" element={<Home/>} />
<Route path="/products" element={<Products/>} />
<Route path="/contact" element={<Contact/>} />
</Routes>
</>
);
}

export default App