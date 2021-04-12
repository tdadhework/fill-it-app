
import React, {useState} from 'react';
import { Button, Dimensions, Pressable, View, ViewStyle } from 'react-native';
import { Text, StyleSheet, SafeAreaView, TextInput } from "react-native";
import {FormButton, LabeledInput,BottomButton} from "./FormComponents"
import {SignInForm} from "./SignInForm";
import {SignUpForm} from "./SignUpForm";
import {ResetPasswordForm} from "./ResetPassword";


const windowWidth : string = (Dimensions.get('window').width).toString();
const windowHeight : string = (Dimensions.get('window').height).toString();

const yellowColor = '#f6b547'
const brownColor = '#714B00'
const whiteColor = '#fff'
const inputGrey = '#E5E5E5'

const styles = StyleSheet.create({
    rootStyle: {
        flex: 2,
        backgroundColor: yellowColor,
        height:windowHeight
    },
    titleStyle: {
        paddingVertical: 15,
        color: whiteColor,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "700"
    },
    containerStyle : {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: whiteColor,
        flex:1,
    },
    formStyle : {
        paddingTop:30,
        paddingLeft:30,
        paddingRight:30,
        flex:1
    },

    label : {
        color: brownColor,
        fontSize: 14,
        textAlign:'right',
        marginBottom: 30
    },
    centerLabel :{
        color: brownColor,
        fontSize: 14,
        marginTop: 80,
        textAlign:'center',
    },
    centerBoldLabel :{
        color: brownColor,
        fontSize: 14,
        fontWeight:"700",
        textAlign:'center',
    },
    separator : {
        width:'70%',
        height:'1px',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:30,
        marginBottom:30,
        backgroundColor:brownColor,
    }
  })

const AuthPages = { 
    SIGN_IN_PAGE:"SIGN_IN_PAGE",
    SIGN_UP_PAGE:"SIGN_UP_PAGE",
    SIGN_IN_WITH_OTP_PAGE:"SIGN_IN_WITH_OTP",
    RESET_PASSWORD_PAGE:"RESET_PASSWORD_PAGE"
}




const SignIn = () =>
{
    const [title,setTitle] = useState('Register Now')
    const [page,setPage] = useState(AuthPages.SIGN_UP_PAGE);


    const changePage = (page) =>
    {
        setPage(page)
    }

    return (
        <SafeAreaView style={styles.rootStyle}>
            <Text style={styles.titleStyle}>{title}</Text>
            {(page === AuthPages.SIGN_IN_PAGE) && 
            <SignInForm 
                redirect={()=> setPage(AuthPages.SIGN_UP_PAGE)}
                resetPassword ={()=> setPage(AuthPages.RESET_PASSWORD_PAGE)} 
            />}
            {(page === AuthPages.SIGN_UP_PAGE) && <SignUpForm redirect={()=> setPage(AuthPages.SIGN_IN_PAGE)} />}
            {(page === AuthPages.RESET_PASSWORD_PAGE) && <ResetPasswordForm redirect={()=> setPage(AuthPages.SIGN_IN_PAGE)} />}
        </SafeAreaView>
    );
}


export default SignIn;