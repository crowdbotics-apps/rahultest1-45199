import React from 'react';
import { SafeAreaView, TextInput, Button, StyleSheet } from 'react-native';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      password: ''
    };
  }

  render() {
    return <SafeAreaView style={styles.container}>
        <TextInput style={styles.input} onChangeText={userId => this.setState({
        userId
      })} value={this.state.userId} placeholder="User ID" />
        <TextInput style={styles.input} onChangeText={password => this.setState({
        password
      })} value={this.state.password} placeholder="Password" secureTextEntry={true} />
        <Button title="Login" onPress={() => console.log('Login button pressed')} />
      </SafeAreaView>;
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10
  }
});
export default Login;