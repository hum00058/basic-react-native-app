import { View, Text, Image, StyleSheet, Button, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../assets/data/colors'

export default function Details({ navigation: { navigate }, route }) {
  const { color } = route.params

  const colorItem = colors.find((item) => item.color == color.toLowerCase())

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: colorItem.value
      }}
    >
      <ScrollView style={{}}>
        <Image source={require('../assets/favicon.png')} style={styles.image} />
        <Text style={styles.title}>
          {color.toUpperCase()} {colorItem.value}
        </Text>
        <Button
          title="View Available Colors"
          onPress={() => navigate('List')}
        />
        <Button title="Back to Home" onPress={() => navigate('Home')} />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  image: {},
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white'
  }
})
