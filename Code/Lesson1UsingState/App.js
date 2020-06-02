import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Quan',
      isOn: true,
      Person: {
        name: 'Quan',
        age: 21,
      },
    };
  }
  onUpdateClick = () => {
    const name = this.state.isOn ? 'Minh' : 'Quan';
    const person = this.state.isOn ? {name:'Minh',age: 17} : {name:'Quan',age: 21};
    this.setState({Person: person,name: name,isOn:!this.state.isOn});
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>My name is {this.state.name}</Text>
    <Text>Person is {this.state.Person.name} and age is {this.state.Person.age}</Text>
        <View style={styles.containerButton}>
          <Button title="update state" onPress={this.onUpdateClick} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerButton: {
    marginTop: 20,
  },
});

export default App;
