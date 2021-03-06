import React, { useState, useContext, useEffect } from 'react'
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`


const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({show: false, msg: ''});
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("breaking")

  const fetchMovies = async() => {
    setIsLoading(true)
    const url = `${API_ENDPOINT}&s=${query}`
    try {
      const response = await fetch(url)
      const data = await response.json();
      
      if(data.Response === "True"){
        setMovies(data.Search)
        setError({show: false, msg: "" })
      } else {
        setError({show: true, msg: data.Error })
      }
      setIsLoading(false)
    } 
    
    catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }
  
  useEffect(() => {
    fetchMovies()
  },[query])

  return <AppContext.Provider value={{
    isLoading,
    movies,
    error,
    setQuery,
    query,
  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
