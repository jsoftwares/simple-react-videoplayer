import axios from 'axios';

const KEY = 'AIzaSyDVt2PedD-BD8ALYnfpVBP0oSq7Lvq0d7Q';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 6,
        key: KEY
    }
});