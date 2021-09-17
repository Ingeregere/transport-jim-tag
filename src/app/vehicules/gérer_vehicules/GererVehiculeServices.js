import axios from 'axios'

const TRANSPORT_API_URL = "http://e-commerce-transport-backend.herokuapp.com:80/api/transports/";


class GererServices {

    getAllTransports(){
        return axios.get(TRANSPORT_API_URL+'getAllTransports')
    }

}


export default new GererServices










