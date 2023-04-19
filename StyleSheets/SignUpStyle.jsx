import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '##FAF9F6',
      justifyContent: 'center',
    },
    button:{
      borderWidth:1,
      borderRadius:10,
      height:55,
      width:300,
      alignItems:"center",
      justifyContent:"center",
      borderColor:"white",
      marginBottom:10,
     },
     
    textHeader:{
      fontSize:15,
      fontWeight:"bold",
      marginBottom:10,
      alignSelf:'flex-start',
      marginLeft:30,
    },
    outerV_F:{
      flex:0.7,
      alignItems:'center',
    },
    checkbx:{
      height:15,
      width:15,
      marginRight:10,
      borderRadius:20
    },
    checkbOuter:{
      flexDirection:"row",
      marginBottom:10,
      marginTop:10
    },
    signIn:{
      flex:0.1,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center",
      }
  });

  export default styles;