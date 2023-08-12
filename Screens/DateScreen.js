import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import {useRef} from 'react';
import {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function DateScreen(props) {
  useEffect(() => {
    console.log('props', props.route.params);
  }, []);

  const [SelectedTime, setSelectedTime] = useState('');
  const [timeArray, settimeArray] = useState([]);
  const ref = useRef();
  const ScrollToIndex = i => {
    console.log('index', i);
    ref.current.scrollToIndex({
      animated: true,
      index: i,
    });
  };
  const data = [
    {
      day: 'Wednesday',
      date: '02.08.2023',
      Time: [
        {time: '08:00-10:00', available: false},
        {time: '10:00-12:00', available: true},
        {time: '12:00-14:00', available: true},
        {time: '14:00-16:00', available: false},
        {time: '16:00-18:00', available: true},
      ],
    },
    {
      day: 'Thursday',
      date: '03.08.2023',
      Time: [
        {time: '08:00-10:00', available: true},
        {time: '10:00-12:00', available: true},
        {time: '12:00-14:00', available: false},
        {time: '14:00-16:00', available: true},
        {time: '16:00-18:00', available: true},
      ],
    },
    {
      day: 'Friday',
      date: '04.08.2023',
      Time: [
        {time: '08:00-10:00', available: true},
        {time: '10:00-12:00', available: false},
        {time: '12:00-14:00', available: true},
        {time: '14:00-16:00', available: false},
        {time: '16:00-18:00', available: true},
      ],
    },
    {
      day: 'Saturday',
      date: '05.08.2023',
      Time: [
        {time: '08:00-10:00', available: true},
        {time: '10:00-12:00', available: true},
        {time: '12:00-14:00', available: false},
        {time: '14:00-16:00', available: true},
        {time: '16:00-18:00', available: true},
      ],
    },
    {
      day: 'Monday',
      date: '07.08.2023',
      Time: [
        {time: '08:00-10:00', available: true},
        {time: '10:00-12:00', available: true},
        {time: '12:00-14:00', available: true},
        {time: '14:00-16:00', available: true},
        {time: '16:00-18:00', available: true},
      ],
    },
  ];
  const handleSubmit = () => {
    if (SelectedDate != '' && SelectedTime != '') {
      props.navigation.navigate('LastScreen', {
        data1: props.route.params,
        data2: {SelectedDate: SelectedDate, SelectedTime: SelectedTime},
      });
    } else {
      Alert.alert('Select both date and time');
    }
  };
  const [SelectedDate, setSelectedDate] = useState();

  const HeaderView = () => {
    return (
      <View
        style={{
          height: windowHeight * 0.25,
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          justifyContent: 'center',
        }}>
        <Text style={{alignSelf: 'center', color: 'gray', fontSize: 15}}>
          Pick a Date
        </Text>
        <FlatList
          data={data}
          ref={ref}
          horizontal
          keyExtractor={(item, index) => item.date}
          contentContainerStyle={{
            // backgroundColor: 'red',
            //   justifyContent:'center',

            alignItems: 'center',
            height: windowHeight * 0.2,
          }}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  settimeArray(item.Time);
                  setSelectedDate(item.date);
                  setSelectedTime('');
                  setTimeout(() => ScrollToIndex(index), 100);
                }}>
                <View
                  style={{
                    width: windowWidth * 0.35,
                    height: windowHeight * 0.15,
                    marginRight: 3,
                    borderRadius: 10,
                    backgroundColor:
                      SelectedDate == item.date ? 'black' : 'white',
                    borderColor: 'black',
                    borderWidth: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: SelectedDate == item.date ? 'white' : 'black',
                      fontSize: 15,
                    }}>
                    {item.day}
                  </Text>
                  <Text
                    style={{
                      color: SelectedDate == item.date ? 'white' : 'black',
                      fontSize: 14,
                    }}>
                    {item.date}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
          getItemLayout={(data, index) => ({
            length: windowWidth * 0.35,
            offset: windowWidth * 0.35 * index,
            index,
          })}
        />
      </View>
    );
  };
  const TimeView = () => {
    return (
      <View
        style={{
          width: windowWidth,
          height: windowHeight * 0.5,
          //   backgroundColor: 'green',
        }}>
        <View style={{marginTop: 20}}>
          <Text style={{alignSelf: 'center', color: 'gray', fontSize: 15}}>
            Pick a Time
          </Text>

          <FlatList
            data={timeArray}
            numColumns={3}
            keyExtractor={(item, index) => index}
            contentContainerStyle={{
              //   backgroundColor: 'red',
              //   justifyContent:'center',
              alignItems: 'center',
            }}
            renderItem={({item}) => {
              console.log('thehthethhe', item);
              return (
                <TouchableOpacity
                  onPress={() =>
                    item.available == true
                      ? setSelectedTime(item.time)
                      : Alert.alert('Already booked for this time')
                  }>
                  <View
                    style={{
                      width: windowWidth * 0.3,
                      height: windowHeight * 0.15,
                      margin: 3,
                      borderRadius: 10,
                      backgroundColor:
                        item.available != true
                          ? 'red'
                          : SelectedTime == item.time
                          ? 'black'
                          : 'white',
                      borderColor: 'black',
                      borderWidth: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        color:
                          item.available != true
                            ? 'white'
                            : SelectedTime == item.time
                            ? 'white'
                            : 'black',
                        fontSize: 14,
                      }}>
                      {item.time}
                      {item.available == true ? 'a' : 'b'}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <HeaderView />
      <TimeView />

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
    </View>
  );
}

const styles = StyleSheet.create({});
