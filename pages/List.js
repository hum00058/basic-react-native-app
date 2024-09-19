import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Pressable,
  Button
} from 'react-native'

import colors from '../assets/data/colors'

export default function RecentTransactions({
  navigation: { navigate },
  route
}) {
  return (
    <SafeAreaView>
      <Button title="Back to Home" onPress={() => navigate('Home')} />
      <FlatList
        data={colors}
        renderItem={({ item }) => (
          <View>
            <View
              style={{
                backgroundColor: item.value,
                width: '100%',
                height: 100,
                alignItems: 'center'
              }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  marginVertical: 10,
                  fontWeight: 'bold',
                  color: 'white'
                }}
              >
                {item.color.toUpperCase()}
              </Text>
              <Pressable
                onPress={() => navigate('Details', { color: item.color })}
                style={styles.button}
              >
                <Text>View {item.color.toUpperCase()} Details</Text>
              </Pressable>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.value}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 2
  }
})
