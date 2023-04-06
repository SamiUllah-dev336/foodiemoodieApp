import * as React from 'react';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {db,app} from './firebase';
import firestore from '@react-native-firebase/firestore';
//import {collection,add, addDoc} from 'firebase/firestore';
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

import { TextInput,Text, View, StyleSheet,FlatList,Image,TouchableOpacity,SearchBar, ScrollView } from 'react-native';

import { fetchApiData } from './getApiHook';
//'deprecated-react-native-prop-types'

const popular=[
  
  {key:0,
  rating:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/640px-Empty_Star.svg.png",
  ratingPoint:'4,12',
  burgerImage:require('./assets/MonstraImage.png'),
  burgerName:"Monstra Patty",
  price:"$15"
  },

  {key:1,
  rating:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/640px-Empty_Star.svg.png",
  ratingPoint:"5,10",
  burgerImage:require('./assets/Hukl_burger-removebg-preview.png'),
  burgerName:"Hukl Burger",
  price:"$16"
  },

  {key:2,
  rating:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/640px-Empty_Star.svg.png",
  ratingPoint:"6,13",
  burgerImage:require('./assets/spicyImage-removebg-preview.png'),
  burgerName:"spicy Burger",
  price:"$17"
  },

  {key:3,
  rating:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/640px-Empty_Star.svg.png",
  ratingPoint:"6,20",
  burgerImage:require('./assets/CheeseBurger.png'),
  burgerName:"Cheese Burger",
  price:"$18"
  },

];



// const fetchData=async()=>{
// console.log(db);
// await collection(db,'user')
// .get()
// .then(documentSnapshot => {
//   console.log('User exists: ', documentSnapshot.exists);

//   if (documentSnapshot.exists) {
//     console.log('User data: ', documentSnapshot.data());
//   }
// })}
        
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

    

    //   snapshot.forEach((doc) => {
    //   console.log(doc.id, '=>', doc.data());
    // });



