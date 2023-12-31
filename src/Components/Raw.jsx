import React, { useEffect, useState } from 'react'
import instance from '../instance';
import './Row.css';

function Raw({title, fetchUrl ,isposter}) {
/*     console.log(fetchUrl);
 */
    const [allmovies,setallmovies] = useState()

    const base_url = "https://image.tmdb.org/t/p/original/";

    const fetchdata = async () =>{
      const {data} = await instance.get(fetchUrl)
      setallmovies(data.results)
    }

  /*   console.log(allmovies); */

    useEffect(()=>{
      fetchdata()},[]
    )
    
  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className="movie-row">
        {
          allmovies?.map(item=>(
            <img className={`movie ${isposter && `movie-poster`}`} src={`${base_url}${isposter?item.poster_path:item.backdrop_path}`} alt="no image" />
          ))
        }
      </div>
      </div>
  )
}

export default Raw