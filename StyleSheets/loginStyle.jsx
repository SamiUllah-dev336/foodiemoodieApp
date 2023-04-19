import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      padding:10,
      flex: 1,
      backgroundColor: '##FAF9F6',
      //alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:"#f5f5f5",
    },

    logo:{
      height:60,
      width:300,
      marginBottom:20,
      alignSelf:'center'
    },

    textinpt:{
      height:50,
      width:250,
      alignItems:"center",
      justifyContent:"center",
      marginLeft:10,
    },
    
    button:{
      borderWidth:1,
      borderRadius:10,
      height:55,
      width:300,
      alignItems:"center",
      justifyContent:"center",
      borderColor:"white",
      backgroundColor:"red",
      marginBottom:10
     },
     EM_PS_login:{
      flex:0.6,
      alignSelf:'center',
    },
    headr:{
      fontWeight:"bold",
      fontSize:30
    },
    outerView:{
       flexDirection:"row",
       backgroundColor:"white",
       marginBottom:10
    },
    image:{
       height:20,
       width:20,
       marginTop:15,
       marginLeft:10,
       marginRight:10
    },
    icon:{
      marginTop:10,
      marginLeft:10
    },
    forgot:{
      marginBottom:10,
      textAlign:"right"
    },
    login:{
      marginBottom:10,
      fontSize:20,
      textAlign:"right"
    },
    loginwith:{
      marginBottom:10,
      textAlign:"center"
    },
    signup:{
      flex:0.1,
      flexDirection:'row',
      alignSelf:'center'
    }
 
  });
export default styles;
