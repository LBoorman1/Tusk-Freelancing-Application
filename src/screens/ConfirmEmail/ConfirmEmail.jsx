import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./ConfirmEmail.styles";

const ConfirmEmail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>Confirm Your Email</Text>
        <Text style={styles.subHeading}>A confirmation code has been sent to your email address</Text>
      </View>
      <View style={styles.inputFormContainer}>
        <TextInput style={styles.confirmInput} placeholder="Enter your confirmation code"/>
        <TouchableOpacity style={styles.confirmButton}>
            <Text style={styles.confirmButtonText}>Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resendCodeButton}>
            <Text style={styles.resendCodeButtonText}>Resend Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConfirmEmail;
