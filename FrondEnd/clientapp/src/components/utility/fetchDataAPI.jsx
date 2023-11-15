import axios from "axios";

export const fetchData= (endpoint)=>
{
    return axios.get(endpoint).then((response)=>{
        if(response.data.isSuccess)
        {
            return response.data.result;
        }
        else{
            console.log(endpoint+"failed");
            throw response.data;
        }
    }).catch((error)=>{
        console.log(endpoint+"failed");
         throw error;
    });
}