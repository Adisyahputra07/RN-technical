import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity, ImageBackground, StyleSheet } from "react-native";
import { Box, FlatList, Icon, Input, Text } from "native-base";
import DogSub from "./DogSub";
import ModalPhoto from "./ModalPhoto";
// ICON ICON ICON ICON
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import DogImage from "../assets/DogImage.jpg";

export default function Main() {
  const [dog, setDog] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [item, setItem] = useState("");
  const [showModalPhoto, setShowModalPhoto] = useState(false);
  const [itemPhoto, setItemPhoto] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => response.json())
      .then((json) => setDog(json.message));
  }, []);

  let arr = Object.keys(dog);

  const handleModal = (item) => {
    setShowModal(true);
    setItem(item);
  };

  const handleModalPhoto = (items) => {
    setShowModalPhoto(true);
    setItemPhoto(items);
  };

  const styles = StyleSheet.create({
    image: {
      flex: 1,
      justifyContent: "center",
    },
  });

  return (
    <ScrollView>
      {/* CONTAINER CONTAINER CONTAINER CONTAINER */}
      <Box flex={1} height={200} bg="light.800">
        <ImageBackground
          source={DogImage}
          resizeMode="cover"
          style={styles.image}
        ></ImageBackground>
      </Box>
      {/* MAIN MAIN MAIN MAIN MAIN */}
      <Box
        px="3"
        borderColor="light.100"
        borderTopLeftRadius="20"
        borderTopRightRadius="20"
        mt={-6}
        bg="light.50"
      >
        {/* BAR BAR BAR BAR BAR */}
        <Box display="flex" flexDirection="row" justifyContent="space-between" mt={4} mb={5}>
          <Text fontSize={23} fontWeight="bold" color="light.900">
            Dogs Apps
          </Text>
          <Input
            w={{
              base: "60%",
              md: "25%",
            }}
            height={9}
            size="md"
            InputRightElement={
              <Icon as={<FontAwesome name="search" />} size={4} mr="2" color="muted.400" />
            }
            placeholder="search..."
            onChangeText={(text) => setValue(text)}
          />
        </Box>
        {/* LIST LIST LIST LIST LIST  */}
        <FlatList
          data={arr?.filter((items) => {
            if (value == "") {
              return items;
            } else if (items?.toLowerCase().includes(value.toLowerCase())) {
              return items;
            }
          })}
          mt={2}
          bg="light.50"
          renderItem={({ item }) => (
            <Box
              px={4}
              py={3}
              mt={2}
              my={1}
              bg="light.200"
              shadow={2}
              height={20}
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <TouchableOpacity onPress={() => handleModal(item)}>
                <Text color="rose.300">Name :</Text>
                <Text fontSize={17} fontWeight="bold" marginLeft={3} color="#762338">
                  {item.toUpperCase()}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleModalPhoto(item)}>
                <MaterialCommunityIcons name="dog" size={50} color="#F57247" />
              </TouchableOpacity>
            </Box>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </Box>
      {/* MODAL MODAL MODAL MODAL MODAL*/}
      <DogSub showModal={showModal} onHide={() => setShowModal(false)} endPoint={item} />
      <ModalPhoto
        showModalPhoto={showModalPhoto}
        onHidden={() => setShowModalPhoto(false)}
        endPointImage={itemPhoto}
      />
    </ScrollView>
  );
}
