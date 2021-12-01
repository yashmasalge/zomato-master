
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// HOC
import HomeLayoutHoc from "./HOC/Home.hoc"

// Pages
import HomePage from './pages/HomePage';


function App() {
  return (
   <>
     <HomeLayoutHoc
       exact component = {HomePage}
       path = "/"
     />
     <HomeLayoutHoc component = {HomePage} path = "/:type" />
     
   </>
  );
}

export default App;
