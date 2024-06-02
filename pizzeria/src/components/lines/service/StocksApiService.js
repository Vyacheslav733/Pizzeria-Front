import ApiService from '../../api/ApiService';

class StocksApiService extends ApiService {
    async getById(id) {
        return this.get(id);
    }
}

const TypesApiService = new StocksApiService('stocks');

export default TypesApiService;
