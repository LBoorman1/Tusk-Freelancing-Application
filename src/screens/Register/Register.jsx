import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import { styles } from "./Register.styles";
import { signUp } from "aws-amplify/auth";

const Register = ({ navigation }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleInputChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const onSignUpPressed = async () => {
    try {
      const { username, email, password } = formData;
      const response = await signUp({
        username,
        password,
        options: {
          userAttributes: {
            email: email,
          },
        },
      });
      console.log(response);
    } catch (error) {
      Alert.alert("Oops", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Register</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => handleInputChange("username", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          onChangeText={(text) => handleInputChange("email", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => handleInputChange("password", text)}
        />
        <TextInput style={styles.input} placeholder="Confirm Password" />
      </View>
      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => onSignUpPressed()}
      >
        <Text style={styles.signupButtonText}>Sign Up!</Text>
      </TouchableOpacity>
      <View style={styles.loginSection}>
        <Text style={styles.loginSectionText}>Already Have An Account?</Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.loginButtonText}>Go To Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
