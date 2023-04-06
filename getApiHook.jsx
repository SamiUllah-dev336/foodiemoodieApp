import axios from "axios"

const fetchApiData=async(url)=>{
    try{
      const returnFrmApi=await axios.get(url);
      console.log(returnFrmApi.data);
    }catch(error){
      console.log(error);
    }
}

export {fetchApiData}