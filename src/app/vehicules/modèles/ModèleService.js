import axios from 'axios'

const MODEL_API_URL = "http://e-commerce-transport-backend.herokuapp.com:80/api/models/";


class AllServices {
    getAllModel(){
        return axios.get(MODEL_API_URL+'getAllModels')
    }
    postModels(newModel) {
        return axios.post(MODEL_API_URL, newModel)
    }
    updateModel(newModel) {
        return axios.put(MODEL_API_URL, newModel)
    }
    getModelById(id){
        return axios.get(MODEL_API_URL+'getModelById/'+id)
    }
}

export default new AllServices