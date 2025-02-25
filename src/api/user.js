import apiClient from './index';

export const registerUser = (userData) => {
  const params = new URLSearchParams();
  params.append('username', userData.username);
  params.append('password', userData.password);
  if (userData.email) {
    params.append('email', userData.email);
  }
  return apiClient.post('/users/register', params);
};

export const loginUser = (userData) => {
  const params = new URLSearchParams();
  params.append('username', userData.username);
  params.append('password', userData.password);
  return apiClient.post('/users/login', params);
};

export const updateUser = (userData) => {
  return apiClient.put('/users/update', userData);
}; 