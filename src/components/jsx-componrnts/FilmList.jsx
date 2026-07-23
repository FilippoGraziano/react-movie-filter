import "../css-components/FilmList.css"

const FilmList = props => (

    <ul>

        {/*r Assunzione: i titoli dei film sono univoci */}
        
        {props.filteredFilms.map(el => (

            <li key={el.title}>

                <h2>{el.title}</h2>
                <p>{el.genre}</p>

            </li>

        ))}

    </ul>
)

export default FilmList