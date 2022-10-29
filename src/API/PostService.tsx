import axios from "axios";
import { IPositions } from "../models";

export default class PostService {
    static async getPage(page:number, count:number) {
        const response = await axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
            params: {
              page: page,
              count: count
          }
        })
    return response;
    }

    static async getByPositions() {
        const response = await axios.get<IPositions[]>('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
    return response;
    }

    static async getToken() {
        const response = await axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/token`)
    return response;
    }
}
