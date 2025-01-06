import './App.css';
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

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
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
