import React from 'react';

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ContactScreen from './app/screens/ContactScereen';

export default class App extends React.Component{
    render() {
      return (
        <ContactScreen/>
    );
  }
}