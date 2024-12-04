import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/HomePg/Home';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;
