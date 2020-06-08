import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ShopScreen() {
    const [count, setCount] = useState(0);
    const handleInc = () => setCount((prevCount) => prevCount + 1);
    const handleDec = () => setCount((prevCount) => prevCount - 1);
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
                <Text style={styles.h1}> Hello! </Text>
                <View style={styles.countContainer}>
                    <Text style={{ color: "yellow" }}>Basket: {count}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Button
                        title="Add Item +"
                        color="green"
                        onPress={() =>
                        Alert.alert(
                            "Confirmation",
                            "Are you sure you want to add to this item to you basket?",
                            [
                            { text: "Cancel", onPress: "" },
                            { text: "OK", onPress: handleInc },
                            ],
                            { cancelable: false }
                        )
                        }
                    />
                    <Button
                        color="red"
                        title="Remove item -"
                        onPress={() =>
                        Alert.alert(
                            "Confirmation",
                            "Are you sure you want to remove this item?",
                            [
                            { text: "Cancel", onPress: "" },
                            { text: "OK", onPress: handleDec },
                            ],
                            { cancelable: true }
                        )
                        }
                    />
                </View>
                <TouchableOpacity>
                    <Image
                        blurRadius={0.9}
                        source={{ uri: "https://picsum.photos/200/300" }}
                        style={styles.backgroundImage}
                        />
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#345",
      alignItems: "center",
      justifyContent: "center",
    },
    backgroundImage: {
      width: 200,
      height: 300,
    },
    inc: {
      color: "green",
      padding: 0,
      fontSize: 30,
      fontWeight: "bold",
      position: "relative",
    },
    dec: {
      color: "red",
      fontSize: 30,
      fontWeight: "bold",
      position: "relative",
    },
    h1: {
      fontWeight: "bold",
      fontSize: 50,
      color: "#cbb",
    },
  });
  
