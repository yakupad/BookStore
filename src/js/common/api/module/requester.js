import axios from '../../../../../node_modules/axios'

export const getRequester = (requestUrl) => {
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

export const postRequester = (requestUrl, requestData) => {
  return axios({
    method: 'post',
    url: requestUrl,
    withCredentials: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    data: requestData,
    auth: {
      username: __CONFIG__.apiAuthUserName,
      password: __CONFIG__.apiAuthPassword,
    },
  })
}
