const axios = require('axios');

const api = () => {
    return axios.create({
        baseURL: 'http://localhost:5000/v1/',
        timeout: 3000
    })
}

export default api