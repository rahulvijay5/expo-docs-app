import { Link } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text} className='max-w-72 text-justify mb-8'>
        This app is all about learning and creating the first app. It's nothing to have with my skills or so.
      </Text>
      <Link href="/" className='bg-orange-500 w-72 p-4 font-bold mt-2 rounded-lg '>Go to Home</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
