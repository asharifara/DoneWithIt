import React from 'react';
import { StyleSheet, Text, View, Alert, TextInput, TouchableHighlight, SafeAreaView} from 'react-native';

export default class ContactScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg : '',
            name : '',
            email: ''
        }
    }

    clearFields=()=> this.setState({name:'', msg:'', email:''});
    sendMessage=()=> {
        Alert.alert(this.state.name, this.state.msg);
        //this.props.navigation.goBack();
    }
    render(){
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={styles.heading}>Contact Us</Text>
                    <Text style={styles.label}>Name:</Text>
                    <TextInput
                        style={styles.inputs}
                        onChangeText= {(text) => this.setState({name : text})}
                        value={this.state.name}
                    />
                    <Text style={styles.label}>Message:</Text>
                    <TextInput
                        style={styles.multiInputs}
                        onChangeText= {(text) => this.setState({msg : text})}
                        value={this.state.msg}
                        multiline = {true}
                        numberOfLines = {4}
                    />
                    <Text style={styles.label}>Email:</Text>
                    <TextInput
                        style={styles.inputs}
                        onChangeText= {(text) => this.setState({email : text})}
                        value={this.state.email}
                    />
                    <TouchableHighlight onPress={this.sendMessage} underlayColor='#31e981'>
                        <Text style={styles.buttons}>
                            Send message
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this.clearFields} underlayColor='#31e981'>
                        <Text style={styles.buttons}>
                            Reset Form
                        </Text>
                    </TouchableHighlight>
                </View>
            </SafeAreaView>
        )
    }
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        paddingBottom: '45%',
    },
    heading:{
        marginTop:40,
        fontSize:16,
        color:'red'
    },
    inputs:{
        color: '#eee',
        padding:20,
        fontSize:20,
        borderColor: '#eee',
        borderWidth: 1,
        margin: 10,
        width: '98%',

    },
    multiInputs: {
        paddingTop:20,
        borderColor: '#eee',
        borderWidth: 1,
        padding: 10,
        width: '98%',
    },
    buttons: {
        marginTop: 15,
        fontSize: 16,
        backgroundColor: '#ccc',
        padding: 10,
    },
    label:{
        flexDirection:'row',
        color: '#aaa'
    }
})