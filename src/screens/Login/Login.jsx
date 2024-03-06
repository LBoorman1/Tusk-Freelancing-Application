import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { styles } from "./Login.styles";
import { signIn }from "aws-amplify/auth";

const Login = ({ navigation }) => {

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const onSignInPressed = async () => {
    try {
      const response = await signIn(formData);
      console.log(response);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <View style={styles.main}>
        <TextInput style={styles.mainInput} placeholder="Username" onChangeText={(text) => handleInputChange('username', text)}/>
        <TextInput style={styles.mainInput} placeholder="Password" onChangeText={(text) => handleInputChange('password', text)}/>
        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => onSignInPressed()}
        >
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotPasswordButton}>
          <Text style={styles.forgotPasswordButtonText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newAccount}>
        <Text style={styles.newAccountText}>Dont Have An Account Yet?</Text>
        <TouchableOpacity
          style={styles.newAccountButton}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.newAccountButtonText}>Create One</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
