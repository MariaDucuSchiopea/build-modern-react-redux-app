import axios from 'axios';

const TOKEN = 'ccese0iad3i6bee16hmg';

export default axios.create({
  baseURL: 'https://finnhub.io/api/v1',
  params: {
    token: TOKEN,
  },
});
