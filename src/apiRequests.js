import axios from "axios";

export const searchRequest = (hobby) => {
    return axios.get(`https://pixabay.com/api//?key=9259184-33e11f59eb5abd709817fb3fe&q=${hobby}&image_type=photo&per_page='5'&safesearch=true`)
        .then(response => response.data.hits)
        .catch(err => console.log(err))
};
