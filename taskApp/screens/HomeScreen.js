import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const HomeScreen = () => {

  const loadTasks = async () => {
    const response = await fetch('http://10.0.2.2:3000/tasks')
    const data = await response.json()
    console.log(data)
  }

  useEffect(() => {  
    loadTasks()
  }, [])
  
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})