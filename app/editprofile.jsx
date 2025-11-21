import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../theme";
import { router } from "expo-router";

export default function EditProfile() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Edit Profile</Text>

      {/* Name */}
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        placeholderTextColor="#888"
      />

      {/* Email */}
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#888"
        keyboardType="email-address"
      />

      {/* Address */}
      <Text style={styles.label}>Address</Text>
      <TextInput
        style={[styles.input, styles.addressInput]}
        placeholder="Enter your address"
        placeholderTextColor="#888"
        multiline
      />

      {/* Save Button */}
      <TouchableOpacity style={styles.saveBtn} onPress={() => alert("Profile Saved!")}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>

      {/* Back Button */}
      <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ivory",
    paddingTop: 70,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 28,
    fontFamily: "serif",
    fontWeight: "700",
    marginBottom: 30,
    color: COLORS.plum,
  },

  label: {
    fontSize: 16,
    fontFamily: "serif",
    marginBottom: 5,
  },

  input: {
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    backgroundColor: "white",
    fontSize: 16,
    fontFamily: "serif",
  },

  addressInput: {
    height: 90,
    textAlignVertical: "top",
  },

  saveBtn: {
    backgroundColor: "#4B1B2F",
    paddingVertical: 12,
    borderRadius: 8,
    width: "100%",
    marginTop: 10,
  },

  saveText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },

  backBtn: {
    paddingVertical: 12,
    borderRadius: 8,
    width: "100%",
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#4B1B2F",
  },

  backText: {
    color: "#4B1B2F",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
});
