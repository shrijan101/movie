import React,{ useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function MovieCard(props) {
  
  const [genreArr, setGenreArr] = useState(null);
  const [tubeData, setTubeData]=useState([]);
  const [imdbData, setImdbData]=useState([]);
  const { dataId, movieImg, rating, movieName } = props;
  // const [modalOpen, setModalOpen] = useState([]);

  // const openModal = ()=>{

  //   setModalOpen(true);
  // }
  // const navigate = useNavigate();


  const fetchImdbData = async (listGenre,dataId)=>{
    await axios.get(`https://api.themoviedb.org/3/${listGenre}/${dataId}/external_ids?api_key=c005808dc6332095149fc3ae267218c4`)
    .then((res)=>{
      setImdbData(res.data?.imdb_id)
    }).catch((e)=>{
      console.log(e)
    })
  }

  const ImdbClickHandler = (e)=>{

    e.preventDefault();
      e.stopPropagation();
      window.open(`https://www.imdb.com/title/${imdbData}`, '_blank');
      

  }
  const fetchYouTubeData = async (listGenre,dataId)=>{
    

    await axios.get(`https://api.themoviedb.org/3/${listGenre}/${dataId}/videos?api_key=c005808dc6332095149fc3ae267218c4`)
    .then((res)=>{
      
      setTubeData(res.data?.results[0]?.key)
    }).catch((e)=>{
      console.log(e)
    })
  
  }

  useEffect(() => {
    fetchYouTubeData(props.type,props.dataId);
    fetchImdbData(props.type,props.dataId);
    
    const filteredData = props.genreData?.filter((gen) => props.gernreIds.includes(gen.id))
    
    const genres = filteredData
          .map((muji) => muji.name);
          setGenreArr(genres);
  },[props.genreData, props.gernreIds,props.dataId,props.type,props.imdbId])
  

  const handleWatchTrailer = (tubeData) => {
    // Assuming tubeData is the YouTube video ID (e.g., 'abc123')
    const youtubeUrl = `https://www.youtube.com/watch?v=${tubeData}`;

    // Open the YouTube link in a new tab/window
    window.open(youtubeUrl, '_blank');
  };



    return (
      <Link to={`/details/${dataId}`} className='text-decoration'>
        <div className="movie__card">
          <div className="movie__card--imgWrapper" onClick={ImdbClickHandler}>
            <img src={`https://image.tmdb.org/t/p/w500/${movieImg}`} alt="poster_path" className="movie__card--img" />
            <span className="font-large">IMDB</span>
          </div>
  
          <div className="movie__card--content">
            <p>
              <span className="font-largest">{rating.toFixed(1)}</span>
              <span className="font-small--muted">/10</span>
            </p>
            <div className="movie__card--title mt-sm mb-sm">
              <span className="font-large mr-sm">{movieName}</span>
              <span className="font-tiny--muted">
                {genreArr?.join(" ● ") || ""}
              </span>
            </div>
            <p className="font-small--muted mb-tn">Playing on: Netflix</p>
            {console.log("I'm here")}
            <button onClick={(e) => { e.preventDefault(); handleWatchTrailer(tubeData); }} className="pretty-button">Watch Trailer</button>
          </div>
        </div>
      </Link>
);
};

  

export default MovieCard;
