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

function App() {
  return (
    <>
       <Routes>
      <Route path="/" element={<Navigate replace to="/delivery" />} />
    </Routes>
      <HomeLayoutHoc component={HomePage} path="/:type" />
      <RestaurantLayoutHoc component={RestaurantPage} path = '/restaurant/:id' />
    </>
  );
}

export default App;
