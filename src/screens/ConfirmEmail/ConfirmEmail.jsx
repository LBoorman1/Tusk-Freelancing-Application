import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { React, useState } from "react";
import { styles } from "./ConfirmEmail.styles";
import { useRoute } from "@react-navigation/native";
import { confirmSignUp, resendSignUpCode } from "aws-amplify/auth";


const ConfirmEmail = ({ navigation }) => {
  //allow component to take values from the navigation route
  const route = useRoute();

  // Data to send to API for confirming email
  const [confirmationCode, setConfirmationCode] = useState("");
  const username = route?.params?.username;

  const handleInputChange = (text) => {
    setConfirmationCode(text);
  };

  const onConfirmPressed = async () => {
    console.log(username);
    const confirmSignUpObject = {
      username,
      confirmationCode,
    };
    try {
      const response = await confirmSignUp(confirmSignUpObject);
      navigation.navigate("Home");
    } catch (error) {
      Alert.alert("Oops", error.message);
    }
  };

  onResendCodePressed = async () => {
    try {
      await resendSignUpCode(username);
    } catch (error) {
      Alert.alert('Oops', error.message)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>Confirm Your Email</Text>
        <Text style={styles.subHeading}>
          A confirmation code has been sent to your email address
        </Text>
      </View>
      <View style={styles.inputFormContainer}>
        <TextInput
          style={styles.confirmInput}
          placeholder="Enter your confirmation code"
          onChangeText={(text) => handleInputChange(text)}
        />
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() => onConfirmPressed()}
        >
          <Text style={styles.confirmButtonText}>Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resendCodeButton} onPress={() => onResendCodePressed()}>
          <Text style={styles.resendCodeButtonText}>Resend Code</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.resendCodeButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.resendCodeButtonText}>Go to home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConfirmEmail;
