import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes,Navigate,Route } from "react-router-dom";

// HOC
import HomeLayoutHoc from "./HOC/Home.hoc";
import CheckoutLayoutHoc from './HOC/Checkout.hoc';
import RestaurantLayoutHoc from "./HOC/Restaurant.hoc";

// Pages
import HomePage from "./pages/HomePage";
import RestaurantPage from "./pages/RestaurantPage";
import Checkout from "./pages/CheckoutPage";

// Components
import Overview from "./components/Restaurant/Overview";
import OrderOnline from "./components/Restaurant/OrderOnline";
import Reviews from "./components/Restaurant/Reviews/Reviews";
import Menu from "./components/Restaurant/Menu/Menu";
import Photos from "./components/Restaurant/Photos/Photos";
import Redirect from "./pages/Restaurant/Redirect";

function App() {
  return (
    <>
       <Routes>
      <Route path="/" element={<Navigate replace to="/delivery" />} />
      <Route path="/restaurant/:id" element={<Navigate replace to="/restaurant/:id/overview" />} />
    </Routes>
      <HomeLayoutHoc component={HomePage} path="/:type" />
      <RestaurantLayoutHoc component={Redirect} path = '/restaurant/:id' />
      <RestaurantLayoutHoc component={Overview} path = '/restaurant/:id/overview' />
      <RestaurantLayoutHoc component={OrderOnline} path = '/restaurant/:id/order-online' />
      <RestaurantLayoutHoc component={Reviews} path = '/restaurant/:id/reviews' />
      <RestaurantLayoutHoc component={Menu} path = '/restaurant/:id/menu' />
      <RestaurantLayoutHoc component={Photos} path = '/restaurant/:id/photos' />
      <CheckoutLayoutHoc component={Checkout} path='/checkout/orders'/>
    </>
  );
}

export default App;
