import { getRequester, postRequester } from './requester';

const requestMapPath = 'api/users'

export const postCreateUser = (user) => {
  const requestUrl = `${__CONFIG__.apiBaseUrl}/${requestMapPath}`
  return postRequester(requestUrl, user)
}

export const postLoginUser = (user) => {
  const requestUrl = `${__CONFIG__.apiBaseUrl}/${requestMapPath}/login`
  return postRequester(requestUrl, user)
}
