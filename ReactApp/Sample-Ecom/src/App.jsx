import Navbar from "./components/navbar/Navbar";
import Categories from "./components/categories/Categories";
import Carousel from "./components/carousel/Carousel";
import Fashion from "./components/fashion/Fashion";
import Features from "./components/features/Features";
import Products from "./components/products/Products";
import Card from "./components/cards/Card";
import Footer from "./components/footer/Footer";



function App() {
  
  return (
    <div>
      <Navbar />
     
      <Categories />

      <Carousel />

      <Fashion />   

      <Features /> 

      <Products />  

      <Card /> 

      <Footer />

    </div>
  );
}

export default App;
