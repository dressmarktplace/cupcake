import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/Home"
import { ProductsPage } from "./pages/Products"
import { ContactPage } from "./pages/Contact"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produtos" element={<ProductsPage />} />
        <Route path="/contato" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App