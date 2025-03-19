import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router"; // Importa useRouter de Expo Router
import CustomButton from "../../components/CustomButton";

const SignupScreen = () => {
  const router = useRouter(); // Usa el hook useRouter para la navegación
  const [selectedForm, setSelectedForm] = useState("personal");
  const [formData, setFormData] = useState({
    personal: { name: "", email: "", password: "" },
    business: { company: "", email: "", password: "" },
    student: { school: "", email: "", password: "" },
    other: { description: "", email: "", password: "" },
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [selectedForm]: { ...prev[selectedForm], [field]: value },
    }));
  };

  const handleSignup = () => {
    console.log("Signup with:", formData[selectedForm]);
    router.push("/verify-account"); // Navega a la ruta /verify-account
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <Picker
        selectedValue={selectedForm}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedForm(itemValue)}
      >
        <Picker.Item label="Personal" value="personal" />
        <Picker.Item label="Business" value="business" />
        <Picker.Item label="Student" value="student" />
        <Picker.Item label="Other" value="other" />
      </Picker>

      {Object.keys(formData[selectedForm]).map((field) => (
        <TextInput
          key={field}
          style={styles.input}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          value={formData[selectedForm][field]}
          onChangeText={(value) => handleInputChange(field, value)}
          secureTextEntry={field === "password"}
        />
      ))}

      <CustomButton title="Sign Up" onPress={handleSignup} />

      <TouchableOpacity onPress={() => router.push("/login")}>
        <Text style={styles.link}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  picker: {
    height: 50,
    marginBottom: 15,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  link: {
    color: "#007BFF",
    textAlign: "center",
    marginTop: 15,
    fontSize: 16,
  },
});

export default SignupScreen;
