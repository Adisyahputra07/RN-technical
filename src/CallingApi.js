import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { Box, View, Center, FlatList, Text, Button, VStack, HStack } from "native-base";
import DogSub from "./DogSub";
import ModalPhoto from "./ModalPhoto";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function CallingApi() {
  const [dog, setDog] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [item, setItem] = useState("");
  const [showModalPhoto, setShowModalPhoto] = useState(false);

  const [itemPhoto, setItemPhoto] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => response.json())
      .then((json) => setDog(json.message));
  }, []);

  const arr = Object.keys(dog);

  const handleModal = (item) => {
    setShowModal(true);
    setItem(item);
  };

  const handleModalPhoto = (items) => {
    setShowModalPhoto(true);
    setItemPhoto(items);
  };

  return (
    <ScrollView>
      <Box flex={1} height={200} bg="light.800">
        <Text fontSize={20} fontWeight="bold" marginLeft={4} color="light.100">
          Doogs Apps
        </Text>
      </Box>

      {/* LIST */}
      <Box
        px="3"
        borderColor="light.100"
        borderTopLeftRadius="20"
        borderTopRightRadius="20"
        mt={-10}
        bg="light.50"
      >
        <FlatList
          data={arr}
          mt={10}
          bg="light.50"
          renderItem={({ item }) => (
            <Box px={4} py={3} rounded="md" mt={2} my={1} bg="light.200" shadow={2} height={20}>
              <HStack>
                <TouchableOpacity onPress={() => handleModal(item)}>
                  <Text color="muted.400">name</Text>
                  <Text fontSize={17} fontWeight="bold" marginLeft={3} color="light.900">
                    {item}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleModalPhoto(item)}>
                  <MaterialCommunityIcons name="dog" size={24} color="black" />
                </TouchableOpacity>
              </HStack>
            </Box>
          )}
          keyExtractor={(item) => item.id}
        />
      </Box>
      <DogSub showModal={showModal} onHide={() => setShowModal(false)} endPoint={item} />
      <ModalPhoto
        showModalPhoto={showModalPhoto}
        onHidden={() => setShowModalPhoto(false)}
        endPointImage={itemPhoto}
      />
    </ScrollView>
  );
}
