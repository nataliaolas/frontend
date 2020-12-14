import apiClient from '../../api/apiClient';

export const getRestauracja = async (restauracjaid) => {
    const response = await apiClient.get(`http://127.0.0.1:8000/restauracja/${restauracjaid}`);
    return response.data;
  };
  

  export const getMenu = async (restauracjaid) => {
    const response = await apiClient.get(`http://127.0.0.1:8000/menu/${restauracjaid}`);
    return response.data1;
  };
  