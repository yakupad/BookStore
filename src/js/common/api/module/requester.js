import axios from '../../../../../node_modules/axios'

const requestMapPath = 'api/books'

export const getRequester = (endpoint, parameter) => {
  const requestUrl = `${__CONFIG__.apiBaseUrl}/${requestMapPath}/${endpoint}/${parameter}`
  return axios({
    method: 'get',
    url: requestUrl,
    withCredentials: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    auth: {
      username: __CONFIG__.apiAuthUserName,
      password: __CONFIG__.apiAuthPassword,
    },
  })
}
