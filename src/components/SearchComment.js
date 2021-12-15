function SearchBar ({search}) {
    

    return (
        <form>
            <input type="text" placeholder="Search username..." value={search} />
        </form>
    )
}

export default SearchBar