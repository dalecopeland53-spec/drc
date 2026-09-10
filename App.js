import React from 'react';
import {SafeAreaView,Text,StyleSheet} from 'react-native';

export default function App(){
  return(
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>DRC TEST APP</Text>
      <Text style={styles.text}>BUILD SUCCESSFUL</Text>
      <Text style={styles.golf}>⛳</Text>
    </SafeAreaView>
  );
}

const styles=StyleSheet.create({
  screen:{flex:1,backgroundColor:'#111',alignItems:'center',justifyContent:'center'},
  title:{fontSize:30,fontWeight:'bold',color:'#fff'},
  text:{fontSize:20,color:'#fff',marginTop:15},
  golf:{fontSize:60,marginTop:20}
});
