import About from "./Pages/About";
import Home from "./Pages/Home";
import Contacts from "./Pages/Contacts";
import Work from "./Pages/Work";
import Resume from "./Pages/Resume";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Resume />
      <Work />
      <Contacts />
    </div>
  );
}

export default App;
