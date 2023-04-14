import axios from 'axios';
import { WP_REST_API_BASE_URL } from '../constants/urls';

const wpApi = axios.create({
    baseURL: WP_REST_API_BASE_URL,
  });

export default wpApi;