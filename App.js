import React from 'react';
import { StyleSheet, Text,TextInput, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.container}>
        Type Below!
        </Text>

        <TextInput style={styles.container}
          
          placeholder = 'Type Here!'
          onChangeText = {(text) => this.setState({text})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    fontSize: 42,
  },
});
