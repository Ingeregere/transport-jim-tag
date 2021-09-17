import axios from 'axios'
const ANNONCE_API_URL = "http://e-commerce-transport-backend.herokuapp.com:80/api/commands/";
const BODYWORK_API_URL = "http://e-commerce-transport-backend.herokuapp.com:80/api/bodywork/";
const BRAND_API_URL = "http://e-commerce-transport-backend.herokuapp.com:80/api/brands/";
const COUNTRY_API_URL = "http://e-commerce-transport-backend.herokuapp.com:80/api/countries/";
const MODEL_API_URL = "http://e-commerce-transport-backend.herokuapp.com:80/api/models/";
const CATEGORY_API_URL = "http://e-commerce-transport-backend.herokuapp.com:80/api/categories/";
const TRANSPORT_API_URL = "http://e-commerce-transport-backend.herokuapp.com:80/api/transports/";
const CONTACT_API_URL = "http://e-commerce-transport-backend.herokuapp.com:80/api/contacts/";
const ROLES_API_URL = "http://e-commerce-transport-backend.herokuapp.com:80/api/roles/";
const USER_API_URL = "http://e-commerce-transport-backend.herokuapp.com:80/api/users/";
class AllServices {
    getAllAnnonces(){
        return axios.get(ANNONCE_API_URL+'getAllCommands')
    }
    getAllBrand(){
        return axios.get(BRAND_API_URL+'getAllBrands' )
    }


    postModels(newModel) {
        return axios.post(MODEL_API_URL, newModel)
    }

    postAnnonces(newAnnonce) {
        return axios.post(ANNONCE_API_URL, newAnnonce)
    }


    getAllCountry(){
        return axios.get(COUNTRY_API_URL+'getAllCountry')
    }

    postCountry(newCountry) {
        return axios.post(COUNTRY_API_URL, newCountry)
    }


    postCategory(newCategory) {
        return axios.post(CATEGORY_API_URL, newCategory)
    }

    getAllContact(){
        return axios.get(CONTACT_API_URL)
    }
    getAllUser(){
        return axios.get(USER_API_URL)
    }

}

export default new AllServices