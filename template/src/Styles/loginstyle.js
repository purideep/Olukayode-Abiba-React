import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Color from '../Theme/colorConstants'
import {Platform, StyleSheet} from 'react-native'

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor : Color.primaryThemeColor,
    },keyView:{
        paddingLeft:Platform.OS === 'android'? hp('6%'): hp('6%'),
        paddingRight:Platform.OS === 'android'? hp('6%'): hp('6%'),
    }, txtLogo:{
        fontSize:Platform.OS === 'android'? wp('4%'): wp('4%'),
        marginLeft:Platform.OS === 'android'? wp('4%'): wp('4%'),
        color:Color.logoColorGrey,
        alignSelf:'center',
    }, viewLoginForm:{
        marginTop:Platform.OS === 'android'? wp('10%'): wp('10%'),
    }, txtHeaderEmail:{
        fontFamily:'Nunito-Regular',
        fontSize:Platform.OS === 'android'? wp('4%'): wp('4%'),
        color:Color.formHeader,
    }, viewPassword:{
        flexDirection:'row',
    },txtHeaderForget:{
        fontSize:Platform.OS === 'android'? wp('3%'): wp('3%'),
        marginLeft:Platform.OS === 'android'? wp('4%'): wp('4%'),
        color:Color.formHeader,
        fontFamily:'Nunito-Regular',
        textAlign:'right'
    },viewForgot:{
        flex:1,
        alignSelf:'center',
        flexDirection:'row-reverse',
    }, txtNew:{
        fontSize:Platform.OS === 'android'? wp('3%'): wp('3%'),
        marginLeft:Platform.OS === 'android'? wp('4%'): wp('4%'),
        marginTop:Platform.OS === 'android'? wp('4%'): wp('6%'),
        color:Color.formHeader,
        fontFamily:'ARIAL',
        alignSelf:'center',
    }, txtCreate:{
        fontFamily:'Nunito-Regular',
        fontSize:Platform.OS === 'android'? wp('4%'): wp('4%'),
        marginLeft:Platform.OS === 'android'? wp('4%'): wp('4%'),
        marginTop:Platform.OS === 'android'? wp('2%'): wp('2%'),
        color:Color.green,
        alignSelf:'center',
    }, bottomSpace:{
        height:Platform.OS === 'android'? hp('2%'): hp('2%'),
    }
})