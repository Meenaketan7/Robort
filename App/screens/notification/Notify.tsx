import { StyleSheet, Text, View,Platform,StatusBar,SafeAreaView } from 'react-native'
import React,{useState} from 'react'
import { colors } from '../../util/color'
import { fonts, spacing } from '../../util/size'
import EmptyNotification from './EmptyNotification'
import NotifyList from './NotifyList'


const Notify = () => {
  const [currentNotification, setCurrentNotification] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      {
        !currentNotification ? (
          <EmptyNotification/>
        ):(
          <NotifyList/>
        )
      }
      
    </SafeAreaView>
  )
}

export default Notify

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
})