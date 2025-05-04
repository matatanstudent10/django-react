import axios from 'axios'

const productsApi = axios.create({
    baseURL: "http://127.0.0.1:8000/api/producto"
});

export const getProducts = async () => productsApi.get()
export const getProduct = async (id) => productsApi.get(`${id}`)
export const createProduct = async (product) => productsApi.post('/', product)
export const updateProduct = async (id, product) => productsApi.put(`/${id}/`, product)
export const deleteProduct = async (id) => productsApi.delete(`/${id}/`)
