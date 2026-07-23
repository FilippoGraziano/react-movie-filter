import './App.css'
import { useState } from 'react'
import { films } from './components/data'

const App = () => {

  const [filter, setFilter] = useState(``);

  return (
    <>

      <input type="text" placeholder='Search' value={filter} onChange={e => setFilter(e.target.value)} />

      <ul>

        {/*r Assunzione: i titoli dei film sono univoci */}

        {films.filter(films => films.title.toLocaleLowerCase().includes(filter)).map(el => (

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
