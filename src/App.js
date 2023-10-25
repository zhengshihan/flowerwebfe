import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import LoveFlower from "./components/LoveFlower";
import BirthdayFlower from "./components/BirthdayFlower";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MenuBar from "./components/MenuBar";
import WeddingFlower from "./components/WeddingFlower";
import FriendFlower from "./components/FriendFlower";
import FlowerDetails from "./components/FlowerDetails";
import PayComponent from "./components/PayComponent";
import PersonalCenter from "./components/PersonalCenter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />

      <MenuBar />

      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/personalcenter" element={<PersonalCenter />} />
          <Route path="/pay/:id" element={<PayComponent />} />
          <Route path="/loveflower" element={<LoveFlower />} />
          <Route path="/birthdayflower" element={<BirthdayFlower />} />
          <Route path="/weddingflower" element={<WeddingFlower />} />
          <Route path="/friendflower" element={<FriendFlower />} />
          <Route path="/loveflower/:id" element={<FlowerDetails />} />
          <Route path="/birthdayflower/:id" element={<FlowerDetails />} />
          <Route path="/weddingflower/:id" element={<FlowerDetails />} />
          <Route path="/friendflower/:id" element={<FlowerDetails />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
