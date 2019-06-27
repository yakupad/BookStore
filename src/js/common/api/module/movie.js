import { getRequester, postRequester } from './requester';

const requestMapPath = 'api/movie'

export const postCreateMovie = (movie) => {
  const requestUrl = `${__CONFIG__.apiBaseUrl}/${requestMapPath}/create`
  return postRequester(requestUrl, movie)
}

export const getMovieById = (movieId) => {
  const requestUrl = `${__CONFIG__.apiBaseUrl}/${requestMapPath}/read/id?movieId=${movieId}`
  return getRequester(requestUrl);
}

export const getMovieByTypeId = (typeId) => {
  const requestUrl = `${__CONFIG__.apiBaseUrl}/${requestMapPath}/read/type?typeId=${typeId}`
  return getRequester(requestUrl);
}

export const getMovieByImdbScore = (imdbScore) => {
  const requestUrl = `${__CONFIG__.apiBaseUrl}/${requestMapPath}/read/imdb?imdbScore=${imdbScore}`
  return getRequester(requestUrl);
}

export const getMovieByProductionYear = (productionYear) => {
  const requestUrl = `${__CONFIG__.apiBaseUrl}/${requestMapPath}/read/year?productionYear=${productionYear}`
  return getRequester(requestUrl);
}

export const getAllMovies = () => {
  const requestUrl = `${__CONFIG__.apiBaseUrl}/${requestMapPath}/read`
  return getRequester(requestUrl);
}

export const updateMovie = (movie) => {
  const requestUrl = `${__CONFIG__.apiBaseUrl}/${requestMapPath}/update`
  return postRequester(requestUrl, movie);
}

export const deleteMovie = (movieId) => {
  const requestUrl = `${__CONFIG__.apiBaseUrl}/${requestMapPath}/delete/${movieId}`
  return getRequester(requestUrl);
}

// const data = {
//     firstName: 'Fred',
//     lastName: 'Flintstone',
//   }
