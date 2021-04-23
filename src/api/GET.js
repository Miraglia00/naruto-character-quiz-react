import api from './api.js';

const getCharacters = async (limit) => {
    if(limit >= 1){
        return await api().get(`/random?limit=${limit}&image`)
    } return false;  
}

const getPopulars = async (limit) => {
    if(limit >= 1){
        return await api().get(`/populars?limit=${limit}&image`)
    } return false;   
}

export {
    getCharacters,
    getPopulars
}