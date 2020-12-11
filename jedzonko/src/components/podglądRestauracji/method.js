import apiClient from '../../api/apiClient';

const getRestauracja = async (restauracjaid) => {
    const response = await apiClient.get(`http://127.0.0.1:8000/restauracja/${restauracjaid}`);
    return response.data;
  };
  export default getRestauracja;