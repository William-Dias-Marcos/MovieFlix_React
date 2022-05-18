// react
import { useEffect, useState } from "react";
// css
import styles from "./Banner.module.css";
// api
import categories, { getMovies } from "../API/api";

function Banner (){
  const [movie, setMovie] = useState({});

  const fetchRandomMovie = async ()=>{
    try{

      const data = await getMovies(categories.find(category => 
        category.name === "originals").path);
      
      const randomIndex = Math.floor(Math.random() * data.results.length)
      setMovie(data?.results[randomIndex]);

    } catch (error){
      console.log("Banner fetchRandomMovie: ", error);
    }
  };

  useEffect(()=>{
    fetchRandomMovie();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  }

  return(
    <header className={styles.banner} style={{
      backgroundSize: "cover",
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`,
      roundPosition: "center-center"
    }}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className={styles.description}>
          <h3>{truncate(movie.overview,250)}</h3>
        </div>
      </div>
    </header>
  );
}

export default Banner;