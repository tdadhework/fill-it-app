
import React, {useState} from 'react';
import { Button, Dimensions, Pressable, View, ViewStyle } from 'react-native';
import { Text, StyleSheet, SafeAreaView, TextInput } from "react-native";
import {FormButton, LabeledInput,BottomButton,Separator} from "./FormComponents"


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

        shadowOffset: {
            width: 0,
            height: -2
        },
        shadowColor: "black",
        shadowRadius:5,
        shadowOpacity:0.25
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
  })



export const ResetPasswordForm = (props) =>
{
    return (
            <View style ={styles.containerStyle}>
                <View style={styles.formStyle}>
                    <LabeledInput label="Email address"/>
                    <FormButton label="Reset Password"/>
                    <Separator/>
                </View>
                <BottomButton label='Sign in' {...props}></BottomButton>
            </View>
    );
}

