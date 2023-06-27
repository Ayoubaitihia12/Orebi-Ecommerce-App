import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Journals from "./pages/Journals";
import ProductDetails from "./pages/ProductDetails";
import { Provider } from "react-redux";
import store from "./redux/store";
import Cart from "./pages/Cart";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import {getTotals} from './redux/cartSlice'
import Layout from "./components/Layout";
import Footer from "./components/Footer";


function App() {

  // const dispatch = useDispatch();
  // dispatch(getTotals());
  store.dispatch(getTotals());

  return (
    <div className="App relative">
      <Provider store={store}>
        <Router>
          <ToastContainer/>
          <Layout/>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Hero/>} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/journal" element={<Journals/>} />
            <Route path="/product/:id" element={<ProductDetails/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </Router>
        <Footer/>
      </Provider>
    </div>
  );
}

export default App;
