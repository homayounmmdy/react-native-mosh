import {create} from 'apisauce';

const apiClient = create({
    baseURL: 'http://10.11.210.112:9000/api'
})

export default apiClient