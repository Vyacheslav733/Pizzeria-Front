import { ApiClient } from './ApiClient';

class ApiService {
    constructor(url) {
        this.url = url;
    }

    async getAll(expand) {
        return ApiClient.get(`${this.url}${expand || ''}`);
    }

    async get(id, expand) {
        return ApiClient.get(`${this.url}/${id}${expand || ''}`);
    }

    async create(body) {
        return ApiClient.post(this.url, body);
    }

    async update(id, body) {
        return ApiClient.put(`${this.url}/${id}`, body);
    }

    async delete(id) {
        return ApiClient.delete(`${this.url}/${id}`);
    }

    async getByHandle(handle) {
        return ApiClient.get(`${this.url}?handle=${handle}`);
    }
    
    async getByEmail(email) {
        return ApiClient.get(`${this.url}?email=${email}`);
    }

    async getAllForUser(userId) {
        return ApiClient.get(`${this.url}?userId=${userId}`);
    }
}

export default ApiService;
