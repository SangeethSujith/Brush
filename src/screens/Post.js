import { Text, View, Button } from 'react-native'
import Maindesign from '../styles/Maindesign';
import React from 'react'

const Post = () => {
    return (
        <View style={Maindesign.container}>
            <Text style={Maindesign.text}>Post Add Page</Text>
            <Button title='Click Here' onPress={() => (alert('Button Clicked'))} />
        </View>
    )
}

export default Post
