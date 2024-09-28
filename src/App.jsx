import { Routes, Route } from "react-router-dom";
import Header from "./paginas/Header";
import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import Pagina404 from "./paginas/Pagina404";
import Footer from "./paginas/Footer";
import "./App.css";
import "./assets/css/base/base.css";

function App() {
  // const Router = () => {
  //   const location = window.location.pathname;
  //   if (location === "/sobre") {
  //     return <Sobre />;
  //   } else {
  //     return <Home />;
  //   }
  // };
  // return <><Header />{Router()}<Footer /></>;

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
