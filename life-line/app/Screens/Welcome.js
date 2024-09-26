import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { setStatusBarBackgroundColor } from 'expo-status-bar'

export default function Welcome() {
  return (
    <View>
     

      <Image source={require('./../../assets/launch.png')}
      style={{width:390, height:510, marginTop:220,}}/>

      

      <View style={styles.Subcontainer}>

        <Text style={{textAlign:'center', marginTop:50, fontSize:20, fontWeight:'350', fontStyle:'italic', color:'#696969', marginTop:40}}>"A single act of kindness can change someone's life forever. By donating blood, you offer hope to those in need. It's a small sacrifice, but a gift that holds immeasurable value. Be the reason someone gets another chance." </Text>

        <TouchableOpacity style={styles.button} onPress={()=>console.log("Button Click")}>
        <Text style={{textAlign:'center', fontSize:30, fontWeight:'300', color:'#ffffff'}}>Get Started</Text>
        </TouchableOpacity>
      </View>

    </View>


  )
}

const styles = StyleSheet.create({
  Subcontainer:{
    borderRadius:10,
    height:'65%',
    backgroundColor:'#D2DDD0',
    marginTop:-2,
    // textAlign:'center'
    
  },

  button:{
    padding:20,
    backgroundColor:'#AE1230',
    borderRadius:99,
    marginTop:50,
    width:300,
    marginLeft:50
    
  }
})
