import React from 'react'
import { View, Platform,StyleSheet, ImageBackground, Button, Image } from 'react-native'
import Color from '../Theme/colorConstants'
import { useTheme } from '@/Theme'
import ImageBoarding from '../Assets/Images/boardingImg.png'; 
import ImageTransparent from '../Assets/Images/boardingtransparent.png'; 
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomButton from './CustomButton';
import styleValue from '../Styles/boardingstyle'

const BoardingBackground = (props) => {  

    onButtonClick = (target) =>{
        props.onButtonClick(props.id)
    }

    console.log(props)
    return (
      <View style={styles.container}>
            <ImageBackground style={styles.imgBackground} source={ImageBoarding}>
                <Image style={styles.transprentColor} source={ImageTransparent}></Image>   
                <CustomButton onButtonClick={onButtonClick} text={props.text}></CustomButton>

            </ImageBackground>

      </View>
    )
  }

  const styles = StyleSheet.create({

    container:{
        flex:1,
    },txtHeader:{
        marginTop:Platform.OS ==='android' ?  wp('4%'): wp('0%'),
        marginRight:Platform.OS ==='android' ?  wp('1%'): wp('1%'),
        marginBottom:Platform.OS ==='android' ?  wp('10%'): wp('10%'),
        fontSize:Platform.OS === 'android'? wp('8%'): wp('8.5%'),
        color:Color.headertxtColor,
        fontFamily: 'ARIAL'
    },imgBackground:{
        justifyContent: 'flex-end',
        resizeMode: 'cover',
        paddingLeft:Platform.OS ==='android' ?  wp('25%'): wp('20%'),
        paddingRight:Platform.OS ==='android' ?  wp('25%'): wp('20%'),
        paddingBottom:Platform.OS ==='android' ?  wp('10%'): wp('10%'),
        flex:1,
        width:wp("100%"),
    }, transprentColor:{
        opacity:0.5,
        backgroundColor:Color.white,
        position:'absolute',
        marginRight:Platform.OS ==='android' ?  wp('20%'): wp('20%'),
        paddingBottom:Platform.OS ==='android' ?  wp('20%'): wp('20%'),
        width:Platform.OS ==='android' ?  wp('90%'): wp('90%'),
        height:Platform.OS ==='android' ?  hp('50%'): hp('50%'),

    }
})

  export default BoardingBackground