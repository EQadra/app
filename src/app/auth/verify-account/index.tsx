import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { useRouter } from "expo-router";
import MapView, { Marker } from "react-native-maps";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const COUNTRIES = [
  { name: "Perú", latitude: -9.189967, longitude: -75.015152 },
  { name: "Colombia", latitude: 4.570868, longitude: -74.297333 },
  { name: "Chile", latitude: -35.675147, longitude: -71.542969 },
  { name: "Uruguay", latitude: -32.522779, longitude: -55.765835 },
  { name: "Buenos Aires", latitude: -34.6037, longitude: -58.3816 },
  { name: "Brasilia", latitude: -15.8267, longitude: -47.9218 },
];

export default function VerifyAccountScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <CountryMap />
      <Footer />
    </View>
  );
}

function CountryMap() {
  const router = useRouter();

  return (
    <MapView
      style={styles.map}
      provider={Platform.OS === "android" ? "google" : undefined}
      initialRegion={{
        latitude: -15.7833,
        longitude: -70.1167,
        latitudeDelta: 50,
        longitudeDelta: 50,
      }}
    >
      {COUNTRIES.map((country) => (
        <Marker
          key={country.name}
          coordinate={{
            latitude: country.latitude,
            longitude: country.longitude,
          }}
          title={country.name}
          onPress={() =>
            router.push({
              pathname: "/login",
              params: { selectedCountry: country.name },
            })
          }
        />
      ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  map: { flex: 1 },
});
