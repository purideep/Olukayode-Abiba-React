import React,{useEffect,useState,useRef,Component} from 'react';
import { View,Text,TouchableOpacity } from 'react-native';
import styleValue from '../Styles/loginstyle'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import Header from '../Components/Header';
import HeaderTxt from '../Components/HeaderTxt';
import CustomTextInput from '../Components/CustomTextInput';
import CustomButton from '../Components/CustomButton';

const emailRef = React.createRef()
const passRef = React.createRef()

export default class Login extends Component {

    constructor(props){
        
        super(props)
        this.state ={
            email:'',
            password:'',
        }

    }
    onTextInput = (target, value) => {
        this.setState({ [target]: value });
    };

    onButtonClick = (target) =>{
        console.log("click",target)
        // this.props.navigation.navigate('boarding') 
    }


    render(){
        return(
            <View style={styleValue.container}>
                <KeyboardAwareScrollView style={styleValue.keyView}>
                        <Header/>
                        <HeaderTxt text="Talk With a Vetted Home Service Pro in Less Time Than It Takes To Catch An Uber"/>
                        <CustomTextInput text="Email address" header={true} onTextInput={this.onTextInput} secureInput={false} id="email" refAccess={emailRef}/>
                        <View style={styleValue.viewLoginForm}>
                            <View style={styleValue.viewPassword}>
                                <TouchableOpacity onPress={() => { passRef.current.focus()}}>
                                    <Text style={styleValue.txtHeaderEmail}>Password</Text>
                                </TouchableOpacity>
                                <View style={styleValue.viewForgot}>
                                    <TouchableOpacity onPress={() => {}}>
                                        <Text style={styleValue.txtHeaderForget}>Forgot password?</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <CustomTextInput text="Password" header={false} onTextInput={this.onTextInput} secureInput={true} id="password" refAccess={passRef}/>
                            <CustomButton text="Login" onButtonClick = {this.onButtonClick} id="login"/>
                        </View>
                        <Text style={styleValue.txtNew}>New?</Text>
                        <Text style={styleValue.txtCreate}>Create Account Here</Text>
                        <View style={styleValue.bottomSpace}/>
                </KeyboardAwareScrollView>
            </View>
        )
    }
}
