import axios from 'axios'

const TRANSPORT_API_URL = "http://e-commerce-transport-backend.herokuapp.com:80/api/transport/";


class TransportServices {

    getAllTransport(){
        return axios.get(TRANSPORT_API_URL)
    }

    postTransport(newTransport) {
        return axios.post(TRANSPORT_API_URL, newTransport)
    }
}


export default new TransportServices










