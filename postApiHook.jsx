import axios from "axios";

const postApiHook=async(url,user)=>{
    const {usr_id,id,title}=user;
    
    await axios.post(url,{
    method: 'POST',
    headers: {
         Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        "userId": usr_id,
        "id": id,
        "title": title
    }),

   }).then((Response)=>{
     console.log("response data from api= ",Response.data);
   }).catch((error)=>{
     console.log("error= ",error)

   })

}

export {postApiHook}