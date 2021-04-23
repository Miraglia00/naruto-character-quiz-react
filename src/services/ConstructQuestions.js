import {getCharacters, getPopulars} from '../api/GET.js'

const ConstructQuestions = async (num_questions) => {

    if(num_questions > 1){
        const num_pop = Math.ceil((num_questions/4));
        const num_rand = num_questions - num_pop;
    
        let rand = await getCharacters(num_rand)

        const pop = await getPopulars(num_pop)

        let questions = [...rand.data.data, ...pop.data.data]

        let fillers = await getCharacters(num_questions*3)
        fillers = fillers.data.data
        fillers = fillers.map((f) => { return f.name})

        fillers = fillers.sort(() => Math.random() - 0.5)

        let ind = 0;
        let constr_questions = questions.map((e) => {
            let q = {
                'image': e.image, 
                'answ': e.name, 
                'names': [
                    e.name, fillers[ind], fillers[ind+1], fillers[ind+2]
                ]
            }
            ind+=3
            return q
        })

        return constr_questions;
    }else{
        getCharacters(1)
        .then((res) =>{
           return res
        })
        .catch((err) => {return err}) 
    }
}

export default ConstructQuestions