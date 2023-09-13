import "./App.css";
import Companies from "./components/Companies/Companies";
import Explore from "./components/Explore/Explore";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import JoinUs from "./components/JoinUs/JoinUs";
import Navbar from "./components/Navbar/Navbar";
import Promotion from "./components/Promotion/Promotion";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <Hero />
      </header>
      <Companies />
      <main>
        <Promotion />
        <Explore />
      </main>
      <footer>
        <JoinUs />
        <Footer />
      </footer>
    </div>
  );
}

export default App;
