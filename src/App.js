import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import DetailProduct from "./components/DetailProduct";
import EditProduct from "./components/EditProduct";
import ShowProduct from "./components/ShowProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<ShowProduct />} />
            <Route path="add" element={<AddProduct />} />
            <Route path="edit/:id" element={<EditProduct />} />
            <Route path="detail/:id" element={<DetailProduct />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
