import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useEffect, useState } from 'react'
import colors from '../assets/data/colors'

export default function Home({ navigation: { navigate }, route }) {
  const [text, onChangeText] = useState('')
  const [match, setMatch] = useState(true)

  useEffect(() => {
    const foundMatch = colors.some((item) => text.toLowerCase() === item.color)
    setMatch(!foundMatch)
  }, [text])

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Basic React App</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Enter a color"
        />
        <Text>
          The color details will be available if you enter a valid color.
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            title="View Color Details"
            onPress={() => navigate('Details', { color: text })}
            disabled={match}
          />
        </View>
        <Button
          title="View Available Colors"
          onPress={() => navigate('List')}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5
  },
  title: {
    fontSize: 32,
    fontWeight: 'semibold',
    marginVertical: 10
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
    padding: 5,
    marginVertical: 10
  },
  buttonContainer: {
    marginVertical: 10
  }
})
