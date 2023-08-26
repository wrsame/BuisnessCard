import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
  
<View style={styles.container}>
  <View style={styles.card}>
  <Image
    style={styles.profileImage}
    source={{
    uri: 'https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png',
    }} 
    resizeMode="contain"
  />
      <Text style={styles.name}>Jawaahir Warsame</Text>
      <Text style={styles.jobTitle}>Software Developer</Text>
      <Text style={styles.contact}>Email: jawa0262@stud.kea.dk</Text>
      <Text style={styles.contact}>Phone: (+45) 456-7890</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({

container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'darkblue'
  },
  card: {
    backgroundColor: '#b2ebf2',
    padding: 20,
    borderRadius: 10,
    elevation: 10,
    textAlign: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  jobTitle: {
    fontSize: 18,
    marginBottom: 16,
    textAlign: 'center',
  },
  contact: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
  },


  profileImage:{
    width: 120, 
    height: 120, 
    alignSelf: 'center'
  }
});
