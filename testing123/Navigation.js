
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createAppContainer, createNavigator, createStackNavigator} from 'react-navigation';

class Home extends Component{
    render(){
        return(
            <View>
                <Text>Home</Text>
            </View>
        );
    }
}

class Hotel extends Component{
    render(){
        return(
            <View>
                <Text>Hotel</Text>
            </View>
        );
    }
}

const Main = createStackNavigator({
    screenA:{
        screen: Home
    },
    screenB:{
        screen: Hotel
    }
});
const AppNavigator = createNavigator(Main);

export default class Navigation extends Component{
    render(){
        return(
            <AppNavigator/>
        );
    }
}