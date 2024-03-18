import axios from "axios";

export const getFlightDetails=async ()=>{
    try{

     const response =  await axios.get('https://api.npoint.io/378e02e8e732bb1ac55b',{})
            return response.data
        } catch (error) {
        console.log(error)
        throw error;
    }}