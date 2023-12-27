import React from 'react';
import { SafeAreaView, StyleSheet, View, Button } from 'react-native';

const WelcomePage = ({
  navigation
}) => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Get Started" onPress={() => navigation.navigate('Login')} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    width: '80%'
  }
});
export default WelcomePage;