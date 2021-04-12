import { View,Text, Pressable, TextInput } from "react-native";
import React from 'react';

const yellowColor = '#f6b547'
const brownColor = '#714B00'
const whiteColor = '#fff'
const inputGrey = '#F8F8F8'

export const LabeledInput = (props) =>
{
    return(
    <>
        <Text style={{
            color: brownColor,
            marginBottom:5,
            fontSize: 14
        }}>
            {props.label}
        </Text>
        <TextInput
            secureTextEntry={props.secureTextEntry || false}
            style={
                {
                height:40,
                border:`1px solid ${brownColor}`,
                borderRadius:10,
                outlineColor: brownColor,
                outline:'none',
                backgroundColor: inputGrey,
                paddingLeft: 15,
                marginBottom: 15}
            }
        />
    </>

    )   
}




export const FormButton = (props) =>
{
    return(    
    <Pressable 
        style={{
            borderRadius:10,
            backgroundColor:yellowColor,
            // width:150,
            alignSelf: 'flex-start',
            fontSize:14,
            border:`1px solid ${brownColor}`,
            paddingTop:10,
            paddingBottom:10,
            paddingRight:20,
            paddingLeft:20,
            marginTop:10,
            marginBottom:20
        }}
        onPress={props.onPress || null}>
        <Text style= {{
            color:brownColor,
            textAlign:'center',
            fontWeight:"700"
        }}>
        {props.label}
        </Text>
    </Pressable>);
}

export const BottomButton = (props) =>
{
    return (
    <Pressable 
        onPress={props.redirect}
        style={{
            backgroundColor:yellowColor,
            borderTopRightRadius:30,
            borderTopLeftRadius:30,
            
            shadowOffset: {
                width: 0,
                height: -2
            },
            shadowColor: "black",
            shadowRadius:5,
            shadowOpacity:0.25
              
        }}>
        <Text style={{
            paddingVertical:15,
            fontWeight: "700",
            textAlign:'center',
            color:'white',
            fontSize:20
        }}>
        {props.label}
        </Text>
    </Pressable>);
}

export const Separator = () => (
    <View style={{
            width:'70%',
            height:'1px',
            marginLeft:'auto',
            marginRight:'auto',
            marginTop:30,
            marginBottom:30,
            backgroundColor:brownColor,
    }} />
);