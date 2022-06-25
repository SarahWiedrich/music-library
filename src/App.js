<<<<<<< .merge_file_JcTAu8
import { useState, useEffect, Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import SearchBar from './Components/SearchBar';
import Gallery from './Components/Gallery'
import AlbumView from './Components/AlbumView';
import ArtistView from './Components/ArtistView';
=======
import { useState, useEffect, Suspense } from 'react'
import SearchBar from './Components/SearchBar';
import Gallery from './Components/Gallery'
import { createResource as fetchData } from './helper'
>>>>>>> .merge_file_yQ6Sez

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

<<<<<<< .merge_file_JcTAu8
  return (
    <div>
      {message}
      <Router>
        <Routes>
          <Route path="/" element = {
            <Fragment>
              <SearchBar handleSearch={handleSearch} />
              <Gallery data={data}/>
            </Fragment>
          } />
          <Route path="/album/:id" element = {<AlbumView />} />
          <Route path = "/artist/:id" element = {<ArtistView />} />
        </Routes>
      </Router>
=======
  return(
    <div className='App'>
      <SearchBar handleSearch={handleSearch} />
      {message}
      {renderGallery}
>>>>>>> .merge_file_yQ6Sez
    </div>
  );
}

export default App