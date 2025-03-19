import { Link } from "expo-router";
import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesome, Feather } from "@expo/vector-icons";

const HomeApp: React.FC = () => {
  return (
    <View className="flex-1">
      <Content />
    </View>
  );
};

const Content: React.FC = () => {
  return (
    <ScrollView className="flex-1 pt-60">
      <View className="flex flex-wrap flex-row justify-center gap-4">
        {[
          "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
          "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
          "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
          "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
        ].map((src, index) => (
          <Image
            key={index}
            className="w-40 h-40 rounded-lg"
            source={{ uri: src }}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const Header: React.FC = () => {
  const { top } = useSafeAreaInsets();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <View className="bg-white w-full shadow-md">
      <View className="flex-row justify-center space-x-4 p-2 border-b border-gray-200">
        <FontAwesome name="facebook" size={20} color="#1877F2" />
        <FontAwesome name="twitter" size={20} color="#1DA1F2" />
        <FontAwesome name="instagram" size={20} color="#E1306C" />
      </View>

      <View className="flex-row items-center justify-between p-4 border-b border-gray-200">
        <Feather name="menu" size={24} onPress={() => setMenuOpen(!menuOpen)} />
        <Image
          source={{ uri: "https://via.placeholder.com/100x40" }}
          className="w-24 h-10"
        />
        <Feather name="user" size={24} />
      </View>

      {menuOpen && (
        <View className="absolute top-full left-0 w-full bg-white shadow-md p-4 border border-gray-200">
          {["Inicio", "Categorías", "Ofertas", "Contacto"].map(
            (item, index) => (
              <TouchableOpacity
                key={index}
                className="py-2 border-b border-gray-300"
                onPress={() => setMenuOpen(false)}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            )
          )}
        </View>
      )}
    </View>
  );
};

const Footer: React.FC = () => {
  const { bottom } = useSafeAreaInsets();
  return (
    <View className="bg-gray-100 p-3" style={{ paddingBottom: bottom }}>
      <Text className="text-center mb-2 mt-1 text-gray-700">
        © {new Date().getFullYear()} Me
      </Text>
    </View>
  );
};

export default HomeApp;
