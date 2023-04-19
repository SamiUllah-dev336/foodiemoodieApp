import {Text,StyleSheet, TextInput,View } from "react-native";

const TextField=({label,isPassword,value,onChangeText})=>{
     return(
     
  
     
     <View style={{   
                justifyContent:"center",
                height:50,
                width:300,
                marginBottom:10,
                backgroundColor:"white",
                borderRadius:10,
                 }}>
     <TextInput
     value={value}
     style={{marginLeft:10}}
     placeholder={label}
     onChangeText={onChangeText}     
     secureTextEntry={isPassword ? true:false}
     />
     </View>
     );
}

export {TextField};

