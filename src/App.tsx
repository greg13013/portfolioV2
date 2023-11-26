import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Competences } from "./Components/Competences";
import Description from "./Components/Description";
import Experience from "./Components/Experience";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { NavBar } from "./Components/NavBar";
import { Projets } from "./Components/Projets";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Description />
      <Experience />
      <Competences />
      <Projets />
      <Footer />
    </div>
  );
};

export default App;
