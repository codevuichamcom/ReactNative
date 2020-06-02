import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Quan',
      age: 21,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Enter name: </Text>
        <TextInput
          style={styles.input}
          multiline
          placeholder='e.g John'
          onChangeText={val => {
            this.setState({name: val});
          }}
        />

        <Text>Enter age: </Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          placeholder='e.g 10'
          onChangeText={val => {
            this.setState({age: val});
          }}
        />
        <Text style={styles.result}>
          name: {this.state.name}, age: {this.state.age}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    margin: 10,
    width: 200,
  },
  result: {
    fontSize:20,
    color:'red'
  }
});

export default App;
