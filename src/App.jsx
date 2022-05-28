import { Routes, Route } from "react-router-dom";
import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";
import MovieList from "./views/MovieList/MovieList";
import MovieInfo from "./views/MovieInfo/MovieInfo";
import MovieSearch from './views/MovieSearch/MovieSearch';

export default function App() {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path='/' element={< MovieList/>}/>
        <Route path='/movies/:movieId/*' element={< MovieInfo />} />
        <Route path='/movies' element={< MovieSearch />} />
      </Routes>
    </Container>
  )
}


