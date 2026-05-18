import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import NotFound from "./routes/Home/NotFound";
import Welcome from "./routes/Home/Welcome";
import About from "./routes/Home/About";
import Products from "./routes/Home/Products";
import Computer from "./routes/Home/Products/Computer";
import Eletronic from "./routes/Home/Products/Eletronic";
import Book from "./routes/Home/Products/Book";

function App() {
  
  return(
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
              <Route index element={<Navigate to="/home" /> } />
              <Route path="home" element={<Welcome />} />
              <Route path="products/" element={<Products />} >
                  <Route index element={<Navigate to="/products/computers" /> } />
                  <Route path="computers" element={<Computer />} />
                  <Route path="electronics" element={<Eletronic />} />
                  <Route path="books" element={<Book />} />
              </Route>
              <Route path="about" element={<About />} />
              <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
     </BrowserRouter>
  );
}

export default App
