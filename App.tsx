import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports'
import UserAuthenticationPage from './src/components/user_authentication/UserAuthenticationPage';

Amplify.configure(awsconfig);

const App = () => (
  <UserAuthenticationPage/>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
