import React, { useEffect } from 'react';
import NavBar from './NavBar/NavBar';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import AdminLogin from './admin/AdminLogin';
import AdminPanel from './admin/AdminPanel';
import MovieDetails from './Pages/MovieDetails';
import Voucher from './Pages/Voucher';
import VisitingCard from './VistingCard/VistingCard';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movies from './Pages/Movies';
import Gallery from './Pages/Gallery';
import Aos from 'aos';
import SplashScreen from './components/SplashScreen/SplashScreen';
import BusinessModel from './Pages/BusinessModel';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {updateStats} from './services/api'
const App = () => {
  const [loading, setLoading] = React.useState(true);
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    Aos.init({ duration: 2000 });
    updateStats()
  }, []);
  return (
    <div>
      {loading ? (
        <SplashScreen />
      ) : (
        <>
          <Router>
            <NavBar />
            <ToastContainer />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/movies" element={<Movies />} />
              {isLoggedIn === 'true' ? (
                <Route path="/adminpanel" element={<AdminPanel />} />
              ) : (
                <Route path="/adminpanel" element={<AdminLogin />} />
              )}
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
              <Route path="/voucher" element={<Voucher />} />
              <Route path="/businessmodel" element={<BusinessModel />} />
              <Route path="/vcard" element={<VisitingCard />} />
              <Route
                path="*"
                element={
                  <h1 className="text-white text-6xl flex h-screen items-center align-middle justify-center">
                    404 Page Not Found
                  </h1>
                }
              />
            </Routes>
          </Router>
          <a
            href="https://api.whatsapp.com/send?phone=8126000108"
            className="float"
            target="_blank"
          >
            <i className="fa fa-whatsapp my-float"></i>
          </a>
        </>
      )}
    </div>
  );
};

export default App;