export default function FavouriteScreen({navigation}) {
 
//  React.useEffect(()=>{
//   fetchData();
// },[])
  

  const [Category,setCategory]=useState(collecArray('foodCategory'))
  const [PopularFood , setPopularFood] = useState(collecArray('popularFood'));

  GoBackfunc=()=>{
          navigation.goBack();     //navigation.pop(); is also applicable
  }

  return (
    
    <View style={styles.container}>
    
    

    <View style={{flex:0.25,marginBottom:10}}>
    <View style={{flex:0.3,justifyContent:'flex-end'}}>
     <Icon name={'angle-left'} size={30} onPress={GoBackfunc} style={{marginLeft:10}}/> 
    </View>
    
    <View style={{marginBottom:3,flex:0.2,justifyContent:'flex-end'}}>
    <Text style={{fontWeight:'bold',fontSize:15,marginRight:10,marginLeft:10}}>Hello SAMIULLAH!</Text>
    </View>

    
    
    
    <View style={{flex:0.5,marginBottom:10}}>
    <View>
    <Text style={{fontSize:20,fontWeight:'bold',marginBottom:10,marginLeft:10}}>Choose your favourite Food</Text>
    </View>

    <View style={{
               flexDirection:'row',
               backgroundColor:'white',
               width:'80%',
               marginLeft:10,
               marginRight:10,
               borderRadius:10,
               }}>
    
    <Image source={require('./assets/searchimage.png')} style={{marginLeft:10,marginTop:15,height:25,width:25}}/>
    <TextInput
         style={{
          height:50,
          width:220,
          alignItems:"center",
          justifyContent:"center",
          marginLeft:10, 
          
         }}
         placeholder='Search your favourite food'
         />
    <View>
    <Icon name={'sliders'} size={40} style={{marginLeft:40,marginTop:5,backgroundColor:'red',borderRadius:5}}/>    
    </View>
    </View>
    
    </View>
    
    </View>
    
    <View style={{flex:0.15,maxHeight:130}}>

    <View style={{flexDirection:"row",marginBottom:10,justifyContent:"space-between"}}>
      <Text style={{fontWeight:'bold',fontSize:15,marginLeft:10}}>Food Category</Text>
      <TouchableOpacity>
      <Text style={{fontWeight:'bold',fontSize:15,marginRight:10}}>See All</Text>
      </TouchableOpacity>
    
    </View>
    

    <FlatList
    data={Category}
    horizontal={true}
    keyExtractor={item=>item.key}
    renderItem={({item})=>(
     <View style={styles.mainCategory}>
     <View>
     <Image source={{uri:item.image1}} style={{height:30,width:30,marginRight:5}} />
     </View>
     <View>
     <Text style={{fontSize:15,fontWeight:'bold',marginLeft:10}}>{item.name}</Text>

     </View>
     </View>

    )}  
    />
   
   </View>

   <View  style={{flex:0.35}}>
    
    <View style={{flexDirection:"row",marginBottom:10,justifyContent:"space-between"}}>
      <Text style={{fontWeight:'bold',fontSize:15,marginLeft:10}}>Popular Food</Text>
      <TouchableOpacity>
      <Text style={{fontWeight:'bold',fontSize:15,marginRight:10}}>See All</Text>
      </TouchableOpacity>
    
    </View>

    <FlatList
    data={PopularFood}
    keyExtractor={item=>item.key}
    horizontal={true}
    renderItem={({item})=>(
     <View style={styles.main}>
     
     <View style={styles.rating}>
     <View style={{marginTop:3}}>
     <Image source={{uri:item.rating}} style={{height:15,width:15}} />
     </View>

     <View style={{marginRight:100}}>
     <Text style={{fontWeight:'bold'}}>{item.ratingPoint}</Text>
     </View>
   
     <View style={{marginTop:5}}>
     {/* <Image source={{uri:item.heart}} style={{height:12,width:12}} /> */}
     <Icon name={"heart-o"} size={20} color={"red"}/>
     </View>
     </View>

     <View style={styles.image}>
     <Image style={{width:130,height:130}} source={{uri:item.burgerImage}}/>
     </View>

     <View style={styles.imagName}>
      <Text style={{fontSize:15,fontWeight:'bold'}}>{item.burgerName}</Text>
      <Text>{item.price}</Text>
     </View>

     </View>
     
    )
    } 
    />
  

   
    </View>
    
  
    <View style={{flex:0.2}}>
    <Text style={{fontSize:15,fontWeight:'bold',marginLeft:10}}>Best Seller</Text>
    <FlatList
    data={PopularFood}
    keyExtractor={item=>item.key}
    horizontal={true}
    renderItem={({item})=>(
     <View style={styles.mainSeller}>
      {/* burger image */}
     <View style={{flex:0.3,alignItems:'center',justifyContent:'center'}}>
     <Image source={{uri:item.burgerImage}} style={{height:80,width:80}}/>
     </View>
     
     {/* burger name views */}
     <View style={{
                  flex:0.5,
                  
                  }}>
     
     <View style={{flex:0.5,
                  
                  justifyContent:'flex-end'}}>
     <Text style={{
                  fontSize:15,
                  marginLeft:10,
                  fontWeight:'bold'
                  }}>
     {item.burgerName}
     </Text>
     </View>
     
     <View style={{flex:0.5,
                   
                   justifyContent:'flex-start'}}>
     <Text style={{
                  fontSize:15,
                  marginLeft:10,
                  
                  }}>
     {item.price}
     </Text>
     </View>
     </View>
     
     {/* rating views */}
     <View style={{flex:0.2}}>
     {/* heart */}
     <View style={{flex:0.5,alignItems:'center',justifyContent:'flex-end'}}>
     <Icon name={"heart-o"} size={20} color={"red"}/>
     </View>
     
     <View style={{flex:0.5,flexDirection:'row'}}>
     {/* rating */}
     
     <View style={{flex:0.4,alignItems:'center'}}>
     <Image source={{uri:item.rating}} style={{height:20,width:20,marginLeft:10}}/>
     </View>
     
     <View style={{flex:0.6}}>
     <Text>{item.ratingPoint}</Text>
     </View> 
     

     </View> 
     
     </View>
     
     
     </View>
    )
    } 
    />
    
    
   
    </View>
    
    </View>
             
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FAF9F6',
    padding: 2,
  },
  mainCategory:{
    flex:1,
    flexDirection:"row",
    backgroundColor:"white",
    marginTop:10,
    marginBottom:10,
    marginLeft:10,
    marginright:10,
    padding:10,
    borderRadius:5,
    height:50,
    width:140,
    alignItems:'center',
    justifyContent:'center',
  },

  main:{
    backgroundColor:'white',
    marginRight:10,
    padding:5,
    marginBottom:10,
  },
  rating:{
    flexDirection:"row",
  },
  image:{
    alignItems:"center",
    marginBottom:20,
    
  },
  imagName:{
    alignItems:"center",
    justifyContent:"center",
  },
  mainSeller:{
    flex:1,
    height:80,
    width:340,
    marginTop:10,
    marginLeft:10,
    marginRight:10,
    borderRadius:10,
    backgroundColor:'white',
    flexDirection:'row',
  },

});
