import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <div>
      <div className="container" data-theme={theme}>
        <Header theme={theme} setTheme={setTheme} />
        <SearchBar />
      </div>
    </div>
  );
};

export default App;
