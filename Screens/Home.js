import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Home(props) {
  const [service, setservice] = useState('');
  const services = ['Plumber', 'Electrician', 'Architect'];
  const [registrationNumber, setregistrationNumber] = useState('');
  const [remarks, setremarks] = useState('');
  const [serviceText, setserviceText] = useState('Choose Service');
  const [error, seterror] = useState('');

 

  const DropDown = () => {
    const [DropDown, setDropDown] = useState(false);
    return (
      <View>
        <LinearGradient
          colors={[
            'rgba(0,0,0,1)',
            'rgba(0,0,0,0.8)',
            'rgba(0,0,0,0.7)',
            'rgba(0,0,0,0.65)',
          ]}
          style={{
            width: windowWidth * 0.8,
            height: windowHeight * 0.1,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,

            // alignItems:'center',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <Text style={{color: 'white', fontSize: 25}}>{serviceText}</Text>
          <TouchableOpacity onPress={() => setDropDown(!DropDown)}>
            <View style={{padding: 10}}>
              <MaterialIcons
                name={DropDown == false ? 'arrow-drop-down' : 'arrow-drop-up'}
                size={30}
                color="white"
              />
            </View>
          </TouchableOpacity>
        </LinearGradient>

        {DropDown == true ? (
          <LinearGradient
            colors={[
              'rgba(0,0,0,0.65)',
              'rgba(0,0,0,0.55)',
              'rgba(0,0,0,0.45)',
              'rgba(0,0,0,0.4)',
            ]}
            style={{
              height: windowHeight * 0.3,
              width: windowWidth * 0.8,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}>
            {services.map((number, index) => (
              <TouchableOpacity onPress={() => handleSelect(number)}>
                <View style={{height: windowHeight * 0.1}}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 20,
                      borderBottomColor: 'white',
                      borderBottomWidth: 1,
                    }}>
                    {number}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </LinearGradient>
        ) : null}
      </View>
    );
  };

  const Submit = () => {
    return (
      <TouchableOpacity onPress={() => handleSubmit()}>
        <LinearGradient
          colors={[
            'rgba(0,0,0,1)',
            'rgba(0,0,0,0.8)',
            'rgba(0,0,0,0.7)',
            'rgba(0,0,0,0.65)',
          ]}
          style={{
            width: windowWidth * 0.6,
            height: windowHeight * 0.1,
            borderRadius: 10,
            // alignItems:'center',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <Text style={{color: 'white', fontSize: 25}}>Proceed</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  const handleSelect = item => {
    setservice(item);
    setserviceText(item);
  };
  const handleSubmit = () => {
    seterror('');
    if (service !== '' && registrationNumber !== '') {
      props.navigation.navigate('DateScreen',{service:service,registrationNumber:registrationNumber,remarks:remarks});
    } else {
      seterror(
        'Choose Service and enter Registration Number. None of the fields can be empty',
      );
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
      }}>
      <Text style={{color: 'black', fontSize: 30}}>Service number 64</Text>
      <DropDown />
      <View style={{width: windowWidth, alignItems: 'center'}}>
        <TextInput
          value={registrationNumber}
          multiline
          onChangeText={setregistrationNumber}
          placeholder="Registration Number"
          style={{
            width: windowWidth * 0.8,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            // paddingLeft: 20,
            color: 'black',
            height: windowHeight * 0.1,
            fontSize: 20,
          }}
        />
      </View>
      <View style={{width: windowWidth, alignItems: 'center'}}>
        <TextInput
          value={remarks}
          multiline
          onChangeText={setremarks}
          placeholder="Remarks(optional)"
          style={{
            width: windowWidth * 0.8,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            // paddingLeft: 20,
            color: 'black',
            height: windowHeight * 0.1,
            fontSize: 20,
          }}
        />
      </View>
      <Text style={{color: 'red'}}>{error}</Text>
      <Submit />
    </View>
  );
}

const styles = StyleSheet.create({});
