import apiClient from './index';

export const initializeRepository = (repoData) => {
  const params = new URLSearchParams();
  params.append('repositoryName', repoData.repositoryName);
  if (repoData.description) {
    params.append('description', repoData.description);
  }
  return apiClient.post('/repositories/initialize', params);
};

export const createRepository = (repoData) => {
  const params = new URLSearchParams();
  params.append('userId', repoData.userId);
  params.append('username', repoData.username);
  params.append('repositoryName', repoData.repositoryName);
  params.append('description', repoData.description);
  return apiClient.post('/repositories/create', params);
};

export const deleteRepository = (repoId) => {
  const params = new URLSearchParams();
  params.append('repositoryId', repoId);
  return apiClient.delete('/repositories/delete', { data: params });
};

export const cloneRepository = (repoId) => {
  const params = new URLSearchParams();
  params.append('repositoryId', repoId);
  return apiClient.post('/repositories/clone', params);
};

export const commitToRepository = (repoId, commitData) => {
  const params = new URLSearchParams();
  params.append('message', commitData.message);
  params.append('filePaths', commitData.filePaths);
  return apiClient.post(`/repositories/${repoId}/commit`, params);
};

export const pullFromRepository = (repoId) => {
  return apiClient.post(`/repositories/${repoId}/pull`);
};

export const listRepositories = () => {
  return apiClient.get('/repositories/list');
};

export const getRepositoryDetails = (repoId) => {
  return apiClient.get(`/repositories/${repoId}`);
}; 