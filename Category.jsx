import React,{useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function CategoryScreen({navigation}) {
  
    GoBackfunc=()=>{
        navigation.goBack();     //navigation.pop(); is also applicable
    }

  return (
    <View style={styles.container}>
    <View style={{flex:0.1,backgroundColor:'red'}}>
       <View>
       <Icon name={'angle-left'} size={30} onPress={GoBackfunc} style={{marginLeft:10}}/>
       </View>
       <View>
       <Text>Category</Text>
       </View>
    </View>
    <View style={{flex:0.9,backgroundColor:'blue'}}>


    </View>
    </View>
  );

}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
