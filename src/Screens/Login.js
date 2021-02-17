import React, {Component, component} from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, Button, KeyboardAvoidingView } from 'react-native'
import Color from '../Theme/colorConstants'
import styleValue from '../styles/loginstyle'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'


export default class Login extends Component{
    render(){
        return(
            <View style={styleValue.container}>
                <View style={styleValue.viewHeader}>
                    <Image style={styleValue.imgLogo}></Image>
                    <Text style={styleValue.txtLogo}>finished</Text>
                </View>
                <KeyboardAwareScrollView>
                <Text style={styleValue.txtIntro}>Talk With a Vetted Home Service Pro in Less Time Than It Takes To Catch An Uber</Text>

                <View style={styleValue.viewLoginForm}>
                    <Text style={styleValue.txtHeaderEmail}>Email address</Text>
                    <TextInput underlineColorAndroid={Color.formHeader}  style={styleValue.inputEmail}></TextInput>
                </View>

                <View style={styleValue.viewLoginForm}>
                    <View style={styleValue.viewPassword}>
                        <TouchableOpacity >
                            <Text style={styleValue.txtHeaderEmail}>Password</Text>
                        </TouchableOpacity>
                        <View style={styleValue.viewForgot}>
                            <Text style={styleValue.txtHeaderForget}>Forgot password?</Text>
                        </View>
                    </View>
                    <TextInput secureTextEntry={true} underlineColorAndroid={Color.formHeader}  style={styleValue.inputEmail}></TextInput>

                    <TouchableOpacity style={styleValue.loginView}>
                        <Text style={styleValue.textLogin}>Login</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styleValue.txtNew}>New?</Text>
                <Text style={styleValue.txtCreate}>Create Account Here</Text>
                </KeyboardAwareScrollView>

            </View>
        )
    }
}