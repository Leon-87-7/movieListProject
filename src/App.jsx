import { useState } from 'react';
import '../src/css/App.css';
import Home from '../pages/home';
import { Routes, Route } from 'react-router-dom';
import Favorites from '../pages/favorites';
import NavBar from '../components/navBar';
import { MovieProvider } from './context/movieContext';

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/Favorites"
            element={<Favorites />}
          />
        </Routes>
      </main>
    </MovieProvider>
  );
}

//*****conditional rendering
// const movieNumber = 1;
// return (
//   // making a ?: if
//   <>
//     {movieNumber === 1 ? (
//       <MovieCard
//         movie={{ title: 'Home Alone', release_date: '2024' }}
//       />
//     ) : (
//       <MovieCard
//         movie={{ title: 'Home coming', release_date: '2020' }}
//       />
//     )}
//   </>
// );
// return (
// making a short-circuiting
//   <>
//     {movieNumber === 1 && (
//       <MovieCard
//         movie={{ title: 'home coming', release_date: '2025' }}
//       />
//     )}
//   </>
// );

export default App;
