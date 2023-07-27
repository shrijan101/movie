import React, {useEffect, useState} from 'react'
import MovieCard from '../components/MovieCard'
import axios from 'axios'

function Home() {
  const [movieData, setMovieData]= useState([]);
  const [seriesData, setSeriesData]= useState([]);

  const [movieGenreData, setMovieGenreData]= useState([]);
  const [seriesGenreData, setSeriesGenreData]= useState([]);

  
  const fetchMovieData = async () => {
    await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=c005808dc6332095149fc3ae267218c4`)
              .then((res) => {
                setMovieData(res.data?.results);
              }).catch((e) => {
                console.log(e)
              });    
  }

  const fetchSeriesData = async () => {
    await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=c005808dc6332095149fc3ae267218c4`)
              .then((res) => {
                console.log(res)
                setSeriesData(res.data?.results);
              }).catch((e) => {
                console.log(e)
              });    
  }

  const fetchGenreData = async (cate)=>{
    await axios.get(`https://api.themoviedb.org/3/genre/${cate}/list?api_key=c005808dc6332095149fc3ae267218c4`)
      .then((res)=>{
          const genreData = res.data.genres
          if(cate === 'movie') {
            setMovieGenreData(genreData)
          }else {
            setSeriesGenreData(genreData)            
          }
      })
      .catch((e)=>{
        console.warn(e);
      })
  }
  

  useEffect(() => {
    

    fetchGenreData('movie');
    fetchGenreData('tv');
    fetchMovieData();
    fetchSeriesData();
  },[])

  return (
    <section className="home">
      <div className="home__content">
        <p className="font-largest--bold mb-sm text-center">Top Movies</p>
        {
          movieData.map((data) => (
            <MovieCard movieName= {data.title} genreData={movieGenreData} type={data.media_type} dataId={data.id} gernreIds= {data.genre_ids} rating= {data.vote_average} movieImg= {data.poster_path} key={data.id} imdbId={data.imdb_id}/>
          ))
        }
      </div>
      <div className="home__content">
        <p className="font-largest--bold mb-sm text-center">Top TV Series</p>
        {
          seriesData.map((data) => (
            <MovieCard movieName= {data.name} genreData={seriesGenreData} type={data.media_type} dataId={data.id} gernreIds= {data.genre_ids} rating= {data.vote_average} movieImg= {data.poster_path} key={data.id} imdbId={data.imdb_id}/>
            ))
        }
      </div>
    </section>
  )
}

export default Home