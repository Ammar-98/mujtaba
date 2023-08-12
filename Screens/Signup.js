import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Credentials from '../components/Credentials';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function Signup(props) {
    return (
        <View
          style={{
            flex: 1,
            // backgroundColor: 'red',
            alignItems: 'center',
            // justifyContent: 'center',
          }}>
          <View style={styles.header}>
            <Text style={{color: 'black', fontSize: 40, fontWeight: 'bold'}}>
              Sign Up
            </Text>
            <Text style={{color: 'black', fontSize: 20,marginTop:10}}>
              Already have an account?{' '}
              {
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('Login')}>
                  <Text style={{color: 'black', fontSize: 25, fontWeight: 'bold'}}>
                    Login
                  </Text>
                </TouchableOpacity>
              }
            </Text>
          </View>
          <Credentials data={'Sign Up'} navigation={props.navigation} />
        </View>
      );
}

const styles = StyleSheet.create({
    header: {
        width: windowWidth,
        height: windowHeight * 0.2,
        // backgroundColor:'orange',
        alignItems: 'center',
        justifyContent: 'center',
      },
})