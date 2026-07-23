import "../css-components/Filter.css"

const Filter = props => (
    
    <>
        <input type="text" placeholder='Search' value={props.filter.input} onChange={e => props.setFilter({ ...props.filter, input: e.target.value })} />

        <select name="films-genders" value={props.filter.select} onChange={e => props.setFilter({ ...props.filter, select: e.target.value })}>

            <option value="">Tutti i generi</option>

            {[...new Set(props.films.map(f => f.genre))].map(el => (

                <option key={el} value={el}>{el}</option>

            ))}

        </select>
    </>
)

export default Filter