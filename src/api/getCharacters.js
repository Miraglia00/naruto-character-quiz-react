export function getCharacters(limit) {
    if(limit > 1){
        return fetch(`http://localhost:5000/v1/random?limit=${limit}&image=true`)
        .then(data => data.json())
    } return false;
    
  }