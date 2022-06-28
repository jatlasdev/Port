import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Projects />
    </div>
  );
}

export default App;
