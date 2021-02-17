import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Color from '../Theme/colorConstants'
import {Platform, StyleSheet} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor : Color.primaryThemeColor,
    },viewHeader:{
        height:Platform.OS === 'android'? hp('6%'): hp('6%'),
        marginLeft:Platform.OS === 'android'? wp('5%'): wp('5%'),
        marginTop:Platform.OS === 'android'? wp('15%'): wp('15%'),
        paddingLeft:Platform.OS === 'android'? wp('3%'): wp('3%'),
        flexDirection:'row',
    },imgLogo:{
        width:Platform.OS === 'android'? wp('7%'): wp('7%'),
        height:Platform.OS === 'android'? hp('5%'): hp('5%'),
        alignSelf:'center',
        backgroundColor:Color.green
    }, txtLogo:{
        fontSize:Platform.OS === 'android'? wp('4%'): wp('4%'),
        marginLeft:Platform.OS === 'android'? wp('4%'): wp('4%'),
        color:Color.logoColorGrey,
        alignSelf:'center',
    }, txtIntro:{
        fontSize:Platform.OS === 'android'? wp('5.5%'): wp('5.5%'),
        paddingLeft:Platform.OS === 'android'? wp('4%'): wp('4%'),
        paddingRight:Platform.OS === 'android'? wp('9%'): wp('9%'),
        marginLeft:Platform.OS === 'android'? wp('5%'): wp('5%'),
        marginTop:Platform.OS === 'android'? wp('7%'): wp('7%'),
        color:Color.headerColorGrey,
        alignSelf:'center',
    }, viewLoginForm:{
        marginTop:Platform.OS === 'android'? wp('10%'): wp('10%'),
        marginLeft:Platform.OS === 'android'? wp('5%'): wp('5%'),
    }, txtHeaderEmail:{
        fontSize:Platform.OS === 'android'? wp('3%'): wp('3%'),
        marginLeft:Platform.OS === 'android'? wp('4%'): wp('4%'),
        color:Color.formHeader,
    }, inputEmail:{
        marginLeft:Platform.OS === 'android'? wp('4%'): wp('4%'),
        marginRight:Platform.OS === 'android'? wp('9%'): wp('9%'),
    }, viewPassword:{
        flexDirection:'row',
        marginRight:Platform.OS === 'android'? wp('8%'): wp('8%'),
    },txtHeaderForget:{
        fontSize:Platform.OS === 'android'? wp('4%'): wp('4%'),
        marginLeft:Platform.OS === 'android'? wp('4%'): wp('4%'),
        color:Color.formHeader,
        textAlign:'right'
    },viewForgot:{
        flex:1,
        flexDirection:'row-reverse',
    },loginView:{
        marginTop:Platform.OS === 'android'? wp('8%'): wp('8%'),
        marginLeft:Platform.OS === 'android'? wp('5%'): wp('5%'),
        marginRight:Platform.OS === 'android'? wp('10%'): wp('10%'),
        backgroundColor:Color.green,
        height:Platform.OS === 'android'? wp('14%'): wp('14%'),
        borderRadius:Platform.OS === 'android'? wp('2%'): wp('2%'),
        justifyContent:'center',
    }, textLogin:{
        fontSize:Platform.OS === 'android'? wp('5%'): wp('5%'),
        color:Color.white,
        alignSelf:'center',
    }, txtNew:{
        fontSize:Platform.OS === 'android'? wp('4%'): wp('4%'),
        marginLeft:Platform.OS === 'android'? wp('4%'): wp('4%'),
        marginTop:Platform.OS === 'android'? wp('4%'): wp('4%'),
        color:Color.formHeader,
        alignSelf:'center',
    }, txtCreate:{
        fontSize:Platform.OS === 'android'? wp('4%'): wp('4%'),
        marginLeft:Platform.OS === 'android'? wp('4%'): wp('4%'),
        marginTop:Platform.OS === 'android'? wp('2%'): wp('2%'),
        color:Color.green,
        alignSelf:'center',
    }
})
