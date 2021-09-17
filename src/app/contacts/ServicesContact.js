import axios from 'axios'

const BODYWORK_API_URL = "http://e-commerce-transport-backend.herokuapp.com:80/api/contacts/";


class ContactServices {

    getAllContact(){
        return axios.get(BODYWORK_API_URL+'getAllContacts')
    }
    getAllBodyworkById(id){
        return axios.get(BODYWORK_API_URL+'getBodyworkById/'+id)
    }
    updateBodywork(data){
        return axios.put(BODYWORK_API_URL, data)
    }
    postBodywork(newBodyWork) {
        return axios.post(BODYWORK_API_URL, newBodyWork)
    }
}


export default new ContactServices










