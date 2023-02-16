// import logo from './logo.svg';
import './App.css';
import About from './component/About';
import Blog from './component/Blog';
import Navbar from './component/Navbar';
import Product from './component/Product';
import Testimonial from './component/Testimonial';
import Footer from './component/Footer';
import Header from './component/Header';
// import Hero from './component/Hero';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Product />
      <About  />
      <Testimonial />
      <Blog   />
      <Footer  />
      {/* <Hero /> */}
    </div>
  );
}

export default App;
