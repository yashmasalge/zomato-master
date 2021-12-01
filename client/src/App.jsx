
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Navigate }  from 'react-router-dom';

// HOC
import HomeLayoutHoc from "./HOC/Home.hoc"

// Pages
import HomePage from './pages/HomePage';


function App() {
  return (
   <>
    {/* <Navigate from="/" to = "/delivery" /> */}
     <HomeLayoutHoc component = {HomePage} path = "/:type" />
     
   </>
  );
}

export default App;
