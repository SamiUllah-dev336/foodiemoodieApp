import {Platform,KeyboardAvoidingView, TouchableOpacity,Alert, StyleSheet, Text, View,TextInput, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import CheckBox from "react-native-check-box"
import {auth,db} from "./firebase";

import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously, onAuthStateChanged } from "firebase/auth";

import {collection,add, addDoc} from 'firebase/firestore'
import firestore from '@react-native-firebase/firestore';
//import { Icon } from 'react-native-vector-icons/Icon';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SignUpScreen({navigation,route}) {
    const [isSelected,setisSelected]=useState(false);  
    const [Email,setEmail]=useState('');
    const [Password,setPassword]=useState();
    const [Name,setName]=useState('');
    const [ConfirmPassword,setConfirmPassword]=useState('');
    
    
        SignUpBtnPress=()=>{
        //Alert.alert("Home button is pressed....!")
        navigation.navigate('Favorites');
        };
        GoBackfunc=()=>{
          navigation.goBack();     //navigation.pop(); is also
        }
        
        //it is for authentication....
        // const handleSignup = async () => {
          
      
        //   console.log('LOGGED')
        //   await createUserWithEmailAndPassword(auth, Email, Password)
        //     .then((userCredential) => {
        //       // Sign Up
        //       console.log(Email);
        //       console.log(Password);
        //       console.log("Succesfull");
        //       const user = userCredential.user;
        //       console.log("user data,", user);
              
        //       // match password and confirm password
        //       if(Password!=ConfirmPassword){
        //         Alert.alert("Password and confirm password does'nt match!"); 
                
        //       }  
              
        //       // write code to save your data in firestore
        //       // FirebaseError.firestore.write(user.uid,user.uid)
              
        //       addDoc(collection(db,'user'),{
        //         uid:user.uid,
        //         name:Name,
        //         email:Email,
        //         password:Password,
        //         // ConfirmPass:ConfirmPassword
        //       })

        //     })
        //     .catch((error) => {
        //       const errorCode = error.code;
        //       const errorMessage = error.message;
        //       console.log('Error Code == ',errorCode)
        //       console.log('Error Message == ',errorMessage)
        //       // ..
        //     });
        // };
  
      
    return (
      
      <View style={styles.container}>
      
        {/* ,alignItems:"center",justifyContent:"flex-start" */}
        

        <View style={{
                    flex:0.1,
                    marginTop:10,
                    marginBottom:10,
                    flexDirection:'row',
                    alignItems:"center",
                    justifyContent:"center",
                    marginRight:190,
                     }}>
          <Icon name={'angle-left'} size={30} 
                style={{fontWeight:'bold',marginRight:15}}
                onPress={GoBackfunc}
                />
          <Text style={{fontSize:30,
                        fontWeight:"bold",
                        }}>Sign Up</Text>
        </View>
        
        <View style={{
               flex:0.7,
               
                    }}>
         <Text style={styles.textHeader}>Email</Text> 
         
         <View style={styles.textinptView}>
         <TextInput
         style={styles.textinpt}
         placeholder='Email'
         onChangeText={(Email)=>{
               
               setEmail(Email)
         }}
         />
         </View>
         
         <Text style={styles.textHeader}>Name</Text>
         
         <View style={styles.textinptView}>
         <TextInput
         style={styles.textinpt}
         placeholder='Name'
         onChangeText={(Name)=>{
          
          setName(Name)
         }}
         />
         </View>

         <Text style={styles.textHeader}>Password</Text>
         
         <View style={styles.textinptView}>
         <TextInput
         style={styles.textinpt}
         placeholder='Password'
         
         onChangeText={(Password)=>{
         setPassword(Password);
         }}
         />
         </View>

         <Text style={styles.textHeader}>Confirm Password</Text>
         
         <View style={styles.textinptView}>
         <TextInput
         style={styles.textinpt}
         placeholder='Confirm Password'
         onChangeText={(ConfirmPassword)=>{
          setConfirmPassword(ConfirmPassword);
          }}
         />
         </View>

         
         <View style={{flexDirection:"row",marginBottom:10,marginTop:10}}>
         <CheckBox
          isChecked={isSelected}
          onClick={()=>
                    setisSelected(!isSelected)
                      }
          style={{height:15,width:15,marginRight:10,borderRadius:20}}
         />
          <Text>I accept the term of use and privacy policy</Text>
         </View>

         <TouchableOpacity style={styles.button} onPress={SignUpBtnPress}>
         <Text style={{fontSize:20,color:"white"}} >Sign Up</Text>
         </TouchableOpacity>
         
         
        </View>

        <View style={{
              flex:0.1,
              flexDirection:"row",
              alignItems:"center",
              justifyContent:"center",
        }}>
          <Text>Already on foodie moodie?</Text>
          <TouchableOpacity 
                onPress={()=>{
                         navigation.navigate("login");
                         }}>
            <Text>Sign in</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '##FAF9F6',
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
      backgroundColor:"red",
      marginBottom:10,
     },
     textinpt:{
      height:50,
      width:250,
      alignItems:"center",
      justifyContent:"center",
      marginLeft:10, 
    },
    textinptView:{
      marginBottom:10,
      backgroundColor:"white",
      borderRadius:10,
    },
    textHeader:{
      fontSize:15,
      fontWeight:"bold",
      marginBottom:10,
    }
  });