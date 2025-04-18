import axios from 'axios'

export const getAllTokens = () =>
  axios.get('https://fe-api.jup.ag/api/v1/tokens/search?query=')
