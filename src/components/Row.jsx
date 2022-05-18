// react
import { useEffect, useState } from "react";
// css
import styles from "./Row.module.css";
// api
import { getMovies } from "../API/api";

const imageHost = "https://image.tmdb.org/t/p/original/"

function Row({ title, path, isLarge }){

  const [movies, setMovies] = useState([]);

  const fetchMovies = async (_path)=>{
    try{
      const data = await getMovies(_path);
      // console.log("data ", data)
      setMovies(data?.results);
    } catch (error){
        console.log("fetchMovies error:", error)
    }
  };

  useEffect(()=>{
    fetchMovies(path);
  }, [path])

  return(                    
    <div className={styles.container}>
      <h2 className={styles.header}>{title}</h2>
      <div className={styles.cards}>
        {movies?.map(movie=>{
          return(
            <img 
              className={ isLarge ? styles.movieLarge : styles.movie}
              key={movie.id} 
              src={`${imageHost}${
                isLarge ? movie.backdrop_path : movie.poster_path
              }`} 
              alt={movie.name} 
            />
          )
        })}
      </div>
    </div>
  )
}

export default Row;