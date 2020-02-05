import axios from 'axios';

const KEY = 'AIzaSyAtB14NpG25wfdEXwzdVhflbcDoXcE2p9U';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: `${KEY}`
  }
})