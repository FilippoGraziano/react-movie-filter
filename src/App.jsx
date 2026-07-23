import './App.css'
import { useEffect, useState } from 'react'
import { filmGenre, films } from './components/data'
import Filter from './components/jsx-componrnts/Filter';
import FilmList from './components/jsx-componrnts/Filmlist';
import Form from './components/jsx-componrnts/Form';


const App = () => {

  const [filter, setFilter] = useState({input: ``, select: ``});
  const [filteredFilm, setFilteredfilm] = useState([]);
  const [_films, setFilms] = useState(films)

  useEffect(() => {setFilteredfilm(_films.filter(films => films.genre.includes(filter.select) && films.title.toLowerCase().includes(filter.input)))}, [_films, filter])

  return (
    <>

      <Filter films={_films} filter={filter} setFilter={setFilter} />

      <FilmList filteredFilms={filteredFilm} />

      <Form films={_films} setFilms={setFilms} filmsGenre={filmGenre} />

    </>
  )
}

export default App
