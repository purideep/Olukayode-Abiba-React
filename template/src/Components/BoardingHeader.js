import React from 'react'
import { View, Image, Platform,StyleSheet,StatusBar } from 'react-native'
import { useTheme } from '@/Theme'
import Color from '../Theme/colorConstants'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const BoardingHeader = () => {  
    const { Layout, Images } = useTheme()

    return (
      <View style={styles.container}>
        <StatusBar  backgroundColor={Color.white}></StatusBar>
         <Image style={styles.imgLogo} source={Images.logo} resizeMode="contain"/>
      </View>
    )
  }

  const styles = StyleSheet.create({
      container:{
        paddingLeft:Platform.OS === 'android'? hp('6%'): hp('6%'),
        paddingRight:Platform.OS === 'android'? hp('6%'): hp('6%'),
        width:Platform.OS ==='android' ?  wp('100%'): wp('100%'),
        backgroundColor:Color.white
      },imgLogo:{
          marginTop:Platform.OS ==='android' ?  wp('7%'): wp('1%'),
          width:Platform.OS ==='android' ?  wp('60%'): wp('55%'),
          height:Platform.OS ==='android' ?  hp('15%'): hp('15%'),
      }
  })
  
  export default BoardingHeader


