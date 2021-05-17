import React, {useState, useEffect} from 'react'
import './Banner.css'
import requests from './requests'
import axios from './axios'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';


function Banner() {

    const[movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ]);
            return request;
        }
        fetchData();
    }, [])

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n -1) + "..." : str;
    }

    return (
        <div className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition:"center center",
            }}
            >
            <div className="banner__contents">
                <h1 className='banner__title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <div className="banner__buttons">
                    <button className="banner__button">
                        <PlayArrowIcon className='button' style={{ fontSize: 20 }}/>
                        Play
                    </button>
                    <button className="banner__button_info">
                        <InfoOutlinedIcon className='button' style={{ fontSize: 20 }}/>
                        Information
                    </button>
                </div>

                <h2 className="banner__description">
                    {truncate(movie?.overview, 90)}
                </h2> 
            </div>
            <div className="banner--fadeBottom"></div>
        </div>
    )
}

export default Banner;
