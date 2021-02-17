import React  from 'react'
import { View, Platform,StyleSheet, Text,TextInput,TouchableOpacity } from 'react-native'
import Color from '../Theme/colorConstants'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const CustomTextInput = (props) => {  
    return (
        <View>
            {props.header ? 
              <TouchableOpacity onPress={() => { 
                props.onTextInputHeaderClick(textInput)
                props.refAccess.current.focus()}
                 }>
                <Text style={styles.txtHeader}>{props.text}</Text>
              </TouchableOpacity>
                :
                null
            }
            
            <TextInput underlineColorAndroid={Color.formHeader} 
             style={styles.inputEmail}
             ref={props.refAccess} 
             secureTextEntry={props.secureInput}
             onChangeText={text => {
                 props.onTextInput(props.id,text)
                } }
             ></TextInput>

             <View style={styles.viewLine}>

             </View>
             
        </View>

    )
  }

  const styles = StyleSheet.create({
    txtHeader:{
        marginTop:Platform.OS === 'android'? wp('10%'): wp('10%'),
        fontSize:Platform.OS === 'android'? wp('4%'): wp('4%'),
        color:Color.formHeader,
        fontFamily:'Nunito-Regular',
    }, inputEmail:{
        fontFamily:'Nunito-Regular',
        marginTop:Platform.OS === 'android'? wp('0%'): wp('2%'),
        fontSize:Platform.OS === 'android'? wp('4%'): wp('4%'),
    },viewLine:{
      height:Platform.OS === 'android'? wp('0%'): wp('0.1%'),
      backgroundColor:Color.formHeader
    }
})

  export default CustomTextInput