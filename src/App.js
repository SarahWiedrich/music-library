import { useState, useEffect, Suspense } from 'react'
import SearchBar from './Components/SearchBar';
import Gallery from './Components/Gallery'
import { createResource as fetchData } from './helper'

function App() {
  const[search, setSearch] = useState('')
  const [message, setMessage] = useState('Search for Music')
  const [data, setData] = useState([null])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
  }

  useEffect(() => {
    if (searchTerm) {
      setData(fetchData(searchTerm))
      const fetchData = async () => {
        document.title =`${search} Music`
        const response = await fetch(`https://itunes.apple.com/search?term=${search}`)
        const data = await response.json()
        console.log(data)
        if (data.results.length > 0) {
          setData(data.results)
        } else {
          setMessage('Not Found')
        }
      }
      fetchData()
    }
  }, [searchTerm])

  const renderGallery = () => {
    if (data){
      return (
          <Suspense fallback={<Spinner />}>
            <Gallery data={data}/>
          </Suspense>
      )
    }
  }

  return(
    <div className='App'>
      <SearchBar handleSearch={handleSearch} />
      {message}
      {renderGallery}
    </div>
  );
}

export default App;