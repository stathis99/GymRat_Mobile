import React from "react";
import { SafeAreaView, StyleSheet, TextInput, useState,Text, View , Button} from "react-native";
import RadioGroup from 'react-native-radio-buttons-group';
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import RadioButton from "rn-radio-button";
import Title from "../Title";

const CkalCalculator = () => {
  const [weight, onChangeWeight] = React.useState(null);
  const [age, onChangeAge] = React.useState(null);
  const [height, onChangeHeight] = React.useState(null);
  
  function Submit(){
    console.log(weight,age);
    
  }





  const listData = [
    { label: "Άνδρας", value: 1 },
    { label: "Γυναίκα", value: 2 },

  ];
  const listData2 = [
    { label: "Χάσε Λύπος", value: 1 },
    { label: "Πάρε μυς", value: 2 },
  ];


  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View style={styles.Title}>
       <Title children={"Υπολόγισε της καθημερινές θερμίδες"}/> 
      </View>
        <RadioButton
          outerWidth={30}
          innerWidth={20}
          borderWidth={1}
          horizontal={true}
          data={listData}
          color={"black"}
          wrapperStyle={{ flex:1, paddingTop: 50, padding: 4, justifyContent: 'center',alignItems: 'center', }}
        />
      <TextInput
        style={styles.input}
        onChangeText={onChangeWeight}
        value={weight}
        placeholder="Βάρος"
        keyboardType="numeric"
        maxLenght={3}
         />
        <TextInput
        style={styles.input}
        onChangeText={onChangeAge}
        value={age}
        placeholder="Ηλικία"
        keyboardType="numeric"
        maxLenght={3}
        />
        <TextInput
        style={styles.input}
        onChangeText={onChangeHeight}
        value={height}
        placeholder="Ύψος"
        keyboardType="numeric"
        maxLenght={3}
      />
        <RadioButton
          outerWidth={30}
          innerWidth={20}
          borderWidth={1}
          horizontal={true}
          data={listData2}
          color={"black"}
          wrapperStyle={{ flex:1, paddingTop: 10, padding: 4, justifyContent: 'center',alignItems: 'center', }}
        />


<View style = {styles.submitButton}>
<Button
  onPress={Submit}
  title="Submit!"
  color="red"
  accessibilityLabel="Learn more about this purple button"
/>
</View>




      


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 16,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: "black",
    padding: 10,
    paddingLeft:20,
    paddingRight:20
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50
  },
  Title: {
    paddingLeft: 10,
    paddingRight:10 
  },
  submitButton: {
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center'

  }
});

export default CkalCalculator;