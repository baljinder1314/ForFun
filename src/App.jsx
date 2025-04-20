import "./App.css";
import BgImage from "./components/bgImage/BgImage";
import CityImage from "./components/bgImage/CityImage";
import Content from "./components/cityCard/Content";
import ContectUs from "./components/contect/ContectUs";
import Footer from "./components/footer/Footer";
import Main from "./components/mainContent/Main";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <BgImage />
      <Main />
      <Content />
      <ContectUs />
      <CityImage />
      <Footer />
    </>
  );
}

export default App;
