import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {useState} from 'react';
import {useEffect} from 'react';

export default function Credentials(props) {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [errorString, seterrorString] = useState('');

  const validateEmail = email => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log('BOOL', emailRegex.test(email));
    return emailRegex.test(email);
  };
  const handleLogin = () => {
    if (validateEmail(Email)) {
      if (Password != '') {
        if (Password.length > 7) {
          props.navigation.reset({index: 0, routes: [{name: 'Home'}]});

          //   props.navigation.navigate('Home');
        } else {
          seterrorString('Password must be atleast 8 letters');
        }
      } else {
        seterrorString('Password cannot be empty');
      }
    } else {
      seterrorString('Invalid email format');
    }
  };
  const handleEmailChange = inputValue => {
    const trimmedValue = inputValue.trim();
    setEmail(trimmedValue);
    seterrorString('');
  };
  const handlePasswordChange = inputValue => {
    const trimmedValue = inputValue.trim();
    setPassword(trimmedValue);
    seterrorString('');
  };

  useEffect(() => {
    //   console.log(' props.route.params.data', props)
  }, []);

  return (
    <View
      style={{
        width: windowWidth,
        // backgroundColor: 'red',
        alignItems: 'center',
        height: windowHeight * 0.6,
        justifyContent: 'center',
        gap: 20,
      }}>
      <TextInput
        value={Email}
        onChangeText={handleEmailChange}
        placeholder="Email"
        placeholderTextColor={'gray'}
        style={styles.input}
      />
      <TextInput
        value={Password}
        onChangeText={handlePasswordChange}
        placeholder="Password"
        placeholderTextColor={'gray'}
        style={styles.input}
      />

      <Text
        style={{
          color: 'red',
          fontSize: 15,
          textAlign: 'center',
          alignSelf: 'center',
        }}>
        {errorString}
      </Text>
      <TouchableOpacity onPress={() => handleLogin()}>
        <View
          style={{
            backgroundColor: 'black',
            alignSelf: 'center',
            paddingHorizontal: 30,
            paddingVertical: 10,
            borderRadius: 10,
          }}>
          <Text style={{color: 'white', fontSize: 30}}>{props.data}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: windowWidth * 0.85,
    backgroundColor: 'black',
    height: windowHeight * 0.07,
    color: 'white',
    paddingLeft: 10,
    borderRadius: 10,
  },
});
