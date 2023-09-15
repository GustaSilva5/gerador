import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Slider from '@react-native-community/slider'

export default function App(){
  return (
    <View style={styles.container}>
      <Image 
      source={require("./assets/logo.png")}
      styles={styles.logo}
      />

      <Text styles={styles.title}> 20 Caracteres </Text>

      <View style={styles.area}>
        <Slider 
        style={{ height: 60}}
        minimumValue={6}
        maximimValue={20}
        maximumTrackTintColor="#ff0000"
        minimumTrackTintColor="#000"
        thumbTintColor="#392de9"
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> Gerar Senha</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:10,
    backgroundColor: "#F3F3FF",
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    marginBottom: 60,
  },
  area:{
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 6,
  },
  button:{
    backgroundColor: "#392de9",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 18,
  },
  buttonText:{
    color: "#fff",
    fontSize: 20,
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold', 
  }
})
