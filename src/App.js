import './App.css';
import { useState, useEffect } from "react";

import Header from './components/Header/Header';
import SeriesDetails from './pages/Details/SeriesDetails';
import MovieDetails from './pages/Details/MovieDetails';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router';
import Footer from './components/Footer/Footer';
import AllMovies from './pages/Movies/AllMovies';
import ArabicMovies from './pages/Movies/ArabicMovies';
import AnimeMovies from './pages/Movies/AnimeMovies';
import AllSeries from './pages/Series/AllSeries';
import ArabicSeries from './pages/Series/ArabicSeries';
import AnimeSeries from './pages/Series/AnimeSeries';
import Search from './components/Search/Search';
import ScrollToTop from './components/ScrollToTop';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return (
      <div className="flex flex-col gap-10 justify-center items-center h-screen bg-color1">
        <img src="/favicon.ico" alt="" className="w-[100px] h-[100px]  border-t-transparent rounded-full animate-pulse" />
        <h1 className="md:text-5xl xs:text-4xl  font-serif font-semibold animate-pulse bg-gradient-to-r from-color4 via-color3 to-color2 bg-clip-text text-transparent ">WatchHub</h1>

      </div>
    );
  }
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Search' element={<Search />} />
        <Route path='/SeriesDetails/:id' element={<SeriesDetails />} />
        <Route path='/MovieDetails/:id' element={<MovieDetails />} />
        <Route path='/Movies' element={<AllMovies />} />
        <Route path='/Arabic Movies' element={<ArabicMovies />} />
        <Route path='/Anime Movies' element={<AnimeMovies />} />
        <Route path='/Series' element={<AllSeries />} />
        <Route path='/Arabic Series' element={<ArabicSeries />} />
        <Route path='/Anime Series' element={<AnimeSeries />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
