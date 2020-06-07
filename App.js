import React, { component, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  Image,
  Button,
  Alert,
} from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  const [count, setCount] = useState(0);
  const handleInc = () => setCount((prevCount) => prevCount + 1);
  const handleDec = () => setCount((prevCount) => prevCount - 1);

  return (
      <WelcomeScreen />
  );
}