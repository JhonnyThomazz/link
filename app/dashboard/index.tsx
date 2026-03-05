import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {styles} from '../css/style';
import {Link} from 'expo-router';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Dashboard</Text>
      <Link style={styles.btn} href="/">Voltar</Link>
      <StatusBar style="auto" />
    </View>
  );
}