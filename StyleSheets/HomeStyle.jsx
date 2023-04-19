import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textView:{
      flex:0.1,
      alignItems:'center',
      justifyContent:"center"
    },
    fText:{
        fontSize:20,
        fontStyle:"italic",
        color:"white",
    },
    sText:{
      marginBottom:20,
      marginTop:20,
      color:"white",
    },
    buttonView:{
      flex:0.3,
      alignItems:"center",
      justifyContent:"center"
    }
  
  });

  export {styles};