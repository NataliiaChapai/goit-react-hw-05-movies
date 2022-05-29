import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from 'react';
import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";

const MovieInfo = lazy(() =>
  import('./views/MovieInfo/MovieInfo.js' /* webpackChunkName: "info-view" */),
);
const MovieSearch = lazy(() =>
  import('./views/MovieSearch/MovieSearch.js' /* webpackChunkName: "search-movies-view" */),
);
const Home = lazy(() =>
  import('components/Home/Home.js' /* webpackChunkName: "home-view" */),
);

export default function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<div>Please wait...</div>}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movies/:movieId/*' element={< MovieInfo />} />
          <Route path='/movies' element={< MovieSearch />} />
        </Routes>
      </Suspense>
    </Container>
  )
}


