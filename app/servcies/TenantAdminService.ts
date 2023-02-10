import axios from "axios";
import baseURL from "./baseUrl";

const {globalUrl: url} = baseURL()
const apiClient = axios.create({
    baseURL: 'http://202.182.119.166:8001/',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
  })

  const apiClientForm = axios.create({
    baseURL: 'http://202.182.119.166:8001/',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data'
    },
  })


export default {
    // Tenant admin Create Operational hour Service
    createOperHour(inputsData: object) {
        return apiClient.post('/operational_hours/create_bulk_days/', inputsData);
    },
    // Tenant admin get Operational hour Service
    getOpertionalhour(url:string) {
      return apiClient.get(url);
    },
    // Tenant admin get a certain Operational hour Service
    getCurrentOperHour(id: string | string[] | undefined) {
      return apiClient.get(`/operational_hours/update_bulk_days/${id}/`);
    },
    // Tenant admin set a certain Operational hour as default Service
    setOperHourAsDefault(id: string | string[] | undefined, inputsData: object) {
      return apiClient.put(`/operational_hours/operational-hours/${id}/`, inputsData);
    },
    // Tenant admin delete a certain Operational hour Service
    deleteOperHour(id: string | string[] | undefined) {
      return apiClient.delete(`/operational_hours/operational-hours/${id}/`);
    },
    // Tenant admin update a certain Operational hour Service
    updateOperHour(id: string | string[] | undefined, inputsData: object) {
      return apiClient.put(`/operational_hours/update_bulk_days/${id}/`, inputsData);
    }
};
  