import axios from "axios"



const base_url = 'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json';
   

export const fetch_data = async () =>{
    try{
const response =await axios.get(base_url)
return response.data;
    }
    catch(error){
        console.error(error);
    }
   };


