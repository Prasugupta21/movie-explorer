import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';

import Movie from './components/Movie';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import MovieList from './components/MovieList';
function App() {
  return (
    <div className="App">
       <Navbar/>
    <Routes>
      <Route path="/" element={<MovieList/>}/>
      <Route path="/movie/:id" element={<Movie/>}/>
      <Route path="/not-found" element={<NotFound/>}/>

      </Routes>
   
    </div>
  );
}

export default App;
