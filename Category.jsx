import React,{useEffect, useState} from 'react';
import { Image,FlatList,StyleSheet, Text, View, Touchable, TouchableOpacity } from 'react-native';
import Header from './header';
import { getDatabase, ref, onValue, set, update } from "firebase/database";

import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
import {db,app} from './firebase';
import firestore from '@react-native-firebase/firestore';




export default function CategoryScreen({navigation,route}) {
  
    const collecArray=(collec)=>{
      const snapshot = collection(db, collec);   // or getFirestore() replace by db
      //console.log(ref);
      const arr=new Array;
      const q = query(snapshot,ref)           // it can work without ref
      onSnapshot(q, snapshot=>{
        // console.log('Fetched', snapshot.docs)
        snapshot.docs.forEach(doc=>{
          //console.log(doc.id,doc.data())
          arr.push(doc.data());
        })
      }
      )
      return arr;
     }

  const num=2; 
   const [passFlat,setpassFlat]=useState([]);
   
   const [Kebab,setKebab]=useState(collecArray("Kebab"));
   const [Fried,setFried]=useState(collecArray("Fried"));
   const [Burger,setBurger]=useState(collecArray("Burger"));
   const [Shawarma,setShawarma]=useState(collecArray("Shawarma"));
   //console.log(route.params.data.name);
   useEffect(()=>{
   
    if(route.params.data.name=='Kebab'){
     //console.log(route.params.data.name)
      setpassFlat(Kebab);
     }else if(route.params.data.name=='Fries'){    
      //console.log(route.params.data.name)
       setpassFlat(Fried);
     } else if(route.params.data.name=='Burger'){
      //console.log(route.params.data.name)
       setpassFlat(Burger);
     }else{
      setpassFlat(Shawarma);

     }
  
    },[])

   return (
    <View style={styles.container}>
    <View style={{
                 flex:0.1,
                 backgroundColor:'white',
                 flexDirection:'row',
                 alignItems:'center',
                 justifyContent:'space-between',
                 marginTop:30,
                 }}>

    <Header head='Category' navigation={navigation}/> 
    </View>
    <View style={{flex:0.9}}>
    
    <FlatList
    data={passFlat}
    horizontal={false}
    numColumns={num}
    keyExtractor={item=>item.key}
    renderItem={({item})=>(
     
     <View style={styles.flatcontainer}>
     
     <View style={{flex:0.7}}>
     <Image source={{uri:item.image}} style={{height:120,width:150,marginRight:5,resizeMode:'contain'}} />
     </View>
     
     <View style={{flex:0.3,alignItems:'center'}}>
     <Text>{item.title}</Text>
     <Text>{item.price}</Text>
     </View>
     
     </View>
     

    )}  
    />
    </View>
    </View>
  );

}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
    padding:10,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  flatcontainer:{
    
    flex:1,
    height:200,
    width:150,
    marginRight:10,
    marginBottom:10,
    borderRadius:10,
    backgroundColor:'white',
    
  },
});
