import axios from 'axios'

const Role_API_URL = "http://e-commerce-transport-backend.herokuapp.com:80/api/roles/";

class AllServices {
    getAllRoles(){
        return axios.get(Role_API_URL +'getAllRoles' )
    }

    postRole(data) {
        return axios.post(Role_API_URL, data)
    }
    UpdateRole(data) {
        return axios.put(Role_API_URL, data)
    }
    getRoleById(id){
        return axios.get(Role_API_URL +'getRoleById/'+id)
    }
}

export default new AllServices