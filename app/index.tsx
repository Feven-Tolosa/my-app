import { Text, View, StyleSheet } from 'react-native'

export default function Index() {
  return (
    <View>
      <Text style={styles.text}>Hello Expo</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25292e',
  },
  text: {
    fontSize: 20,
    color: 'red',
  },
})
