import './App.css';
import Header from './components/Header/Header';
import SeriesDetails from './pages/Details/SeriesDetails';
import MovieDetails from './pages/Details/MovieDetails';
import Home from './pages/Home/Home';

import { Route, Routes } from 'react-router';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/SeriesDetails/:id' element={<SeriesDetails />} />
        <Route path='/MovieDetails/:id' element={<MovieDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
