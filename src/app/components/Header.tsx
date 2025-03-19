import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesome, Feather } from "@expo/vector-icons";

const Header: React.FC = () => {
  const { top } = useSafeAreaInsets();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <View className="bg-white w-full shadow-md" style={{ paddingTop: top }}>
      {/* Redes Sociales */}
      <View className="flex-row justify-center space-x-4 p-2 border-b border-gray-200">
        <FontAwesome name="facebook" size={20} color="#1877F2" />
        <FontAwesome name="twitter" size={20} color="#1DA1F2" />
        <FontAwesome name="instagram" size={20} color="#E1306C" />
      </View>

      {/* Barra de navegación */}
      <View className="flex-row items-center justify-between p-4 border-b border-gray-200">
        <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
          <Feather name="menu" size={24} />
        </TouchableOpacity>
        <Image
          source={{ uri: "https://via.placeholder.com/100x40" }}
          className="w-24 h-10"
        />
        <Feather name="user" size={24} />
      </View>

      {/* Menú desplegable */}
      {menuOpen && (
        <View className="absolute top-full left-0 w-full bg-white shadow-md p-4 border border-gray-200 z-10">
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

export default Header;
