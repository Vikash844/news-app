import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Header from "./layouts/Header";


function App() {
  return (
    <>
      <Header />
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories/:slug" element={<Categories />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
