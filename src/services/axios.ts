import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3000/api',
})

// import axios from 'axios'

// export const api = axios.create({
//   baseURL: 'https://worldtrip-silk.vercel.app/api',
// })
