import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { styles } from "./Register.styles";
const Register = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Register</Text>
      <View style={styles.inputContainer}>  
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput style={styles.input} placeholder="Email Address" />
        <TextInput style={styles.input} placeholder="Password" />
        <TextInput style={styles.input} placeholder="Confirm Password" />
      </View>
      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupButtonText}>Sign Up!</Text>
      </TouchableOpacity>
      <View style={styles.loginSection}>
        <Text style={styles.loginSectionText}>Already Have An Account?</Text>
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginButtonText}>Go To Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
