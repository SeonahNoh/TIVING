import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Movie from '../pages/Movie';

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
    </main>
  )
}

export default Main;