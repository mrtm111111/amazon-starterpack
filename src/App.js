import "./App.css";
import Footer from "./components/Footer/Footer";
import Hiro from "./components/Hero/Hiro";
import Products from "./components/Products/Products";
import Slider from "./components/Slider/Slider";
import Testimonials from "./components/Testimonials/Testimonials";
import Virtual from "./components/Virtual/Virtual";
import Header from "./components/header/Header";


function App() {
  return (
    <div className="App">
      <Header/>
      <Hiro/>
      <Slider/>
      <Virtual/>
      <Products/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
