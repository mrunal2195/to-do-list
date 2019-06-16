const axios = require('axios');

const HOST = window.location.hostname + (window.location.port ? ':' + window.location.port : '')
console.log(HOST)
const listapi = axios.create({
    baseURL: `//${HOST}/api/list/`
});


const getList = () => listapi.get('/').then(response => response.data);

const updateItem = (id, item) => listapi.put(`/${id}`, item).then(response => response.data);

const deleteItem = (id) => listapi.delete(`/${id}`).then(response => response.data);

const createItem = (item) => listapi.post('/', item).then(response => response.data);


export default {
    getList,
    updateItem,
    deleteItem,
    createItem
}