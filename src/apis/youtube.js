import axios from 'axios';

const KEY = 'AIzaSyC5UJQCu8WBVrVz9NjXgW-Opdru8buxQA8';

export const baseParams = {
    part: 'snippet',
    maxResults: 5,
    key: KEY
};

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
});

