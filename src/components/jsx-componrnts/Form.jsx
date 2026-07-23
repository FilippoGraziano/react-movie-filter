import { useState } from "react"
import "../css-components/Form.css"

const Form = props => {

    const [formData, setFormData] = useState({ title: ``, genre: `` })

    const handleFormData = e => (
        setFormData({...formData, [e.target.name]: e.target.value})
    )

    return (
        <form onSubmit={e => (
            e.preventDefault(),
            props.setFilms([...props.films, {...props.films.at(-1), ...formData}]),
            setFormData({ title: ``, genre: `` })
        )}>

            <input type="text" name="title" placeholder="Scrivi un titolo" value={formData.title} onChange={handleFormData} />

            <select name="genre" value={formData.genre} onChange={handleFormData} >
                <option value="">Scegli un genere</option>
                {props.filmsGenre.map(el => (
                    <option key={el.id} value={el.genre}>{el.genre}</option>
                ))}
            </select>

            <button type="submit">Aggiungi</button>

        </form>
    )
}

export default Form