import axios from 'axios';

   const API_URL = 'https://livewebapplication-cqcpe8d5gjg4g8ae.eastasia-01.azurewebsites.net';

   export const fetchData = async () => {
     try {
       const response = await axios.get(`${API_URL}/api/data`);
       return response.data;
     } catch (error) {
       console.error('Error fetching data:', error.response ? error.response.data : error.message);
       throw error;
     }
   };

   export const addData = async (newData) => {
     try {
       const response = await axios.post(`${API_URL}/api/data/add`, newData);
       return response.data;
     } catch (error) {
       console.error('Error adding data:', error.response ? error.response.data : error.message);
       throw error;
     }
   };