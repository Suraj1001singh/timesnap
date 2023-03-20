import { useState } from "react";
import Header from "./components/Header";
import MiniAbout from "./components/MiniAbout";
import SearchBar from "./components/SearchBar";
import "./App.css";
import Footer from "./components/Footer";
const App = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <div>
      <div className="container" data-theme={theme}>
        <Header theme={theme} setTheme={setTheme} />
        <MiniAbout />
        <SearchBar />
        <Footer />
      </div>
    </div>
  );
};

export default App;
