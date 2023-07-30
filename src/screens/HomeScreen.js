import React from 'react'
import "./HomeScreen.css"
import Nav from '../Nav'
import Banner from '../Banner'
import Row from '../Row'


function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav />

        <Banner />
        
        <Row title="Top Rated" 
        fetchUrl = {`https://api.themoviedb.org/3/tv/top_rated?api_key=7ece740f8a7ca4410e560dd53721d2e4`}
        isLargeRow />

        <Row title="Now Playing" fetchUrl = {`https://api.themoviedb.org/3/movie/now_playing?api_key=7ece740f8a7ca4410e560dd53721d2e4`} />
        
        <Row title="Popular"
        fetchUrl = {`https://api.themoviedb.org/3/tv/popular?api_key=7ece740f8a7ca4410e560dd53721d2e4`} />

        <Row title="Trending"
        fetchUrl = {`https://api.themoviedb.org/3/trending/movie/day?api_key=7ece740f8a7ca4410e560dd53721d2e4`} />

        
    </div>
  )
}

export default HomeScreen