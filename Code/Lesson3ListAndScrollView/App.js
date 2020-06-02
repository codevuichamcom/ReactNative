import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backup:[],
      people: [
        {name: 'A', id: '1'},
        {name: 'B', id: '2'},
        {name: 'C', id: '3'},
        {name: 'D', id: '4'},
        {name: 'E', id: '5'},
        {name: 'F', id: '6'},
        {name: 'G', id: '7'},
        {name: 'H', id: '8'},
      ],
    };
  }

  handleTouch = (id) =>{
    if(this.state.backup.length===0){
      let temp =[];
      for(let p of this.state.people){
        temp.push(p);
      }
      this.setState({backup:temp});
      
    }
    var newListPeople = this.state.people.filter(people=>id!==people.id);
    this.setState({people:newListPeople})
    if(this.state.people.length===1){
      this.setState({people:this.state.backup});
    }
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          numColumns={4}
          data={this.state.people}
          renderItem={({item}) => (
            <TouchableOpacity onPress={()=>this.handleTouch(item.id)}>
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
  },
});

export default App;
