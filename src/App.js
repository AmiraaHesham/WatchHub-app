import './App.css';
import Header from './components/Header/Header';
import DetailsSeries from './pages/Details/DetailsSeries';
import Home from './pages/Home/Home';

import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/DetailsSeries' element={<DetailsSeries />} />
      </Routes>

    </div>
  );
}

export default App;
