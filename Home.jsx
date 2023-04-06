import {ImageBackground, TouchableOpacity,Alert, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import axios from "axios";

export default function HomeScreen({navigation}) {
    

    homeBtnPress=()=>{
    //Alert.alert("Home button is pressed....!")
    navigation.navigate('login');
    };

   
    
    
    return (
      
      <View style={styles.container}>
        <ImageBackground source={{uri:"https://raw.githubusercontent.com/akhzarna/restuarantappclone/main/assets/images/login_splash_backdrop.jpg"}}
         style={{width:360,height:760}}  >
        <View style={{flex:0.6}}>
         {/* */}
        </View>

        <View style={{flex:0.1}}>
        <Text style={{fontSize:20,fontStyle:"italic",color:"white",justifyContent:"center"}}>  Enjoy your fast food only in foodie {'   '}moodie</Text>
        <Text style={{marginBottom:20,marginTop:20,color:"white"}}>   Here is the place to buy food you want</Text>
        </View>
                 
        <View style={{flex:0.3,alignItems:"center",justifyContent:"center"}}>
        <TouchableOpacity style={[styles.button,styles.loginBtn]} onPress={homeBtnPress}>
        <Text style={{fontSize:20,color:"white"}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("SignUp")}}>
        <Text style={{fontSize:20,color:"white"}}>SignUp</Text>
        </TouchableOpacity>
        </View>

        {/* */}
       </ImageBackground>
      </View>
      
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
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
    },

    loginBtn:{
      backgroundColor:"red",
      marginBottom:20,
    },

  });