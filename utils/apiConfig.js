
import { baseURL } from "../config";
console.log('Base URL:', baseURL)

export const API_URLS = {
    adminlogin: `${baseURL}/portfolio/login`,
    getprojects:  `${baseURL}/api/projects`,
    delectprojects: (projectId) =>  ` ${baseURL}/api/projects/${projectId}`,
    editprojects: (editingProject) => `${baseURL}/api/projects/${editingProject._id}`,
    fetchimage: `${baseURL}/api/images`,
    upload: `${baseURL}/api/upload`,
    projectNumbers: `${baseURL}/api/projectnumbers`
};  