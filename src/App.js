import "./styles/App.css";
import "./styles/ScrollBar.css";
import "./styles/Background.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolioheader from "./components/Portfolioheader";
import Works from "./components/Works";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <body className="content">
        <div className="background-image">
          <Navbar />
          <Portfolioheader />
          <About />
          <Works />
          <Contact />
        </div>
      </body>
    </div>
  );
}

export default App;
