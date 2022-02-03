import About from "./Pages/About";
import Home from "./Pages/Home";
import Contacts from "./Pages/Contacts";
import Work from "./Pages/Work";
import SideMenu from "./Components/SideMenu";
import ScrollBar from "./Components/ScrollBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SideMenu />
      <ScrollBar />

      <div>
        <Home />
        <About />
        <Work />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
