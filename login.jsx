import { TouchableOpacity,StyleSheet, Text, View, TextInput,Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { fetchApiData } from './getApiHook';
import { postApiHook } from './postApiHook';
import {auth} from "./firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously, onAuthStateChanged } from "firebase/auth";

import app from "./firebase";
import {getDatabase,ref,onValue} from "firebase/database";


export default function LoginScreen({navigation}) {
    const [Email,setEmail]=useState("");
    const [Password,setPassword]=useState();
    // const user={
    //   "userId": 1,
    //   "id": 11,
    //   "title": "I am samiullah"
    // } 
    
    ProfBtnPress=()=>{    
      //Alert.alert("Home button is pressed....!")
      // handleLogin();
      //console.log("login function is handled....")
      navigation.navigate('Favorites');
  };
    // useEffect(()=>{
    // // post api data using axios
    // console.log("post api data...in useeffect...");
    // let url="https://jsonplaceholder.typicode.com/users/1/albums";
    // postApiHook(url,user);
    // },[])
    
    


    // fetch api data using axios..
    // console.log("fetch api data.....!")
    // let url="https://jsonplaceholder.typicode.com/users/1/albums";
    
    // const handleLogin = async () => {
    //   console.log('Handle Sign In')
    //   await signInWithEmailAndPassword(auth, Email, Password)
    //     .then((userCredential) => {
    //       // Signed in
    //       console.log(Email);
    //       console.log(Password);
    //       const user = userCredential.user;
    //       console.log("user data,", user);
    //       console.log("user data,", user);
    //       // ...
    //     })
    //     .catch((error) => {
    //       console.log("Email=>" + Email);
    //       console.log("Password=>" +Password);
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       console.log("Error,", errorMessage);
    //       // ..
    //     });
    // };
  
    
  // useEffect(()=>{
  //   const db=getDatabase(app);
  //   const dbRef=ref(db,"best");
  //   console.log("Receiving data...");

  //   onValue(dbRef,(snapshot)=>{
      
  //     let data=snapshot.val();
  //     const {Email,Password}=data;
  //     console.log("Testing data..");
  //     console.log("sami data..",data[0]);
  //   })



  // },[])

    return (
      
      <View style={styles.container}>
      
         <View style={{
               flex:0.1
               }}>     
         <Text style={{fontWeight:"bold",fontSize:30,marginRight:180}}>WELCOME</Text>
         
         </View>
         
         <View style={{flex:0.1}}>
         <Image
         style={styles.logo}
         source={{uri:"https://raw.githubusercontent.com/akhzarna/restuarantappclone/main/assets/images/logo.png"}}
         />
         </View>
         

         <View style={styles.EM_PS_login}>
         
         <View style={{flexDirection:"row",backgroundColor:"white",marginBottom:10}}>
         <Image style={{height:20,width:20,marginTop:15,marginLeft:10,marginRight:10}}
         source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxN8M0Blz13swQpjPDsgr5UPmB82B55neTEiHQnyhfg&s"}}/>
         
         <TextInput
         style={styles.textinpt}
         placeholder='Email'
         value={Email}
         onChangeText={(Email)=>{
          setEmail(Email)
         }}
         />
         </View>
         
         <View style={{flexDirection:"row",backgroundColor:"white",marginBottom:10}}>
         <Image style={{height:20,width:20,marginTop:15,marginLeft:10,marginRight:10}}
         source={{uri:"https://icon2.cleanpng.com/20180218/jgq/kisspng-password-computer-security-scalable-vector-graphic-unlocked-lock-cliparts-5a89c26ac29879.2081123815189776427971.jpg"}}/>
         

         <TextInput 
         style={styles.textinpt}
         placeholder='Password'
         value={Password}
         onChangeText={(Password)=>{
          setPassword(Password)
         }}
         />
         </View>

         <Text style={{marginBottom:10,textAlign:"right"}}>Forgot Password?</Text>
         
         <TouchableOpacity style={styles.button} onPress={ProfBtnPress}>
         <Text style={{fontSize:20,color:"white"}}>Login</Text>
         </TouchableOpacity>
        
         <Text style={{marginBottom:10,textAlign:"center"}}>or login with</Text>
         
         </View>

         
        <View style={{flex:0.1,flexDirection:'row',alignItems:"center"}}>
        <Text>new on foodie moodie?</Text>
        <TouchableOpacity 
            onPress={()=>{
              navigation.navigate('SignUp');
            }}>
  
          <Text>Sign Up</Text>
        </TouchableOpacity>
        </View>
               
      </View>
      
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      padding:10,
      flex: 1,
      backgroundColor: '##FAF9F6',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:"#f5f5f5",
    },

    logo:{
      height:60,
      width:300,
      marginBottom:20,
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
    },
 
  });

