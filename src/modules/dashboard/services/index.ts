import apiUrl from '@/constants/routes/dashboard';
import API from '@/services/API';

interface GetCatFactsParams {
  params?: {
    page?: number;
  };
}

const getCatFacts = async (options: GetCatFactsParams = {}) => {
  return await API.get(apiUrl.DASHBOARD_URL, options);
};
  
export default {
  getCatFacts,
};