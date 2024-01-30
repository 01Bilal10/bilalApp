import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {

  return (

    <View style={styles.card}>
      <View style ={styles.typing1}>
      <View style={styles.typing2}></View>
      <Text style={styles.txt2}> enter name :   </Text>
      </View>


      <Text style={styles.txt}> UI  </Text>

    </View>
  )
}

export default App

const styles = StyleSheet.create({

  card: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems:'center',
  },
  typing1:{
    flex:2,
    marginTop:33,
    marginBottom:25,
    marginLeft:25,
    marginRight:25,
    backgroundColor: 'blue',
  },
  typing2:{

  },
  txt: {
    fontWeight: "bold",
    fontSize: 50,
    color: 'green',
  },
  txt2:{
    padding:1,
    paddingLeft:10,
    color:"yellow"
  },



})