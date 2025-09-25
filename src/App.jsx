import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Stem from "./pages/Stem";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <div className="h-screen w-full">
        <Navbar />
        <Hero />
      </div>
      <Stem />
      <Footer />
    </div>
  );
};

export default App;
