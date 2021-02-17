import React from 'react'
import { View, Image, Platform,StyleSheet, Text } from 'react-native'
import { useTheme } from '@/Theme'
import Color from '../Theme/colorConstants'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const BoardingHeaderTxt = (props) => { 
   
    console.log(props)
    return (
      <Text style={styles.txtHeader}>{props.text}</Text>
    )
  }

  const styles = StyleSheet.create({
    txtHeader:{
        paddingLeft:Platform.OS === 'android'? hp('6%'): hp('6%'),
        paddingRight:Platform.OS === 'android'? hp('6%'): hp('6%'),
        marginRight:Platform.OS ==='android' ?  wp('1%'): wp('1%'),
        marginBottom:Platform.OS ==='android' ?  wp('10%'): wp('10%'),
        fontSize:Platform.OS === 'android'? wp('7.5%'): wp('8.5%'),
        color:Color.headertxtColor,
        fontFamily: 'ARIAL'
    }
})

  export default BoardingHeaderTxt