import axios from 'axios'

const CATEGORY_API_URL = "http://e-commerce-transport-backend.herokuapp.com:80/api/categories/";


class CategoryServices {
    getAllCategory(){
        return axios.get(CATEGORY_API_URL+'getAllCategories')
    }
    postCategory(newCategory) {
        return axios.post(CATEGORY_API_URL, newCategory)
    }
    getImage(id){
        return axios.get(CATEGORY_API_URL+'viewImageCategoryById/'+id)
    }
    getCategoryById(id){
        return axios.get(CATEGORY_API_URL +'getCategoryById/'+id)
    }

}


export default new CategoryServices