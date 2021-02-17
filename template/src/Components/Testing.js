import React,{useEffect,useState,useRef} from 'react';
import { TextInput,View,Text,TouchableOpacity,Image,KeyboardAvoidingView,Platform,ScrollView,StyleSheet,Keyboard } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Toast from 'react-native-simple-toast';
import { useNavigation,useRoute } from '@react-navigation/native';
import { connect } from 'react-redux';
import {Check,Uncheck} from "../../../Utils/images"
import {Login,Logout} from '../../../Redux/Actions/login_action'
import { emailValidation } from '../../../Utils/Validator';
import COLOR_CONST from "../../../Theme/colorConstants"

function LoginScreen(props){

    const EmailText = useRef();
    const PhoneText = useRef();
    const PasswordText = useRef();
    const ConPasswordText = useRef();
    const fnameText = useRef(null);
    const lnameText = useRef(null);

    const navigation = useNavigation();
    const route = useRoute();

    const [loginActive,setloginActive] = useState(true)
    const [fname,setFirstName] = useState("")
    const [lname,setLastName] = useState("")
    const [loginEmail,setLoginEmail] = useState("")
    const [email,setEmail] = useState("")

    const [phoneNumber,setphoneNumber] = useState("")
    const [loginPassword,setLoginPassword] = useState("")
    const [password,setpassword] = useState("")

    const [conpassword,setconpassword] = useState("")
    const [rememberCheck,setRememberCheck] = useState(false)
    const [termsCheck,setTermsCheck] = useState(false)

    useEffect(()=>{
      if(route.params.Signup){
        setloginActive(false)
      }
    },[])

    const Login=()=>{
      if (loginEmail.trim() == "" || loginPassword.trim() == "") {
        Toast.show('Please enter Email and Password')
      }
      else if (loginPassword.trim().length < 6) {
        Toast.show("Please enter a min 6 digit password")
      }
      else if (!emailValidation(loginEmail)) {
        Toast.show("Please enter a valid Email Address")
      }
      else {
        props.Login("Test")
      }
    }
    const Signup = () => {
      if (fname.trim() == "" ||lname.trim() == "" || email.trim() == "" || phoneNumber.trim() == "" || password.trim() == "" || conpassword.trim() == "") {
        Toast.show("Please enter all the mandatory fileds")
      }
      else if (password.trim().length < 6) {
        Toast.show("Password should have minimum 6 characters")
      }
      else if (!emailValidation(email)) {
        Toast.show("Please enter a valid Email Address")
      }
      else if (phoneNumber.length == 11 && phoneNumber.charAt(0) != 1) {
        Toast.show("Please enter a valid Phone number")
      }
      else if (phoneNumber.length < 10) {
        Toast.show("Please enter a valid Phone number")
      }
      else if (password.trim() != conpassword.trim()) {
        Toast.show("Password and Confirm password should be same")
      }
      else if (!termsCheck) {
        Toast.show("Please accept all the terms and conditions")
      }
      else {
        navigation.navigate("Verification")
     }
    }
    const Forgot = () =>{
      navigation.navigate("Forgot")
    }

    const loginComponent = () =>{
      return(
        <View style={{position:"absolute",top:hp("20%"),width:"90%", }}>
          <KeyboardAvoidingView behavior={"padding"}
            style={{ flexGrow: 1,height: hp("27%") }} >
            <ScrollView style={{backgroundColor:'#FFF'}}> 
              <View style={{ marginHorizontal : wp('8%'),backgroundColor:COLOR_CONST.white}}>
                <View style={{marginTop:hp("2%")}}>
                    <View style={styles.text_view  }>
                      <TextInput placeholder="Email" 
                                maxLength={30} 
                                onSubmitEditing={()=>PasswordText.current.focus()} 
                                value={loginEmail} 
                                placeholderTextColor={COLOR_CONST.placeHolder}
                                style={{width:wp("60%"),fontSize:hp("2.5%")}}
                                onChangeText={(text) => {setLoginEmail(text)}}/>
                    </View>
                    <View style={[styles.text_view,{marginTop:hp("2%")}]}>
                      <TextInput placeholder="Password" 
                                maxLength={30} 
                                secureTextEntry={true}
                                ref={PasswordText}
                                onSubmitEditing={()=>Keyboard.dismiss()} 
                                value={loginPassword} 
                                placeholderTextColor={COLOR_CONST.placeHolder}
                                style={{width:wp("60%"),fontSize:hp("2.5%")}}
                                onChangeText={(text) => setLoginPassword(text)}/>
                    </View>
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
          <AuthButton title={"Sign In"} onPress={Login} style={{backgroundColor:COLOR_CONST.primaryThemeColor,marginTop:hp("5%")}}/>
          <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
              <TouchableOpacity onPress={()=>{setRememberCheck(!rememberCheck)}} style={{marginRight:wp("3%")}}>
                <Image source={rememberCheck?Check:Uncheck} style={{height:hp("3%"),width:hp("3%"),resizeMode:"contain"}}/>
              </TouchableOpacity>
              <Text style={{fontSize:hp("2.2%"),marginVertical:hp("4%"),color:COLOR_CONST.black,fontWeight:"300"}}>Remember me</Text>
          </View>
          <Text onPress={Forgot} style={{fontSize:hp("2.2%"),alignSelf:"center",color:"#969696"}}>Forgot Password?</Text>
        </View>

      )
    }
    const signupComponent = () =>{
      return(
        <KeyboardAvoidingView behavior={"padding"}
          style={{ flexGrow: 1,width:"90%", height: hp("75%"),position:"absolute",top:hp("15%") }} >
          <ScrollView style={{backgroundColor:'#FFF'}} contentContainerStyle={{paddingBottom:hp("5%")}} > 
            <View style={{ marginHorizontal : wp('8%'),backgroundColor:COLOR_CONST.white }}>
              <View style={{marginTop:hp("2%")}}>
                  <View style={styles.text_view  }>
                    <TextInput placeholder="First name" 
                               maxLength={30} 
                               ref={fnameText}
                               onSubmitEditing={()=>lnameText.current.focus()} 
                               value={fname} 
                               placeholderTextColor={COLOR_CONST.placeHolder}
                               style={{width:wp("60%"),fontSize:hp("2.5%")}}
                               onChangeText={(text) => {setFirstName(text)}}/>
                  </View>
                  <View style={[styles.text_view,{marginTop:hp("2%")}]}>
                    <TextInput placeholder="Last name" 
                               maxLength={30} 
                               ref={lnameText}
                               onSubmitEditing={()=>EmailText.current.focus()} 
                               value={lname} 
                               placeholderTextColor={COLOR_CONST.placeHolder}
                               style={{width:wp("60%"),fontSize:hp("2.5%")}}
                               onChangeText={(text) => {setLastName(text)}}/>
                  </View>
                  <View style={[styles.text_view,{marginTop:hp("2%")}]}>
                    <TextInput placeholder="Email" 
                               maxLength={30} 
                               ref={EmailText}
                               onSubmitEditing={()=>PhoneText.current.focus()} 
                               value={email} 
                               placeholderTextColor={COLOR_CONST.placeHolder}
                               style={{width:wp("60%"),fontSize:hp("2.5%")}}
                               onChangeText={(text) => {setEmail(text)}}/>
                  </View>
                  <View style={[styles.text_view,{marginTop:hp("2%")}]}>
                    <TextInput placeholder="Phone No." 
                               maxLength={30} 
                               ref={PhoneText}
                               onSubmitEditing={()=>PasswordText.current.focus()} 
                               value={phoneNumber} 
                               placeholderTextColor={COLOR_CONST.placeHolder}
                               style={{width:wp("60%"),fontSize:hp("2.5%")}}
                               onChangeText={(text) => {setphoneNumber(text)}}/>
                  </View>
                  <View style={[styles.text_view,{marginTop:hp("2%")}]}>
                    <TextInput placeholder="Password" 
                               maxLength={30} 
                               secureTextEntry={true}
                               ref={PasswordText}
                               onSubmitEditing={()=>ConPasswordText.current.focus()} 
                               value={password} 
                               placeholderTextColor={COLOR_CONST.placeHolder}
                               style={{width:wp("60%"),fontSize:hp("2.5%")}}
                               onChangeText={(text) => setpassword(text)}/>
                  </View>
                  <View style={[styles.text_view,{marginTop:hp("2%")}]}>
                    <TextInput placeholder="Confirm Password" 
                               maxLength={30} 
                               ref={ConPasswordText}
                               onSubmitEditing={()=>Keyboard.dismiss()} 
                               value={conpassword} 
                               placeholderTextColor={COLOR_CONST.placeHolder}
                               style={{width:wp("60%"),fontSize:hp("2.5%")}}
                               onChangeText={(text) => setconpassword(text)}/>
                  </View>
              </View>
            </View>
            <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
              <TouchableOpacity onPress={()=>{setTermsCheck(!termsCheck)}} style={{marginRight:wp("2.5%")}}>
                <Image source={termsCheck?Check:Uncheck} style={{height:hp("3%"),width:hp("3%"),resizeMode:"contain"}}/>
              </TouchableOpacity>
              <Text style={{fontSize:hp("2.2%"),marginVertical:hp("4%"),color:COLOR_CONST.black,fontWeight:"300"}} >Terms and conditions</Text>
            </View>
            <AuthButton title={"Continue"} onPress={Signup} style={{backgroundColor:COLOR_CONST.primaryThemeColor,width:"90%",alignSelf:"center"}}/>

          </ScrollView>
        </KeyboardAvoidingView>
      )
    }


    return (
        <View style={styles.container}>

              {/* <ImageBackground source={questionBg} resizeMode={"stretch"} style={{ width:"100%",height:screenHeight,}}> */}
              <View style={{height:hp("30%"),width:"100%",backgroundColor:COLOR_CONST.primaryThemeColor}} />
              <View style={{height:hp("70%"),width:"100%",backgroundColor:COLOR_CONST.secondaryThemeColor}} />
                <View style={[styles.textContainer,{top:loginActive?hp("12%"):hp("7%")}]}>
                  <Text style={[styles.login_text,{color:loginActive?COLOR_CONST.white:"#99BCE1"}]} onPress={()=>{setloginActive(true)}}>
                    LOG IN
                  </Text>
                  <Text style={[styles.signup_text,{color:!loginActive?COLOR_CONST.white:"#99BCE1"}]} onPress={()=>{setloginActive(false)}}>
                    SIGN UP
                  </Text>
                </View>
                {loginActive?loginComponent():signupComponent()}
              {/* </ImageBackground> */}
              {/* </ScrollView> 
          </KeyboardAvoidingView> */}
        </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex:1, 
    alignItems:'center',
    backgroundColor:COLOR_CONST.white
  },
  textContainer:{
    flexDirection:"row",
    justifyContent:"center",
    position:"absolute"
  },
  login_text:{
    fontSize:hp("3%"),
    marginRight:wp("4%"),
    fontWeight:"bold"
  },
  signup_text:{
    fontSize:hp("3%"),
    marginLeft:wp("4%"),
    fontWeight:"bold"

  },
  text_view: {
    borderBottomColor:COLOR_CONST.borderColor,
    borderBottomWidth:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    height:hp("7%"),
    width : '100%' , 
    // marginHorizontal : '3%' ,
    // backgroundColor : 'red'

  }
})


function mapStateToProps(state) {
    const { hideProgress } = state.loginReducer;
    return { hideProgress}
}
export default connect(mapStateToProps, {Login,Logout})(LoginScreen)