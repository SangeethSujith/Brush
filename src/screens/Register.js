/* eslint-disable prettier/prettier */
import { Text, View, StatusBar, Image, ImageBackground, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Design from '../styles/Design';
const Register = ({ navigation }) => {
    return (
        <View style={Design.body}>
            <StatusBar barStyle="dark-content" translucent={true} backgroundColor={'transparent'} />
            <View style={Design.regtop}>
                <Image style={{ height: 14, width: 325 }} source={require('../images/ldot.png')} />
            </View>
            <View style={Design.bottomv}>
                <ImageBackground style={Design.registerbg}
                    source={require('../images/bg.png')}>
                    <ScrollView>
                        <Text style={Design.rh1}>Register With Us</Text>
                        <Text style={Design.inhead}>User Name</Text>
                        <TextInput style={Design.input} placeholderTextColor="rgba(255,255,255,0.5)" placeholder="Enter Your UserName" />
                        <Text style={Design.inhead}>Phone Number</Text>
                        <TextInput style={Design.input} keyboardType='phone-pad' placeholderTextColor="rgba(255,255,255,0.5)" placeholder="Enter Your Phone Number" />
                        <Text style={Design.inhead}>Password</Text>
                        <TextInput style={Design.input} secureTextEntry={true} placeholderTextColor="rgba(255,255,255,0.5)" placeholder="Enter Your Password" />
                        <Text style={Design.inhead}>Confirm Password</Text>
                        <TextInput style={Design.input} secureTextEntry={true} placeholderTextColor="rgba(255,255,255,0.5)" placeholder="Re enter Your Password" />
                        <TouchableOpacity>
                            <View style={Design.loginbtn}>
                                <Text style={Design.logintxt}>Register</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image style={Design.logdots} source={require('../images/logdots.png')} />
                                    <Image style={Design.rarrow} source={require('../images/rarrow.png')} />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <Text style={Design.already}>Already Registred ?</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Login')}>
                            <View style={Design.tologin}>
                                <Image style={Design.larrow} source={require('../images/larrow.png')} />
                                <Image style={Design.logdots2} source={require('../images/logdots.png')} />
                                <Text style={Design.logintxt2}>Login</Text>
                            </View>
                        </TouchableOpacity>

                    </ScrollView>
                </ImageBackground>
            </View>

        </View>
    );
};

export default Register;
