const axios = require('axios');

const api = () => {
    return axios.create({
        baseURL: 'https://naruto-character-api.herokuapp.com/v1/',
        timeout: 3000
    })
}

export default api