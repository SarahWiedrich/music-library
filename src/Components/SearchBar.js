import { useEffect, useState } from 'react'

function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
            <input onChange={(e) => setSearchTerm(e.target.value)}placeholder='Enter'/>
            <input type='submit'/>
        </form>
    )
}

export default SearchBar