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

export default function Lawyer(): JSX.Element {
  return (
    <View className="flex flex-1">
      <Header />
      <Content />
      <Footer />
    </View>
  );
}

function Content(): JSX.Element {
  const images = [
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
            <View className="mb-4">
              <Text className="text-left text-lg font-bold">Texto simple</Text>
            </View>

            <View className="flex flex-row mb-4">
              <View className="flex-1 justify-start items-center">
                <Image
                  style={styles.image}
                  source={require("../assets/images/profile.png")}
                />
              </View>
              <View className="flex-1 justify-start items-start pl-1">
                <Text className="text-lg font-bold my-2">Texto 1</Text>
                <Text className="text-lg font-bold my-2">Texto 2</Text>
                <Text className="text-lg font-bold my-2">Texto 3</Text>
              </View>
            </View>

            <View className="flex flex-row items-center my-3 justify-center">
              <Text className="text-lg p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Text>
              <TouchableOpacity>
                <Text className="text-gray-500">✏️</Text>
              </TouchableOpacity>
            </View>

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
        <Carousel images={images} />
      </View>
    </View>
  );
}

interface CarouselProps {
  images: any[];
}

function Carousel({ images }: CarouselProps): JSX.Element {
  const screenWidth = Dimensions.get("window").width;

  return (
    <View className="w-full h-64 bg-gray-100 flex items-center justify-center">
      <ScrollView
        horizontal
        className="m-2"
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={{ width: screenWidth, height: 350 }}
      >
        {images.map((img, index) => (
          <View key={index} className="w-48 h-48 mx-2">
            <Image
              source={img}
              className="w-full h-full rounded-lg"
              resizeMode="cover"
            />
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
      <View className="px-4 lg:px-6 h-14 flex items-center flex-row justify-between">
        <Link className="font-bold flex-1" href="/">
          ACME
        </Link>
        <View className="flex flex-row gap-4 sm:gap-6">
          {["About", "Product", "Pricing"].map((item) => (
            <Link
              key={item}
              className="text-md font-medium hover:underline"
              href="/"
            >
              {item}
            </Link>
          ))}
        </View>
      </View>
    </View>
  );
}

function Footer(): JSX.Element {
  const { bottom } = useSafeAreaInsets();
  return (
    <View
      className="flex shrink-0 bg-gray-100"
      style={{ paddingBottom: bottom }}
    >
      <View className="py-6 flex-1 items-start px-4 md:px-6">
        <Text className="text-center text-gray-700">
          © {new Date().getFullYear()} Me
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
