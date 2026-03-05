import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {styles} from './css/style';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Bem vindo!</Text>
      <Link style={styles.btn} href="/dashboard">Dashboard</Link>
      <StatusBar style="auto" />
    </View>
  );
}


