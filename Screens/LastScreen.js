import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
export default function LastScreen(props) {
    useEffect(() => {
     console.log('props.route.params', props.route.params)
    }, [])
    const data=props.route.params
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text style={{color:'black',fontSize:20}}>Reg Number: {<Text style={{fontSize:25}}>{data.data1.registrationNumber} </Text>}</Text>
      <Text style={{color:'black',fontSize:20}}>service: { <Text style={{fontSize:25}}>{data.data1.service}</Text>}</Text>
      <Text style={{color:'black',fontSize:20}}>Date: { <Text style={{fontSize:25}}>{data.data2.SelectedDate}</Text>}</Text>
      <Text style={{color:'black',fontSize:20}}>Time: { <Text style={{fontSize:25}}>{data.data2.SelectedTime}</Text>}</Text>
      <Text style={{color:'black',fontSize:20}}>remarks: { <Text style={{fontSize:25}}>{data.data1.remarks}</Text>}</Text>

    </View>
  )
}

const styles = StyleSheet.create({})