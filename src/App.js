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
      <body>
        <div className="background">
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

// Sophisticated and Professional:

// Primary Color: #292f36 (Charcoal)
// Accent Color: #008080 (Teal)
// Highlight Color: #6b8e23 (Olive)
// Background Color: #EEEEEE (Light Gray)
// Subtle Contrast: #cccccc (Gray)
