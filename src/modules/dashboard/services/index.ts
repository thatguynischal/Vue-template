import apiUrl from '@/constants/routes/dashboard';
import API from '@/services/API';

const signupUser = async (data: object) => {
    return await API.post(apiUrl.DASHBOARD_URL, data);
  };
  
  export default {
    signupUser,
  };