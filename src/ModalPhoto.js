import { Avatar, Button, Center, FlatList, Image, Modal } from "native-base";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

export default function ModalPhoto(props) {
  const { showModalPhoto, onHidden, endPointImage } = props;
  const [photoDog, setPhotoDog] = useState("");

  useEffect(() => {
    endPointImage.length < 1
      ? null
      : fetch(`https://dog.ceo/api/breed/${endPointImage}/images`)
          .then((response) => response.json())
          .then((json) => setPhotoDog(json.message));
  }, [endPointImage]);

  return (
    <Modal size={"full"} isOpen={showModalPhoto} onClose={() => onHidden()}>
      <Modal.Content maxWidth="300px">
        <Modal.CloseButton />
        {/* MAIN MAIN MAIN MAIN */}
        <Modal.Header>{endPointImage.toUpperCase()}</Modal.Header>
        {photoDog?.length < 1 ? (
          <Modal.Body>{`Photo Anjing ${endPointImage} kosong`}</Modal.Body>
        ) : (
          // LIST LIST LIST LIST
          <FlatList
            data={photoDog}
            maxToRenderPerBatch={10}
            renderItem={({ item }) => (
              <Center>
                <Image
                  source={{
                    uri: item,
                  }}
                  alt="Alternate Text"
                  size="xl"
                  mt={3}
                />
              </Center>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </Modal.Content>
    </Modal>
  );
}
