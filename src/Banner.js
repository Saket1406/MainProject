import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from 'axios';
function Banner() {

    const [movie,setMovie] = useState([]);

    useEffect(() =>{
        async function fetchData(){
            const request = await axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=7ece740f8a7ca4410e560dd53721d2e4");
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length-1)
                ]
            );
            return request;
        }

        fetchData();
    } , []);
    console.log(movie);
    function truncate(string,n){
        return string?.length > n ? string.substr(0,n-1) + '...' : string;
    }
  return (
    <header className='banner' style={{
        backgroundSize : "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/w1280/${movie?.backdrop_path}")`,
        backgroundPosition: "center-center"
    }}>
        <div className="banner_contents">
            <h1 className="banner_title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner_buttons">
                <button className='banner_button'>Play</button>
                <button className='banner_button'>My List</button>
            </div>
            <h1 className="banner_description">{truncate(movie?.overview,150)}</h1>
        </div>

        <div className="banner--fadeBottom" />
    </header>
  )
}

export default Banner