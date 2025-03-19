import { Link } from "expo-router";
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Definir el tipo para las imágenes del carrusel
type ImageSource = number; // En React Native, `require` devuelve un número

// Definir el tipo para las props del componente Carousel
interface CarouselProps {
  images: ImageSource[];
}

// Obtener el ancho de la pantalla
const { width: screenWidth } = Dimensions.get("window");

export default function Page(): JSX.Element {
  return (
    <View className="flex flex-1">
      <Header />
      <Content />
      <Footer />
    </View>
  );
}

function Content(): JSX.Element {
  const images: ImageSource[] = [
    require("../assets/images/profile.png"),
    require("../assets/images/profile.png"),
    require("../assets/images/profile.png"),
    require("../assets/images/profile.png"),
    require("../assets/images/profile.png"),
    require("../assets/images/profile.png"),
  ];

  return (
    <View className="flex-1 bg-white">
      <View className="py-12 md:py-24 lg:py-32 xl:py-48">
        <View className="px-4 md:px-6">
          <View className="flex flex-col p-4">
            {/* Primera Fila: Texto alineado a la izquierda */}
            <View className="mb-4">
              <Text className="text-left text-lg font-bold">Texto simple</Text>
            </View>

            {/* Segunda Fila: Dos bloques */}
            <View className="flex flex-row mb-4">
              {/* Bloque 1: Imagen a la derecha */}
              <View className="flex-1 justify-start items-center">
                <Image
                  style={styles.image}
                  source={require("../assets/images/profile.png")}
                />
              </View>

              {/* Bloque 2: Tres filas de texto */}
              <View className="flex-1 justify-start items-start pl-1">
                <Text className="text-lg font-bold my-2">Texto 1</Text>
                <Text className="text-lg font-bold my-2">Texto 2</Text>
                <Text className="text-lg font-bold my-2">Texto 3</Text>
              </View>
            </View>

            {/* Texto con ícono de editar */}
            <View className="flex flex-row items-center my-3 justify-center">
              <Text className="text-lg p-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
                earum voluptate ut porro aspernatur, assumenda soluta
                exercitationem laudantium deleniti natus eaque quibusdam sunt
                ipsa quis. Quaerat vel reprehenderit enim iure!
              </Text>
              <TouchableOpacity>
                <Text className="text-gray-500 items-start">✏️</Text>
              </TouchableOpacity>
            </View>

            {/* Tercera Fila: 4 items con texto y un ícono para editar */}
            <View className="flex flex-col space-y-4">
              {[1, 2, 3].map((item) => (
                <View key={item} className="p-2">
                  <View className="flex flex-row items-center my-3 justify-between">
                    <Text className="text-lg">Texto {item}</Text>
                    <TouchableOpacity>
                      <Text className="text-gray-500">✏️</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Carrusel separado */}
        <Carousel images={images} />

        {/* Tercera Fila: 4 items con texto y un ícono para editar */}
        <View className="flex flex-col space-y-4 m-4">
          {[1, 2, 3].map((item) => (
            <View key={item} className="p-2">
              <View className="flex flex-row items-center my-3 justify-between">
                <Text className="text-lg">Texto {item}</Text>
                <TouchableOpacity>
                  <Text className="text-gray-500">✏️</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

function Carousel({ images }: CarouselProps): JSX.Element {
  return (
    <View style={styles.carouselContainer}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={{ width: screenWidth }}
      >
        {images.map((img, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image source={img} style={styles.image2} resizeMode="cover" />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

function Header(): JSX.Element {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: top }}>
      <View className="px-4 lg:px-6 h-14 flex items-center flex-row justify-between ">
        <Link className="font-bold flex-1 items-center justify-center" href="/">
          ACME
        </Link>
        <View className="flex flex-row gap-4 sm:gap-6">
          <Link
            className="text-md font-medium hover:underline web:underline-offset-4"
            href="/"
          >
            About
          </Link>
          <Link
            className="text-md font-medium hover:underline web:underline-offset-4"
            href="/"
          >
            Product
          </Link>
          <Link
            className="text-md font-medium hover:underline web:underline-offset-4"
            href="/"
          >
            Pricing
          </Link>
        </View>
      </View>
    </View>
  );
}

function Footer(): JSX.Element {
  const { bottom } = useSafeAreaInsets();
  return (
    <View
      className="flex shrink-0 bg-gray-100 native:hidden"
      style={{ paddingBottom: bottom }}
    >
      <View className="py-6 flex-1 items-start px-4 md:px-6 ">
        <Text className={"text-center text-gray-700"}>
          © {new Date().getFullYear()} Me
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  carouselContainer: {
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    marginVertical: 20,
  },
  imageContainer: {
    width: screenWidth,
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  image2: {
    width: "90%",
    height: "100%",
    borderRadius: 10,
  },
});
