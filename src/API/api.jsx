const API_KEY = "36aa5f5939a340eb6cb759cdbb41b9a9";

const categories = [
  {
    name: "trending",
    title: "Em alta",
    path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
    isLarge: true,
  },
  {
    name: "originals",
    title: "Originais MovieFlix",
    path: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    isLarge: false,
  },
  {
    name: "toRated",
    title: "Populares",
    path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
    isLarge: false,
  },
  {
    name: "comedy",
    title: "Comédias",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    isLarge: false,
  },
  {
    name: "romances",
    title: "Romances",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    isLarge: false,
  },
  {
    name: "documentaries",
    title: "Documentários",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
    isLarge: false,
  },
];

export const getMovies = async (path) =>{
  try{

    let url = `https://api.themoviedb.org/3${path}`;
    const response = await fetch(url);
    return await response.json();

  } catch(error){
    console.log("error getMovies:", error)
  }
}

export default categories;