import axios from 'axios';

const KEY = 'AIzaSyBBZXxuMTQjZHPEsKIekMd_mgda2EjuycI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
