import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'

type ButtonProps = {
    label?:String;
    theme?:'primary';
}

export default function Button({label,theme}:ButtonProps) {
  if (theme=='primary'){
    return(
      <View style={[styles.buttonContainer]} className='border-2 rounded-xl border-white'>
<Pressable
          style={[styles.button, { backgroundColor: '#fff' }]} className='rounded-xl'
          onPress={() => alert('You pressed a button.')}>
          <FontAwesome name="picture-o" size={18} color="#25292e" className='pr-4' />
          <Text style={[styles.buttonLabel, { color: '#25292e' }]}>{label}</Text>
        </Pressable>
      </View>
    )
  }
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={()=>alert('Button is pressed.')}>
        <Text style = {styles.buttonLabel}>{label? label:"I am a Button."}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
})