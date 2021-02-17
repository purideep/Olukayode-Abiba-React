import React,{useEffect,useState,useRef,Component} from 'react';
import { View,Text,TouchableOpacity, Image } from 'react-native';
import styleValue from '../Styles/boardingstyle'
import BoardingHeaderTxt from '../Components/BoardingHeaderTxt';
import BoardingBackground from '../Components/BoardingBackground';
import BoardingHeader from '../Components/BoardingHeader';


export default class Boarding extends Component{

    constructor(props){
        
        super(props)
        this.state ={
            next:false,
            start:false,
            headerTxt:"Instantly Connect Over Video Chat With a Vetted Service Professional",
            btnTxt:"Get Started"
        }

    }

    onButtonClick = (target) =>{
        if(this.state.next){
            this.props.navigation.navigate('login') 
        }else{
            this.setState({
                next:true,
                headerTxt:"Instantly Connect Over Video Chat With a Vetted Service Professional",
                btnTxt:"Next"
            })
        }
       
    }

    render(){
        return(
            <View style={styleValue.container}>
                <BoardingHeader/>
                <BoardingHeaderTxt text={this.state.headerTxt}/> 
                <BoardingBackground text={this.state.btnTxt} onButtonClick = {this.onButtonClick} />
                
            </View>
        )
    }
}