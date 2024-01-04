import axios from 'axios'

export const GET = (path, params) => {
  const header = {
    'Accept': 'application/json',
    'Authorization': `Bearer o7Ytbt9XQLI3PgtebJfKSXKEf0XHU74Y`,
  }
  return new Promise((resolve, reject) => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/${path}`, {
      headers: header,
      params,
    }).then((response) => {
      if (response.status === 200) {
        return resolve(response.data)
      }
      if (response.status === 201) {
        return resolve(response.data)
      }
      const error = response.message
      return reject(error)
    }).catch((err) => {
      const error = err
      return reject(error)
    })
  })
}