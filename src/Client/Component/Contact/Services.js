
import axios from 'axios'

const API_CONTACT = "http://e-commerce-transport-backend.herokuapp.com:80/api/page/contact/"


class AllServices {
    getAllContact(){
        return axios.get(API_CONTACT+'getAllPageContact')
    }
    postContact(data) {
        return axios.post(API_CONTACT, data)
    }

}

export default new AllServices