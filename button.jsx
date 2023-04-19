import { TouchableOpacity,Text } from "react-native";

const Button=({label,forLogin,press})=>{
   if(forLogin){
   return(
    <TouchableOpacity style={{
                        borderWidth:1,
                        borderRadius:10,
                        height:55,
                        width:300,
                        alignItems:"center",
                        justifyContent:"center",
                        borderColor:"white",
                        marginBottom:10,
                        backgroundColor:'red',
                        }}  
                        onPress={press}>
    
    <Text style={{fontSize:20,color:"white"}}>{label}</Text>
    </TouchableOpacity>
   )
   }
   else{
    return(
    <TouchableOpacity style={{
                        borderWidth:1,
                        borderRadius:10,
                        height:55,
                        width:300,
                        alignItems:"center",
                        justifyContent:"center",
                        borderColor:"white",
                        
                            }} 
                        onPress={press}>
    <Text style={{fontSize:20,color:"white"}}>{label}</Text>
    </TouchableOpacity>
    )
   }

}

export {Button};