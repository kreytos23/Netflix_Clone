import React from 'react';
import './App.css';
import Row from './Row'
import requests from './requests';
import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';

// API URL https://api.themoviedb.org/3/movie/550?api_key=c4a12a8b98b3ad1d94666becb52d89e4
// API_KEY c4a12a8b98b3ad1d94666becb52d89e4

function App() {
  return (
    <div className="app">
      <Header/>
      <Banner/>
      <Row title='Netflix - Originals' fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title='Trending Top' fetchUrl={requests.fetchTrending}/>
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}/>
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>

      {/* Header */}
      {/* Row */}
      {/* Row */}
      <Footer/>
    </div>
  );
}

export default App;
