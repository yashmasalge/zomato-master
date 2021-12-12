import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes,Navigate,Route } from "react-router-dom";

// HOC
import HomeLayoutHoc from "./HOC/Home.hoc";

// Pages
import HomePage from "./pages/HomePage";
import RestaurantLayoutHoc from "./HOC/Restaurant.hoc";
import RestaurantPage from "./pages/RestaurantPage";
import Overview from "./components/Restaurant/Overview";
import OrderOnline from "./components/Restaurant/OrderOnline";
import Reviews from "./components/Restaurant/Reviews/Reviews";
import Menu from "./components/Restaurant/Menu/Menu";
import Photos from "./components/Restaurant/Photos/Photos";

function App() {
  return (
    <>
       <Routes>
      <Route path="/" element={<Navigate replace to="/delivery" />} />
    </Routes>
      <HomeLayoutHoc component={HomePage} path="/:type" />
      <RestaurantLayoutHoc component={RestaurantPage} path = '/restaurant/:id' />
      <RestaurantLayoutHoc component={Overview} path = '/restaurant/:id/overview' />
      <RestaurantLayoutHoc component={OrderOnline} path = '/restaurant/:id/order-online' />
      <RestaurantLayoutHoc component={Reviews} path = '/restaurant/:id/reviews' />
      <RestaurantLayoutHoc component={Menu} path = '/restaurant/:id/menu' />
      <RestaurantLayoutHoc component={Photos} path = '/restaurant/:id/photos' />
    </>
  );
}

export default App;
