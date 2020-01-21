let movies = [
  {
    id: 0,
    name: "Star Wars - The new one",
    score: 16
  },
  {
    id: 1,
    name: "Avengers - The new one",
    score: 23
  },
  {
    id: 2,
    name: "The GodFather 1",
    score: 88
  },
  {
    id: 3,
    name: "Logan",
    score: 45
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredMovies = movies.filter(movie => movie.id === String(id));
  return filteredMovies[0];
};

//deleteMovie 같은 아이디를 가지지 않은 movies의 배열 리턴
export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== String(id));
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

//addMovie
export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};
