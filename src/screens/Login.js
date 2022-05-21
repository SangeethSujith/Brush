/* eslint-disable prettier/prettier */
import {
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    Image,
    TextInput,
    ScrollView,
    StatusBar,
} from 'react-native';
import React from 'react';
import Design from '../styles/Design';
const Login = ({ navigation }) => {
    return (
        <View style={Design.body}>
            <StatusBar barStyle="dark-content" translucent={true} backgroundColor={'transparent'} />
            <View style={Design.topv}>
                <ImageBackground
                    style={Design.imgbg}
                    source={require('../images/bg.png')}>
                    <ScrollView>
                        <Text style={Design.lh1}>Welcome .....!</Text>
                        <Text style={Design.lh2}>Share Your Own Art</Text>
                        <Image style={Design.logo} source={require('../images/logo.png')} />
                        <Text style={Design.inhead}>User Name</Text>
                        <TextInput style={Design.input} placeholderTextColor="rgba(255,255,255,0.5)" placeholder="Enter Your UserName" />
                        <Text style={Design.inhead}>Password</Text>
                        <TextInput style={Design.input} placeholderTextColor="rgba(255,255,255,0.5)" secureTextEntry={true} placeholder="Enter Your Password" />
                        <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
                            <View style={Design.loginbtn}>
                                <Text style={Design.logintxt}>Login</Text>
                                <View style={{flexDirection:'row'}}>
                                <Image style={Design.logdots} source={require('../images/logdots.png')} />
                                <Image style={Design.rarrow} source={require('../images/rarrow.png')} />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={Design.forgot}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </ImageBackground>
            </View>
            <View style={Design.b1}>
                <Text style={Design.prereg}>New User? </Text>
                <TouchableOpacity
                    style={Design.button}
                    onPress={() => navigation.navigate('Register')}>
                    <Text style={Design.register}>Register Here</Text>
                </TouchableOpacity>
            </View>
            <View style={Design.b2}>
                <Image style={{ height: 14, width: 319 }} source={require('../images/ldot.png')} />
            </View>
        </View>
    );
};

export default Login;
