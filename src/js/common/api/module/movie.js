import { getRequester, postRequester } from './requester';

const requestMapPath = 'api/movies'

export const postCreateMovie = (movie) => {
  const requestUrl = `${__CONFIG__.apiBaseUrl}/${requestMapPath}`
  return postRequester(requestUrl, movie)
}

export const getMovieById = (movieId) => {
  const requestUrl = `${__CONFIG__.apiBaseUrl}/${requestMapPath}/${movieId}`
  return getRequester(requestUrl);
}

export const getMovieByTypeId = (typeId) => {
  const requestUrl = `${__CONFIG__.apiBaseUrl}/${requestMapPath}?typeId=${typeId}`
  return getRequester(requestUrl);
}

export const getMovieByImdbScore = (imdbScore) => {
  const requestUrl = `${__CONFIG__.apiBaseUrl}/${requestMapPath}?imdbScore=${imdbScore}`
  return getRequester(requestUrl);
}

export const getMovieByProductionYear = (productionYear) => {
  const requestUrl = `${__CONFIG__.apiBaseUrl}/${requestMapPath}?productionYear=${productionYear}`
  return getRequester(requestUrl);
}

export const getAllMovies = () => {
  const requestUrl = `${__CONFIG__.apiBaseUrl}/${requestMapPath}`
  return getRequester(requestUrl);
}

export const getAllSortedMovies = (sortDirection, sortType) => {
  const requestUrl = `${__CONFIG__.apiBaseUrl}/${requestMapPath}?sortDirection=${sortDirection}&sortType=${sortType}`
  return getRequester(requestUrl);
}

export const updateMovie = (movie) => {
  const requestUrl = `${__CONFIG__.apiBaseUrl}/${requestMapPath}`
  return postRequester(requestUrl, movie);
}

export const deleteMovie = (movieId) => {
  const requestUrl = `${__CONFIG__.apiBaseUrl}/${requestMapPath}/${movieId}`
  return getRequester(requestUrl);
}
