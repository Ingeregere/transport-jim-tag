
    import axios from 'axios'

const CAROUSEL_API_URL = "http://e-commerce-transport-backend.herokuapp.com:80/api/carousel/";
const ARTICLE_API_URL = "http://e-commerce-transport-backend.herokuapp.com:80/api/articles/";


class CarrosseriesServices {

    getAllCarousel(){
        return axios.get(CAROUSEL_API_URL+'getAllCarousels')
    }
    getAllArticles(){
        return axios.get(ARTICLE_API_URL)
    }
    getAllBodyworkById(id){
        return axios.get(CAROUSEL_API_URL+'getBodyworkById/'+id)
    }
    updateCarousel(formData){
        return axios.put(CAROUSEL_API_URL, formData)
    }
    postCarousel(formData) {
        return axios.post(CAROUSEL_API_URL, formData)
    }
    postArticle(formData) {
        return axios.post(ARTICLE_API_URL, formData)
    }
}

export default new CarrosseriesServices










