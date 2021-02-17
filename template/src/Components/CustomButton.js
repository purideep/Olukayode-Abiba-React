import React from 'react'
import { Platform,StyleSheet, Text,TouchableOpacity } from 'react-native'
import Color from '../Theme/colorConstants'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const CustomButton = (props) => {  
    return (
        <TouchableOpacity style={styles.btnView} onPress={() => {props.onButtonClick(props.id)}}>
            <Text style={styles.btnTxt}>{props.text}</Text>
        </TouchableOpacity>

    )
  }

  const styles = StyleSheet.create({
    btnView:{
        
        marginTop:Platform.OS === 'android'? wp('4%'): wp('6%'),
        backgroundColor:Color.green,
        height:Platform.OS === 'android'? wp('14%'): wp('14%'),
        borderRadius:Platform.OS === 'android'? wp('2%'): wp('2%'),
        justifyContent:'center',
    },
    btnTxt:{
        fontSize:Platform.OS === 'android'? wp('4%'): wp('5%'),
        color:Color.white,
        alignSelf:'center',
        fontFamily:'Nunito-Regular'
    }
})

  export default CustomButton