import axios from 'axios';

const API_URL = "http://localhost:5000/api/projects";

export const createProject = async (projectData, token) => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const res = await axios.post(API_URL, projectData, config);
    return res.data;
};

export const getProjects = async (token) => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const res = await axios.get(API_URL, config);
    return res.data;
};

export const updateProjectStatus = async (projectId, status, token) => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const res = await axios.put(`${API_URL}/${projectId}`, { status }, config);
    return res.data;
};

export const deleteProject = async (projectId, token) => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const res = await axios.delete(`${API_URL}/${projectId}`, config);
    return res.data;
};
