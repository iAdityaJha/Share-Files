import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const uploadFile = async (data) => {
    try {
        let response = await axios.post(`${API_URL}/upload`, data);
        return response.data;
    } catch (error) {
        console.error("Error by API: ", error.message);
    }
};



// import axios from 'axios';

// const API_URL= 'http://localhost:5000';

// export const uploadFile=async (data)=>{
//     try{
//        let response= await axios.post(`${API_URL}/upload`,data);
//        return response.data;
//     }catch(error){
//         console.error("error by API :  " , error.message);
//     }
// }

