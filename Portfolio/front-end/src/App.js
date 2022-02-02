import About from "./Pages/About";
import Home from "./Pages/Home";
import Contacts from "./Pages/Contacts";
import Work from "./Pages/Work";
import Resume from "./Pages/Resume";
import SideMenu from "./Components/SideMenu";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SideMenu />
      <div>
        <Home />
        <About />
        <Resume />
        <Work />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
