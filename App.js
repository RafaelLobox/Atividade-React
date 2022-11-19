import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Weslley Rafael Lobo de Sena</Text>
      <StatusBar style="auto"/>
      <Image
        style={{width: 150, height: 150,borderRadius: 10}}
        source={require('./assets/pingu.jpeg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  name:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15
  }
});
