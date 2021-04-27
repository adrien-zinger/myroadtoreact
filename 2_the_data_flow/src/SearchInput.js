// Example of a stateless "component"

const Search = ({value, onChange, onSubmit, children}) => {
    return (
    <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={value}></input>
        <button type="submit">{children}</button>
    </form>
    )
}

export default Search;