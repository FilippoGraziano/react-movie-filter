import './App.css'
import { useEffect, useState } from 'react'
import { films } from './components/data'


const App = () => {

  const [filter, setFilter] = useState({input: ``, select: ``});
  const [filteredFilm, setFilteredfilm] = useState([]);

  useEffect(() => {setFilteredfilm(films.filter(films => films.genre === filter.select && films.title.toLowerCase().includes(filter.input)))}, [filter])

  return (
    <>

      <input type="text" placeholder='Search' value={filter.input} onChange={e => setFilter({...filter, input: e.target.value})} />

      <select name="films-genders" id="select-films-genders" value={filter.select} onChange={e => setFilter({...filter, select: e.target.value})}>

        <option value="">Tutti i generi</option>

        {[...new Set(films.map(f => f.genre))].map(el => (

          <option key={el} value={el}>{el}</option>

        ))}

      </select>

      <ul>

        {/*r Assunzione: i titoli dei film sono univoci */}

        {filteredFilm.map(el => (

          <li key={el.title}>

            <h2>{el.title}</h2>
            <p>{el.genre}</p>

          </li>

        ))}

      </ul>
    </>
  )
}

export default App
