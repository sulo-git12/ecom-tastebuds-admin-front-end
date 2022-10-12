import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Item from "./pages/Item";
import { S3ImageUpload } from "./pages/S3ImageUpload";
import Outlet from "./pages/Outlet";
import Profile from "./pages/Profile";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Admin/Home" element={<Home />} />
          <Route path="/Admin/Item" element={<Item />} />
          <Route path="/Admin/Outlet" element={<Outlet />} />
          <Route path="/Admin/Upload" element={<S3ImageUpload />} />
          <Route path="/Admin/Profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
